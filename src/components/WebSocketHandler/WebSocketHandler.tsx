import { useContext, useEffect, useRef, useState } from "react";
import { ApiContext } from "../../api/context";
import { Api, WSEvent } from "../../types";

/**
 * Connects to the backend WebSocket server and
 * updates cache when server notifies of updated cache.
 */
const WebSocketHandler = () => {
  const [refresh, setRefresh] = useState({});
  const api = useContext(ApiContext);
  const apiRef = useRef<Api.Context>();
  apiRef.current = api; // keep ref up to date inside useEffect

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WS_URL || "ws://localhost");

    ws.addEventListener("message", message => {
      switch (message.data) {
        case WSEvent.CacheUpdated:
          if (!apiRef.current) return;

          const { state, set, loading } = apiRef.current;
          if (!loading) set(state.category); // prevent multiple simultaneous refreshes
          break;
      }
    });

    ws.addEventListener("open", () => console.log("connected"));
    ws.addEventListener("close", () => {
      console.log("disconnected, reconnecting...");
      setTimeout(() => setRefresh({}), 1000);
    });

    const keepalive = setInterval(() => {
      if (ws.readyState === ws.OPEN) ws.send("ping");
    }, 10 * 1000);

    return () => {
      clearInterval(keepalive);
      ws.close();
    };
  }, [refresh]);
};
export default WebSocketHandler;
