import { useState } from "react";
import { Input, Empty, Avatar } from "antd";
import {
  ArrowLeftOutlined,
  SendOutlined,
  LinkOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { UserOutlined } from "@ant-design/icons"; //cuman place holder
import dataDummyChatPriviews from "../dummydata/dataDummyChatPriviews.json";

import PreviewChat from "../components/PreviewChat";
import TextChat from "../components/TextChat";

const { Search } = Input;

type userProfile = {
  name: string;
};

export default function MainPage() {
  const [fullChatProfile, setFullChatProfile] = useState<null | userProfile>(
    null
  );

  function handleOpenFullChat(name: string | null) {
    setFullChatProfile({ name: `${name}` });
    if (window.innerWidth < 768) {
      const fullChat = document.getElementById("fullChat")!;
      const priviewChat = document.getElementById("priviewChat")!;
      priviewChat.classList.toggle("hidden");
      fullChat.classList.toggle("hidden");
      fullChat.classList.toggle("flex");
    }
  }

  return (
    <div className="w-screen h-screen grid grid-cols-3 overflow-hidden">
      <div
        className="menu md:col-span-1 col-span-3 shadow-lg z-10 md:block border-2 md:border-r-slate-300"
        id="priviewChat"
      >
        <div className="flex flex-col h-[100vh]">
          <div className="search flex items-center md:p-3 p-2 bg-slate-100">
            <MenuOutlined
              style={{ fontSize: "1.65rem" }}
              className="cursor-pointer"
            />
            <Search
              placeholder="input search text"
              allowClear
              size="large"
              className="grow ml-5"
            />
          </div>
          <div className="prev-chats grow overflow-y-auto scrollbar-none px-2 h-screen">
            {dataDummyChatPriviews.data.map(
              ({ name, lastChat, unreadChat, lastChatDate }) => {
                return (
                  <div onClick={() => handleOpenFullChat(name)}>
                    <PreviewChat
                      name={name}
                      lastChat={lastChat}
                      unreadChat={unreadChat}
                      lastChatDate={lastChatDate}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div
        className="chat md:col-span-2 col-span-3 bg-mainpattern hidden md:flex flex-col h-screen"
        id="fullChat"
      >
        {fullChatProfile ? (
          <div className="preview-contact grow-0 top-0 w-full bg-slate-100 md:p-3 p-2 z-10 flex justify-between shadow-md">
            <ArrowLeftOutlined
              style={{ fontSize: "1.65rem", color: "#555" }}
              className="cursor-pointer"
              onClick={() => handleOpenFullChat(null)}
            />
            <div className="contact-inner-chat flex items-center">
              <div className="name-contact mr-3">
                <h1 className="md:text-[1.2rem] text-[1.1rem] leading-[1.3rem] font-semibold">
                  {fullChatProfile.name}
                </h1>
                <h2 className="leading-[1rem] md:text-[.75rem] text-[.6rem]">{`${fullChatProfile.name}@gmail.com`}</h2>
              </div>
              <Avatar size={40} shape="square" icon={<UserOutlined />} />
            </div>
          </div>
        ) : (
          ""
        )}
        {fullChatProfile ? (
          <div className="w-full grow py-5 md:px-3 px-2 overflow-y-auto">
            <div className="chats-wraper mt-auto flex flex-col w-full">
              <TextChat
                nameAuthor="yanto"
                contentChat="Lorem ipsum dolor Lorem ipsum dolor sit Lorem yanto"
                date="12:59"
              />
              <TextChat
                nameAuthor="diriku"
                contentChat="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, sapiente?"
                date="13:01"
              />
              <TextChat
                nameAuthor="yanto"
                contentChat="Iya dong bang"
                date="13:15"
              />
              <TextChat
                nameAuthor="diriku"
                contentChat="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta qui voluptatem doloribus quam assumenda repellat dolore repudiandae, quidem quae velit ullam eveniet eos illo hic veniam tenetur illum. Assumenda, itaque voluptas! Consequuntur adipisci, delectus totam blanditiis temporibus cupiditate fuga dolorum, nihil, obcaecati maiores at soluta dicta expedita corporis voluptate?"
                date="13:19"
              />
              <TextChat
                nameAuthor="diriku"
                contentChat="wassalamualaikum wr. wb."
                date="13:19"
              />
              <TextChat
                nameAuthor="yanto"
                contentChat="oh iya nak sudah saya cek"
                date="13:19"
              />
              <TextChat
                nameAuthor="yanto"
                contentChat="bener semua saya kasih seratus emot jempol dua"
                date="13:19"
              />
              <TextChat
                nameAuthor="diriku"
                contentChat="yoi don pasti Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, laudantium."
                date="13:19"
              />
              <TextChat
                nameAuthor="yanto"
                contentChat="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa ipsam at modi quasi dolorum sed? Eveniet consequuntur harum eaque ipsam quae corrupti. Ratione voluptatum reprehenderit ducimus, labore voluptates excepturi?"
                date="13:19"
              />
            </div>
          </div>
        ) : (
          <div className="empty-chat flex flex-col w-full items-center justify-center grow">
            <Empty />
          </div>
        )}
        {fullChatProfile ? (
          <div className="type-here h-50 bg-slate-100 grow-0 md:p-3 p-2 flex">
            <LinkOutlined
              style={{ fontSize: "1.7rem", color: "#555" }}
              className="cursor-pointer"
            />
            <Input placeholder="Type here" className="mx-4" size="large" />
            <SendOutlined
              style={{ fontSize: "1.7rem", color: "#555" }}
              className="cursor-pointer"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
