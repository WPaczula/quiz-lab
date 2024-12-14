namespace Quiz.Master.Hubs.Models;

public record MiniGameUpdateSyncMessage(string GameId, string MiniGameType, int Status, Dictionary<string, string>? data);