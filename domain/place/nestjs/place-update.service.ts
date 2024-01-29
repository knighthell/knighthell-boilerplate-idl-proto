/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Place } from "./place";

export const protobufPackage = "place.service.update";

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

export const PLACE_SERVICE_UPDATE_PACKAGE_NAME = "place.service.update";

export interface PlaceUpdateServiceClient {
  updatePlaceList(request: UpdatePlaceListRequest, ...rest: any): Observable<UpdatePlaceListResponse>;
}

export interface PlaceUpdateServiceController {
  updatePlaceList(
    request: UpdatePlaceListRequest,
    ...rest: any
  ): Promise<UpdatePlaceListResponse> | Observable<UpdatePlaceListResponse> | UpdatePlaceListResponse;
}

export function PlaceUpdateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["updatePlaceList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PlaceUpdateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PlaceUpdateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PLACE_UPDATE_SERVICE_NAME = "PlaceUpdateService";
