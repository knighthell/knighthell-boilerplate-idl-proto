/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { ChatParticipant } from "./chat-participant";

export const protobufPackage = "chat";

export enum ChatParticipantDeleteEventType {
  DELETE_CHAT_PARTICIPANT = "DELETE_CHAT_PARTICIPANT",
  CHAT_PARTICIPANT_DELETED = "CHAT_PARTICIPANT_DELETED",
}

export interface DeleteChatParticipantRequest {
  participant: DeleteChatParticipantRequest_ChatParticipant | undefined;
}

export interface DeleteChatParticipantRequest_ChatParticipant {
  room: DeleteChatParticipantRequest_ChatParticipant_ChatRoom | undefined;
}

export interface DeleteChatParticipantRequest_ChatParticipant_ChatRoom {
  id: string;
}

export interface DeleteChatParticipantResponse {
  participant: ChatParticipant | undefined;
}

export const CHAT_PACKAGE_NAME = "chat";

export interface ChatParticipantDeleteServiceClient {
  deleteChatParticipant(request: DeleteChatParticipantRequest, ...rest: any): Observable<DeleteChatParticipantResponse>;
}

export interface ChatParticipantDeleteServiceController {
  deleteChatParticipant(
    request: DeleteChatParticipantRequest,
    ...rest: any
  ): Promise<DeleteChatParticipantResponse> | Observable<DeleteChatParticipantResponse> | DeleteChatParticipantResponse;
}

export function ChatParticipantDeleteServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["deleteChatParticipant"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ChatParticipantDeleteService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ChatParticipantDeleteService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CHAT_PARTICIPANT_DELETE_SERVICE_NAME = "ChatParticipantDeleteService";
