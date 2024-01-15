/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
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

export const PLACE_PACKAGE_NAME = "place";

export interface PlaceServiceClient {
  queryPlaceListBySquare(
    request: QueryPlaceListBySquareRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<QueryPlaceListBySquareResponse>;

  queryPlaceListByRadius(
    request: QueryPlaceListByRadiusRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<QueryPlaceListByRadiusResponse>;

  createPlace(request: CreatePlaceRequest, metadata: Metadata, ...rest: any): Observable<CreatePlaceResponse>;

  createPlaceList(
    request: CreatePlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<CreatePlaceListResponse>;

  readPlace(request: ReadPlaceRequest, metadata: Metadata, ...rest: any): Observable<ReadPlaceResponse>;

  readPlaceList(request: ReadPlaceListRequest, metadata: Metadata, ...rest: any): Observable<ReadPlaceListResponse>;

  updatePlace(request: UpdatePlaceRequest, metadata: Metadata, ...rest: any): Observable<UpdatePlaceResponse>;

  updatePlaceList(
    request: UpdatePlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<UpdatePlaceListResponse>;

  deletePlace(request: DeletePlaceRequest, metadata: Metadata, ...rest: any): Observable<DeletePlaceResponse>;

  deletePlaceList(
    request: DeletePlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<DeletePlaceListResponse>;
}

export interface PlaceServiceController {
  queryPlaceListBySquare(
    request: QueryPlaceListBySquareRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<QueryPlaceListBySquareResponse>
    | Observable<QueryPlaceListBySquareResponse>
    | QueryPlaceListBySquareResponse;

  queryPlaceListByRadius(
    request: QueryPlaceListByRadiusRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | Promise<QueryPlaceListByRadiusResponse>
    | Observable<QueryPlaceListByRadiusResponse>
    | QueryPlaceListByRadiusResponse;

  createPlace(
    request: CreatePlaceRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<CreatePlaceResponse> | Observable<CreatePlaceResponse> | CreatePlaceResponse;

  createPlaceList(
    request: CreatePlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<CreatePlaceListResponse> | Observable<CreatePlaceListResponse> | CreatePlaceListResponse;

  readPlace(
    request: ReadPlaceRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ReadPlaceResponse> | Observable<ReadPlaceResponse> | ReadPlaceResponse;

  readPlaceList(
    request: ReadPlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ReadPlaceListResponse> | Observable<ReadPlaceListResponse> | ReadPlaceListResponse;

  updatePlace(
    request: UpdatePlaceRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<UpdatePlaceResponse> | Observable<UpdatePlaceResponse> | UpdatePlaceResponse;

  updatePlaceList(
    request: UpdatePlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<UpdatePlaceListResponse> | Observable<UpdatePlaceListResponse> | UpdatePlaceListResponse;

  deletePlace(
    request: DeletePlaceRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<DeletePlaceResponse> | Observable<DeletePlaceResponse> | DeletePlaceResponse;

  deletePlaceList(
    request: DeletePlaceListRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<DeletePlaceListResponse> | Observable<DeletePlaceListResponse> | DeletePlaceListResponse;
}

export function PlaceServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "queryPlaceListBySquare",
      "queryPlaceListByRadius",
      "createPlace",
      "createPlaceList",
      "readPlace",
      "readPlaceList",
      "updatePlace",
      "updatePlaceList",
      "deletePlace",
      "deletePlaceList",
    ];
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
