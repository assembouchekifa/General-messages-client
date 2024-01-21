import { GrSend } from "react-icons/gr";

function Sande() {
  return (
    <div className="fixed bottom-0 w-full px-0 sm:px-24    ">
      <div className="w-full flex items-center dark:bg-zinc-950 bg-zinc-300 rounded-md p-4">
        <input
          type="text"
          className="flex-1 rounded-md focus:outline-none py-1 dark:bg-zinc-800 bg-zinc-100 px-1"
        />
        <button className="w-6 h-6 ms-2 relative">
          <GrSend className="absolute h-full w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
      </div>
    </div>
  );
}

export default Sande;
