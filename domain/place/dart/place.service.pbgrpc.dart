//
//  Generated code. Do not modify.
//  source: place.service.proto
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

import 'place.service.pb.dart' as $0;

export 'place.service.pb.dart';

@$pb.GrpcServiceName('place.PlaceService')
class PlaceServiceClient extends $grpc.Client {
  static final _$createPlaceList = $grpc.ClientMethod<$0.CreatePlaceListRequest, $0.CreatePlaceListResponse>(
      '/place.PlaceService/CreatePlaceList',
      ($0.CreatePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.CreatePlaceListResponse.fromBuffer(value));
  static final _$readPlaceList = $grpc.ClientMethod<$0.ReadPlaceListRequest, $0.ReadPlaceListResponse>(
      '/place.PlaceService/ReadPlaceList',
      ($0.ReadPlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.ReadPlaceListResponse.fromBuffer(value));
  static final _$updatePlaceList = $grpc.ClientMethod<$0.UpdatePlaceListRequest, $0.UpdatePlaceListResponse>(
      '/place.PlaceService/UpdatePlaceList',
      ($0.UpdatePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.UpdatePlaceListResponse.fromBuffer(value));
  static final _$deletePlaceList = $grpc.ClientMethod<$0.DeletePlaceListRequest, $0.DeletePlaceListResponse>(
      '/place.PlaceService/DeletePlaceList',
      ($0.DeletePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.DeletePlaceListResponse.fromBuffer(value));

  PlaceServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options,
        interceptors: interceptors);

  $grpc.ResponseFuture<$0.CreatePlaceListResponse> createPlaceList($0.CreatePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createPlaceList, request, options: options);
  }

  $grpc.ResponseFuture<$0.ReadPlaceListResponse> readPlaceList($0.ReadPlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$readPlaceList, request, options: options);
  }

  $grpc.ResponseFuture<$0.UpdatePlaceListResponse> updatePlaceList($0.UpdatePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updatePlaceList, request, options: options);
  }

  $grpc.ResponseFuture<$0.DeletePlaceListResponse> deletePlaceList($0.DeletePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deletePlaceList, request, options: options);
  }
}

@$pb.GrpcServiceName('place.PlaceService')
abstract class PlaceServiceBase extends $grpc.Service {
  $core.String get $name => 'place.PlaceService';

  PlaceServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.CreatePlaceListRequest, $0.CreatePlaceListResponse>(
        'CreatePlaceList',
        createPlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CreatePlaceListRequest.fromBuffer(value),
        ($0.CreatePlaceListResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ReadPlaceListRequest, $0.ReadPlaceListResponse>(
        'ReadPlaceList',
        readPlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ReadPlaceListRequest.fromBuffer(value),
        ($0.ReadPlaceListResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.UpdatePlaceListRequest, $0.UpdatePlaceListResponse>(
        'UpdatePlaceList',
        updatePlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.UpdatePlaceListRequest.fromBuffer(value),
        ($0.UpdatePlaceListResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.DeletePlaceListRequest, $0.DeletePlaceListResponse>(
        'DeletePlaceList',
        deletePlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.DeletePlaceListRequest.fromBuffer(value),
        ($0.DeletePlaceListResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.CreatePlaceListResponse> createPlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.CreatePlaceListRequest> request) async {
    return createPlaceList(call, await request);
  }

  $async.Future<$0.ReadPlaceListResponse> readPlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.ReadPlaceListRequest> request) async {
    return readPlaceList(call, await request);
  }

  $async.Future<$0.UpdatePlaceListResponse> updatePlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.UpdatePlaceListRequest> request) async {
    return updatePlaceList(call, await request);
  }

  $async.Future<$0.DeletePlaceListResponse> deletePlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.DeletePlaceListRequest> request) async {
    return deletePlaceList(call, await request);
  }

  $async.Future<$0.CreatePlaceListResponse> createPlaceList($grpc.ServiceCall call, $0.CreatePlaceListRequest request);
  $async.Future<$0.ReadPlaceListResponse> readPlaceList($grpc.ServiceCall call, $0.ReadPlaceListRequest request);
  $async.Future<$0.UpdatePlaceListResponse> updatePlaceList($grpc.ServiceCall call, $0.UpdatePlaceListRequest request);
  $async.Future<$0.DeletePlaceListResponse> deletePlaceList($grpc.ServiceCall call, $0.DeletePlaceListRequest request);
}
