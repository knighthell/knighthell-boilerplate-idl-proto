/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatUser } from "./chat-user";

export const protobufPackage = "chat";

export enum ChatUserCreateEventType {
  CREATE_CHAT_USER = "CREATE_CHAT_USER",
  CHAT_USER_CREATED = "CHAT_USER_CREATED",
}

export function chatUserCreateEventTypeFromJSON(object: any): ChatUserCreateEventType {
  switch (object) {
    case 0:
    case "CREATE_CHAT_USER":
      return ChatUserCreateEventType.CREATE_CHAT_USER;
    case 1:
    case "CHAT_USER_CREATED":
      return ChatUserCreateEventType.CHAT_USER_CREATED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatUserCreateEventType");
  }
}

export function chatUserCreateEventTypeToJSON(object: ChatUserCreateEventType): string {
  switch (object) {
    case ChatUserCreateEventType.CREATE_CHAT_USER:
      return "CREATE_CHAT_USER";
    case ChatUserCreateEventType.CHAT_USER_CREATED:
      return "CHAT_USER_CREATED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatUserCreateEventType");
  }
}

export function chatUserCreateEventTypeToNumber(object: ChatUserCreateEventType): number {
  switch (object) {
    case ChatUserCreateEventType.CREATE_CHAT_USER:
      return 0;
    case ChatUserCreateEventType.CHAT_USER_CREATED:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatUserCreateEventType");
  }
}

export interface CreateChatUserRequest {
  user: CreateChatUserRequest_ChatUser | undefined;
}

export interface CreateChatUserRequest_ChatUser {
  id: string;
  email: string;
  displayName: string;
  photoUrl?: string | undefined;
}

export interface CreateChatUserResponse {
  user: ChatUser | undefined;
}

function createBaseCreateChatUserRequest(): CreateChatUserRequest {
  return { user: undefined };
}

export const CreateChatUserRequest = {
  encode(message: CreateChatUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      CreateChatUserRequest_ChatUser.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = CreateChatUserRequest_ChatUser.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatUserRequest {
    return { user: isSet(object.user) ? CreateChatUserRequest_ChatUser.fromJSON(object.user) : undefined };
  },

  toJSON(message: CreateChatUserRequest): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = CreateChatUserRequest_ChatUser.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatUserRequest>, I>>(base?: I): CreateChatUserRequest {
    return CreateChatUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatUserRequest>, I>>(object: I): CreateChatUserRequest {
    const message = createBaseCreateChatUserRequest();
    message.user = (object.user !== undefined && object.user !== null)
      ? CreateChatUserRequest_ChatUser.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBaseCreateChatUserRequest_ChatUser(): CreateChatUserRequest_ChatUser {
  return { id: "", email: "", displayName: "", photoUrl: undefined };
}

export const CreateChatUserRequest_ChatUser = {
  encode(message: CreateChatUserRequest_ChatUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.photoUrl !== undefined) {
      writer.uint32(42).string(message.photoUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatUserRequest_ChatUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatUserRequest_ChatUser();
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

  fromJSON(object: any): CreateChatUserRequest_ChatUser {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      photoUrl: isSet(object.photoUrl) ? globalThis.String(object.photoUrl) : undefined,
    };
  },

  toJSON(message: CreateChatUserRequest_ChatUser): unknown {
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
    if (message.photoUrl !== undefined) {
      obj.photoUrl = message.photoUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatUserRequest_ChatUser>, I>>(base?: I): CreateChatUserRequest_ChatUser {
    return CreateChatUserRequest_ChatUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatUserRequest_ChatUser>, I>>(
    object: I,
  ): CreateChatUserRequest_ChatUser {
    const message = createBaseCreateChatUserRequest_ChatUser();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    message.displayName = object.displayName ?? "";
    message.photoUrl = object.photoUrl ?? undefined;
    return message;
  },
};

function createBaseCreateChatUserResponse(): CreateChatUserResponse {
  return { user: undefined };
}

export const CreateChatUserResponse = {
  encode(message: CreateChatUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      ChatUser.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = ChatUser.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatUserResponse {
    return { user: isSet(object.user) ? ChatUser.fromJSON(object.user) : undefined };
  },

  toJSON(message: CreateChatUserResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = ChatUser.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatUserResponse>, I>>(base?: I): CreateChatUserResponse {
    return CreateChatUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatUserResponse>, I>>(object: I): CreateChatUserResponse {
    const message = createBaseCreateChatUserResponse();
    message.user = (object.user !== undefined && object.user !== null) ? ChatUser.fromPartial(object.user) : undefined;
    return message;
  },
};

export interface ChatUserCreateService {
  CreateChatUser(request: CreateChatUserRequest): Promise<CreateChatUserResponse>;
}

export const ChatUserCreateServiceServiceName = "chat.ChatUserCreateService";
export class ChatUserCreateServiceClientImpl implements ChatUserCreateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatUserCreateServiceServiceName;
    this.rpc = rpc;
    this.CreateChatUser = this.CreateChatUser.bind(this);
  }
  CreateChatUser(request: CreateChatUserRequest): Promise<CreateChatUserResponse> {
    const data = CreateChatUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateChatUser", data);
    return promise.then((data) => CreateChatUserResponse.decode(_m0.Reader.create(data)));
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
