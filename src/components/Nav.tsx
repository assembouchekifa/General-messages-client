import { BsChatSquareTextFill } from "react-icons/bs";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

function nav() {
  return (
    <div className="w-full dark:bg-zinc-950 bg-zinc-100 p-2 rounded-md  flex fixed top-0 items-center  ">
      <Link href={"/"}>
        <BsChatSquareTextFill className="size-7" />
      </Link>
      <h3 className="flex-1 text-2xl ms-3 ">General Chat</h3>
      <div className="top-2 right-2 absolute">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default nav;
