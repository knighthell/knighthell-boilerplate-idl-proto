/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Place } from "./place";

export const protobufPackage = "place.service.update";

export interface UpdatePlaceListRequest {
  places: UpdatePlaceListRequest_Place[];
}

export interface UpdatePlaceListRequest_Place {
  placeId: string;
  /** 장소(Place)의 원래 이름(No Localization Name) */
  name?:
    | string
    | undefined;
  /** 장소(Place)의 위도 */
  latitude?:
    | number
    | undefined;
  /** 장소(Place)의 경도 */
  longitude?: number | undefined;
}

export interface UpdatePlaceListResponse {
  results: Place[];
}

function createBaseUpdatePlaceListRequest(): UpdatePlaceListRequest {
  return { places: [] };
}

export const UpdatePlaceListRequest = {
  encode(message: UpdatePlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      UpdatePlaceListRequest_Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaceListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlaceListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.places.push(UpdatePlaceListRequest_Place.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePlaceListRequest {
    return {
      places: globalThis.Array.isArray(object?.places)
        ? object.places.map((e: any) => UpdatePlaceListRequest_Place.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdatePlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => UpdatePlaceListRequest_Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlaceListRequest>, I>>(base?: I): UpdatePlaceListRequest {
    return UpdatePlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceListRequest>, I>>(object: I): UpdatePlaceListRequest {
    const message = createBaseUpdatePlaceListRequest();
    message.places = object.places?.map((e) => UpdatePlaceListRequest_Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdatePlaceListRequest_Place(): UpdatePlaceListRequest_Place {
  return { placeId: "", name: undefined, latitude: undefined, longitude: undefined };
}

export const UpdatePlaceListRequest_Place = {
  encode(message: UpdatePlaceListRequest_Place, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.latitude !== undefined) {
      writer.uint32(25).double(message.latitude);
    }
    if (message.longitude !== undefined) {
      writer.uint32(33).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaceListRequest_Place {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlaceListRequest_Place();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placeId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.latitude = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.longitude = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePlaceListRequest_Place {
    return {
      placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : undefined,
    };
  },

  toJSON(message: UpdatePlaceListRequest_Place): unknown {
    const obj: any = {};
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.latitude !== undefined) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== undefined) {
      obj.longitude = message.longitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlaceListRequest_Place>, I>>(base?: I): UpdatePlaceListRequest_Place {
    return UpdatePlaceListRequest_Place.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceListRequest_Place>, I>>(object: I): UpdatePlaceListRequest_Place {
    const message = createBaseUpdatePlaceListRequest_Place();
    message.placeId = object.placeId ?? "";
    message.name = object.name ?? undefined;
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    return message;
  },
};

function createBaseUpdatePlaceListResponse(): UpdatePlaceListResponse {
  return { results: [] };
}

export const UpdatePlaceListResponse = {
  encode(message: UpdatePlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Place.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaceListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlaceListResponse();
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

  fromJSON(object: any): UpdatePlaceListResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Place.fromJSON(e)) : [],
    };
  },

  toJSON(message: UpdatePlaceListResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlaceListResponse>, I>>(base?: I): UpdatePlaceListResponse {
    return UpdatePlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceListResponse>, I>>(object: I): UpdatePlaceListResponse {
    const message = createBaseUpdatePlaceListResponse();
    message.results = object.results?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

export interface PlaceUpdateService {
  UpdatePlaceList(request: UpdatePlaceListRequest): Promise<UpdatePlaceListResponse>;
}

export const PlaceUpdateServiceServiceName = "place.service.update.PlaceUpdateService";
export class PlaceUpdateServiceClientImpl implements PlaceUpdateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlaceUpdateServiceServiceName;
    this.rpc = rpc;
    this.UpdatePlaceList = this.UpdatePlaceList.bind(this);
  }
  UpdatePlaceList(request: UpdatePlaceListRequest): Promise<UpdatePlaceListResponse> {
    const data = UpdatePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePlaceList", data);
    return promise.then((data) => UpdatePlaceListResponse.decode(_m0.Reader.create(data)));
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
