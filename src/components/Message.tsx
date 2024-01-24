"use client";

import { useEffect, useState } from "react";
import { v4 } from "uuid";

async function getmessage() {
  try {
    const data = await fetch("https://general-messages-server.onrender.com", {
      cache: "no-store",
    });
    return data.json();
  } catch (error: any) {
    console.log(error.message);
  }
}

function Message({ io }: { io: any }) {
  const [messages, setMessages] = useState<string[]>();
  async function clc() {
    const data: { _id: string; message: string; __v: number }[] =
      await getmessage();
    console.log();
    setMessages(data.map((e) => e.message));
  }

  io.on("chat", (data: any) => {
    if (messages) {
      setMessages([...messages, data]);
    } else {
      setMessages([data]);
    }
  });

  useEffect(() => {
    scrollTo({ top: document.documentElement.scrollHeight });
  }, [messages]);

  useEffect(() => {
    clc();
  }, []);

  return (
    <>
      {messages?.map((e) => {
        return (
          <div
            className="w-full p-1 my-3 rounded-lg dark:bg-zinc-950 text-center bg-zinc-300 "
            key={v4()}
          >
            {e}
          </div>
        );
      })}
    </>
  );
}

export default Message;
