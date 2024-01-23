"use client";

import { useEffect, useState } from "react";
import { IoReloadCircle } from "react-icons/io5";
import { v4 } from "uuid";

async function getmessage() {
  try {
    const data = await fetch("api/message", {
      cache: "no-store",
    });
    return data.json();
  } catch (error: any) {
    console.log(error);
  }
}

function Message() {
  const [messages, setMessages] =
    useState<{ _id: string; message: string; __v: number }[]>();
  const [def, serDef] = useState(false);

  async function clc() {
    const data: { _id: string; message: string; __v: number }[] =
      await getmessage();
    setMessages(data);
  }
  useEffect(() => {
    scrollTo({ top: document.documentElement.scrollHeight });
  }, [messages]);

  useEffect(() => {
    clc();
    setInterval(() => {
      if (def === false) {
        serDef(true);
      } else {
        serDef(false);
      }
    }, 10000);
  });

  useEffect(() => {
    clc();
  }, [def]);

  return (
    <>
      {/* <button className="fixed left-0 top-12 p-2 size-8 " onClick={clc}>
        <IoReloadCircle className="absolute h-full w-full" />
      </button> */}
      {messages?.map((e) => {
        return (
          <div
            className="w-full p-1 my-3 rounded-lg dark:bg-zinc-950 text-center bg-zinc-300 "
            key={v4()}
          >
            {e.message}
          </div>
        );
      })}
    </>
  );
}

export default Message;
