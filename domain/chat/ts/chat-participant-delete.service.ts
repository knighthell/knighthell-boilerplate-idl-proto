/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatParticipant } from "./chat-participant";

export const protobufPackage = "chat";

export enum ChatParticipantDeleteEventType {
  DELETE_CHAT_PARTICIPANT = "DELETE_CHAT_PARTICIPANT",
  CHAT_PARTICIPANT_DELETED = "CHAT_PARTICIPANT_DELETED",
}

export function chatParticipantDeleteEventTypeFromJSON(object: any): ChatParticipantDeleteEventType {
  switch (object) {
    case 0:
    case "DELETE_CHAT_PARTICIPANT":
      return ChatParticipantDeleteEventType.DELETE_CHAT_PARTICIPANT;
    case 1:
    case "CHAT_PARTICIPANT_DELETED":
      return ChatParticipantDeleteEventType.CHAT_PARTICIPANT_DELETED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantDeleteEventType");
  }
}

export function chatParticipantDeleteEventTypeToJSON(object: ChatParticipantDeleteEventType): string {
  switch (object) {
    case ChatParticipantDeleteEventType.DELETE_CHAT_PARTICIPANT:
      return "DELETE_CHAT_PARTICIPANT";
    case ChatParticipantDeleteEventType.CHAT_PARTICIPANT_DELETED:
      return "CHAT_PARTICIPANT_DELETED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantDeleteEventType");
  }
}

export function chatParticipantDeleteEventTypeToNumber(object: ChatParticipantDeleteEventType): number {
  switch (object) {
    case ChatParticipantDeleteEventType.DELETE_CHAT_PARTICIPANT:
      return 0;
    case ChatParticipantDeleteEventType.CHAT_PARTICIPANT_DELETED:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantDeleteEventType");
  }
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

function createBaseDeleteChatParticipantRequest(): DeleteChatParticipantRequest {
  return { participant: undefined };
}

export const DeleteChatParticipantRequest = {
  encode(message: DeleteChatParticipantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== undefined) {
      DeleteChatParticipantRequest_ChatParticipant.encode(message.participant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatParticipantRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatParticipantRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.participant = DeleteChatParticipantRequest_ChatParticipant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteChatParticipantRequest {
    return {
      participant: isSet(object.participant)
        ? DeleteChatParticipantRequest_ChatParticipant.fromJSON(object.participant)
        : undefined,
    };
  },

  toJSON(message: DeleteChatParticipantRequest): unknown {
    const obj: any = {};
    if (message.participant !== undefined) {
      obj.participant = DeleteChatParticipantRequest_ChatParticipant.toJSON(message.participant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatParticipantRequest>, I>>(base?: I): DeleteChatParticipantRequest {
    return DeleteChatParticipantRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatParticipantRequest>, I>>(object: I): DeleteChatParticipantRequest {
    const message = createBaseDeleteChatParticipantRequest();
    message.participant = (object.participant !== undefined && object.participant !== null)
      ? DeleteChatParticipantRequest_ChatParticipant.fromPartial(object.participant)
      : undefined;
    return message;
  },
};

function createBaseDeleteChatParticipantRequest_ChatParticipant(): DeleteChatParticipantRequest_ChatParticipant {
  return { room: undefined };
}

export const DeleteChatParticipantRequest_ChatParticipant = {
  encode(message: DeleteChatParticipantRequest_ChatParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      DeleteChatParticipantRequest_ChatParticipant_ChatRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatParticipantRequest_ChatParticipant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatParticipantRequest_ChatParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = DeleteChatParticipantRequest_ChatParticipant_ChatRoom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteChatParticipantRequest_ChatParticipant {
    return {
      room: isSet(object.room)
        ? DeleteChatParticipantRequest_ChatParticipant_ChatRoom.fromJSON(object.room)
        : undefined,
    };
  },

  toJSON(message: DeleteChatParticipantRequest_ChatParticipant): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = DeleteChatParticipantRequest_ChatParticipant_ChatRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatParticipantRequest_ChatParticipant>, I>>(
    base?: I,
  ): DeleteChatParticipantRequest_ChatParticipant {
    return DeleteChatParticipantRequest_ChatParticipant.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatParticipantRequest_ChatParticipant>, I>>(
    object: I,
  ): DeleteChatParticipantRequest_ChatParticipant {
    const message = createBaseDeleteChatParticipantRequest_ChatParticipant();
    message.room = (object.room !== undefined && object.room !== null)
      ? DeleteChatParticipantRequest_ChatParticipant_ChatRoom.fromPartial(object.room)
      : undefined;
    return message;
  },
};

function createBaseDeleteChatParticipantRequest_ChatParticipant_ChatRoom(): DeleteChatParticipantRequest_ChatParticipant_ChatRoom {
  return { id: "" };
}

export const DeleteChatParticipantRequest_ChatParticipant_ChatRoom = {
  encode(
    message: DeleteChatParticipantRequest_ChatParticipant_ChatRoom,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatParticipantRequest_ChatParticipant_ChatRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatParticipantRequest_ChatParticipant_ChatRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteChatParticipantRequest_ChatParticipant_ChatRoom {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteChatParticipantRequest_ChatParticipant_ChatRoom): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatParticipantRequest_ChatParticipant_ChatRoom>, I>>(
    base?: I,
  ): DeleteChatParticipantRequest_ChatParticipant_ChatRoom {
    return DeleteChatParticipantRequest_ChatParticipant_ChatRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatParticipantRequest_ChatParticipant_ChatRoom>, I>>(
    object: I,
  ): DeleteChatParticipantRequest_ChatParticipant_ChatRoom {
    const message = createBaseDeleteChatParticipantRequest_ChatParticipant_ChatRoom();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteChatParticipantResponse(): DeleteChatParticipantResponse {
  return { participant: undefined };
}

export const DeleteChatParticipantResponse = {
  encode(message: DeleteChatParticipantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== undefined) {
      ChatParticipant.encode(message.participant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatParticipantResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatParticipantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.participant = ChatParticipant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteChatParticipantResponse {
    return { participant: isSet(object.participant) ? ChatParticipant.fromJSON(object.participant) : undefined };
  },

  toJSON(message: DeleteChatParticipantResponse): unknown {
    const obj: any = {};
    if (message.participant !== undefined) {
      obj.participant = ChatParticipant.toJSON(message.participant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatParticipantResponse>, I>>(base?: I): DeleteChatParticipantResponse {
    return DeleteChatParticipantResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatParticipantResponse>, I>>(
    object: I,
  ): DeleteChatParticipantResponse {
    const message = createBaseDeleteChatParticipantResponse();
    message.participant = (object.participant !== undefined && object.participant !== null)
      ? ChatParticipant.fromPartial(object.participant)
      : undefined;
    return message;
  },
};

export interface ChatParticipantDeleteService {
  DeleteChatParticipant(request: DeleteChatParticipantRequest): Promise<DeleteChatParticipantResponse>;
}

export const ChatParticipantDeleteServiceServiceName = "chat.ChatParticipantDeleteService";
export class ChatParticipantDeleteServiceClientImpl implements ChatParticipantDeleteService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatParticipantDeleteServiceServiceName;
    this.rpc = rpc;
    this.DeleteChatParticipant = this.DeleteChatParticipant.bind(this);
  }
  DeleteChatParticipant(request: DeleteChatParticipantRequest): Promise<DeleteChatParticipantResponse> {
    const data = DeleteChatParticipantRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteChatParticipant", data);
    return promise.then((data) => DeleteChatParticipantResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
