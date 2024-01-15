/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Place } from "./place";

export const protobufPackage = "place";

export enum PlaceServiceEventType {
  PLACE_CREATED = "PLACE_CREATED",
  PLACE_READ = "PLACE_READ",
  PLACE_READ_LIST = "PLACE_READ_LIST",
  PLACE_UPDATED = "PLACE_UPDATED",
  PLACE_DELETED = "PLACE_DELETED",
  QUERY_PLACE_BY_SQUARE = "QUERY_PLACE_BY_SQUARE",
  QUERY_PLACE_BY_RADIUS = "QUERY_PLACE_BY_RADIUS",
}

export function placeServiceEventTypeFromJSON(object: any): PlaceServiceEventType {
  switch (object) {
    case 0:
    case "PLACE_CREATED":
      return PlaceServiceEventType.PLACE_CREATED;
    case 1:
    case "PLACE_READ":
      return PlaceServiceEventType.PLACE_READ;
    case 2:
    case "PLACE_READ_LIST":
      return PlaceServiceEventType.PLACE_READ_LIST;
    case 3:
    case "PLACE_UPDATED":
      return PlaceServiceEventType.PLACE_UPDATED;
    case 4:
    case "PLACE_DELETED":
      return PlaceServiceEventType.PLACE_DELETED;
    case 5:
    case "QUERY_PLACE_BY_SQUARE":
      return PlaceServiceEventType.QUERY_PLACE_BY_SQUARE;
    case 6:
    case "QUERY_PLACE_BY_RADIUS":
      return PlaceServiceEventType.QUERY_PLACE_BY_RADIUS;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceEventType");
  }
}

export function placeServiceEventTypeToJSON(object: PlaceServiceEventType): string {
  switch (object) {
    case PlaceServiceEventType.PLACE_CREATED:
      return "PLACE_CREATED";
    case PlaceServiceEventType.PLACE_READ:
      return "PLACE_READ";
    case PlaceServiceEventType.PLACE_READ_LIST:
      return "PLACE_READ_LIST";
    case PlaceServiceEventType.PLACE_UPDATED:
      return "PLACE_UPDATED";
    case PlaceServiceEventType.PLACE_DELETED:
      return "PLACE_DELETED";
    case PlaceServiceEventType.QUERY_PLACE_BY_SQUARE:
      return "QUERY_PLACE_BY_SQUARE";
    case PlaceServiceEventType.QUERY_PLACE_BY_RADIUS:
      return "QUERY_PLACE_BY_RADIUS";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceEventType");
  }
}

export function placeServiceEventTypeToNumber(object: PlaceServiceEventType): number {
  switch (object) {
    case PlaceServiceEventType.PLACE_CREATED:
      return 0;
    case PlaceServiceEventType.PLACE_READ:
      return 1;
    case PlaceServiceEventType.PLACE_READ_LIST:
      return 2;
    case PlaceServiceEventType.PLACE_UPDATED:
      return 3;
    case PlaceServiceEventType.PLACE_DELETED:
      return 4;
    case PlaceServiceEventType.QUERY_PLACE_BY_SQUARE:
      return 5;
    case PlaceServiceEventType.QUERY_PLACE_BY_RADIUS:
      return 6;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceEventType");
  }
}

export interface QueryPlaceListBySquareRequest {
  topRightLatitude: number;
  topRightLongitude: number;
  bottomLeftLatitude: number;
  bottomLeftLongitude: number;
  userLatitude?: number | undefined;
  userLongitude?: number | undefined;
}

export interface QueryPlaceListBySquareResponse {
  results: Place[];
}

export interface QueryPlaceListByRadiusRequest {
  centerLatitude: number;
  centerLongitude: number;
  meterRadius: number;
  userLatitude?: number | undefined;
  userLongitude?: number | undefined;
}

export interface QueryPlaceListByRadiusResponse {
  results: Place[];
}

export interface CreatePlaceRequest {
  placeId?:
    | string
    | undefined;
  /** 장소(Place)의 원래 이름 */
  name: string;
  /** 장소(Place)의 위도 */
  latitude: number;
  /** 장소(Place)의 경도 */
  longitude: number;
}

export interface CreatePlaceResponse {
  place: Place | undefined;
}

export interface ReadPlaceRequest {
  /** 장소(Place) 고유 Id */
  placeId: string;
}

