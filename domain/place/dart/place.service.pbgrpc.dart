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
  static final _$queryPlaceListBySquare = $grpc.ClientMethod<$0.QueryPlaceListBySquareRequest, $0.QueryPlaceListBySquareResponse>(
      '/place.PlaceService/QueryPlaceListBySquare',
      ($0.QueryPlaceListBySquareRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.QueryPlaceListBySquareResponse.fromBuffer(value));
  static final _$queryPlaceListByRadius = $grpc.ClientMethod<$0.QueryPlaceListByRadiusRequest, $0.QueryPlaceListByRadiusResponse>(
      '/place.PlaceService/QueryPlaceListByRadius',
      ($0.QueryPlaceListByRadiusRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.QueryPlaceListByRadiusResponse.fromBuffer(value));
  static final _$createPlace = $grpc.ClientMethod<$0.CreatePlaceRequest, $0.CreatePlaceResponse>(
      '/place.PlaceService/CreatePlace',
      ($0.CreatePlaceRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.CreatePlaceResponse.fromBuffer(value));
  static final _$createPlaceList = $grpc.ClientMethod<$0.CreatePlaceListRequest, $0.CreatePlaceListResponse>(
      '/place.PlaceService/CreatePlaceList',
      ($0.CreatePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.CreatePlaceListResponse.fromBuffer(value));
  static final _$readPlace = $grpc.ClientMethod<$0.ReadPlaceRequest, $0.ReadPlaceResponse>(
      '/place.PlaceService/ReadPlace',
      ($0.ReadPlaceRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.ReadPlaceResponse.fromBuffer(value));
  static final _$readPlaceList = $grpc.ClientMethod<$0.ReadPlaceListRequest, $0.ReadPlaceListResponse>(
      '/place.PlaceService/ReadPlaceList',
      ($0.ReadPlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.ReadPlaceListResponse.fromBuffer(value));
  static final _$updatePlace = $grpc.ClientMethod<$0.UpdatePlaceRequest, $0.UpdatePlaceResponse>(
      '/place.PlaceService/UpdatePlace',
      ($0.UpdatePlaceRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.UpdatePlaceResponse.fromBuffer(value));
  static final _$updatePlaceList = $grpc.ClientMethod<$0.UpdatePlaceListRequest, $0.UpdatePlaceListResponse>(
      '/place.PlaceService/UpdatePlaceList',
      ($0.UpdatePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.UpdatePlaceListResponse.fromBuffer(value));
  static final _$deletePlace = $grpc.ClientMethod<$0.DeletePlaceRequest, $0.DeletePlaceResponse>(
      '/place.PlaceService/DeletePlace',
      ($0.DeletePlaceRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.DeletePlaceResponse.fromBuffer(value));
  static final _$deletePlaceList = $grpc.ClientMethod<$0.DeletePlaceListRequest, $0.DeletePlaceListResponse>(
      '/place.PlaceService/DeletePlaceList',
      ($0.DeletePlaceListRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.DeletePlaceListResponse.fromBuffer(value));

  PlaceServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options,
        interceptors: interceptors);

  $grpc.ResponseFuture<$0.QueryPlaceListBySquareResponse> queryPlaceListBySquare($0.QueryPlaceListBySquareRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$queryPlaceListBySquare, request, options: options);
  }

  $grpc.ResponseFuture<$0.QueryPlaceListByRadiusResponse> queryPlaceListByRadius($0.QueryPlaceListByRadiusRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$queryPlaceListByRadius, request, options: options);
  }

  $grpc.ResponseFuture<$0.CreatePlaceResponse> createPlace($0.CreatePlaceRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createPlace, request, options: options);
  }

  $grpc.ResponseFuture<$0.CreatePlaceListResponse> createPlaceList($0.CreatePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createPlaceList, request, options: options);
  }

  $grpc.ResponseFuture<$0.ReadPlaceResponse> readPlace($0.ReadPlaceRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$readPlace, request, options: options);
  }

  $grpc.ResponseFuture<$0.ReadPlaceListResponse> readPlaceList($0.ReadPlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$readPlaceList, request, options: options);
  }

  $grpc.ResponseFuture<$0.UpdatePlaceResponse> updatePlace($0.UpdatePlaceRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updatePlace, request, options: options);
  }

  $grpc.ResponseFuture<$0.UpdatePlaceListResponse> updatePlaceList($0.UpdatePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updatePlaceList, request, options: options);
  }

  $grpc.ResponseFuture<$0.DeletePlaceResponse> deletePlace($0.DeletePlaceRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deletePlace, request, options: options);
  }

  $grpc.ResponseFuture<$0.DeletePlaceListResponse> deletePlaceList($0.DeletePlaceListRequest request, {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deletePlaceList, request, options: options);
  }
}

@$pb.GrpcServiceName('place.PlaceService')
abstract class PlaceServiceBase extends $grpc.Service {
  $core.String get $name => 'place.PlaceService';

  PlaceServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.QueryPlaceListBySquareRequest, $0.QueryPlaceListBySquareResponse>(
        'QueryPlaceListBySquare',
        queryPlaceListBySquare_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.QueryPlaceListBySquareRequest.fromBuffer(value),
        ($0.QueryPlaceListBySquareResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.QueryPlaceListByRadiusRequest, $0.QueryPlaceListByRadiusResponse>(
        'QueryPlaceListByRadius',
        queryPlaceListByRadius_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.QueryPlaceListByRadiusRequest.fromBuffer(value),
        ($0.QueryPlaceListByRadiusResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CreatePlaceRequest, $0.CreatePlaceResponse>(
        'CreatePlace',
        createPlace_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CreatePlaceRequest.fromBuffer(value),
        ($0.CreatePlaceResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.CreatePlaceListRequest, $0.CreatePlaceListResponse>(
        'CreatePlaceList',
        createPlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.CreatePlaceListRequest.fromBuffer(value),
        ($0.CreatePlaceListResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ReadPlaceRequest, $0.ReadPlaceResponse>(
        'ReadPlace',
        readPlace_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ReadPlaceRequest.fromBuffer(value),
        ($0.ReadPlaceResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.ReadPlaceListRequest, $0.ReadPlaceListResponse>(
        'ReadPlaceList',
        readPlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.ReadPlaceListRequest.fromBuffer(value),
        ($0.ReadPlaceListResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.UpdatePlaceRequest, $0.UpdatePlaceResponse>(
        'UpdatePlace',
        updatePlace_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.UpdatePlaceRequest.fromBuffer(value),
        ($0.UpdatePlaceResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.UpdatePlaceListRequest, $0.UpdatePlaceListResponse>(
        'UpdatePlaceList',
        updatePlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.UpdatePlaceListRequest.fromBuffer(value),
        ($0.UpdatePlaceListResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.DeletePlaceRequest, $0.DeletePlaceResponse>(
        'DeletePlace',
        deletePlace_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.DeletePlaceRequest.fromBuffer(value),
        ($0.DeletePlaceResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.DeletePlaceListRequest, $0.DeletePlaceListResponse>(
        'DeletePlaceList',
        deletePlaceList_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.DeletePlaceListRequest.fromBuffer(value),
        ($0.DeletePlaceListResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.QueryPlaceListBySquareResponse> queryPlaceListBySquare_Pre($grpc.ServiceCall call, $async.Future<$0.QueryPlaceListBySquareRequest> request) async {
    return queryPlaceListBySquare(call, await request);
  }

  $async.Future<$0.QueryPlaceListByRadiusResponse> queryPlaceListByRadius_Pre($grpc.ServiceCall call, $async.Future<$0.QueryPlaceListByRadiusRequest> request) async {
    return queryPlaceListByRadius(call, await request);
  }

  $async.Future<$0.CreatePlaceResponse> createPlace_Pre($grpc.ServiceCall call, $async.Future<$0.CreatePlaceRequest> request) async {
    return createPlace(call, await request);
  }

  $async.Future<$0.CreatePlaceListResponse> createPlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.CreatePlaceListRequest> request) async {
    return createPlaceList(call, await request);
  }

  $async.Future<$0.ReadPlaceResponse> readPlace_Pre($grpc.ServiceCall call, $async.Future<$0.ReadPlaceRequest> request) async {
    return readPlace(call, await request);
  }

  $async.Future<$0.ReadPlaceListResponse> readPlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.ReadPlaceListRequest> request) async {
    return readPlaceList(call, await request);
  }

  $async.Future<$0.UpdatePlaceResponse> updatePlace_Pre($grpc.ServiceCall call, $async.Future<$0.UpdatePlaceRequest> request) async {
    return updatePlace(call, await request);
  }

  $async.Future<$0.UpdatePlaceListResponse> updatePlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.UpdatePlaceListRequest> request) async {
    return updatePlaceList(call, await request);
  }

  $async.Future<$0.DeletePlaceResponse> deletePlace_Pre($grpc.ServiceCall call, $async.Future<$0.DeletePlaceRequest> request) async {
    return deletePlace(call, await request);
  }

  $async.Future<$0.DeletePlaceListResponse> deletePlaceList_Pre($grpc.ServiceCall call, $async.Future<$0.DeletePlaceListRequest> request) async {
    return deletePlaceList(call, await request);
  }

  $async.Future<$0.QueryPlaceListBySquareResponse> queryPlaceListBySquare($grpc.ServiceCall call, $0.QueryPlaceListBySquareRequest request);
  $async.Future<$0.QueryPlaceListByRadiusResponse> queryPlaceListByRadius($grpc.ServiceCall call, $0.QueryPlaceListByRadiusRequest request);
  $async.Future<$0.CreatePlaceResponse> createPlace($grpc.ServiceCall call, $0.CreatePlaceRequest request);
  $async.Future<$0.CreatePlaceListResponse> createPlaceList($grpc.ServiceCall call, $0.CreatePlaceListRequest request);
  $async.Future<$0.ReadPlaceResponse> readPlace($grpc.ServiceCall call, $0.ReadPlaceRequest request);
  $async.Future<$0.ReadPlaceListResponse> readPlaceList($grpc.ServiceCall call, $0.ReadPlaceListRequest request);
  $async.Future<$0.UpdatePlaceResponse> updatePlace($grpc.ServiceCall call, $0.UpdatePlaceRequest request);
  $async.Future<$0.UpdatePlaceListResponse> updatePlaceList($grpc.ServiceCall call, $0.UpdatePlaceListRequest request);
  $async.Future<$0.DeletePlaceResponse> deletePlace($grpc.ServiceCall call, $0.DeletePlaceRequest request);
  $async.Future<$0.DeletePlaceListResponse> deletePlaceList($grpc.ServiceCall call, $0.DeletePlaceListRequest request);
}
