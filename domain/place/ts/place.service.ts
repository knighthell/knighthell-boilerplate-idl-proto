/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Period } from "./period";
import { Place, Wgs84Coordinates } from "./place";
import { ResponseInfo } from "./response-info";

export const protobufPackage = "place";

export enum PlaceServiceRequestEventType {
  CREATE_PLACE = "CREATE_PLACE",
  READ_PLACE = "READ_PLACE",
  UPDATE_PLACE = "UPDATE_PLACE",
  DELETE_PLACE = "DELETE_PLACE",
}

export function placeServiceRequestEventTypeFromJSON(object: any): PlaceServiceRequestEventType {
  switch (object) {
    case 0:
    case "CREATE_PLACE":
      return PlaceServiceRequestEventType.CREATE_PLACE;
    case 1:
    case "READ_PLACE":
      return PlaceServiceRequestEventType.READ_PLACE;
    case 2:
    case "UPDATE_PLACE":
      return PlaceServiceRequestEventType.UPDATE_PLACE;
    case 3:
    case "DELETE_PLACE":
      return PlaceServiceRequestEventType.DELETE_PLACE;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceRequestEventType");
  }
}

export function placeServiceRequestEventTypeToJSON(object: PlaceServiceRequestEventType): string {
  switch (object) {
    case PlaceServiceRequestEventType.CREATE_PLACE:
      return "CREATE_PLACE";
    case PlaceServiceRequestEventType.READ_PLACE:
      return "READ_PLACE";
    case PlaceServiceRequestEventType.UPDATE_PLACE:
      return "UPDATE_PLACE";
    case PlaceServiceRequestEventType.DELETE_PLACE:
      return "DELETE_PLACE";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceRequestEventType");
  }
}

export function placeServiceRequestEventTypeToNumber(object: PlaceServiceRequestEventType): number {
  switch (object) {
    case PlaceServiceRequestEventType.CREATE_PLACE:
      return 0;
    case PlaceServiceRequestEventType.READ_PLACE:
      return 1;
    case PlaceServiceRequestEventType.UPDATE_PLACE:
      return 2;
    case PlaceServiceRequestEventType.DELETE_PLACE:
      return 3;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceRequestEventType");
  }
}

export enum PlaceServiceResponseEventType {
  PLACE_CREATED = "PLACE_CREATED",
  PLACE_READ = "PLACE_READ",
  PLACE_UPDATED = "PLACE_UPDATED",
  PLACE_DELETED = "PLACE_DELETED",
}

export function placeServiceResponseEventTypeFromJSON(object: any): PlaceServiceResponseEventType {
  switch (object) {
    case 0:
    case "PLACE_CREATED":
      return PlaceServiceResponseEventType.PLACE_CREATED;
    case 1:
    case "PLACE_READ":
      return PlaceServiceResponseEventType.PLACE_READ;
    case 2:
    case "PLACE_UPDATED":
      return PlaceServiceResponseEventType.PLACE_UPDATED;
    case 3:
    case "PLACE_DELETED":
      return PlaceServiceResponseEventType.PLACE_DELETED;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceResponseEventType");
  }
}

export function placeServiceResponseEventTypeToJSON(object: PlaceServiceResponseEventType): string {
  switch (object) {
    case PlaceServiceResponseEventType.PLACE_CREATED:
      return "PLACE_CREATED";
    case PlaceServiceResponseEventType.PLACE_READ:
      return "PLACE_READ";
    case PlaceServiceResponseEventType.PLACE_UPDATED:
      return "PLACE_UPDATED";
    case PlaceServiceResponseEventType.PLACE_DELETED:
      return "PLACE_DELETED";
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceResponseEventType");
  }
}

