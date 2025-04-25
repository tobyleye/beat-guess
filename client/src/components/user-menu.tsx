import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Icon,
} from "@chakra-ui/react";
import { LogOut } from "lucide-react";
import { User } from "../types";

export default function UserMenu({
  user,
  handleLogout,
}: {
  user: User;
  handleLogout: () => void;
}) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rounded="full"
        p={0}
        minW="40px"
        h="40px"
      >
        <Avatar
          size="sm"
          name={user.displayName}
          src={user.picture}
          bg="gray.700"
        />
      </MenuButton>
      <MenuList bg="gray.800" borderColor="gray.700">
        <Box px={3} py={2}>
          <Text fontWeight="medium" fontSize="sm">
            {user.displayName}
          </Text>
          <Text fontSize="xs" color="gray.400">
            Spotify Connected
          </Text>
        </Box>
        <MenuDivider borderColor="gray.700" />

        <MenuItem
          icon={<Icon as={LogOut} boxSize={4} />}
          onClick={handleLogout}
          color="red.400"
          bg="gray.800"
          _hover={{ bg: "gray.700" }}
        >
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
