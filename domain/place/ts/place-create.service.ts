/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Place } from "./place";

export const protobufPackage = "place.service.create";

export enum PlaceCreateServiceEventType {
  CREATE_PLACE = "CREATE_PLACE",
}

export function placeCreateServiceEventTypeFromJSON(object: any): PlaceCreateServiceEventType {
  switch (object) {
    case 0:
    case "CREATE_PLACE":
      return PlaceCreateServiceEventType.CREATE_PLACE;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceCreateServiceEventType");
  }
}

export function placeCreateServiceEventTypeToJSON(object: PlaceCreateServiceEventType): string {
  switch (object) {
    case PlaceCreateServiceEventType.CREATE_PLACE:
      return "CREATE_PLACE";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceCreateServiceEventType");
  }
}

export function placeCreateServiceEventTypeToNumber(object: PlaceCreateServiceEventType): number {
  switch (object) {
    case PlaceCreateServiceEventType.CREATE_PLACE:
      return 0;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceCreateServiceEventType");
  }
}

export interface CreatePlaceListRequest {
  places: CreatePlaceListRequest_Place[];
}

export interface CreatePlaceListRequest_Place {
  /** 장소(Place)의 원래 이름 */
  name: string;
  /** 장소(Place)의 위도 */
  latitude: number;
  /** 장소(Place)의 경도 */
  longitude: number;
}

export interface CreatePlaceListResponse {
  results: Place[];
}

function createBaseCreatePlaceListRequest(): CreatePlaceListRequest {
  return { places: [] };
}

export const CreatePlaceListRequest = {
  encode(message: CreatePlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      CreatePlaceListRequest_Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaceListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlaceListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.places.push(CreatePlaceListRequest_Place.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePlaceListRequest {
    return {
      places: globalThis.Array.isArray(object?.places)
        ? object.places.map((e: any) => CreatePlaceListRequest_Place.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreatePlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => CreatePlaceListRequest_Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlaceListRequest>, I>>(base?: I): CreatePlaceListRequest {
    return CreatePlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceListRequest>, I>>(object: I): CreatePlaceListRequest {
    const message = createBaseCreatePlaceListRequest();
    message.places = object.places?.map((e) => CreatePlaceListRequest_Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePlaceListRequest_Place(): CreatePlaceListRequest_Place {
  return { name: "", latitude: 0, longitude: 0 };
}

export const CreatePlaceListRequest_Place = {
  encode(message: CreatePlaceListRequest_Place, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.latitude !== 0) {
      writer.uint32(25).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(33).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaceListRequest_Place {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlaceListRequest_Place();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): CreatePlaceListRequest_Place {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : 0,
    };
  },

  toJSON(message: CreatePlaceListRequest_Place): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.latitude !== 0) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== 0) {
      obj.longitude = message.longitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlaceListRequest_Place>, I>>(base?: I): CreatePlaceListRequest_Place {
    return CreatePlaceListRequest_Place.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceListRequest_Place>, I>>(object: I): CreatePlaceListRequest_Place {
    const message = createBaseCreatePlaceListRequest_Place();
    message.name = object.name ?? "";
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

function createBaseCreatePlaceListResponse(): CreatePlaceListResponse {
  return { results: [] };
}

export const CreatePlaceListResponse = {
  encode(message: CreatePlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Place.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaceListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlaceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): CreatePlaceListResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Place.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreatePlaceListResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlaceListResponse>, I>>(base?: I): CreatePlaceListResponse {
    return CreatePlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceListResponse>, I>>(object: I): CreatePlaceListResponse {
    const message = createBaseCreatePlaceListResponse();
    message.results = object.results?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

export interface PlaceCreateService {
  CreatePlaceList(request: CreatePlaceListRequest): Promise<CreatePlaceListResponse>;
}

export const PlaceCreateServiceServiceName = "place.service.create.PlaceCreateService";
export class PlaceCreateServiceClientImpl implements PlaceCreateService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlaceCreateServiceServiceName;
    this.rpc = rpc;
    this.CreatePlaceList = this.CreatePlaceList.bind(this);
  }
  CreatePlaceList(request: CreatePlaceListRequest): Promise<CreatePlaceListResponse> {
    const data = CreatePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePlaceList", data);
    return promise.then((data) => CreatePlaceListResponse.decode(_m0.Reader.create(data)));
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
