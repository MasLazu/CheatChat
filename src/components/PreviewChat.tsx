import { Avatar, Badge, Divider } from "antd";

import { UserOutlined } from "@ant-design/icons"; //cuman place holder

type dataChat = {
  name: string;
  lastChat: string;
  unreadChat: number;
  lastChatDate: string;
};

export default function PreviewChat({
  name,
  lastChat,
  unreadChat,
  lastChatDate,
}: dataChat) {
  return (
    <>
      <div className="contact flex items-center my-2 py-2 px-3 cursor-pointer rounded-lg hover:bg-[#f4f4f5]">
        <div className="profile-pictre">
          {unreadChat > 0 ? (
            <Badge count={unreadChat} offset={[-4, 4]}>
              <Avatar size={45} shape="square" icon={<UserOutlined />} />
            </Badge>
          ) : (
            <Avatar size={45} shape="square" icon={<UserOutlined />} />
          )}
        </div>
        <div className="desc ml-5 text-ellipsis overflow-hidden">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{name}</h2>
            <h3>{lastChatDate}</h3>
          </div>
          <h3 className="truncate">{lastChat}</h3>
        </div>
      </div>
      <Divider plain style={{ marginTop: 0, marginBottom: 0 }} />
    </>
  );
}
