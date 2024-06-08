/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "chat";

export interface ChatUser {
  id: string;
  email: string;
  displayName: string;
  photoUrl: string;
}

function createBaseChatUser(): ChatUser {
  return { id: "", email: "", displayName: "", photoUrl: "" };
}

export const ChatUser = {
  encode(message: ChatUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.photoUrl !== "") {
      writer.uint32(42).string(message.photoUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatUser();
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

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.photoUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChatUser {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      photoUrl: isSet(object.photoUrl) ? globalThis.String(object.photoUrl) : "",
    };
  },

  toJSON(message: ChatUser): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.photoUrl !== "") {
      obj.photoUrl = message.photoUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChatUser>, I>>(base?: I): ChatUser {
    return ChatUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChatUser>, I>>(object: I): ChatUser {
    const message = createBaseChatUser();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    message.displayName = object.displayName ?? "";
    message.photoUrl = object.photoUrl ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
