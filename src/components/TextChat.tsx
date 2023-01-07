type chat = {
  nameAuthor: string;
  contentChat: string;
  date: string;
};

export default function TextChat({ nameAuthor, contentChat, date }: chat) {
  if (nameAuthor === "diriku") {
    return (
      <div className="flex my-1 justify-end">
        <div className="outer-chat-wraper shadow-md rounded-l-xl rounded-tr-xl bg-white py-1 px-3 border-2 border-gray-200 max-w-[85%] md:max-w-[60%]">
          <div className="inner-chat-wraper">
            <p className="text-sm md:text-base">{contentChat}</p>
          </div>
          <div className="timestamp-wraper flex">
            <p className="text-[.65rem] text-slate-400">{date}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex my-1">
        <div className="outer-chat-wraper shadow-md rounded-r-xl rounded-tl-xl bg-white py-1 px-3 border-2 border-gray-200 max-w-[85%] md:max-w-[60%]">
          <div className="inner-chat-wraper">
            <p className="text-sm md:text-base">{contentChat}</p>
          </div>
          <div className="timestamp-wraper flex justify-end">
            <p className="text-[.65rem] text-slate-400">{date}</p>
          </div>
        </div>
      </div>
    );
  }
}
