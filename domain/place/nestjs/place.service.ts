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
  place: Place | undefined;
}

export interface ReadPlaceListRequest {
  places: ReadPlaceRequest[];
}

export interface ReadPlaceListResponse {
  places: Place[];
}

export interface CreatePlaceResponse {
  place: Place | undefined;
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
  place: Place | undefined;
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
  queryPlaceListBySquare(request: QueryPlaceListBySquareRequest): Observable<QueryPlaceListBySquareResponse>;

  queryPlaceListByRadius(request: QueryPlaceListByRadiusRequest): Observable<QueryPlaceListByRadiusResponse>;

  createPlace(request: CreatePlaceRequest): Observable<CreatePlaceResponse>;

  createPlaceList(request: CreatePlaceListRequest): Observable<CreatePlaceListResponse>;

  readPlace(request: ReadPlaceRequest): Observable<ReadPlaceResponse>;

  readPlaceList(request: ReadPlaceListRequest): Observable<ReadPlaceListResponse>;

  updatePlace(request: UpdatePlaceRequest): Observable<UpdatePlaceResponse>;

  updatePlaceList(request: UpdatePlaceListRequest): Observable<UpdatePlaceListResponse>;

  deletePlace(request: DeletePlaceRequest): Observable<DeletePlaceResponse>;

  deletePlaceList(request: DeletePlaceListRequest): Observable<DeletePlaceListResponse>;
}

export interface PlaceServiceController {
  queryPlaceListBySquare(
    request: QueryPlaceListBySquareRequest,
  ):
    | Promise<QueryPlaceListBySquareResponse>
    | Observable<QueryPlaceListBySquareResponse>
    | QueryPlaceListBySquareResponse;

  queryPlaceListByRadius(
    request: QueryPlaceListByRadiusRequest,
  ):
    | Promise<QueryPlaceListByRadiusResponse>
    | Observable<QueryPlaceListByRadiusResponse>
    | QueryPlaceListByRadiusResponse;

  createPlace(
    request: CreatePlaceRequest,
  ): Promise<CreatePlaceResponse> | Observable<CreatePlaceResponse> | CreatePlaceResponse;

  createPlaceList(
    request: CreatePlaceListRequest,
  ): Promise<CreatePlaceListResponse> | Observable<CreatePlaceListResponse> | CreatePlaceListResponse;

  readPlace(request: ReadPlaceRequest): Promise<ReadPlaceResponse> | Observable<ReadPlaceResponse> | ReadPlaceResponse;

  readPlaceList(
    request: ReadPlaceListRequest,
  ): Promise<ReadPlaceListResponse> | Observable<ReadPlaceListResponse> | ReadPlaceListResponse;

  updatePlace(
    request: UpdatePlaceRequest,
  ): Promise<UpdatePlaceResponse> | Observable<UpdatePlaceResponse> | UpdatePlaceResponse;

  updatePlaceList(
    request: UpdatePlaceListRequest,
  ): Promise<UpdatePlaceListResponse> | Observable<UpdatePlaceListResponse> | UpdatePlaceListResponse;

  deletePlace(
    request: DeletePlaceRequest,
  ): Promise<DeletePlaceResponse> | Observable<DeletePlaceResponse> | DeletePlaceResponse;

  deletePlaceList(
    request: DeletePlaceListRequest,
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
