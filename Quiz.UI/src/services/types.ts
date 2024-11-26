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
  | "GameStarted"
  | "GameStarting";

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
  GameStarting: string;
  GameStarted: string;
}
