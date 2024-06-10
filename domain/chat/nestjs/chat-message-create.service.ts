/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatMessage } from "./chat-message";

export const protobufPackage = "chat";

export enum ChatMessageCreateEventType {
  CREATE_CHAT_MESSAGE = "CREATE_CHAT_MESSAGE",
  CHAT_MESSAGE_CREATED = "CHAT_MESSAGE_CREATED",
}

export interface CreateChatMessageRequest {
  message: CreateChatMessageRequest_ChatMessage | undefined;
}

export interface CreateChatMessageRequest_ChatMessage {
}

export interface CreateChatMessageRequest_ChatMessage_ChatRoom {
  id: string;
}

export interface CreateChatMessageResponse {
  message: ChatMessage | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatMessageCreateServiceClient {
  createChatMessage(request: CreateChatMessageRequest, ...rest: any): Observable<CreateChatMessageResponse>;
}

export interface ChatMessageCreateServiceController {
  createChatMessage(
    request: CreateChatMessageRequest,
    ...rest: any
  ): Promise<CreateChatMessageResponse> | Observable<CreateChatMessageResponse> | CreateChatMessageResponse;
}

export function ChatMessageCreateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createChatMessage"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatMessageCreateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatMessageCreateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_MESSAGE_CREATE_SERVICE_NAME = "ChatMessageCreateService";
