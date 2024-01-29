//
//  Generated code. Do not modify.
//  source: place-delete.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:async' as $async;
import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'package:protobuf/protobuf.dart' as $pb;

import 'place-delete.service.pb.dart' as $1;

export 'place-delete.service.pb.dart';

@$pb.GrpcServiceName('place.service.delete.PlaceDeleteService')
class PlaceDeleteServiceClient extends $grpc.Client {
  static final _$deletePlaceList = $grpc.ClientMethod<$1.DeletePlaceListRequest, $1.DeletePlaceListResponse>(
      '/place.service.delete.PlaceDeleteService/DeletePlaceList',
      ($1.DeletePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.DeletePlaceListResponse.fromBuffer(value));

  PlaceDeleteServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options,
        interceptors: interceptors);

  $grpc.ResponseFuture<$1.DeletePlaceListResponse> deletePlaceList($1.DeletePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deletePlaceList, request, options: options);
  }
}

@$pb.GrpcServiceName('place.service.delete.PlaceDeleteService')
abstract class PlaceDeleteServiceBase extends $grpc.Service {
  $core.String get $name => 'place.service.delete.PlaceDeleteService';

  PlaceDeleteServiceBase() {
    $addMethod($grpc.ServiceMethod<$1.DeletePlaceListRequest, $1.DeletePlaceListResponse>(
        'DeletePlaceList',
        deletePlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.DeletePlaceListRequest.fromBuffer(value),
        ($1.DeletePlaceListResponse value) => value.writeToBuffer()));
  }

  $async.Future<$1.DeletePlaceListResponse> deletePlaceList_Pre($grpc.ServiceCall call, $async.Future<$1.DeletePlaceListRequest> request) async {
    return deletePlaceList(call, await request);
  }

  $async.Future<$1.DeletePlaceListResponse> deletePlaceList($grpc.ServiceCall call, $1.DeletePlaceListRequest request);
}
