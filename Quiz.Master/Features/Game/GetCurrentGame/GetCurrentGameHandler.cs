
using Microsoft.EntityFrameworkCore;
using Quiz.Common.CQRS;
using Quiz.Master.Persistance;

namespace Quiz.Master.Features.Game.GetCurrentGame;

public record GetCurrentGameResult(string GameId, uint GameSize, IEnumerable<string> PlayerNames);
public record GetCurrentGameQuery() : IQuery<GetCurrentGameResult>;

public class GetCurrentGameHandler : IQueryHandler<GetCurrentGameQuery, GetCurrentGameResult>
{
    private readonly IQuizRepository quizRepository;

    public GetCurrentGameHandler(IQuizRepository quizRepository)
    {
        this.quizRepository = quizRepository;
    }

    public async ValueTask<GetCurrentGameResult?> HandleAsync(GetCurrentGameQuery request, CancellationToken cancellationToken = default)
    {
        var activeGame = await quizRepository.Query<Persistance.Models.Game>()
            .Include(x => x.Players)
            .Where(x => !x.StartedAt.HasValue && !x.FinishedAt.HasValue)
            .OrderByDescending(x => x.CreatedAt)
            .FirstOrDefaultAsync();

        return activeGame is null
            ? new GetCurrentGameResult(string.Empty, 0, Array.Empty<string>())
            : new GetCurrentGameResult(
                activeGame.Id.ToString(),
                activeGame.GameSize,
                activeGame.Players.OrderByDescending(x => x.CreatedAt).Select(x => x.Name));
    }
}
