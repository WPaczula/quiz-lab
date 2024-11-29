using Microsoft.AspNetCore.SignalR;
using Quiz.Slave.Hubs.Models;

namespace Quiz.Slave.Hubs;

internal class SyncHubClient(IHubContext<SyncHub> ctx, IHubConnection hubConnection) : ISyncHubClient
{
    private async Task SendAsync<TMessage>(string methodName, TMessage payload, CancellationToken cancellationToken = default)
    {
        await hubConnection.WaitForConnection(cancellationToken);
        await ctx.Clients.All.SendAsync(
            methodName,
            payload,
            cancellationToken);
    }

    public async Task GameCreated(GameCreatedSyncMessage payload, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendGameCreated,
            payload,
            cancellationToken);

    public async Task SelectAnswer(SelectAnswer payload, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendSelectAnswer,
            payload,
            cancellationToken);

    public async Task PlayerJoined(PlayerJoinedSyncMessage payload, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendPlayerJoined,
            payload,
            cancellationToken);

    public async Task GameStarting(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendGameStarting,
            gameId,
            cancellationToken);

    public async Task GameStarted(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendGameStarted,
            gameId,
            cancellationToken);

    public async Task GameEnd(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendGameEnd,
            gameId,
            cancellationToken);

    public async Task RoundEnd(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendRoundEnd,
            gameId,
            cancellationToken);

    public async Task RoundStart(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendRoundStart,
            gameId,
            cancellationToken);

    public async Task RulesExplain(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendRulesExplain,
            gameId,
            cancellationToken);

    public async Task RulesExplained(string gameId, CancellationToken cancellationToken = default)
        => await SendAsync(
            SyncDefinitions.SendRulesExplained,
            gameId,
            cancellationToken);
}