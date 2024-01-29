//
//  Generated code. Do not modify.
//  source: place-create.service.proto
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

import 'place-create.service.pb.dart' as $0;

export 'place-create.service.pb.dart';

@$pb.GrpcServiceName('place.service.create.PlaceCreateService')
class PlaceCreateServiceClient extends $grpc.Client {
  static final _$createPlaceList = $grpc.ClientMethod<$0.CreatePlaceListRequest, $0.CreatePlaceListResponse>(
      '/place.service.create.PlaceCreateService/CreatePlaceList',
      ($0.CreatePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.CreatePlaceListResponse.fromBuffer(value));

  PlaceCreateServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options,
        interceptors: interceptors);

  $grpc.ResponseFuture<$0.CreatePlaceListResponse> createPlaceList($0.CreatePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createPlaceList, request, options: options);
  }
}

@$pb.GrpcServiceName('place.service.create.PlaceCreateService')
abstract class PlaceCreateServiceBase extends $grpc.Service {
  $core.String get $name => 'place.service.create.PlaceCreateService';

  PlaceCreateServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.CreatePlaceListRequest, $0.CreatePlaceListResponse>(
        'CreatePlaceList',
        createPlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CreatePlaceListRequest.fromBuffer(value),
        ($0.CreatePlaceListResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.CreatePlaceListResponse> createPlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.CreatePlaceListRequest> request) async {
    return createPlaceList(call, await request);
  }

  $async.Future<$0.CreatePlaceListResponse> createPlaceList($grpc.ServiceCall call, $0.CreatePlaceListRequest request);
}
