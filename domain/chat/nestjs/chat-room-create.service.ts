/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatRoom } from "./chat-room";

export const protobufPackage = "chat";

export enum ChatRoomCreateEventType {
  CREATE_CHAT_ROOM = "CREATE_CHAT_ROOM",
  CHAT_ROOM_CREATED = "CHAT_ROOM_CREATED",
}

export interface CreateChatRoomRequest {
  room: CreateChatRoomRequest_ChatRoom | undefined;
}

export interface CreateChatRoomRequest_ChatRoom {
  title: string;
}

export interface CreateChatRoomResponse {
  room: ChatRoom | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatRoomCreateServiceClient {
  createChatRoom(request: CreateChatRoomRequest, ...rest: any): Observable<CreateChatRoomResponse>;
}

export interface ChatRoomCreateServiceController {
  createChatRoom(
    request: CreateChatRoomRequest,
    ...rest: any
  ): Promise<CreateChatRoomResponse> | Observable<CreateChatRoomResponse> | CreateChatRoomResponse;
}

export function ChatRoomCreateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createChatRoom"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatRoomCreateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatRoomCreateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_ROOM_CREATE_SERVICE_NAME = "ChatRoomCreateService";
