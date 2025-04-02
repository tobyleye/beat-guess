import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router";
import LandingPage from "./landing";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import theme from "./theme";
import { RoomsList } from "./rooms";
import RoomPage from "./room-page/room-page";
import WebSocketTest from "./ws-test";
import AppWebSocket from "./socket";
import { Room, User } from "./types";
import * as uuid from "uuid";
import { httpClient } from "./httpClient";
import UserMenu from "./components/user-menu";

console.log("hello world");

let wsuri = `ws://localhost:1234/connect/${uuid.v4()}`;

function App() {
  const [connected, setConnected] = useState(false);

  let [socket, setSocket] = useState<AppWebSocket | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   socket.addEventListener("open", () => {
  //     setConnected(true);
  //   });
  // }, [socket]);

  useEffect(() => {
    setLoadingUser(true);
    httpClient
      .get("/currentUser")
      .then((res) => {
        let user = res.data as User;
        setUser(user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoadingUser(false);
      });
  }, []);

  useEffect(() => {
    if (user) {
      let socket = new AppWebSocket(wsuri);
      socket.addEventListener("open", () => {
        setSocket(socket);
      });
      return () => {
        // socket.close();
      };
    }
  }, [user]);

  if (loadingUser) {
    return (
      <Box display="flex" alignItems="center">
        <Text>Loading...</Text>
      </Box>
    );
  }

  console.log({ socket });

  // const userMenu = (
  //   <UserMenu
  //     userName={user?.displayName}
  //     userImage={user?.picture}
  //     onLogout={() => {
  //       window.location.assign("http://localhost:1234/logout");
  //     }}
  //   />
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route
          path="/rooms"
          element={
            <RoomsList socket={socket} rooms={rooms} setRooms={setRooms} />
          }
        />

        <Route path="/game/:roomId" element={<RoomPage socket={socket!} />} />
        <Route path="/ws-test" element={<WebSocketTest />} />
        {/* <Route
          path="/"
          element={
            <>
              <Box color="white">header...</Box>
              <Outlet />
            </>
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
