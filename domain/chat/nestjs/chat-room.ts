/* eslint-disable */
import { wrappers } from "protobufjs";
import { ChatRoomStatistics } from "./chat-room-statistics";
import { ChatUser } from "./chat-user";

export const protobufPackage = "chat";

export interface ChatRoom {
  id: string;
  createdBy: ChatUser | undefined;
  createdDateTimeUTC: Date | undefined;
  updatedBy?: ChatUser | undefined;
  updatedDateTimeUTC?: Date | undefined;
  deletedBy?: ChatUser | undefined;
  deletedDateTimeUTC?: Date | undefined;
  title?: string | undefined;
  statistics: ChatRoomStatistics | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

wrappers[".google.protobuf.Timestamp"] = {
  fromObject(value: Date) {
    return { seconds: value.getTime() / 1000, nanos: (value.getTime() % 1000) * 1e6 };
  },
  toObject(message: { seconds: number; nanos: number }) {
    return new Date(message.seconds * 1000 + message.nanos / 1e6);
  },
} as any;
