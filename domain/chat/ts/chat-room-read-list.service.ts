/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatRoom } from "./chat-room";

export const protobufPackage = "chat";

export enum ChatRoomReadListEventType {
  READ_LIST_CHAT_ROOM = "READ_LIST_CHAT_ROOM",
  CHAT_ROOM_READ_LIST = "CHAT_ROOM_READ_LIST",
}

export function chatRoomReadListEventTypeFromJSON(object: any): ChatRoomReadListEventType {
  switch (object) {
    case 0:
    case "READ_LIST_CHAT_ROOM":
      return ChatRoomReadListEventType.READ_LIST_CHAT_ROOM;
    case 1:
    case "CHAT_ROOM_READ_LIST":
      return ChatRoomReadListEventType.CHAT_ROOM_READ_LIST;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomReadListEventType");
  }
}

export function chatRoomReadListEventTypeToJSON(object: ChatRoomReadListEventType): string {
  switch (object) {
    case ChatRoomReadListEventType.READ_LIST_CHAT_ROOM:
      return "READ_LIST_CHAT_ROOM";
    case ChatRoomReadListEventType.CHAT_ROOM_READ_LIST:
      return "CHAT_ROOM_READ_LIST";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomReadListEventType");
  }
}

export function chatRoomReadListEventTypeToNumber(object: ChatRoomReadListEventType): number {
  switch (object) {
    case ChatRoomReadListEventType.READ_LIST_CHAT_ROOM:
      return 0;
    case ChatRoomReadListEventType.CHAT_ROOM_READ_LIST:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomReadListEventType");
  }
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

function createBaseReadListChatRoomRequest(): ReadListChatRoomRequest {
  return { room: undefined, participant: undefined };
}

export const ReadListChatRoomRequest = {
  encode(message: ReadListChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      ReadListChatRoomRequest_ChatRoomCondition.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    if (message.participant !== undefined) {
      ReadListChatRoomRequest_ChatParticipantCondition.encode(message.participant, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadListChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadListChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = ReadListChatRoomRequest_ChatRoomCondition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.participant = ReadListChatRoomRequest_ChatParticipantCondition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadListChatRoomRequest {
    return {
      room: isSet(object.room) ? ReadListChatRoomRequest_ChatRoomCondition.fromJSON(object.room) : undefined,
      participant: isSet(object.participant)
        ? ReadListChatRoomRequest_ChatParticipantCondition.fromJSON(object.participant)
        : undefined,
    };
  },

  toJSON(message: ReadListChatRoomRequest): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = ReadListChatRoomRequest_ChatRoomCondition.toJSON(message.room);
    }
    if (message.participant !== undefined) {
      obj.participant = ReadListChatRoomRequest_ChatParticipantCondition.toJSON(message.participant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadListChatRoomRequest>, I>>(base?: I): ReadListChatRoomRequest {
    return ReadListChatRoomRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadListChatRoomRequest>, I>>(object: I): ReadListChatRoomRequest {
    const message = createBaseReadListChatRoomRequest();
    message.room = (object.room !== undefined && object.room !== null)
      ? ReadListChatRoomRequest_ChatRoomCondition.fromPartial(object.room)
      : undefined;
    message.participant = (object.participant !== undefined && object.participant !== null)
      ? ReadListChatRoomRequest_ChatParticipantCondition.fromPartial(object.participant)
      : undefined;
    return message;
  },
};

function createBaseReadListChatRoomRequest_ChatRoomCondition(): ReadListChatRoomRequest_ChatRoomCondition {
  return { ids: [], createdDateTimeFrom: undefined, createdDateTimeTo: undefined };
}

export const ReadListChatRoomRequest_ChatRoomCondition = {
  encode(message: ReadListChatRoomRequest_ChatRoomCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.createdDateTimeFrom !== undefined) {
      writer.uint32(18).string(message.createdDateTimeFrom);
    }
    if (message.createdDateTimeTo !== undefined) {
      writer.uint32(26).string(message.createdDateTimeTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadListChatRoomRequest_ChatRoomCondition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadListChatRoomRequest_ChatRoomCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdDateTimeFrom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdDateTimeTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadListChatRoomRequest_ChatRoomCondition {
    return {
      ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => globalThis.String(e)) : [],
      createdDateTimeFrom: isSet(object.createdDateTimeFrom)
        ? globalThis.String(object.createdDateTimeFrom)
        : undefined,
      createdDateTimeTo: isSet(object.createdDateTimeTo) ? globalThis.String(object.createdDateTimeTo) : undefined,
    };
  },

  toJSON(message: ReadListChatRoomRequest_ChatRoomCondition): unknown {
    const obj: any = {};
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    if (message.createdDateTimeFrom !== undefined) {
      obj.createdDateTimeFrom = message.createdDateTimeFrom;
    }
    if (message.createdDateTimeTo !== undefined) {
      obj.createdDateTimeTo = message.createdDateTimeTo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadListChatRoomRequest_ChatRoomCondition>, I>>(
    base?: I,
  ): ReadListChatRoomRequest_ChatRoomCondition {
    return ReadListChatRoomRequest_ChatRoomCondition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadListChatRoomRequest_ChatRoomCondition>, I>>(
    object: I,
  ): ReadListChatRoomRequest_ChatRoomCondition {
    const message = createBaseReadListChatRoomRequest_ChatRoomCondition();
    message.ids = object.ids?.map((e) => e) || [];
    message.createdDateTimeFrom = object.createdDateTimeFrom ?? undefined;
    message.createdDateTimeTo = object.createdDateTimeTo ?? undefined;
    return message;
  },
};

function createBaseReadListChatRoomRequest_ChatParticipantCondition(): ReadListChatRoomRequest_ChatParticipantCondition {
  return { ids: [], createdDateTimeFrom: undefined, createdDateTimeTo: undefined };
}

export const ReadListChatRoomRequest_ChatParticipantCondition = {
  encode(
    message: ReadListChatRoomRequest_ChatParticipantCondition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.createdDateTimeFrom !== undefined) {
      writer.uint32(18).string(message.createdDateTimeFrom);
    }
    if (message.createdDateTimeTo !== undefined) {
      writer.uint32(26).string(message.createdDateTimeTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadListChatRoomRequest_ChatParticipantCondition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadListChatRoomRequest_ChatParticipantCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdDateTimeFrom = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdDateTimeTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadListChatRoomRequest_ChatParticipantCondition {
    return {
      ids: globalThis.Array.isArray(object?.ids) ? object.ids.map((e: any) => globalThis.String(e)) : [],
      createdDateTimeFrom: isSet(object.createdDateTimeFrom)
        ? globalThis.String(object.createdDateTimeFrom)
        : undefined,
      createdDateTimeTo: isSet(object.createdDateTimeTo) ? globalThis.String(object.createdDateTimeTo) : undefined,
    };
  },

  toJSON(message: ReadListChatRoomRequest_ChatParticipantCondition): unknown {
    const obj: any = {};
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    if (message.createdDateTimeFrom !== undefined) {
      obj.createdDateTimeFrom = message.createdDateTimeFrom;
    }
    if (message.createdDateTimeTo !== undefined) {
      obj.createdDateTimeTo = message.createdDateTimeTo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadListChatRoomRequest_ChatParticipantCondition>, I>>(
    base?: I,
  ): ReadListChatRoomRequest_ChatParticipantCondition {
    return ReadListChatRoomRequest_ChatParticipantCondition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadListChatRoomRequest_ChatParticipantCondition>, I>>(
    object: I,
  ): ReadListChatRoomRequest_ChatParticipantCondition {
    const message = createBaseReadListChatRoomRequest_ChatParticipantCondition();
    message.ids = object.ids?.map((e) => e) || [];
    message.createdDateTimeFrom = object.createdDateTimeFrom ?? undefined;
    message.createdDateTimeTo = object.createdDateTimeTo ?? undefined;
    return message;
  },
};

function createBaseReadListChatRoomResponse(): ReadListChatRoomResponse {
  return { results: [] };
}

export const ReadListChatRoomResponse = {
  encode(message: ReadListChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      ChatRoom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadListChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadListChatRoomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(ChatRoom.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadListChatRoomResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => ChatRoom.fromJSON(e)) : [],
    };
  },

  toJSON(message: ReadListChatRoomResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => ChatRoom.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadListChatRoomResponse>, I>>(base?: I): ReadListChatRoomResponse {
    return ReadListChatRoomResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadListChatRoomResponse>, I>>(object: I): ReadListChatRoomResponse {
    const message = createBaseReadListChatRoomResponse();
    message.results = object.results?.map((e) => ChatRoom.fromPartial(e)) || [];
    return message;
  },
};

export interface ChatRoomReadListService {
  ReadListChatRoom(request: ReadListChatRoomRequest): Promise<ReadListChatRoomResponse>;
}

export const ChatRoomReadListServiceServiceName = "chat.ChatRoomReadListService";
export class ChatRoomReadListServiceClientImpl implements ChatRoomReadListService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatRoomReadListServiceServiceName;
    this.rpc = rpc;
    this.ReadListChatRoom = this.ReadListChatRoom.bind(this);
  }
  ReadListChatRoom(request: ReadListChatRoomRequest): Promise<ReadListChatRoomResponse> {
    const data = ReadListChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReadListChatRoom", data);
    return promise.then((data) => ReadListChatRoomResponse.decode(_m0.Reader.create(data)));
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
