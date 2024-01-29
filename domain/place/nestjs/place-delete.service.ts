/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Place } from "./place";

export const protobufPackage = "place.service.delete";

export interface DeletePlaceListRequest {
  places: DeletePlaceListRequest_Place[];
}

export interface DeletePlaceListRequest_Place {
  placeId: string;
}

export interface DeletePlaceListResponse {
  results: Place[];
}

export const PLACE_SERVICE_DELETE_PACKAGE_NAME = "place.service.delete";

export interface PlaceDeleteServiceClient {
  deletePlaceList(request: DeletePlaceListRequest, ...rest: any): Observable<DeletePlaceListResponse>;
}

export interface PlaceDeleteServiceController {
  deletePlaceList(
    request: DeletePlaceListRequest,
    ...rest: any
  ): Promise<DeletePlaceListResponse> | Observable<DeletePlaceListResponse> | DeletePlaceListResponse;
}

export function PlaceDeleteServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["deletePlaceList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PlaceDeleteService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PlaceDeleteService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PLACE_DELETE_SERVICE_NAME = "PlaceDeleteService";
