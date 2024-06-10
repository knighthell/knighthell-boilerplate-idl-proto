/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatUser } from "./chat-user";

export const protobufPackage = "chat";

export enum ChatUserCreateEventType {
  CREATE_CHAT_USER = "CREATE_CHAT_USER",
  CHAT_USER_CREATED = "CHAT_USER_CREATED",
}

export interface CreateChatUserRequest {
  user: CreateChatUserRequest_ChatUser | undefined;
}

export interface CreateChatUserRequest_ChatUser {
  id: string;
  email: string;
  displayName: string;
  photoUrl?: string | undefined;
}

export interface CreateChatUserResponse {
  user: ChatUser | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatUserCreateServiceClient {
  createChatUser(request: CreateChatUserRequest, ...rest: any): Observable<CreateChatUserResponse>;
}

export interface ChatUserCreateServiceController {
  createChatUser(
    request: CreateChatUserRequest,
    ...rest: any
  ): Promise<CreateChatUserResponse> | Observable<CreateChatUserResponse> | CreateChatUserResponse;
}

export function ChatUserCreateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createChatUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatUserCreateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatUserCreateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_USER_CREATE_SERVICE_NAME = "ChatUserCreateService";
