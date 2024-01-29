/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
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

export const PLACE_SERVICE_READ_PACKAGE_NAME = "place.service.read";

export interface PlaceReadServiceClient {
  readPlaceList(request: ReadPlaceListRequest, ...rest: any): Observable<ReadPlaceListResponse>;
}

export interface PlaceReadServiceController {
  readPlaceList(
    request: ReadPlaceListRequest,
    ...rest: any
  ): Promise<ReadPlaceListResponse> | Observable<ReadPlaceListResponse> | ReadPlaceListResponse;
}

export function PlaceReadServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["readPlaceList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PlaceReadService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PlaceReadService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PLACE_READ_SERVICE_NAME = "PlaceReadService";
