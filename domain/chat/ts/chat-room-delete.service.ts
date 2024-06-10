/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatRoom } from "./chat-room";

export const protobufPackage = "chat";

export enum ChatRoomDeleteEventType {
  DELETE_CHAT_ROOM = "DELETE_CHAT_ROOM",
  CHAT_ROOM_DELETED = "CHAT_ROOM_DELETED",
}

export function chatRoomDeleteEventTypeFromJSON(object: any): ChatRoomDeleteEventType {
  switch (object) {
    case 0:
    case "DELETE_CHAT_ROOM":
      return ChatRoomDeleteEventType.DELETE_CHAT_ROOM;
    case 1:
    case "CHAT_ROOM_DELETED":
      return ChatRoomDeleteEventType.CHAT_ROOM_DELETED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomDeleteEventType");
  }
}

export function chatRoomDeleteEventTypeToJSON(object: ChatRoomDeleteEventType): string {
  switch (object) {
    case ChatRoomDeleteEventType.DELETE_CHAT_ROOM:
      return "DELETE_CHAT_ROOM";
    case ChatRoomDeleteEventType.CHAT_ROOM_DELETED:
      return "CHAT_ROOM_DELETED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomDeleteEventType");
  }
}

export function chatRoomDeleteEventTypeToNumber(object: ChatRoomDeleteEventType): number {
  switch (object) {
    case ChatRoomDeleteEventType.DELETE_CHAT_ROOM:
      return 0;
    case ChatRoomDeleteEventType.CHAT_ROOM_DELETED:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatRoomDeleteEventType");
  }
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

function createBaseDeleteChatRoomRequest(): DeleteChatRoomRequest {
  return { room: undefined };
}

export const DeleteChatRoomRequest = {
  encode(message: DeleteChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      DeleteChatRoomRequest_ChatRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.room = DeleteChatRoomRequest_ChatRoom.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteChatRoomRequest {
    return { room: isSet(object.room) ? DeleteChatRoomRequest_ChatRoom.fromJSON(object.room) : undefined };
  },

  toJSON(message: DeleteChatRoomRequest): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = DeleteChatRoomRequest_ChatRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatRoomRequest>, I>>(base?: I): DeleteChatRoomRequest {
    return DeleteChatRoomRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatRoomRequest>, I>>(object: I): DeleteChatRoomRequest {
    const message = createBaseDeleteChatRoomRequest();
    message.room = (object.room !== undefined && object.room !== null)
      ? DeleteChatRoomRequest_ChatRoom.fromPartial(object.room)
      : undefined;
    return message;
  },
};

function createBaseDeleteChatRoomRequest_ChatRoom(): DeleteChatRoomRequest_ChatRoom {
  return { id: "" };
}

export const DeleteChatRoomRequest_ChatRoom = {
  encode(message: DeleteChatRoomRequest_ChatRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatRoomRequest_ChatRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatRoomRequest_ChatRoom();
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

  fromJSON(object: any): DeleteChatRoomRequest_ChatRoom {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteChatRoomRequest_ChatRoom): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatRoomRequest_ChatRoom>, I>>(base?: I): DeleteChatRoomRequest_ChatRoom {
    return DeleteChatRoomRequest_ChatRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatRoomRequest_ChatRoom>, I>>(
    object: I,
  ): DeleteChatRoomRequest_ChatRoom {
    const message = createBaseDeleteChatRoomRequest_ChatRoom();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteChatRoomResponse(): DeleteChatRoomResponse {
  return { room: undefined };
}

export const DeleteChatRoomResponse = {
  encode(message: DeleteChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.room !== undefined) {
      ChatRoom.encode(message.room, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatRoomResponse();
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

  fromJSON(object: any): DeleteChatRoomResponse {
    return { room: isSet(object.room) ? ChatRoom.fromJSON(object.room) : undefined };
  },

  toJSON(message: DeleteChatRoomResponse): unknown {
    const obj: any = {};
    if (message.room !== undefined) {
      obj.room = ChatRoom.toJSON(message.room);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteChatRoomResponse>, I>>(base?: I): DeleteChatRoomResponse {
    return DeleteChatRoomResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteChatRoomResponse>, I>>(object: I): DeleteChatRoomResponse {
    const message = createBaseDeleteChatRoomResponse();
    message.room = (object.room !== undefined && object.room !== null) ? ChatRoom.fromPartial(object.room) : undefined;
    return message;
  },
};

export interface ChatRoomDeleteService {
  DeleteChatRoom(request: DeleteChatRoomRequest): Promise<DeleteChatRoomResponse>;
}

export const ChatRoomDeleteServiceServiceName = "chat.ChatRoomDeleteService";
export class ChatRoomDeleteServiceClientImpl implements ChatRoomDeleteService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatRoomDeleteServiceServiceName;
    this.rpc = rpc;
    this.DeleteChatRoom = this.DeleteChatRoom.bind(this);
  }
  DeleteChatRoom(request: DeleteChatRoomRequest): Promise<DeleteChatRoomResponse> {
    const data = DeleteChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteChatRoom", data);
    return promise.then((data) => DeleteChatRoomResponse.decode(_m0.Reader.create(data)));
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
