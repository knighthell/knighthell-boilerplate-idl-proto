/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatParticipant } from "./chat-participant";

export const protobufPackage = "chat";

export enum ChatParticipantCreateEventType {
  CREATE_CHAT_PARTICIPANT = "CREATE_CHAT_PARTICIPANT",
  CHAT_PARTICIPANT_CREATED = "CHAT_PARTICIPANT_CREATED",
}

export function chatParticipantCreateEventTypeFromJSON(object: any): ChatParticipantCreateEventType {
  switch (object) {
    case 0:
    case "CREATE_CHAT_PARTICIPANT":
      return ChatParticipantCreateEventType.CREATE_CHAT_PARTICIPANT;
    case 1:
    case "CHAT_PARTICIPANT_CREATED":
      return ChatParticipantCreateEventType.CHAT_PARTICIPANT_CREATED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantCreateEventType");
  }
}

export function chatParticipantCreateEventTypeToJSON(object: ChatParticipantCreateEventType): string {
  switch (object) {
    case ChatParticipantCreateEventType.CREATE_CHAT_PARTICIPANT:
      return "CREATE_CHAT_PARTICIPANT";
    case ChatParticipantCreateEventType.CHAT_PARTICIPANT_CREATED:
      return "CHAT_PARTICIPANT_CREATED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantCreateEventType");
  }
}

export function chatParticipantCreateEventTypeToNumber(object: ChatParticipantCreateEventType): number {
  switch (object) {
    case ChatParticipantCreateEventType.CREATE_CHAT_PARTICIPANT:
      return 0;
    case ChatParticipantCreateEventType.CHAT_PARTICIPANT_CREATED:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantCreateEventType");
  }
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

function createBaseCreateChatParticipantRequest(): CreateChatParticipantRequest {
  return { participant: undefined };
}

export const CreateChatParticipantRequest = {
  encode(message: CreateChatParticipantRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== undefined) {
      CreateChatParticipantRequest_ChatParticipant.encode(message.participant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatParticipantRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatParticipantRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.participant = CreateChatParticipantRequest_ChatParticipant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatParticipantRequest {
    return {
      participant: isSet(object.participant)
        ? CreateChatParticipantRequest_ChatParticipant.fromJSON(object.participant)
        : undefined,
    };
  },

  toJSON(message: CreateChatParticipantRequest): unknown {
    const obj: any = {};
    if (message.participant !== undefined) {
      obj.participant = CreateChatParticipantRequest_ChatParticipant.toJSON(message.participant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatParticipantRequest>, I>>(base?: I): CreateChatParticipantRequest {
    return CreateChatParticipantRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatParticipantRequest>, I>>(object: I): CreateChatParticipantRequest {
    const message = createBaseCreateChatParticipantRequest();
    message.participant = (object.participant !== undefined && object.participant !== null)
      ? CreateChatParticipantRequest_ChatParticipant.fromPartial(object.participant)
      : undefined;
    return message;
  },
};

function createBaseCreateChatParticipantRequest_ChatParticipant(): CreateChatParticipantRequest_ChatParticipant {
  return { room: undefined };
}

export const CreateChatParticipantRequest_ChatParticipant = {
  encode(message: CreateChatParticipantRequest_ChatParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      CreateChatParticipantRequest_ChatParticipant_ChatRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatParticipantRequest_ChatParticipant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatParticipantRequest_ChatParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = CreateChatParticipantRequest_ChatParticipant_ChatRoom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatParticipantRequest_ChatParticipant {
    return {
      room: isSet(object.room)
        ? CreateChatParticipantRequest_ChatParticipant_ChatRoom.fromJSON(object.room)
        : undefined,
    };
  },

  toJSON(message: CreateChatParticipantRequest_ChatParticipant): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = CreateChatParticipantRequest_ChatParticipant_ChatRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatParticipantRequest_ChatParticipant>, I>>(
    base?: I,
  ): CreateChatParticipantRequest_ChatParticipant {
    return CreateChatParticipantRequest_ChatParticipant.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatParticipantRequest_ChatParticipant>, I>>(
    object: I,
  ): CreateChatParticipantRequest_ChatParticipant {
    const message = createBaseCreateChatParticipantRequest_ChatParticipant();
    message.room = (object.room !== undefined && object.room !== null)
      ? CreateChatParticipantRequest_ChatParticipant_ChatRoom.fromPartial(object.room)
      : undefined;
    return message;
  },
};

function createBaseCreateChatParticipantRequest_ChatParticipant_ChatRoom(): CreateChatParticipantRequest_ChatParticipant_ChatRoom {
  return { id: "" };
}

export const CreateChatParticipantRequest_ChatParticipant_ChatRoom = {
  encode(
    message: CreateChatParticipantRequest_ChatParticipant_ChatRoom,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatParticipantRequest_ChatParticipant_ChatRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatParticipantRequest_ChatParticipant_ChatRoom();
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

  fromJSON(object: any): CreateChatParticipantRequest_ChatParticipant_ChatRoom {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateChatParticipantRequest_ChatParticipant_ChatRoom): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatParticipantRequest_ChatParticipant_ChatRoom>, I>>(
    base?: I,
  ): CreateChatParticipantRequest_ChatParticipant_ChatRoom {
    return CreateChatParticipantRequest_ChatParticipant_ChatRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatParticipantRequest_ChatParticipant_ChatRoom>, I>>(
    object: I,
  ): CreateChatParticipantRequest_ChatParticipant_ChatRoom {
    const message = createBaseCreateChatParticipantRequest_ChatParticipant_ChatRoom();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCreateChatParticipantResponse(): CreateChatParticipantResponse {
  return { participant: undefined };
}

export const CreateChatParticipantResponse = {
  encode(message: CreateChatParticipantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant !== undefined) {
      ChatParticipant.encode(message.participant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatParticipantResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatParticipantResponse();
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

  fromJSON(object: any): CreateChatParticipantResponse {
    return { participant: isSet(object.participant) ? ChatParticipant.fromJSON(object.participant) : undefined };
  },

  toJSON(message: CreateChatParticipantResponse): unknown {
    const obj: any = {};
    if (message.participant !== undefined) {
      obj.participant = ChatParticipant.toJSON(message.participant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatParticipantResponse>, I>>(base?: I): CreateChatParticipantResponse {
    return CreateChatParticipantResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatParticipantResponse>, I>>(
    object: I,
  ): CreateChatParticipantResponse {
    const message = createBaseCreateChatParticipantResponse();
    message.participant = (object.participant !== undefined && object.participant !== null)
      ? ChatParticipant.fromPartial(object.participant)
      : undefined;
    return message;
  },
};

export interface ChatParticipantCreateService {
  CreateChatParticipant(request: CreateChatParticipantRequest): Promise<CreateChatParticipantResponse>;
}

export const ChatParticipantCreateServiceServiceName = "chat.ChatParticipantCreateService";
export class ChatParticipantCreateServiceClientImpl implements ChatParticipantCreateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatParticipantCreateServiceServiceName;
    this.rpc = rpc;
    this.CreateChatParticipant = this.CreateChatParticipant.bind(this);
  }
  CreateChatParticipant(request: CreateChatParticipantRequest): Promise<CreateChatParticipantResponse> {
    const data = CreateChatParticipantRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateChatParticipant", data);
    return promise.then((data) => CreateChatParticipantResponse.decode(_m0.Reader.create(data)));
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
