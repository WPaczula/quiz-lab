import { GameStatus } from "quiz-common-ui";
import { useLocalSyncConsumer } from "quiz-common-ui/hooks";
import { PropsWithChildren, useCallback } from "react";
import { useNavigate } from "react-router";

const Navigator = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  useLocalSyncConsumer(
    "GameStatusUpdate",
    "Navigator",
    useCallback(
      (message) => {
        switch (message?.status) {
          case GameStatus.GameCreated:
          case GameStatus.GameJoined:
            navigate(`/join/${message.gameId}/`);
            break;
          case GameStatus.GameStarting:
            navigate(`/starting/${message.gameId}/`);
            break;
          case GameStatus.RulesExplaining:
            navigate(`/rules/${message.gameId}/`);
            break;
          case GameStatus.MiniGameStarting:
            navigate(`/minigame/${message.gameId}/`);
            break;
          case GameStatus.MiniGameEnding:
            navigate(`/minigame/end/${message.gameId}/`);
            break;
          case GameStatus.GameEnding:
            navigate(`/end/${message.gameId}/`);
            break;
          default:
            break;
        }
      },
      [navigate],
    ),
  );

  return children;
};

export default Navigator;
