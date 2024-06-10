/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatParticipant } from "./chat-participant";

export const protobufPackage = "chat";

export enum ChatParticipantCreateEventType {
  CREATE_CHAT_PARTICIPANT = "CREATE_CHAT_PARTICIPANT",
  CHAT_PARTICIPANT_CREATED = "CHAT_PARTICIPANT_CREATED",
}

export interface CreateChatParticipantRequest {
  participant: CreateChatParticipantRequest_ChatParticipant | undefined;
}

export interface CreateChatParticipantRequest_ChatParticipant {
  room: CreateChatParticipantRequest_ChatParticipant_ChatRoom | undefined;
}

export interface CreateChatParticipantRequest_ChatParticipant_ChatRoom {
  id: string;
}

export interface CreateChatParticipantResponse {
  participant: ChatParticipant | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatParticipantCreateServiceClient {
  createChatParticipant(request: CreateChatParticipantRequest, ...rest: any): Observable<CreateChatParticipantResponse>;
}

export interface ChatParticipantCreateServiceController {
  createChatParticipant(
    request: CreateChatParticipantRequest,
    ...rest: any
  ): Promise<CreateChatParticipantResponse> | Observable<CreateChatParticipantResponse> | CreateChatParticipantResponse;
}

export function ChatParticipantCreateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createChatParticipant"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatParticipantCreateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatParticipantCreateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_PARTICIPANT_CREATE_SERVICE_NAME = "ChatParticipantCreateService";