export function placeServiceResponseEventTypeToNumber(object: PlaceServiceResponseEventType): number {
  switch (object) {
    case PlaceServiceResponseEventType.PLACE_CREATED:
      return 0;
    case PlaceServiceResponseEventType.PLACE_READ:
      return 1;
    case PlaceServiceResponseEventType.PLACE_UPDATED:
      return 2;
    case PlaceServiceResponseEventType.PLACE_DELETED:
      return 3;
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum PlaceServiceResponseEventType");
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

export interface ReadPlaceListRequest {
  places: ReadPlaceListRequest_Place[];
  /** 검색 InputText에 넣은 그대로의 값 */
  keywords?: string | undefined;
  createdAtPeriod?: Period | undefined;
  updatedAtPeriod?: Period | undefined;
  deletedAtPeriod?: Period | undefined;
  isIncludeDeletedPlace?: boolean | undefined;
  boundSquare?: BoundSquare | undefined;
  boundCircle?: BoundCircle | undefined;
}

export interface ReadPlaceListRequest_Place {
  placeId: string;
}

export interface ReadPlaceListResponse {
  responseInfo: ResponseInfo | undefined;
  results: Place[];
}

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

export interface DeletePlaceListRequest {
  places: DeletePlaceListRequest_Place[];
}

export interface DeletePlaceListRequest_Place {
  placeId: string;
}

export interface DeletePlaceListResponse {
  results: Place[];
}

export interface BoundSquare {
  topRight: Wgs84Coordinates | undefined;
  bottomLeft: Wgs84Coordinates | undefined;
}

export interface BoundCircle {
  center: Wgs84Coordinates | undefined;
  radiusMeter: number;
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

function createBaseReadPlaceListRequest(): ReadPlaceListRequest {
  return {
    places: [],
    keywords: undefined,
    createdAtPeriod: undefined,
    updatedAtPeriod: undefined,
    deletedAtPeriod: undefined,
    isIncludeDeletedPlace: undefined,
    boundSquare: undefined,
    boundCircle: undefined,
  };
}

export const ReadPlaceListRequest = {
  encode(message: ReadPlaceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.places) {
      ReadPlaceListRequest_Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.keywords !== undefined) {
      writer.uint32(18).string(message.keywords);
    }
    if (message.createdAtPeriod !== undefined) {
      Period.encode(message.createdAtPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAtPeriod !== undefined) {
      Period.encode(message.updatedAtPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.deletedAtPeriod !== undefined) {
      Period.encode(message.deletedAtPeriod, writer.uint32(42).fork()).ldelim();
    }
    if (message.isIncludeDeletedPlace !== undefined) {
      writer.uint32(48).bool(message.isIncludeDeletedPlace);
    }
    if (message.boundSquare !== undefined) {
      BoundSquare.encode(message.boundSquare, writer.uint32(58).fork()).ldelim();
    }
    if (message.boundCircle !== undefined) {
      BoundCircle.encode(message.boundCircle, writer.uint32(66).fork()).ldelim();
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

          message.places.push(ReadPlaceListRequest_Place.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keywords = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAtPeriod = Period.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedAtPeriod = Period.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deletedAtPeriod = Period.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isIncludeDeletedPlace = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.boundSquare = BoundSquare.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.boundCircle = BoundCircle.decode(reader, reader.uint32());
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
        ? object.places.map((e: any) => ReadPlaceListRequest_Place.fromJSON(e))
        : [],
      keywords: isSet(object.keywords) ? globalThis.String(object.keywords) : undefined,
      createdAtPeriod: isSet(object.createdAtPeriod) ? Period.fromJSON(object.createdAtPeriod) : undefined,
      updatedAtPeriod: isSet(object.updatedAtPeriod) ? Period.fromJSON(object.updatedAtPeriod) : undefined,
      deletedAtPeriod: isSet(object.deletedAtPeriod) ? Period.fromJSON(object.deletedAtPeriod) : undefined,
      isIncludeDeletedPlace: isSet(object.isIncludeDeletedPlace)
        ? globalThis.Boolean(object.isIncludeDeletedPlace)
        : undefined,
      boundSquare: isSet(object.boundSquare) ? BoundSquare.fromJSON(object.boundSquare) : undefined,
      boundCircle: isSet(object.boundCircle) ? BoundCircle.fromJSON(object.boundCircle) : undefined,
    };
  },

  toJSON(message: ReadPlaceListRequest): unknown {
    const obj: any = {};
    if (message.places?.length) {
      obj.places = message.places.map((e) => ReadPlaceListRequest_Place.toJSON(e));
    }
    if (message.keywords !== undefined) {
      obj.keywords = message.keywords;
    }
    if (message.createdAtPeriod !== undefined) {
      obj.createdAtPeriod = Period.toJSON(message.createdAtPeriod);
    }
    if (message.updatedAtPeriod !== undefined) {
      obj.updatedAtPeriod = Period.toJSON(message.updatedAtPeriod);
    }
    if (message.deletedAtPeriod !== undefined) {
      obj.deletedAtPeriod = Period.toJSON(message.deletedAtPeriod);
    }
    if (message.isIncludeDeletedPlace !== undefined) {
      obj.isIncludeDeletedPlace = message.isIncludeDeletedPlace;
    }
    if (message.boundSquare !== undefined) {
      obj.boundSquare = BoundSquare.toJSON(message.boundSquare);
    }
    if (message.boundCircle !== undefined) {
      obj.boundCircle = BoundCircle.toJSON(message.boundCircle);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceListRequest>, I>>(base?: I): ReadPlaceListRequest {
    return ReadPlaceListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceListRequest>, I>>(object: I): ReadPlaceListRequest {
    const message = createBaseReadPlaceListRequest();
    message.places = object.places?.map((e) => ReadPlaceListRequest_Place.fromPartial(e)) || [];
    message.keywords = object.keywords ?? undefined;
    message.createdAtPeriod = (object.createdAtPeriod !== undefined && object.createdAtPeriod !== null)
      ? Period.fromPartial(object.createdAtPeriod)
      : undefined;
    message.updatedAtPeriod = (object.updatedAtPeriod !== undefined && object.updatedAtPeriod !== null)
      ? Period.fromPartial(object.updatedAtPeriod)
      : undefined;
    message.deletedAtPeriod = (object.deletedAtPeriod !== undefined && object.deletedAtPeriod !== null)
      ? Period.fromPartial(object.deletedAtPeriod)
      : undefined;
    message.isIncludeDeletedPlace = object.isIncludeDeletedPlace ?? undefined;
    message.boundSquare = (object.boundSquare !== undefined && object.boundSquare !== null)
      ? BoundSquare.fromPartial(object.boundSquare)
      : undefined;
    message.boundCircle = (object.boundCircle !== undefined && object.boundCircle !== null)
      ? BoundCircle.fromPartial(object.boundCircle)
      : undefined;
    return message;
  },
};

function createBaseReadPlaceListRequest_Place(): ReadPlaceListRequest_Place {
  return { placeId: "" };
}

export const ReadPlaceListRequest_Place = {
  encode(message: ReadPlaceListRequest_Place, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadPlaceListRequest_Place {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadPlaceListRequest_Place();
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

  fromJSON(object: any): ReadPlaceListRequest_Place {
    return { placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "" };
  },

  toJSON(message: ReadPlaceListRequest_Place): unknown {
    const obj: any = {};
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceListRequest_Place>, I>>(base?: I): ReadPlaceListRequest_Place {
    return ReadPlaceListRequest_Place.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceListRequest_Place>, I>>(object: I): ReadPlaceListRequest_Place {
    const message = createBaseReadPlaceListRequest_Place();
    message.placeId = object.placeId ?? "";
    return message;
  },
};

function createBaseReadPlaceListResponse(): ReadPlaceListResponse {
  return { responseInfo: undefined, results: [] };
}

export const ReadPlaceListResponse = {
  encode(message: ReadPlaceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.responseInfo !== undefined) {
      ResponseInfo.encode(message.responseInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
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
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responseInfo = ResponseInfo.decode(reader, reader.uint32());
          continue;
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

  fromJSON(object: any): ReadPlaceListResponse {
    return {
      responseInfo: isSet(object.responseInfo) ? ResponseInfo.fromJSON(object.responseInfo) : undefined,
      results: globalThis.Array.isArray(object?.results) ? object.results.map((e: any) => Place.fromJSON(e)) : [],
    };
  },

  toJSON(message: ReadPlaceListResponse): unknown {
    const obj: any = {};
    if (message.responseInfo !== undefined) {
      obj.responseInfo = ResponseInfo.toJSON(message.responseInfo);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Place.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadPlaceListResponse>, I>>(base?: I): ReadPlaceListResponse {
    return ReadPlaceListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadPlaceListResponse>, I>>(object: I): ReadPlaceListResponse {
    const message = createBaseReadPlaceListResponse();
    message.responseInfo = (object.responseInfo !== undefined && object.responseInfo !== null)
      ? ResponseInfo.fromPartial(object.responseInfo)
      : undefined;
    message.results = object.results?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

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

function createBaseBoundSquare(): BoundSquare {
  return { topRight: undefined, bottomLeft: undefined };
}

export const BoundSquare = {
  encode(message: BoundSquare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topRight !== undefined) {
      Wgs84Coordinates.encode(message.topRight, writer.uint32(10).fork()).ldelim();
    }
    if (message.bottomLeft !== undefined) {
      Wgs84Coordinates.encode(message.bottomLeft, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoundSquare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoundSquare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topRight = Wgs84Coordinates.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bottomLeft = Wgs84Coordinates.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoundSquare {
    return {
      topRight: isSet(object.topRight) ? Wgs84Coordinates.fromJSON(object.topRight) : undefined,
      bottomLeft: isSet(object.bottomLeft) ? Wgs84Coordinates.fromJSON(object.bottomLeft) : undefined,
    };
  },

  toJSON(message: BoundSquare): unknown {
    const obj: any = {};
    if (message.topRight !== undefined) {
      obj.topRight = Wgs84Coordinates.toJSON(message.topRight);
    }
    if (message.bottomLeft !== undefined) {
      obj.bottomLeft = Wgs84Coordinates.toJSON(message.bottomLeft);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BoundSquare>, I>>(base?: I): BoundSquare {
    return BoundSquare.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BoundSquare>, I>>(object: I): BoundSquare {
    const message = createBaseBoundSquare();
    message.topRight = (object.topRight !== undefined && object.topRight !== null)
      ? Wgs84Coordinates.fromPartial(object.topRight)
      : undefined;
    message.bottomLeft = (object.bottomLeft !== undefined && object.bottomLeft !== null)
      ? Wgs84Coordinates.fromPartial(object.bottomLeft)
      : undefined;
    return message;
  },
};

function createBaseBoundCircle(): BoundCircle {
  return { center: undefined, radiusMeter: 0 };
}

export const BoundCircle = {
  encode(message: BoundCircle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.center !== undefined) {
      Wgs84Coordinates.encode(message.center, writer.uint32(10).fork()).ldelim();
    }
    if (message.radiusMeter !== 0) {
      writer.uint32(16).int32(message.radiusMeter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoundCircle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoundCircle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.center = Wgs84Coordinates.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.radiusMeter = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoundCircle {
    return {
      center: isSet(object.center) ? Wgs84Coordinates.fromJSON(object.center) : undefined,
      radiusMeter: isSet(object.radiusMeter) ? globalThis.Number(object.radiusMeter) : 0,
    };
  },

  toJSON(message: BoundCircle): unknown {
    const obj: any = {};
    if (message.center !== undefined) {
      obj.center = Wgs84Coordinates.toJSON(message.center);
    }
    if (message.radiusMeter !== 0) {
      obj.radiusMeter = Math.round(message.radiusMeter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BoundCircle>, I>>(base?: I): BoundCircle {
    return BoundCircle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BoundCircle>, I>>(object: I): BoundCircle {
    const message = createBaseBoundCircle();
    message.center = (object.center !== undefined && object.center !== null)
      ? Wgs84Coordinates.fromPartial(object.center)
      : undefined;
    message.radiusMeter = object.radiusMeter ?? 0;
    return message;
  },
};

export interface PlaceService {
  CreatePlaceList(request: CreatePlaceListRequest): Promise<CreatePlaceListResponse>;
  ReadPlaceList(request: ReadPlaceListRequest): Promise<ReadPlaceListResponse>;
  UpdatePlaceList(request: UpdatePlaceListRequest): Promise<UpdatePlaceListResponse>;
  DeletePlaceList(request: DeletePlaceListRequest): Promise<DeletePlaceListResponse>;
}

export const PlaceServiceServiceName = "place.PlaceService";
export class PlaceServiceClientImpl implements PlaceService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlaceServiceServiceName;
    this.rpc = rpc;
    this.CreatePlaceList = this.CreatePlaceList.bind(this);
    this.ReadPlaceList = this.ReadPlaceList.bind(this);
    this.UpdatePlaceList = this.UpdatePlaceList.bind(this);
    this.DeletePlaceList = this.DeletePlaceList.bind(this);
  }
  CreatePlaceList(request: CreatePlaceListRequest): Promise<CreatePlaceListResponse> {
    const data = CreatePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePlaceList", data);
    return promise.then((data) => CreatePlaceListResponse.decode(_m0.Reader.create(data)));
  }

  ReadPlaceList(request: ReadPlaceListRequest): Promise<ReadPlaceListResponse> {
    const data = ReadPlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReadPlaceList", data);
    return promise.then((data) => ReadPlaceListResponse.decode(_m0.Reader.create(data)));
  }

  UpdatePlaceList(request: UpdatePlaceListRequest): Promise<UpdatePlaceListResponse> {
    const data = UpdatePlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePlaceList", data);
    return promise.then((data) => UpdatePlaceListResponse.decode(_m0.Reader.create(data)));
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
