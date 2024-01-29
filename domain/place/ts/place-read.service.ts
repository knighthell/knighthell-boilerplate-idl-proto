/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { PeriodDateTime } from "./period-datetime";
import { Place, Wgs84Coordinates } from "./place";
import { ResponseInfo } from "./response-info";

export const protobufPackage = "place.service.read";

export interface ReadPlaceListRequest {
  /** 장소의 고유 Id목록으로 조회하기 위한 배열 */
  places: ReadPlaceListRequest_Place[];
  /** 검색 InputText에 넣은 그대로의 값 */
  keywords?:
    | string
    | undefined;
  /** 날찌 및 시간 범위 안에 생성된 장소를 구하기 위한 범위 */
  createdAtPeriod?:
    | PeriodDateTime
    | undefined;
  /** 날찌 및 시간 범위 안에 수정된 장소를 구하기 위한 범위 */
  updatedAtPeriod?:
    | PeriodDateTime
    | undefined;
  /** 날찌 및 시간 범위 안에 삭제된 장소를 구하기 위한 범위 */
  deletedAtPeriod?:
    | PeriodDateTime
    | undefined;
  /** 삭제된 장소까지 조회 할지에 대한 여부 */
  isIncludeDeletedPlace?:
    | boolean
    | undefined;
  /** 우측상단 좌표와 좌측하단 좌표로 이루어진 사각형 범위 안에 있는 장소를 구하기 위한 정보 */
  boundSquare?:
    | BoundSquare
    | undefined;
  /** 중심좌표로부터 반지름(단위: 미터) 범위 안에 있는 장소를 구하기 위한 정보 */
  boundCircle?:
    | BoundCircle
    | undefined;
  /** 사용자에 위치로부터 장소들간의 거리를 구하기 위한 정보 */
  userLocation?:
    | Wgs84Coordinates
    | undefined;
  /** Pagination으로 조회하기 위한 정보 */
  pagination?: Pagination | undefined;
}

export interface ReadPlaceListRequest_Place {
  placeId: string;
}

