/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Place } from "./place";

export const protobufPackage = "place.service.create";

export enum PlaceCreateServiceEventType {
  CREATE_PLACE = "CREATE_PLACE",
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

export const PLACE_SERVICE_CREATE_PACKAGE_NAME = "place.service.create";

export interface PlaceCreateServiceClient {
  createPlaceList(request: CreatePlaceListRequest, ...rest: any): Observable<CreatePlaceListResponse>;
}

export interface PlaceCreateServiceController {
  createPlaceList(
    request: CreatePlaceListRequest,
    ...rest: any
  ): Promise<CreatePlaceListResponse> | Observable<CreatePlaceListResponse> | CreatePlaceListResponse;
}

export function PlaceCreateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createPlaceList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PlaceCreateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PlaceCreateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PLACE_CREATE_SERVICE_NAME = "PlaceCreateService";