export interface ReadPlaceResponse {
  place: Place | undefined;
}

export interface ReadPlaceListRequest {
  places: ReadPlaceRequest[];
}

export interface ReadPlaceListResponse {
  places: Place[];
}

export interface CreatePlaceListRequest {
  places: CreatePlaceRequest[];
}

export interface CreatePlaceListResponse {
  places: Place[];
}

export interface UpdatePlaceRequest {
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

export interface UpdatePlaceResponse {
  place: Place | undefined;
}

export interface UpdatePlaceListRequest {
  places: UpdatePlaceRequest[];
}

export interface UpdatePlaceListResponse {
  places: Place[];
}

export interface DeletePlaceRequest {
  /** 장소(Place) 고유 Id */
  placeId: string;
}

export interface DeletePlaceResponse {
  place: Place | undefined;
}

export interface DeletePlaceListRequest {
  places: DeletePlaceRequest[];
}

export interface DeletePlaceListResponse {
  places: Place[];
}

function createBaseQueryPlaceListBySquareRequest(): QueryPlaceListBySquareRequest {
  return {
    topRightLatitude: 0,
    topRightLongitude: 0,
    bottomLeftLatitude: 0,
    bottomLeftLongitude: 0,
    userLatitude: undefined,
    userLongitude: undefined,
  };
}

export const QueryPlaceListBySquareRequest = {
  encode(message: QueryPlaceListBySquareRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topRightLatitude !== 0) {
      writer.uint32(9).double(message.topRightLatitude);
    }
    if (message.topRightLongitude !== 0) {
      writer.uint32(17).double(message.topRightLongitude);
    }
    if (message.bottomLeftLatitude !== 0) {
      writer.uint32(25).double(message.bottomLeftLatitude);
    }
    if (message.bottomLeftLongitude !== 0) {
      writer.uint32(33).double(message.bottomLeftLongitude);
    }
    if (message.userLatitude !== undefined) {
      writer.uint32(41).double(message.userLatitude);
    }
    if (message.userLongitude !== undefined) {
      writer.uint32(49).double(message.userLongitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlaceListBySquareRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlaceListBySquareRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.topRightLatitude = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.topRightLongitude = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.bottomLeftLatitude = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.bottomLeftLongitude = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.userLatitude = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.userLongitude = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPlaceListBySquareRequest {
    return {
      topRightLatitude: isSet(object.topRightLatitude) ? globalThis.Number(object.topRightLatitude) : 0,
      topRightLongitude: isSet(object.topRightLongitude) ? globalThis.Number(object.topRightLongitude) : 0,
      bottomLeftLatitude: isSet(object.bottomLeftLatitude) ? globalThis.Number(object.bottomLeftLatitude) : 0,
      bottomLeftLongitude: isSet(object.bottomLeftLongitude) ? globalThis.Number(object.bottomLeftLongitude) : 0,
      userLatitude: isSet(object.userLatitude) ? globalThis.Number(object.userLatitude) : undefined,
      userLongitude: isSet(object.userLongitude) ? globalThis.Number(object.userLongitude) : undefined,
    };
  },

  toJSON(message: QueryPlaceListBySquareRequest): unknown {
    const obj: any = {};
    if (message.topRightLatitude !== 0) {
      obj.topRightLatitude = message.topRightLatitude;
    }
    if (message.topRightLongitude !== 0) {
      obj.topRightLongitude = message.topRightLongitude;
    }
    if (message.bottomLeftLatitude !== 0) {
      obj.bottomLeftLatitude = message.bottomLeftLatitude;
    }
    if (message.bottomLeftLongitude !== 0) {
      obj.bottomLeftLongitude = message.bottomLeftLongitude;
    }
    if (message.userLatitude !== undefined) {
      obj.userLatitude = message.userLatitude;
    }
    if (message.userLongitude !== undefined) {
      obj.userLongitude = message.userLongitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlaceListBySquareRequest>, I>>(base?: I): QueryPlaceListBySquareRequest {
    return QueryPlaceListBySquareRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlaceListBySquareRequest>, I>>(
    object: I,
  ): QueryPlaceListBySquareRequest {
    const message = createBaseQueryPlaceListBySquareRequest();
    message.topRightLatitude = object.topRightLatitude ?? 0;
    message.topRightLongitude = object.topRightLongitude ?? 0;
    message.bottomLeftLatitude = object.bottomLeftLatitude ?? 0;
    message.bottomLeftLongitude = object.bottomLeftLongitude ?? 0;
    message.userLatitude = object.userLatitude ?? undefined;
    message.userLongitude = object.userLongitude ?? undefined;
    return message;
  },
};

function createBaseQueryPlaceListBySquareResponse(): QueryPlaceListBySquareResponse {
  return { results: [] };
}

export const QueryPlaceListBySquareResponse = {
  encode(message: QueryPlaceListBySquareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlaceListBySquareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlaceListBySquareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryPlaceListBySquareResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Place.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryPlaceListBySquareResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlaceListBySquareResponse>, I>>(base?: I): QueryPlaceListBySquareResponse {
    return QueryPlaceListBySquareResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlaceListBySquareResponse>, I>>(
    object: I,
  ): QueryPlaceListBySquareResponse {
    const message = createBaseQueryPlaceListBySquareResponse();
    message.results = object.results?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPlaceListByRadiusRequest(): QueryPlaceListByRadiusRequest {
  return { centerLatitude: 0, centerLongitude: 0, meterRadius: 0, userLatitude: undefined, userLongitude: undefined };
}

export const QueryPlaceListByRadiusRequest = {
  encode(message: QueryPlaceListByRadiusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.centerLatitude !== 0) {
      writer.uint32(9).double(message.centerLatitude);
    }
    if (message.centerLongitude !== 0) {
      writer.uint32(17).double(message.centerLongitude);
    }
    if (message.meterRadius !== 0) {
      writer.uint32(24).uint32(message.meterRadius);
    }
    if (message.userLatitude !== undefined) {
      writer.uint32(33).double(message.userLatitude);
    }
    if (message.userLongitude !== undefined) {
      writer.uint32(41).double(message.userLongitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlaceListByRadiusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlaceListByRadiusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.centerLatitude = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.centerLongitude = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.meterRadius = reader.uint32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.userLatitude = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.userLongitude = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPlaceListByRadiusRequest {
    return {
      centerLatitude: isSet(object.centerLatitude) ? globalThis.Number(object.centerLatitude) : 0,
      centerLongitude: isSet(object.centerLongitude) ? globalThis.Number(object.centerLongitude) : 0,
      meterRadius: isSet(object.meterRadius) ? globalThis.Number(object.meterRadius) : 0,
      userLatitude: isSet(object.userLatitude) ? globalThis.Number(object.userLatitude) : undefined,
      userLongitude: isSet(object.userLongitude) ? globalThis.Number(object.userLongitude) : undefined,
    };
  },

  toJSON(message: QueryPlaceListByRadiusRequest): unknown {
    const obj: any = {};
    if (message.centerLatitude !== 0) {
      obj.centerLatitude = message.centerLatitude;
    }
    if (message.centerLongitude !== 0) {
      obj.centerLongitude = message.centerLongitude;
    }
    if (message.meterRadius !== 0) {
      obj.meterRadius = Math.round(message.meterRadius);
    }
    if (message.userLatitude !== undefined) {
      obj.userLatitude = message.userLatitude;
    }
    if (message.userLongitude !== undefined) {
      obj.userLongitude = message.userLongitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlaceListByRadiusRequest>, I>>(base?: I): QueryPlaceListByRadiusRequest {
    return QueryPlaceListByRadiusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlaceListByRadiusRequest>, I>>(
    object: I,
  ): QueryPlaceListByRadiusRequest {
    const message = createBaseQueryPlaceListByRadiusRequest();
    message.centerLatitude = object.centerLatitude ?? 0;
    message.centerLongitude = object.centerLongitude ?? 0;
    message.meterRadius = object.meterRadius ?? 0;
    message.userLatitude = object.userLatitude ?? undefined;
    message.userLongitude = object.userLongitude ?? undefined;
    return message;
  },
};

function createBaseQueryPlaceListByRadiusResponse(): QueryPlaceListByRadiusResponse {
  return { results: [] };
}

export const QueryPlaceListByRadiusResponse = {
  encode(message: QueryPlaceListByRadiusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlaceListByRadiusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlaceListByRadiusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryPlaceListByRadiusResponse {
    return {
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Place.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryPlaceListByRadiusResponse): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPlaceListByRadiusResponse>, I>>(base?: I): QueryPlaceListByRadiusResponse {
    return QueryPlaceListByRadiusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlaceListByRadiusResponse>, I>>(
    object: I,
  ): QueryPlaceListByRadiusResponse {
    const message = createBaseQueryPlaceListByRadiusResponse();
    message.results = object.results?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePlaceRequest(): CreatePlaceRequest {
  return { placeId: undefined, name: "", latitude: 0, longitude: 0 };
}

export const CreatePlaceRequest = {
  encode(message: CreatePlaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== undefined) {
      writer.uint32(10).string(message.placeId);
    }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlaceRequest();
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

  fromJSON(object: any): CreatePlaceRequest {
    return {
      placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : 0,
    };
  },

  toJSON(message: CreatePlaceRequest): unknown {
    const obj: any = {};
    if (message.placeId !== undefined) {
      obj.placeId = message.placeId;
    }
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

  create<I extends Exact<DeepPartial<CreatePlaceRequest>, I>>(base?: I): CreatePlaceRequest {
    return CreatePlaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceRequest>, I>>(object: I): CreatePlaceRequest {
    const message = createBaseCreatePlaceRequest();
    message.placeId = object.placeId ?? undefined;
    message.name = object.name ?? "";
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

function createBaseCreatePlaceResponse(): CreatePlaceResponse {
  return { place: undefined };
}

export const CreatePlaceResponse = {
  encode(message: CreatePlaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== undefined) {
      Place.encode(message.place, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePlaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePlaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.place = Place.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePlaceResponse {
    return { place: isSet(object.place) ? Place.fromJSON(object.place) : undefined };
  },

  toJSON(message: CreatePlaceResponse): unknown {
    const obj: any = {};
    if (message.place !== undefined) {
      obj.place = Place.toJSON(message.place);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlaceResponse>, I>>(base?: I): CreatePlaceResponse {
    return CreatePlaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceResponse>, I>>(object: I): CreatePlaceResponse {
    const message = createBaseCreatePlaceResponse();
    message.place = (object.place !== undefined && object.place !== null) ? Place.fromPartial(object.place) : undefined;
    return message;
  },
};

function createBaseReadPlaceRequest(): ReadPlaceRequest {
  return { placeId: "" };
}

export const ReadPlaceRequest = {
  encode(message: ReadPlaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadPlaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadPlaceRequest();
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

  fromJSON(object: any): ReadPlaceRequest {
    return { placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "" };
  },

  toJSON(message: ReadPlaceRequest): unknown {
    const obj: any = {};
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceRequest>, I>>(base?: I): ReadPlaceRequest {
    return ReadPlaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceRequest>, I>>(object: I): ReadPlaceRequest {
    const message = createBaseReadPlaceRequest();
    message.placeId = object.placeId ?? "";
    return message;
  },
};

function createBaseReadPlaceResponse(): ReadPlaceResponse {
  return { place: undefined };
}

export const ReadPlaceResponse = {
  encode(message: ReadPlaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== undefined) {
      Place.encode(message.place, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadPlaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadPlaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.place = Place.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadPlaceResponse {
    return { place: isSet(object.place) ? Place.fromJSON(object.place) : undefined };
  },

  toJSON(message: ReadPlaceResponse): unknown {
    const obj: any = {};
    if (message.place !== undefined) {
      obj.place = Place.toJSON(message.place);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceResponse>, I>>(base?: I): ReadPlaceResponse {
    return ReadPlaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceResponse>, I>>(object: I): ReadPlaceResponse {
    const message = createBaseReadPlaceResponse();
    message.place = (object.place !== undefined && object.place !== null) ? Place.fromPartial(object.place) : undefined;
    return message;
  },
};

function createBaseReadPlaceListRequest(): ReadPlaceListRequest {
  return { places: [] };
}

export const ReadPlaceListRequest = {
  encode(message: ReadPlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      ReadPlaceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadPlaceListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadPlaceListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.places.push(ReadPlaceRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadPlaceListRequest {
    return {
      places: globalThis.Array.isArray(object?.places)
        ? object.places.map((e: any) => ReadPlaceRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ReadPlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => ReadPlaceRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceListRequest>, I>>(base?: I): ReadPlaceListRequest {
    return ReadPlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceListRequest>, I>>(object: I): ReadPlaceListRequest {
    const message = createBaseReadPlaceListRequest();
    message.places = object.places?.map((e) => ReadPlaceRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReadPlaceListResponse(): ReadPlaceListResponse {
  return { places: [] };
}

export const ReadPlaceListResponse = {
  encode(message: ReadPlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      Place.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadPlaceListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadPlaceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.places.push(Place.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadPlaceListResponse {
    return { places: globalThis.Array.isArray(object?.places) ? object.places.map((e: any) => Place.fromJSON(e)) : [] };
  },

  toJSON(message: ReadPlaceListResponse): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceListResponse>, I>>(base?: I): ReadPlaceListResponse {
    return ReadPlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceListResponse>, I>>(object: I): ReadPlaceListResponse {
    const message = createBaseReadPlaceListResponse();
    message.places = object.places?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePlaceListRequest(): CreatePlaceListRequest {
  return { places: [] };
}

export const CreatePlaceListRequest = {
  encode(message: CreatePlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      CreatePlaceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.places.push(CreatePlaceRequest.decode(reader, reader.uint32()));
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
        ? object.places.map((e: any) => CreatePlaceRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreatePlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => CreatePlaceRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlaceListRequest>, I>>(base?: I): CreatePlaceListRequest {
    return CreatePlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceListRequest>, I>>(object: I): CreatePlaceListRequest {
    const message = createBaseCreatePlaceListRequest();
    message.places = object.places?.map((e) => CreatePlaceRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePlaceListResponse(): CreatePlaceListResponse {
  return { places: [] };
}

export const CreatePlaceListResponse = {
  encode(message: CreatePlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      Place.encode(v!, writer.uint32(18).fork()).ldelim();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.places.push(Place.decode(reader, reader.uint32()));
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
    return { places: globalThis.Array.isArray(object?.places) ? object.places.map((e: any) => Place.fromJSON(e)) : [] };
  },

  toJSON(message: CreatePlaceListResponse): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePlaceListResponse>, I>>(base?: I): CreatePlaceListResponse {
    return CreatePlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePlaceListResponse>, I>>(object: I): CreatePlaceListResponse {
    const message = createBaseCreatePlaceListResponse();
    message.places = object.places?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdatePlaceRequest(): UpdatePlaceRequest {
  return { placeId: "", name: undefined, latitude: undefined, longitude: undefined };
}

export const UpdatePlaceRequest = {
  encode(message: UpdatePlaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlaceRequest();
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

  fromJSON(object: any): UpdatePlaceRequest {
    return {
      placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : undefined,
    };
  },

  toJSON(message: UpdatePlaceRequest): unknown {
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

  create<I extends Exact<DeepPartial<UpdatePlaceRequest>, I>>(base?: I): UpdatePlaceRequest {
    return UpdatePlaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceRequest>, I>>(object: I): UpdatePlaceRequest {
    const message = createBaseUpdatePlaceRequest();
    message.placeId = object.placeId ?? "";
    message.name = object.name ?? undefined;
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    return message;
  },
};

function createBaseUpdatePlaceResponse(): UpdatePlaceResponse {
  return { place: undefined };
}

export const UpdatePlaceResponse = {
  encode(message: UpdatePlaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== undefined) {
      Place.encode(message.place, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePlaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePlaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.place = Place.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePlaceResponse {
    return { place: isSet(object.place) ? Place.fromJSON(object.place) : undefined };
  },

  toJSON(message: UpdatePlaceResponse): unknown {
    const obj: any = {};
    if (message.place !== undefined) {
      obj.place = Place.toJSON(message.place);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlaceResponse>, I>>(base?: I): UpdatePlaceResponse {
    return UpdatePlaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceResponse>, I>>(object: I): UpdatePlaceResponse {
    const message = createBaseUpdatePlaceResponse();
    message.place = (object.place !== undefined && object.place !== null) ? Place.fromPartial(object.place) : undefined;
    return message;
  },
};

function createBaseUpdatePlaceListRequest(): UpdatePlaceListRequest {
  return { places: [] };
}

export const UpdatePlaceListRequest = {
  encode(message: UpdatePlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      UpdatePlaceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.places.push(UpdatePlaceRequest.decode(reader, reader.uint32()));
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
        ? object.places.map((e: any) => UpdatePlaceRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdatePlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => UpdatePlaceRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlaceListRequest>, I>>(base?: I): UpdatePlaceListRequest {
    return UpdatePlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceListRequest>, I>>(object: I): UpdatePlaceListRequest {
    const message = createBaseUpdatePlaceListRequest();
    message.places = object.places?.map((e) => UpdatePlaceRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdatePlaceListResponse(): UpdatePlaceListResponse {
  return { places: [] };
}

export const UpdatePlaceListResponse = {
  encode(message: UpdatePlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      Place.encode(v!, writer.uint32(10).fork()).ldelim();
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
        case 1:
          if (tag !== 10) {
            break;
          }

          message.places.push(Place.decode(reader, reader.uint32()));
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
    return { places: globalThis.Array.isArray(object?.places) ? object.places.map((e: any) => Place.fromJSON(e)) : [] };
  },

  toJSON(message: UpdatePlaceListResponse): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePlaceListResponse>, I>>(base?: I): UpdatePlaceListResponse {
    return UpdatePlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdatePlaceListResponse>, I>>(object: I): UpdatePlaceListResponse {
    const message = createBaseUpdatePlaceListResponse();
    message.places = object.places?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeletePlaceRequest(): DeletePlaceRequest {
  return { placeId: "" };
}

export const DeletePlaceRequest = {
  encode(message: DeletePlaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlaceRequest();
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

  fromJSON(object: any): DeletePlaceRequest {
    return { placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "" };
  },

  toJSON(message: DeletePlaceRequest): unknown {
    const obj: any = {};
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceRequest>, I>>(base?: I): DeletePlaceRequest {
    return DeletePlaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceRequest>, I>>(object: I): DeletePlaceRequest {
    const message = createBaseDeletePlaceRequest();
    message.placeId = object.placeId ?? "";
    return message;
  },
};

function createBaseDeletePlaceResponse(): DeletePlaceResponse {
  return { place: undefined };
}

export const DeletePlaceResponse = {
  encode(message: DeletePlaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.place !== undefined) {
      Place.encode(message.place, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePlaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePlaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.place = Place.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePlaceResponse {
    return { place: isSet(object.place) ? Place.fromJSON(object.place) : undefined };
  },

  toJSON(message: DeletePlaceResponse): unknown {
    const obj: any = {};
    if (message.place !== undefined) {
      obj.place = Place.toJSON(message.place);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceResponse>, I>>(base?: I): DeletePlaceResponse {
    return DeletePlaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceResponse>, I>>(object: I): DeletePlaceResponse {
    const message = createBaseDeletePlaceResponse();
    message.place = (object.place !== undefined && object.place !== null) ? Place.fromPartial(object.place) : undefined;
    return message;
  },
};

function createBaseDeletePlaceListRequest(): DeletePlaceListRequest {
  return { places: [] };
}

export const DeletePlaceListRequest = {
  encode(message: DeletePlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      DeletePlaceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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

          message.places.push(DeletePlaceRequest.decode(reader, reader.uint32()));
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
        ? object.places.map((e: any) => DeletePlaceRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DeletePlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => DeletePlaceRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceListRequest>, I>>(base?: I): DeletePlaceListRequest {
    return DeletePlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceListRequest>, I>>(object: I): DeletePlaceListRequest {
    const message = createBaseDeletePlaceListRequest();
    message.places = object.places?.map((e) => DeletePlaceRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeletePlaceListResponse(): DeletePlaceListResponse {
  return { places: [] };
}

export const DeletePlaceListResponse = {
  encode(message: DeletePlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      Place.encode(v!, writer.uint32(10).fork()).ldelim();
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
        case 1:
          if (tag !== 10) {
            break;
          }

          message.places.push(Place.decode(reader, reader.uint32()));
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
    return { places: globalThis.Array.isArray(object?.places) ? object.places.map((e: any) => Place.fromJSON(e)) : [] };
  },

  toJSON(message: DeletePlaceListResponse): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePlaceListResponse>, I>>(base?: I): DeletePlaceListResponse {
    return DeletePlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeletePlaceListResponse>, I>>(object: I): DeletePlaceListResponse {
    const message = createBaseDeletePlaceListResponse();
    message.places = object.places?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

export interface PlaceService {
  QueryPlaceListBySquare(request: QueryPlaceListBySquareRequest): Promise<QueryPlaceListBySquareResponse>;
  QueryPlaceListByRadius(request: QueryPlaceListByRadiusRequest): Promise<QueryPlaceListByRadiusResponse>;
  CreatePlace(request: CreatePlaceRequest): Promise<CreatePlaceResponse>;
  CreatePlaceList(request: CreatePlaceListRequest): Promise<CreatePlaceListResponse>;
  ReadPlace(request: ReadPlaceRequest): Promise<ReadPlaceResponse>;
  ReadPlaceList(request: ReadPlaceListRequest): Promise<ReadPlaceListResponse>;
  UpdatePlace(request: UpdatePlaceRequest): Promise<UpdatePlaceResponse>;
  UpdatePlaceList(request: UpdatePlaceListRequest): Promise<UpdatePlaceListResponse>;
  DeletePlace(request: DeletePlaceRequest): Promise<DeletePlaceResponse>;
  DeletePlaceList(request: DeletePlaceListRequest): Promise<DeletePlaceListResponse>;
}

export const PlaceServiceServiceName = "place.PlaceService";
export class PlaceServiceClientImpl implements PlaceService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlaceServiceServiceName;
    this.rpc = rpc;
    this.QueryPlaceListBySquare = this.QueryPlaceListBySquare.bind(this);
    this.QueryPlaceListByRadius = this.QueryPlaceListByRadius.bind(this);
    this.CreatePlace = this.CreatePlace.bind(this);
    this.CreatePlaceList = this.CreatePlaceList.bind(this);
    this.ReadPlace = this.ReadPlace.bind(this);
    this.ReadPlaceList = this.ReadPlaceList.bind(this);
    this.UpdatePlace = this.UpdatePlace.bind(this);
    this.UpdatePlaceList = this.UpdatePlaceList.bind(this);
    this.DeletePlace = this.DeletePlace.bind(this);
    this.DeletePlaceList = this.DeletePlaceList.bind(this);
  }
  QueryPlaceListBySquare(request: QueryPlaceListBySquareRequest): Promise<QueryPlaceListBySquareResponse> {
    const data = QueryPlaceListBySquareRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPlaceListBySquare", data);
    return promise.then((data) => QueryPlaceListBySquareResponse.decode(_m0.Reader.create(data)));
  }

  QueryPlaceListByRadius(request: QueryPlaceListByRadiusRequest): Promise<QueryPlaceListByRadiusResponse> {
    const data = QueryPlaceListByRadiusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryPlaceListByRadius", data);
    return promise.then((data) => QueryPlaceListByRadiusResponse.decode(_m0.Reader.create(data)));
  }

  CreatePlace(request: CreatePlaceRequest): Promise<CreatePlaceResponse> {
    const data = CreatePlaceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePlace", data);
    return promise.then((data) => CreatePlaceResponse.decode(_m0.Reader.create(data)));
  }

  CreatePlaceList(request: CreatePlaceListRequest): Promise<CreatePlaceListResponse> {
    const data = CreatePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePlaceList", data);
    return promise.then((data) => CreatePlaceListResponse.decode(_m0.Reader.create(data)));
  }

  ReadPlace(request: ReadPlaceRequest): Promise<ReadPlaceResponse> {
    const data = ReadPlaceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReadPlace", data);
    return promise.then((data) => ReadPlaceResponse.decode(_m0.Reader.create(data)));
  }

  ReadPlaceList(request: ReadPlaceListRequest): Promise<ReadPlaceListResponse> {
    const data = ReadPlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReadPlaceList", data);
    return promise.then((data) => ReadPlaceListResponse.decode(_m0.Reader.create(data)));
  }

  UpdatePlace(request: UpdatePlaceRequest): Promise<UpdatePlaceResponse> {
    const data = UpdatePlaceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePlace", data);
    return promise.then((data) => UpdatePlaceResponse.decode(_m0.Reader.create(data)));
  }

  UpdatePlaceList(request: UpdatePlaceListRequest): Promise<UpdatePlaceListResponse> {
    const data = UpdatePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePlaceList", data);
    return promise.then((data) => UpdatePlaceListResponse.decode(_m0.Reader.create(data)));
  }

  DeletePlace(request: DeletePlaceRequest): Promise<DeletePlaceResponse> {
    const data = DeletePlaceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeletePlace", data);
    return promise.then((data) => DeletePlaceResponse.decode(_m0.Reader.create(data)));
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
