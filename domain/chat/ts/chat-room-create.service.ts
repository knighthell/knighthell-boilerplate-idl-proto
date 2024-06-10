/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatRoom } from "./chat-room";

export const protobufPackage = "chat";

export enum ChatRoomCreateEventType {
  CREATE_CHAT_ROOM = "CREATE_CHAT_ROOM",
  CHAT_ROOM_CREATED = "CHAT_ROOM_CREATED",
}

export function chatRoomCreateEventTypeFromJSON(object: any): ChatRoomCreateEventType {
  switch (object) {
    case 0:
    case "CREATE_CHAT_ROOM":
      return ChatRoomCreateEventType.CREATE_CHAT_ROOM;
    case 1:
    case "CHAT_ROOM_CREATED":
      return ChatRoomCreateEventType.CHAT_ROOM_CREATED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomCreateEventType");
  }
}

export function chatRoomCreateEventTypeToJSON(object: ChatRoomCreateEventType): string {
  switch (object) {
    case ChatRoomCreateEventType.CREATE_CHAT_ROOM:
      return "CREATE_CHAT_ROOM";
    case ChatRoomCreateEventType.CHAT_ROOM_CREATED:
      return "CHAT_ROOM_CREATED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomCreateEventType");
  }
}

export function chatRoomCreateEventTypeToNumber(object: ChatRoomCreateEventType): number {
  switch (object) {
    case ChatRoomCreateEventType.CREATE_CHAT_ROOM:
      return 0;
    case ChatRoomCreateEventType.CHAT_ROOM_CREATED:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomCreateEventType");
  }
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

function createBaseCreateChatRoomRequest(): CreateChatRoomRequest {
  return { room: undefined };
}

export const CreateChatRoomRequest = {
  encode(message: CreateChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      CreateChatRoomRequest_ChatRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = CreateChatRoomRequest_ChatRoom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatRoomRequest {
    return { room: isSet(object.room) ? CreateChatRoomRequest_ChatRoom.fromJSON(object.room) : undefined };
  },

  toJSON(message: CreateChatRoomRequest): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = CreateChatRoomRequest_ChatRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatRoomRequest>, I>>(base?: I): CreateChatRoomRequest {
    return CreateChatRoomRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatRoomRequest>, I>>(object: I): CreateChatRoomRequest {
    const message = createBaseCreateChatRoomRequest();
    message.room = (object.room !== undefined && object.room !== null)
      ? CreateChatRoomRequest_ChatRoom.fromPartial(object.room)
      : undefined;
    return message;
  },
};

function createBaseCreateChatRoomRequest_ChatRoom(): CreateChatRoomRequest_ChatRoom {
  return { title: "" };
}

export const CreateChatRoomRequest_ChatRoom = {
  encode(message: CreateChatRoomRequest_ChatRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatRoomRequest_ChatRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatRoomRequest_ChatRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatRoomRequest_ChatRoom {
    return { title: isSet(object.title) ? globalThis.String(object.title) : "" };
  },

  toJSON(message: CreateChatRoomRequest_ChatRoom): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatRoomRequest_ChatRoom>, I>>(base?: I): CreateChatRoomRequest_ChatRoom {
    return CreateChatRoomRequest_ChatRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatRoomRequest_ChatRoom>, I>>(
    object: I,
  ): CreateChatRoomRequest_ChatRoom {
    const message = createBaseCreateChatRoomRequest_ChatRoom();
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCreateChatRoomResponse(): CreateChatRoomResponse {
  return { room: undefined };
}

export const CreateChatRoomResponse = {
  encode(message: CreateChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      ChatRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatRoomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = ChatRoom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatRoomResponse {
    return { room: isSet(object.room) ? ChatRoom.fromJSON(object.room) : undefined };
  },

  toJSON(message: CreateChatRoomResponse): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = ChatRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatRoomResponse>, I>>(base?: I): CreateChatRoomResponse {
    return CreateChatRoomResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatRoomResponse>, I>>(object: I): CreateChatRoomResponse {
    const message = createBaseCreateChatRoomResponse();
    message.room = (object.room !== undefined && object.room !== null) ? ChatRoom.fromPartial(object.room) : undefined;
    return message;
  },
};

export interface ChatRoomCreateService {
  CreateChatRoom(request: CreateChatRoomRequest): Promise<CreateChatRoomResponse>;
}

export const ChatRoomCreateServiceServiceName = "chat.ChatRoomCreateService";
export class ChatRoomCreateServiceClientImpl implements ChatRoomCreateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatRoomCreateServiceServiceName;
    this.rpc = rpc;
    this.CreateChatRoom = this.CreateChatRoom.bind(this);
  }
  CreateChatRoom(request: CreateChatRoomRequest): Promise<CreateChatRoomResponse> {
    const data = CreateChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateChatRoom", data);
    return promise.then((data) => CreateChatRoomResponse.decode(_m0.Reader.create(data)));
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
