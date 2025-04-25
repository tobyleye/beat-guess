import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router";
import LandingPage from "./landing";
import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import theme from "./theme";
import { RoomsList } from "./rooms";
import RoomPage from "./room-page/room-page";
import AppWebSocket from "./socket";
import { Room, User } from "./types";
import * as uuid from "uuid";
import { httpClient } from "./httpClient";
import UserMenu from "./components/user-menu";
import { UserHeader } from "./components/header";

console.log("hello world");

let wsuri = `ws://localhost:1234/connect/${uuid.v4()}`;

function App() {
  const [connected, setConnected] = useState(false);

  let [socket, setSocket] = useState<AppWebSocket | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState<User | null>(null);

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

  const logout = () => {};

  const userMenu = user ? <UserMenu user={user} handleLogout={logout} /> : null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage user={user} userMenu={userMenu} />}
        />
        <Route path="/kk" element={<div>say hello to me</div>} />
        <Route
          element={
            <Flex direction="column" minH="100vh" color="white">
              <UserHeader userMenu={userMenu} />
              <Box as="main" flex={1}>
                <Outlet />
              </Box>
            </Flex>
          }
        >
          <Route
            path="/rooms"
            element={
              <RoomsList socket={socket} rooms={rooms} setRooms={setRooms} />
            }
          />
          <Route path="/game/:roomId" element={<RoomPage socket={socket!} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