export interface ReadPlaceListResponse {
  responseInfo: ResponseInfo | undefined;
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

export interface Pagination {
  /** Pagination을 이한 page 수 */
  pageNumber?:
    | number
    | undefined;
  /** Page당 보여지는 row의 개수(e.g. limit of query) */
  rowPerPage?: number | undefined;
}

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
    userLocation: undefined,
    pagination: undefined,
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
      PeriodDateTime.encode(message.createdAtPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAtPeriod !== undefined) {
      PeriodDateTime.encode(message.updatedAtPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.deletedAtPeriod !== undefined) {
      PeriodDateTime.encode(message.deletedAtPeriod, writer.uint32(42).fork()).ldelim();
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
    if (message.userLocation !== undefined) {
      Wgs84Coordinates.encode(message.userLocation, writer.uint32(74).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(82).fork()).ldelim();
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

          message.createdAtPeriod = PeriodDateTime.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedAtPeriod = PeriodDateTime.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deletedAtPeriod = PeriodDateTime.decode(reader, reader.uint32());
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
        case 9:
          if (tag !== 74) {
            break;
          }

          message.userLocation = Wgs84Coordinates.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
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
      createdAtPeriod: isSet(object.createdAtPeriod) ? PeriodDateTime.fromJSON(object.createdAtPeriod) : undefined,
      updatedAtPeriod: isSet(object.updatedAtPeriod) ? PeriodDateTime.fromJSON(object.updatedAtPeriod) : undefined,
      deletedAtPeriod: isSet(object.deletedAtPeriod) ? PeriodDateTime.fromJSON(object.deletedAtPeriod) : undefined,
      isIncludeDeletedPlace: isSet(object.isIncludeDeletedPlace)
        ? globalThis.Boolean(object.isIncludeDeletedPlace)
        : undefined,
      boundSquare: isSet(object.boundSquare) ? BoundSquare.fromJSON(object.boundSquare) : undefined,
      boundCircle: isSet(object.boundCircle) ? BoundCircle.fromJSON(object.boundCircle) : undefined,
      userLocation: isSet(object.userLocation) ? Wgs84Coordinates.fromJSON(object.userLocation) : undefined,
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
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
      obj.createdAtPeriod = PeriodDateTime.toJSON(message.createdAtPeriod);
    }
    if (message.updatedAtPeriod !== undefined) {
      obj.updatedAtPeriod = PeriodDateTime.toJSON(message.updatedAtPeriod);
    }
    if (message.deletedAtPeriod !== undefined) {
      obj.deletedAtPeriod = PeriodDateTime.toJSON(message.deletedAtPeriod);
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
    if (message.userLocation !== undefined) {
      obj.userLocation = Wgs84Coordinates.toJSON(message.userLocation);
    }
    if (message.pagination !== undefined) {
      obj.pagination = Pagination.toJSON(message.pagination);
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
      ? PeriodDateTime.fromPartial(object.createdAtPeriod)
      : undefined;
    message.updatedAtPeriod = (object.updatedAtPeriod !== undefined && object.updatedAtPeriod !== null)
      ? PeriodDateTime.fromPartial(object.updatedAtPeriod)
      : undefined;
    message.deletedAtPeriod = (object.deletedAtPeriod !== undefined && object.deletedAtPeriod !== null)
      ? PeriodDateTime.fromPartial(object.deletedAtPeriod)
      : undefined;
    message.isIncludeDeletedPlace = object.isIncludeDeletedPlace ?? undefined;
    message.boundSquare = (object.boundSquare !== undefined && object.boundSquare !== null)
      ? BoundSquare.fromPartial(object.boundSquare)
      : undefined;
    message.boundCircle = (object.boundCircle !== undefined && object.boundCircle !== null)
      ? BoundCircle.fromPartial(object.boundCircle)
      : undefined;
    message.userLocation = (object.userLocation !== undefined && object.userLocation !== null)
      ? Wgs84Coordinates.fromPartial(object.userLocation)
      : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
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

function createBasePagination(): Pagination {
  return { pageNumber: undefined, rowPerPage: undefined };
}

export const Pagination = {
  encode(message: Pagination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageNumber !== undefined) {
      writer.uint32(80).int32(message.pageNumber);
    }
    if (message.rowPerPage !== undefined) {
      writer.uint32(88).int32(message.rowPerPage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 80) {
            break;
          }

          message.pageNumber = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.rowPerPage = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      pageNumber: isSet(object.pageNumber) ? globalThis.Number(object.pageNumber) : undefined,
      rowPerPage: isSet(object.rowPerPage) ? globalThis.Number(object.rowPerPage) : undefined,
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    if (message.pageNumber !== undefined) {
      obj.pageNumber = Math.round(message.pageNumber);
    }
    if (message.rowPerPage !== undefined) {
      obj.rowPerPage = Math.round(message.rowPerPage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pagination>, I>>(base?: I): Pagination {
    return Pagination.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(object: I): Pagination {
    const message = createBasePagination();
    message.pageNumber = object.pageNumber ?? undefined;
    message.rowPerPage = object.rowPerPage ?? undefined;
    return message;
  },
};

export interface PlaceReadService {
  ReadPlaceList(request: ReadPlaceListRequest): Promise<ReadPlaceListResponse>;
}

export const PlaceReadServiceServiceName = "place.service.read.PlaceReadService";
export class PlaceReadServiceClientImpl implements PlaceReadService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PlaceReadServiceServiceName;
    this.rpc = rpc;
    this.ReadPlaceList = this.ReadPlaceList.bind(this);
  }
  ReadPlaceList(request: ReadPlaceListRequest): Promise<ReadPlaceListResponse> {
    const data = ReadPlaceListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReadPlaceList", data);
    return promise.then((data) => ReadPlaceListResponse.decode(_m0.Reader.create(data)));
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
