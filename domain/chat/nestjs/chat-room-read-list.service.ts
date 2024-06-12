/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatRoom } from "./chat-room";

export const protobufPackage = "chat";

export enum ChatRoomReadListEventType {
  READ_LIST_CHAT_ROOM = "READ_LIST_CHAT_ROOM",
  CHAT_ROOM_READ_LIST = "CHAT_ROOM_READ_LIST",
}

export interface ReadListChatRoomRequest {
  room?: ReadListChatRoomRequest_ChatRoomCondition | undefined;
  participant?: ReadListChatRoomRequest_ChatParticipantCondition | undefined;
}

export interface ReadListChatRoomRequest_ChatRoomCondition {
  ids: string[];
  createdDateTimeFrom?: string | undefined;
  createdDateTimeTo?: string | undefined;
}

export interface ReadListChatRoomRequest_ChatParticipantCondition {
  ids: string[];
  createdDateTimeFrom?: string | undefined;
  createdDateTimeTo?: string | undefined;
}

export interface ReadListChatRoomResponse {
  results: ChatRoom[];
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatRoomReadListServiceClient {
  readListChatRoom(request: ReadListChatRoomRequest, ...rest: any): Observable<ReadListChatRoomResponse>;
}

export interface ChatRoomReadListServiceController {
  readListChatRoom(
    request: ReadListChatRoomRequest,
    ...rest: any
  ): Promise<ReadListChatRoomResponse> | Observable<ReadListChatRoomResponse> | ReadListChatRoomResponse;
}

export function ChatRoomReadListServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["readListChatRoom"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatRoomReadListService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatRoomReadListService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_ROOM_READ_LIST_SERVICE_NAME = "ChatRoomReadListService";
