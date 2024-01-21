import ThemeSwitcher from "@/components/ThemeSwitcher";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center dark:bg-black  justify-between p-24">
      <ThemeSwitcher />
    </main>
  );
}

export default Home;
