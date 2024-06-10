/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatRoom } from "./chat-room";

export const protobufPackage = "chat";

export enum ChatRoomDeleteEventType {
  DELETE_CHAT_ROOM = "DELETE_CHAT_ROOM",
  CHAT_ROOM_DELETED = "CHAT_ROOM_DELETED",
}

export interface DeleteChatRoomRequest {
  room: DeleteChatRoomRequest_ChatRoom | undefined;
}

export interface DeleteChatRoomRequest_ChatRoom {
  id: string;
}

export interface DeleteChatRoomResponse {
  room: ChatRoom | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatRoomDeleteServiceClient {
  deleteChatRoom(request: DeleteChatRoomRequest, ...rest: any): Observable<DeleteChatRoomResponse>;
}

export interface ChatRoomDeleteServiceController {
  deleteChatRoom(
    request: DeleteChatRoomRequest,
    ...rest: any
  ): Promise<DeleteChatRoomResponse> | Observable<DeleteChatRoomResponse> | DeleteChatRoomResponse;
}

export function ChatRoomDeleteServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["deleteChatRoom"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatRoomDeleteService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatRoomDeleteService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_ROOM_DELETE_SERVICE_NAME = "ChatRoomDeleteService";
