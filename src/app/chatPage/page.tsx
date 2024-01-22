import Message from "@/components/Message";
import Nav from "@/components/Nav";
import Sande from "@/components/Sande";

function page() {
  return (
    <main className="flex min-h-dvh relative flex-col items-center dark:bg-black pt-12 px-12 pb-16 sm:px-24">
      <Nav />
      <Message />
      <Sande />
    </main>
  );
}

export default page;

// mongodb+srv://bouchekifaassem:Qw9Pkd3JSo9d4kzV@atlascluster.srbdo7a.mongodb.net/?retryWrites=true&w=majority/chat
