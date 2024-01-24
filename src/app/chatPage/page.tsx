"use client";

import Message from "@/components/Message";
import Nav from "@/components/Nav";
import Sande from "@/components/Sande";
import { io } from "socket.io-client";

function page() {
  const socket = io("https://general-messages-server.onrender.com");
  return (
    <main className="flex min-h-dvh relative flex-col items-center dark:bg-black pt-12 px-12 pb-16 sm:px-24">
      <Nav />
      <Message io={socket} />
      <Sande io={socket} />
    </main>
  );
}

export default page;

// mongodb+srv://bouchekifaassem:Qw9Pkd3JSo9d4kzV@atlascluster.srbdo7a.mongodb.net/?retryWrites=true&w=majority/chat
