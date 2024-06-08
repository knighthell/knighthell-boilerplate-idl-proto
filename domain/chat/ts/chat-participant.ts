/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatRoom } from "./chat-room";
import { ChatUser } from "./chat-user";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "chat";

export enum ChatParticipantType {
  OWNER = "OWNER",
  MANAGER = "MANAGER",
  PARTICIPANT = "PARTICIPANT",
}

export function chatParticipantTypeFromJSON(object: any): ChatParticipantType {
  switch (object) {
    case 0:
    case "OWNER":
      return ChatParticipantType.OWNER;
    case 1:
    case "MANAGER":
      return ChatParticipantType.MANAGER;
    case 2:
    case "PARTICIPANT":
      return ChatParticipantType.PARTICIPANT;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantType");
  }
}

export function chatParticipantTypeToJSON(object: ChatParticipantType): string {
  switch (object) {
    case ChatParticipantType.OWNER:
      return "OWNER";
    case ChatParticipantType.MANAGER:
      return "MANAGER";
    case ChatParticipantType.PARTICIPANT:
      return "PARTICIPANT";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantType");
  }
}

export function chatParticipantTypeToNumber(object: ChatParticipantType): number {
  switch (object) {
    case ChatParticipantType.OWNER:
      return 0;
    case ChatParticipantType.MANAGER:
      return 1;
    case ChatParticipantType.PARTICIPANT:
      return 2;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatParticipantType");
  }
}

export interface ChatParticipant {
  id: string;
  createdBy: ChatUser | undefined;
  createdDateTimeUTC: Date | undefined;
  updatedBy?: ChatUser | undefined;
  updatedDateTimeUTC?: Date | undefined;
  deletedBy?: ChatUser | undefined;
  deletedDateTimeUTC?: Date | undefined;
  room: ChatRoom | undefined;
  user: ChatUser | undefined;
  participantName?: string | undefined;
  participantPhotoUrl?: string | undefined;
}

function createBaseChatParticipant(): ChatParticipant {
  return {
    id: "",
    createdBy: undefined,
    createdDateTimeUTC: undefined,
    updatedBy: undefined,
    updatedDateTimeUTC: undefined,
    deletedBy: undefined,
    deletedDateTimeUTC: undefined,
    room: undefined,
    user: undefined,
    participantName: undefined,
    participantPhotoUrl: undefined,
  };
}

export const ChatParticipant = {
  encode(message: ChatParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.room !== undefined) {
      ChatRoom.encode(message.room, writer.uint32(66).fork()).ldelim();
    }
    if (message.user !== undefined) {
      ChatUser.encode(message.user, writer.uint32(74).fork()).ldelim();
    }
    if (message.participantName !== undefined) {
      writer.uint32(82).string(message.participantName);
    }
    if (message.participantPhotoUrl !== undefined) {
      writer.uint32(90).string(message.participantPhotoUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatParticipant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatParticipant();
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

          message.room = ChatRoom.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.user = ChatUser.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.participantName = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.participantPhotoUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChatParticipant {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdBy: isSet(object.createdBy) ? ChatUser.fromJSON(object.createdBy) : undefined,
      createdDateTimeUTC: isSet(object.createdDateTimeUTC) ? fromJsonTimestamp(object.createdDateTimeUTC) : undefined,
      updatedBy: isSet(object.updatedBy) ? ChatUser.fromJSON(object.updatedBy) : undefined,
      updatedDateTimeUTC: isSet(object.updatedDateTimeUTC) ? fromJsonTimestamp(object.updatedDateTimeUTC) : undefined,
      deletedBy: isSet(object.deletedBy) ? ChatUser.fromJSON(object.deletedBy) : undefined,
      deletedDateTimeUTC: isSet(object.deletedDateTimeUTC) ? fromJsonTimestamp(object.deletedDateTimeUTC) : undefined,
      room: isSet(object.room) ? ChatRoom.fromJSON(object.room) : undefined,
      user: isSet(object.user) ? ChatUser.fromJSON(object.user) : undefined,
      participantName: isSet(object.participantName) ? globalThis.String(object.participantName) : undefined,
      participantPhotoUrl: isSet(object.participantPhotoUrl)
        ? globalThis.String(object.participantPhotoUrl)
        : undefined,
    };
  },

  toJSON(message: ChatParticipant): unknown {
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
    if (message.room !== undefined) {
      obj.room = ChatRoom.toJSON(message.room);
    }
    if (message.user !== undefined) {
      obj.user = ChatUser.toJSON(message.user);
    }
    if (message.participantName !== undefined) {
      obj.participantName = message.participantName;
    }
    if (message.participantPhotoUrl !== undefined) {
      obj.participantPhotoUrl = message.participantPhotoUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChatParticipant>, I>>(base?: I): ChatParticipant {
    return ChatParticipant.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChatParticipant>, I>>(object: I): ChatParticipant {
    const message = createBaseChatParticipant();
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
    message.room = (object.room !== undefined && object.room !== null) ? ChatRoom.fromPartial(object.room) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? ChatUser.fromPartial(object.user) : undefined;
    message.participantName = object.participantName ?? undefined;
    message.participantPhotoUrl = object.participantPhotoUrl ?? undefined;
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
