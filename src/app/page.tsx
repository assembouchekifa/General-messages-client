import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

function Home() {
  return (
    <main className="flex min-h-dvh relative flex-col items-center dark:bg-black justify-around  p-12 sm:p-24">
      <div className="absolute right-2 top-2">
        <ThemeSwitcher />
      </div>
      <h1 className="text-2xl font-bold tracking-wider ">General Chat</h1>
      <p className="text-lg ">
        Description : <br />
        In this chat you can speak without anyone knowing your identity, that
        is, you can speak on behalf of another person and say what you want.
        Voice messages and pictures are not possible in order to maintain the
        idea of the site.
      </p>
      <p className="opacity-50">
        It was created by Assem and he is not responsible for any offensive
        language
      </p>
      <Link
        className="dark:bg-zinc-900 bg-zinc-400 px-2 py-1 rounded-md"
        href={"chatPage"}
      >
        Go to Chat
      </Link>
    </main>
  );
}

export default Home;
