//
//  Generated code. Do not modify.
//  source: place-read.service.proto
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

import 'place-read.service.pb.dart' as $2;

export 'place-read.service.pb.dart';

@$pb.GrpcServiceName('place.service.read.PlaceReadService')
class PlaceReadServiceClient extends $grpc.Client {
  static final _$readPlaceList = $grpc.ClientMethod<$2.ReadPlaceListRequest, $2.ReadPlaceListResponse>(
      '/place.service.read.PlaceReadService/ReadPlaceList',
      ($2.ReadPlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $2.ReadPlaceListResponse.fromBuffer(value));

  PlaceReadServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options,
        interceptors: interceptors);

  $grpc.ResponseFuture<$2.ReadPlaceListResponse> readPlaceList($2.ReadPlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$readPlaceList, request, options: options);
  }
}

@$pb.GrpcServiceName('place.service.read.PlaceReadService')
abstract class PlaceReadServiceBase extends $grpc.Service {
  $core.String get $name => 'place.service.read.PlaceReadService';

  PlaceReadServiceBase() {
    $addMethod($grpc.ServiceMethod<$2.ReadPlaceListRequest, $2.ReadPlaceListResponse>(
        'ReadPlaceList',
        readPlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $2.ReadPlaceListRequest.fromBuffer(value),
        ($2.ReadPlaceListResponse value) => value.writeToBuffer()));
  }

  $async.Future<$2.ReadPlaceListResponse> readPlaceList_Pre($grpc.ServiceCall call, $async.Future<$2.ReadPlaceListRequest> request) async {
    return readPlaceList(call, await request);
  }

  $async.Future<$2.ReadPlaceListResponse> readPlaceList($grpc.ServiceCall call, $2.ReadPlaceListRequest request);
}
