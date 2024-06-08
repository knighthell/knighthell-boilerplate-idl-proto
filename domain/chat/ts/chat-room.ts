/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatUser } from "./chat-user";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "chat";

export interface ChatRoom {
  id: string;
  createdBy: ChatUser | undefined;
  createdDateTimeUTC: Date | undefined;
  updatedBy?: ChatUser | undefined;
  updatedDateTimeUTC?: Date | undefined;
  deletedBy?: ChatUser | undefined;
  deletedDateTimeUTC?: Date | undefined;
  title?: string | undefined;
  participantCount: number;
}

function createBaseChatRoom(): ChatRoom {
  return {
    id: "",
    createdBy: undefined,
    createdDateTimeUTC: undefined,
    updatedBy: undefined,
    updatedDateTimeUTC: undefined,
    deletedBy: undefined,
    deletedDateTimeUTC: undefined,
    title: undefined,
    participantCount: 0,
  };
}

export const ChatRoom = {
  encode(message: ChatRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdBy !== undefined) {
      ChatUser.encode(message.createdBy, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdDateTimeUTC !== undefined) {
      Timestamp.encode(toTimestamp(message.createdDateTimeUTC), writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedBy !== undefined) {
      ChatUser.encode(message.updatedBy, writer.uint32(34).fork()).ldelim();
    }
    if (message.updatedDateTimeUTC !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedDateTimeUTC), writer.uint32(42).fork()).ldelim();
    }
    if (message.deletedBy !== undefined) {
      ChatUser.encode(message.deletedBy, writer.uint32(50).fork()).ldelim();
    }
    if (message.deletedDateTimeUTC !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedDateTimeUTC), writer.uint32(58).fork()).ldelim();
    }
    if (message.title !== undefined) {
      writer.uint32(66).string(message.title);
    }
    if (message.participantCount !== 0) {
      writer.uint32(72).int32(message.participantCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdBy = ChatUser.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdDateTimeUTC = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedBy = ChatUser.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updatedDateTimeUTC = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deletedBy = ChatUser.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deletedDateTimeUTC = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.title = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.participantCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChatRoom {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdBy: isSet(object.createdBy) ? ChatUser.fromJSON(object.createdBy) : undefined,
      createdDateTimeUTC: isSet(object.createdDateTimeUTC) ? fromJsonTimestamp(object.createdDateTimeUTC) : undefined,
      updatedBy: isSet(object.updatedBy) ? ChatUser.fromJSON(object.updatedBy) : undefined,
      updatedDateTimeUTC: isSet(object.updatedDateTimeUTC) ? fromJsonTimestamp(object.updatedDateTimeUTC) : undefined,
      deletedBy: isSet(object.deletedBy) ? ChatUser.fromJSON(object.deletedBy) : undefined,
      deletedDateTimeUTC: isSet(object.deletedDateTimeUTC) ? fromJsonTimestamp(object.deletedDateTimeUTC) : undefined,
      title: isSet(object.title) ? globalThis.String(object.title) : undefined,
      participantCount: isSet(object.participantCount) ? globalThis.Number(object.participantCount) : 0,
    };
  },

  toJSON(message: ChatRoom): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdBy !== undefined) {
      obj.createdBy = ChatUser.toJSON(message.createdBy);
    }
    if (message.createdDateTimeUTC !== undefined) {
      obj.createdDateTimeUTC = message.createdDateTimeUTC.toISOString();
    }
    if (message.updatedBy !== undefined) {
      obj.updatedBy = ChatUser.toJSON(message.updatedBy);
    }
    if (message.updatedDateTimeUTC !== undefined) {
      obj.updatedDateTimeUTC = message.updatedDateTimeUTC.toISOString();
    }
    if (message.deletedBy !== undefined) {
      obj.deletedBy = ChatUser.toJSON(message.deletedBy);
    }
    if (message.deletedDateTimeUTC !== undefined) {
      obj.deletedDateTimeUTC = message.deletedDateTimeUTC.toISOString();
    }
    if (message.title !== undefined) {
      obj.title = message.title;
    }
    if (message.participantCount !== 0) {
      obj.participantCount = Math.round(message.participantCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChatRoom>, I>>(base?: I): ChatRoom {
    return ChatRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChatRoom>, I>>(object: I): ChatRoom {
    const message = createBaseChatRoom();
    message.id = object.id ?? "";
    message.createdBy = (object.createdBy !== undefined && object.createdBy !== null)
      ? ChatUser.fromPartial(object.createdBy)
      : undefined;
    message.createdDateTimeUTC = object.createdDateTimeUTC ?? undefined;
    message.updatedBy = (object.updatedBy !== undefined && object.updatedBy !== null)
      ? ChatUser.fromPartial(object.updatedBy)
      : undefined;
    message.updatedDateTimeUTC = object.updatedDateTimeUTC ?? undefined;
    message.deletedBy = (object.deletedBy !== undefined && object.deletedBy !== null)
      ? ChatUser.fromPartial(object.deletedBy)
      : undefined;
    message.deletedDateTimeUTC = object.deletedDateTimeUTC ?? undefined;
    message.title = object.title ?? undefined;
    message.participantCount = object.participantCount ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
