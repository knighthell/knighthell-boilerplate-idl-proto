/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "common";

export interface ResponseInfo {
  /** 총 개수 */
  totalCount: number;
  /** 결과물의 개수 */
  resultCount: number;
  /** 요청시 전달된 페이지 수 */
  requestedPageNumber?:
    | number
    | undefined;
  /** 요청시 전달된 결과물 제한 수 */
  requestedLimitNumber?:
    | number
    | undefined;
  /** 요청시 전달된 커서 Id 값 */
  requestedCursorId?: string | undefined;
}

function createBaseResponseInfo(): ResponseInfo {
  return {
    totalCount: 0,
    resultCount: 0,
    requestedPageNumber: undefined,
    requestedLimitNumber: undefined,
    requestedCursorId: undefined,
  };
}

export const ResponseInfo = {
  encode(message: ResponseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCount !== 0) {
      writer.uint32(8).int32(message.totalCount);
    }
    if (message.resultCount !== 0) {
      writer.uint32(16).int32(message.resultCount);
    }
    if (message.requestedPageNumber !== undefined) {
      writer.uint32(24).int32(message.requestedPageNumber);
    }
    if (message.requestedLimitNumber !== undefined) {
      writer.uint32(40).int32(message.requestedLimitNumber);
    }
    if (message.requestedCursorId !== undefined) {
      writer.uint32(34).string(message.requestedCursorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.resultCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.requestedPageNumber = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.requestedLimitNumber = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.requestedCursorId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseInfo {
    return {
      totalCount: isSet(object.totalCount) ? globalThis.Number(object.totalCount) : 0,
      resultCount: isSet(object.resultCount) ? globalThis.Number(object.resultCount) : 0,
      requestedPageNumber: isSet(object.requestedPageNumber)
        ? globalThis.Number(object.requestedPageNumber)
        : undefined,
      requestedLimitNumber: isSet(object.requestedLimitNumber)
        ? globalThis.Number(object.requestedLimitNumber)
        : undefined,
      requestedCursorId: isSet(object.requestedCursorId) ? globalThis.String(object.requestedCursorId) : undefined,
    };
  },

  toJSON(message: ResponseInfo): unknown {
    const obj: any = {};
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    if (message.resultCount !== 0) {
      obj.resultCount = Math.round(message.resultCount);
    }
    if (message.requestedPageNumber !== undefined) {
      obj.requestedPageNumber = Math.round(message.requestedPageNumber);
    }
    if (message.requestedLimitNumber !== undefined) {
      obj.requestedLimitNumber = Math.round(message.requestedLimitNumber);
    }
    if (message.requestedCursorId !== undefined) {
      obj.requestedCursorId = message.requestedCursorId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseInfo>, I>>(base?: I): ResponseInfo {
    return ResponseInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(object: I): ResponseInfo {
    const message = createBaseResponseInfo();
    message.totalCount = object.totalCount ?? 0;
    message.resultCount = object.resultCount ?? 0;
    message.requestedPageNumber = object.requestedPageNumber ?? undefined;
    message.requestedLimitNumber = object.requestedLimitNumber ?? undefined;
    message.requestedCursorId = object.requestedCursorId ?? undefined;
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
