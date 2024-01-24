/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
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

export enum PlaceServiceResponseEventType {
  PLACE_CREATED = "PLACE_CREATED",
  PLACE_READ = "PLACE_READ",
  PLACE_UPDATED = "PLACE_UPDATED",
  PLACE_DELETED = "PLACE_DELETED",
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
  totalCount: number;
  resultCount: number;
  requestedPageNumber: number;
  requestedLimitNumber: number;
  results: Place[];
}

export interface ReadPlaceListRequest {
  places: ReadPlaceListRequest_Place[];
  /** 검색 InputText에 넣은 그대로의 값 */
  keywords?: string | undefined;
  createdAtPeriod: Period | undefined;
  updatedAtPeriod: Period | undefined;
  deletedAtPeriod: Period | undefined;
  isIncludeDeletedPlace: boolean;
  boundSquare?: BoundSquare | undefined;
  boundCircle?: BoundCircle | undefined;
}

export interface ReadPlaceListRequest_Place {
  placeId: string;
}

export interface ReadPlaceListResponse {
  responseInfo: ResponseInfo | undefined;
  places: Place[];
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
  responseInfo: ResponseInfo | undefined;
  results: Place[];
}

export interface DeletePlaceListRequest {
  places: DeletePlaceListRequest_Place[];
}

export interface DeletePlaceListRequest_Place {
  placeId: string;
}

export interface DeletePlaceListResponse {
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

export const PLACE_PACKAGE_NAME = "place";

export interface PlaceServiceClient {
  createPlaceList(request: CreatePlaceListRequest, ...rest: any): Observable<CreatePlaceListResponse>;

  readPlaceList(request: ReadPlaceListRequest, ...rest: any): Observable<ReadPlaceListResponse>;

  updatePlaceList(request: UpdatePlaceListRequest, ...rest: any): Observable<UpdatePlaceListResponse>;

  deletePlaceList(request: DeletePlaceListRequest, ...rest: any): Observable<DeletePlaceListResponse>;
}

export interface PlaceServiceController {
  createPlaceList(
    request: CreatePlaceListRequest,
    ...rest: any
  ): Promise<CreatePlaceListResponse> | Observable<CreatePlaceListResponse> | CreatePlaceListResponse;

  readPlaceList(
    request: ReadPlaceListRequest,
    ...rest: any
  ): Promise<ReadPlaceListResponse> | Observable<ReadPlaceListResponse> | ReadPlaceListResponse;

  updatePlaceList(
    request: UpdatePlaceListRequest,
    ...rest: any
  ): Promise<UpdatePlaceListResponse> | Observable<UpdatePlaceListResponse> | UpdatePlaceListResponse;

  deletePlaceList(
    request: DeletePlaceListRequest,
    ...rest: any
  ): Promise<DeletePlaceListResponse> | Observable<DeletePlaceListResponse> | DeletePlaceListResponse;
}

export function PlaceServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createPlaceList", "readPlaceList", "updatePlaceList", "deletePlaceList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PlaceService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PlaceService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PLACE_SERVICE_NAME = "PlaceService";
