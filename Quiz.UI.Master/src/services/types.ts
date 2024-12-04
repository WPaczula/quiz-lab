export type SyncReceiveCallback<T extends SyncReceiveDefinitionNames> = (
  data?: SyncReceiveData[T],
) => void;

// Extendable

export type SyncSendDefinitionNames = "Ping" | "SelectAnswer";

export type SyncReceiveDefinitionNames =
  | "Pong"
  | "SelectAnswer"
  | "GameCreated"
  | "PlayerJoined"
  | "GameStatusUpdate";

export interface SyncSendData {
  Ping: {
    Message: string;
    Amount: number;
  };
  SelectAnswer: {
    Answer: string;
  };
}

export interface SyncReceiveData {
  Pong: undefined;
  SelectAnswer: {
    Answer: string;
  };
  GameCreated: {
    GameId: string;
    GameSize: number;
  };
  PlayerJoined: {
    DeviceId: string;
    PlayerName: string;
  };
  GameStatusUpdate: {
    GameId: string;
    Status: GameStatus;
  };
}

export enum GameStatus {
  GameCreated = 0,
  GameJoined,
  GameStarting,
  GameStarted,
  RulesExplaining,
  RulesExplained,
  RoundStarting,
  RoundStarted,
  RoundEnding,
  RoundEnded,
  GameEnding,
  GameEnded,
}

export const GameStatusNames: Record<GameStatus, string> = {
  [GameStatus.GameCreated]: "GameStarting",
  [GameStatus.GameJoined]: "GameStarting",
  [GameStatus.GameStarting]: "GameStarting",
  [GameStatus.GameStarted]: "GameStarted",
  [GameStatus.RulesExplaining]: "RulesExplaining",
  [GameStatus.RulesExplained]: "RulesExplained",
  [GameStatus.RoundStarting]: "RoundStarting",
  [GameStatus.RoundStarted]: "RoundStarted",
  [GameStatus.RoundEnding]: "RoundEnding",
  [GameStatus.RoundEnded]: "RoundEnded",
  [GameStatus.GameEnding]: "GameEnding",
  [GameStatus.GameEnded]: "GameEnded",
};
