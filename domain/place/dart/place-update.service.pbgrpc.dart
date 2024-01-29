//
//  Generated code. Do not modify.
//  source: place-update.service.proto
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

import 'place-update.service.pb.dart' as $3;

export 'place-update.service.pb.dart';

@$pb.GrpcServiceName('place.service.update.PlaceUpdateService')
class PlaceUpdateServiceClient extends $grpc.Client {
  static final _$updatePlaceList = $grpc.ClientMethod<$3.UpdatePlaceListRequest, $3.UpdatePlaceListResponse>(
      '/place.service.update.PlaceUpdateService/UpdatePlaceList',
      ($3.UpdatePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $3.UpdatePlaceListResponse.fromBuffer(value));

  PlaceUpdateServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options,
        interceptors: interceptors);

  $grpc.ResponseFuture<$3.UpdatePlaceListResponse> updatePlaceList($3.UpdatePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updatePlaceList, request, options: options);
  }
}

@$pb.GrpcServiceName('place.service.update.PlaceUpdateService')
abstract class PlaceUpdateServiceBase extends $grpc.Service {
  $core.String get $name => 'place.service.update.PlaceUpdateService';

  PlaceUpdateServiceBase() {
    $addMethod($grpc.ServiceMethod<$3.UpdatePlaceListRequest, $3.UpdatePlaceListResponse>(
        'UpdatePlaceList',
        updatePlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $3.UpdatePlaceListRequest.fromBuffer(value),
        ($3.UpdatePlaceListResponse value) => value.writeToBuffer()));
  }

  $async.Future<$3.UpdatePlaceListResponse> updatePlaceList_Pre($grpc.ServiceCall call, $async.Future<$3.UpdatePlaceListRequest> request) async {
    return updatePlaceList(call, await request);
  }

  $async.Future<$3.UpdatePlaceListResponse> updatePlaceList($grpc.ServiceCall call, $3.UpdatePlaceListRequest request);
}
