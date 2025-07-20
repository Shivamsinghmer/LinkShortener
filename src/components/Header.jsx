import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <nav className='"py-4 flex justify-between items-center"'>
      <Link to="/">
        <img src="/logo.png" alt="man" className="h-16 aspect-video" />
      </Link>
      <div>
        {!user ? (
          <Button
            onClick={() => {
              navigate("/auth");
            }}
          >
            Login
          </Button>
        ) : (
          <DropdownMenu className="w-10 rounded-full overflow-hidden">
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>PA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Shivam Singh Mer</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><LinkIcon/><span>My links</span></DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut className="text-red-500" />
                <span>Logout </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
