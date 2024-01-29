/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Place } from "./place";

export const protobufPackage = "place.service.delete";

export interface DeletePlaceListRequest {
  places: DeletePlaceListRequest_Place[];
}

export interface DeletePlaceListRequest_Place {
  placeId: string;
}

export interface DeletePlaceListResponse {
  results: Place[];
}

function createBaseDeletePlaceListRequest(): DeletePlaceListRequest {
  return { places: [] };
}

export const DeletePlaceListRequest = {
  encode(message: DeletePlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      DeletePlaceListRequest_Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaceListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlaceListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.places.push(DeletePlaceListRequest_Place.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePlaceListRequest {
    return {
      places: globalThis.Array.isArray(object?.places)
        ? object.places.map((e: any) => DeletePlaceListRequest_Place.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DeletePlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => DeletePlaceListRequest_Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceListRequest>, I>>(base?: I): DeletePlaceListRequest {
    return DeletePlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceListRequest>, I>>(object: I): DeletePlaceListRequest {
    const message = createBaseDeletePlaceListRequest();
    message.places = object.places?.map((e) => DeletePlaceListRequest_Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeletePlaceListRequest_Place(): DeletePlaceListRequest_Place {
  return { placeId: "" };
}

export const DeletePlaceListRequest_Place = {
  encode(message: DeletePlaceListRequest_Place, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaceListRequest_Place {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlaceListRequest_Place();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePlaceListRequest_Place {
    return { placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "" };
  },

  toJSON(message: DeletePlaceListRequest_Place): unknown {
    const obj: any = {};
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceListRequest_Place>, I>>(base?: I): DeletePlaceListRequest_Place {
    return DeletePlaceListRequest_Place.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceListRequest_Place>, I>>(object: I): DeletePlaceListRequest_Place {
    const message = createBaseDeletePlaceListRequest_Place();
    message.placeId = object.placeId ?? "";
    return message;
  },
};

function createBaseDeletePlaceListResponse(): DeletePlaceListResponse {
  return { results: [] };
}

export const DeletePlaceListResponse = {
  encode(message: DeletePlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Place.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaceListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlaceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Place.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePlaceListResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Place.fromJSON(e)) : [],
    };
  },

  toJSON(message: DeletePlaceListResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceListResponse>, I>>(base?: I): DeletePlaceListResponse {
    return DeletePlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceListResponse>, I>>(object: I): DeletePlaceListResponse {
    const message = createBaseDeletePlaceListResponse();
    message.results = object.results?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

export interface PlaceDeleteService {
  DeletePlaceList(request: DeletePlaceListRequest): Promise<DeletePlaceListResponse>;
}

export const PlaceDeleteServiceServiceName = "place.service.delete.PlaceDeleteService";
export class PlaceDeleteServiceClientImpl implements PlaceDeleteService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlaceDeleteServiceServiceName;
    this.rpc = rpc;
    this.DeletePlaceList = this.DeletePlaceList.bind(this);
  }
  DeletePlaceList(request: DeletePlaceListRequest): Promise<DeletePlaceListResponse> {
    const data = DeletePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeletePlaceList", data);
    return promise.then((data) => DeletePlaceListResponse.decode(_m0.Reader.create(data)));
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
