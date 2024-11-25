using Carter;
using Quiz.Common.CQRS;

namespace Quiz.Master.Features.Game.JoinGame;

public record CreateGameRequest(uint GameSize);

public class CreateGameEndpoint() : ICarterModule
{
    public void AddRoutes(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/game/create", async (CreateGameRequest request, ICommandHandler<CreateGameCommand> commandHandler) =>
        {
            await commandHandler.HandleAsync(new CreateGameCommand(request.GameSize));

            return Results.Created();
        })
        .WithName("CreateGame")
        .ProducesProblem(StatusCodes.Status400BadRequest)
        .WithSummary("Create Game")
        .WithDescription("Create Game")
        .WithTags("Game");
    }
}