using Quiz.Common.CQRS;

namespace Quiz.Master.Features.Game.JoinGame;

public record JoinGameRequest(string DeviceId, string PlayerName);

public static partial class Endpoints
{
    public static void MapJoinGame(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/game/join", async (JoinGameRequest request, ICommandHandler<JoinGameCommand> commandHandler) =>
        {
            await commandHandler.HandleAsync(new JoinGameCommand(request.DeviceId, request.PlayerName));
            return Results.Ok();
        })
        .WithName("JoinGame")
        .ProducesProblem(StatusCodes.Status400BadRequest)
        .WithSummary("Join Game")
        .WithDescription("Join Game")
        .WithTags("Game");
    }
}