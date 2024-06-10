/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ChatMessage } from "./chat-message";

export const protobufPackage = "chat";

export enum ChatMessageCreateEventType {
  CREATE_CHAT_MESSAGE = "CREATE_CHAT_MESSAGE",
  CHAT_MESSAGE_CREATED = "CHAT_MESSAGE_CREATED",
}

export function chatMessageCreateEventTypeFromJSON(object: any): ChatMessageCreateEventType {
  switch (object) {
    case 0:
    case "CREATE_CHAT_MESSAGE":
      return ChatMessageCreateEventType.CREATE_CHAT_MESSAGE;
    case 1:
    case "CHAT_MESSAGE_CREATED":
      return ChatMessageCreateEventType.CHAT_MESSAGE_CREATED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatMessageCreateEventType");
  }
}

export function chatMessageCreateEventTypeToJSON(object: ChatMessageCreateEventType): string {
  switch (object) {
    case ChatMessageCreateEventType.CREATE_CHAT_MESSAGE:
      return "CREATE_CHAT_MESSAGE";
    case ChatMessageCreateEventType.CHAT_MESSAGE_CREATED:
      return "CHAT_MESSAGE_CREATED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatMessageCreateEventType");
  }
}

export function chatMessageCreateEventTypeToNumber(object: ChatMessageCreateEventType): number {
  switch (object) {
    case ChatMessageCreateEventType.CREATE_CHAT_MESSAGE:
      return 0;
    case ChatMessageCreateEventType.CHAT_MESSAGE_CREATED:
      return 1;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum ChatMessageCreateEventType");
  }
}

export interface CreateChatMessageRequest {
  message: CreateChatMessageRequest_ChatMessage | undefined;
}

export interface CreateChatMessageRequest_ChatMessage {
}

export interface CreateChatMessageRequest_ChatMessage_ChatRoom {
  id: string;
}

export interface CreateChatMessageResponse {
  message: ChatMessage | undefined;
}

function createBaseCreateChatMessageRequest(): CreateChatMessageRequest {
  return { message: undefined };
}

export const CreateChatMessageRequest = {
  encode(message: CreateChatMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      CreateChatMessageRequest_ChatMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatMessageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = CreateChatMessageRequest_ChatMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatMessageRequest {
    return {
      message: isSet(object.message) ? CreateChatMessageRequest_ChatMessage.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: CreateChatMessageRequest): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = CreateChatMessageRequest_ChatMessage.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatMessageRequest>, I>>(base?: I): CreateChatMessageRequest {
    return CreateChatMessageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatMessageRequest>, I>>(object: I): CreateChatMessageRequest {
    const message = createBaseCreateChatMessageRequest();
    message.message = (object.message !== undefined && object.message !== null)
      ? CreateChatMessageRequest_ChatMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseCreateChatMessageRequest_ChatMessage(): CreateChatMessageRequest_ChatMessage {
  return {};
}

export const CreateChatMessageRequest_ChatMessage = {
  encode(_: CreateChatMessageRequest_ChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatMessageRequest_ChatMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatMessageRequest_ChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CreateChatMessageRequest_ChatMessage {
    return {};
  },

  toJSON(_: CreateChatMessageRequest_ChatMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatMessageRequest_ChatMessage>, I>>(
    base?: I,
  ): CreateChatMessageRequest_ChatMessage {
    return CreateChatMessageRequest_ChatMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatMessageRequest_ChatMessage>, I>>(
    _: I,
  ): CreateChatMessageRequest_ChatMessage {
    const message = createBaseCreateChatMessageRequest_ChatMessage();
    return message;
  },
};

function createBaseCreateChatMessageRequest_ChatMessage_ChatRoom(): CreateChatMessageRequest_ChatMessage_ChatRoom {
  return { id: "" };
}

export const CreateChatMessageRequest_ChatMessage_ChatRoom = {
  encode(message: CreateChatMessageRequest_ChatMessage_ChatRoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatMessageRequest_ChatMessage_ChatRoom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatMessageRequest_ChatMessage_ChatRoom();
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

  fromJSON(object: any): CreateChatMessageRequest_ChatMessage_ChatRoom {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: CreateChatMessageRequest_ChatMessage_ChatRoom): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatMessageRequest_ChatMessage_ChatRoom>, I>>(
    base?: I,
  ): CreateChatMessageRequest_ChatMessage_ChatRoom {
    return CreateChatMessageRequest_ChatMessage_ChatRoom.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatMessageRequest_ChatMessage_ChatRoom>, I>>(
    object: I,
  ): CreateChatMessageRequest_ChatMessage_ChatRoom {
    const message = createBaseCreateChatMessageRequest_ChatMessage_ChatRoom();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCreateChatMessageResponse(): CreateChatMessageResponse {
  return { message: undefined };
}

export const CreateChatMessageResponse = {
  encode(message: CreateChatMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      ChatMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatMessageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = ChatMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateChatMessageResponse {
    return { message: isSet(object.message) ? ChatMessage.fromJSON(object.message) : undefined };
  },

  toJSON(message: CreateChatMessageResponse): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = ChatMessage.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateChatMessageResponse>, I>>(base?: I): CreateChatMessageResponse {
    return CreateChatMessageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateChatMessageResponse>, I>>(object: I): CreateChatMessageResponse {
    const message = createBaseCreateChatMessageResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? ChatMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

export interface ChatMessageCreateService {
  CreateChatMessage(request: CreateChatMessageRequest): Promise<CreateChatMessageResponse>;
}

export const ChatMessageCreateServiceServiceName = "chat.ChatMessageCreateService";
export class ChatMessageCreateServiceClientImpl implements ChatMessageCreateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ChatMessageCreateServiceServiceName;
    this.rpc = rpc;
    this.CreateChatMessage = this.CreateChatMessage.bind(this);
  }
  CreateChatMessage(request: CreateChatMessageRequest): Promise<CreateChatMessageResponse> {
    const data = CreateChatMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateChatMessage", data);
    return promise.then((data) => CreateChatMessageResponse.decode(_m0.Reader.create(data)));
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
