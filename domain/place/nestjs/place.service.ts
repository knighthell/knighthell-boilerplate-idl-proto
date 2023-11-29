/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Place } from "./place";

export const protobufPackage = "place";

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
  name: string;
  latitude: number;
  longitude: number;
}

export interface ReadPlaceRequest {
  id: string;
}

export interface ReadPlaceResponse {
  place?: Place | undefined;
}

export interface ReadPlaceListRequest {
  places: ReadPlaceRequest[];
}

export interface ReadPlaceListResponse {
  places: Place[];
}

export interface CreatePlaceResponse {
  place?: Place | undefined;
}

export interface CreatePlaceListRequest {
  places: CreatePlaceRequest[];
}

export interface CreatePlaceListResponse {
  places: Place[];
}

export interface UpdatePlaceRequest {
  name?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface UpdatePlaceResponse {
  place?: Place | undefined;
}

export interface UpdatePlaceListRequest {
  places: UpdatePlaceRequest[];
}

export interface UpdatePlaceListResponse {
  places: Place[];
}

export interface DeletePlaceRequest {
  id: string;
}

export interface DeletePlaceResponse {
  place?: Place | undefined;
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
    ...rest: any
  ): Observable<QueryPlaceListBySquareResponse>;

  queryPlaceListByRadius(
    request: QueryPlaceListByRadiusRequest,
    ...rest: any
  ): Observable<QueryPlaceListByRadiusResponse>;

  createPlace(request: CreatePlaceRequest, ...rest: any): Observable<CreatePlaceResponse>;

  createPlaceList(request: CreatePlaceListRequest, ...rest: any): Observable<CreatePlaceListResponse>;

  readPlace(request: ReadPlaceRequest, ...rest: any): Observable<ReadPlaceResponse>;

  readPlaceList(request: ReadPlaceListRequest, ...rest: any): Observable<ReadPlaceListResponse>;

  updatePlace(request: UpdatePlaceRequest, ...rest: any): Observable<UpdatePlaceResponse>;

  updatePlaceList(request: UpdatePlaceListRequest, ...rest: any): Observable<UpdatePlaceListResponse>;

  deletePlace(request: DeletePlaceRequest, ...rest: any): Observable<DeletePlaceResponse>;

  deletePlaceList(request: DeletePlaceListRequest, ...rest: any): Observable<DeletePlaceListResponse>;
}

export interface PlaceServiceController {
  queryPlaceListBySquare(
    request: QueryPlaceListBySquareRequest,
    ...rest: any
  ):
    | Promise<QueryPlaceListBySquareResponse>
    | Observable<QueryPlaceListBySquareResponse>
    | QueryPlaceListBySquareResponse;

  queryPlaceListByRadius(
    request: QueryPlaceListByRadiusRequest,
    ...rest: any
  ):
    | Promise<QueryPlaceListByRadiusResponse>
    | Observable<QueryPlaceListByRadiusResponse>
    | QueryPlaceListByRadiusResponse;

  createPlace(
    request: CreatePlaceRequest,
    ...rest: any
  ): Promise<CreatePlaceResponse> | Observable<CreatePlaceResponse> | CreatePlaceResponse;

  createPlaceList(
    request: CreatePlaceListRequest,
    ...rest: any
  ): Promise<CreatePlaceListResponse> | Observable<CreatePlaceListResponse> | CreatePlaceListResponse;

  readPlace(
    request: ReadPlaceRequest,
    ...rest: any
  ): Promise<ReadPlaceResponse> | Observable<ReadPlaceResponse> | ReadPlaceResponse;

  readPlaceList(
    request: ReadPlaceListRequest,
    ...rest: any
  ): Promise<ReadPlaceListResponse> | Observable<ReadPlaceListResponse> | ReadPlaceListResponse;

  updatePlace(
    request: UpdatePlaceRequest,
    ...rest: any
  ): Promise<UpdatePlaceResponse> | Observable<UpdatePlaceResponse> | UpdatePlaceResponse;

  updatePlaceList(
    request: UpdatePlaceListRequest,
    ...rest: any
  ): Promise<UpdatePlaceListResponse> | Observable<UpdatePlaceListResponse> | UpdatePlaceListResponse;

  deletePlace(
    request: DeletePlaceRequest,
    ...rest: any
  ): Promise<DeletePlaceResponse> | Observable<DeletePlaceResponse> | DeletePlaceResponse;

  deletePlaceList(
    request: DeletePlaceListRequest,
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
