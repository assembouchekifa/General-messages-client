"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GrSend } from "react-icons/gr";

function Sande({ io }: { io: any }) {
  const [message, setMessage] = useState({ message: "" });
  const rout = useRouter();

  async function hundelClic() {
    const mes = message;
    setMessage({ message: "" });
    if (mes.message == "") {
      return;
    }
    const res = await fetch("https://general-messages-server.onrender.com", {
      method: "POST",
      body: JSON.stringify(mes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("not create");
    }
    io.emit("chat", mes.message);
    rout.refresh();
  }

  return (
    <div className="fixed bottom-0 w-full px-0 sm:px-24    ">
      <div className="w-full flex items-center dark:bg-zinc-950 bg-zinc-300 rounded-md p-4">
        <input
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              hundelClic();
            }
          }}
          type="text"
          value={message.message}
          onChange={(e) => {
            setMessage({ message: e.target.value });
          }}
          className="flex-1 rounded-md focus:outline-none py-1 dark:bg-zinc-800 bg-zinc-100 px-1"
        />
        <button onClick={hundelClic} className="w-6 h-6 ms-2 relative">
          <GrSend className="absolute h-full w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
      </div>
    </div>
  );
}

export default Sande;
