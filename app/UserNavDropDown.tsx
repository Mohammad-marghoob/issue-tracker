import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";
import { Avatar, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserNavDropDown = () => {
  const { status, data: session } = useSession();

  console.log(status);

  if (status === "loading") return null;

  if (status === "unauthenticated") {
    return (
      <Link href="/api/auth/signin">
        <Button>
          Login
          <EnterIcon />
        </Button>
      </Link>
    );
  }
  if (status === "authenticated") {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="cursor-pointer">
          <Avatar src={session!.user!.image!} fallback="?" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>{session?.user?.name}</DropdownMenu.Label>

          <DropdownMenu.Separator />
          <DropdownMenu.Item
            color="red"
            className="flex justify-between cursor-pointer"
          >
            <Link href="/api/auth/signout">Log Out</Link>
            <ExitIcon />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    );
  }
};

export default UserNavDropDown;
