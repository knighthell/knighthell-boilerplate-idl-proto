//
//  Generated code. Do not modify.
//  source: place.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'place.pb.dart' as $2;

class QueryPlaceListBySquareRequest extends $pb.GeneratedMessage {
  factory QueryPlaceListBySquareRequest({
    $core.double? topRightLatitude,
    $core.double? topRightLongitude,
    $core.double? bottomLeftLatitude,
    $core.double? bottomLeftLongitude,
    $core.double? userLatitude,
    $core.double? userLongitude,
  }) {
    final $result = create();
    if (topRightLatitude != null) {
      $result.topRightLatitude = topRightLatitude;
    }
    if (topRightLongitude != null) {
      $result.topRightLongitude = topRightLongitude;
    }
    if (bottomLeftLatitude != null) {
      $result.bottomLeftLatitude = bottomLeftLatitude;
    }
    if (bottomLeftLongitude != null) {
      $result.bottomLeftLongitude = bottomLeftLongitude;
    }
    if (userLatitude != null) {
      $result.userLatitude = userLatitude;
    }
    if (userLongitude != null) {
      $result.userLongitude = userLongitude;
    }
    return $result;
  }
  QueryPlaceListBySquareRequest._() : super();
  factory QueryPlaceListBySquareRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QueryPlaceListBySquareRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'QueryPlaceListBySquareRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..a<$core.double>(1, _omitFieldNames ? '' : 'topRightLatitude', $pb.PbFieldType.OD, protoName: 'topRightLatitude')
    ..a<$core.double>(2, _omitFieldNames ? '' : 'topRightLongitude', $pb.PbFieldType.OD, protoName: 'topRightLongitude')
    ..a<$core.double>(3, _omitFieldNames ? '' : 'bottomLeftLatitude', $pb.PbFieldType.OD, protoName: 'bottomLeftLatitude')
    ..a<$core.double>(4, _omitFieldNames ? '' : 'bottomLeftLongitude', $pb.PbFieldType.OD, protoName: 'bottomLeftLongitude')
    ..a<$core.double>(5, _omitFieldNames ? '' : 'userLatitude', $pb.PbFieldType.OD, protoName: 'userLatitude')
    ..a<$core.double>(6, _omitFieldNames ? '' : 'userLongitude', $pb.PbFieldType.OD, protoName: 'userLongitude')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QueryPlaceListBySquareRequest clone() => QueryPlaceListBySquareRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QueryPlaceListBySquareRequest copyWith(void Function(QueryPlaceListBySquareRequest) updates) => super.copyWith((message) => updates(message as QueryPlaceListBySquareRequest)) as QueryPlaceListBySquareRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static QueryPlaceListBySquareRequest create() => QueryPlaceListBySquareRequest._();
  QueryPlaceListBySquareRequest createEmptyInstance() => create();
  static $pb.PbList<QueryPlaceListBySquareRequest> createRepeated() => $pb.PbList<QueryPlaceListBySquareRequest>();
  @$core.pragma('dart2js:noInline')
  static QueryPlaceListBySquareRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QueryPlaceListBySquareRequest>(create);
  static QueryPlaceListBySquareRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.double get topRightLatitude => $_getN(0);
  @$pb.TagNumber(1)
  set topRightLatitude($core.double v) { $_setDouble(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTopRightLatitude() => $_has(0);
  @$pb.TagNumber(1)
  void clearTopRightLatitude() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get topRightLongitude => $_getN(1);
  @$pb.TagNumber(2)
  set topRightLongitude($core.double v) { $_setDouble(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTopRightLongitude() => $_has(1);
  @$pb.TagNumber(2)
  void clearTopRightLongitude() => clearField(2);

  @$pb.TagNumber(3)
  $core.double get bottomLeftLatitude => $_getN(2);
  @$pb.TagNumber(3)
  set bottomLeftLatitude($core.double v) { $_setDouble(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasBottomLeftLatitude() => $_has(2);
  @$pb.TagNumber(3)
  void clearBottomLeftLatitude() => clearField(3);

  @$pb.TagNumber(4)
  $core.double get bottomLeftLongitude => $_getN(3);
  @$pb.TagNumber(4)
  set bottomLeftLongitude($core.double v) { $_setDouble(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasBottomLeftLongitude() => $_has(3);
  @$pb.TagNumber(4)
  void clearBottomLeftLongitude() => clearField(4);

  @$pb.TagNumber(5)
  $core.double get userLatitude => $_getN(4);
  @$pb.TagNumber(5)
  set userLatitude($core.double v) { $_setDouble(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasUserLatitude() => $_has(4);
  @$pb.TagNumber(5)
  void clearUserLatitude() => clearField(5);

  @$pb.TagNumber(6)
  $core.double get userLongitude => $_getN(5);
  @$pb.TagNumber(6)
  set userLongitude($core.double v) { $_setDouble(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUserLongitude() => $_has(5);
  @$pb.TagNumber(6)
  void clearUserLongitude() => clearField(6);
}

class QueryPlaceListBySquareResponse extends $pb.GeneratedMessage {
  factory QueryPlaceListBySquareResponse({
    $core.Iterable<$2.Place>? results,
  }) {
    final $result = create();
    if (results != null) {
      $result.results.addAll(results);
    }
    return $result;
  }
  QueryPlaceListBySquareResponse._() : super();
  factory QueryPlaceListBySquareResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QueryPlaceListBySquareResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'QueryPlaceListBySquareResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$2.Place>(1, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QueryPlaceListBySquareResponse clone() => QueryPlaceListBySquareResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QueryPlaceListBySquareResponse copyWith(void Function(QueryPlaceListBySquareResponse) updates) => super.copyWith((message) => updates(message as QueryPlaceListBySquareResponse)) as QueryPlaceListBySquareResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static QueryPlaceListBySquareResponse create() => QueryPlaceListBySquareResponse._();
  QueryPlaceListBySquareResponse createEmptyInstance() => create();
  static $pb.PbList<QueryPlaceListBySquareResponse> createRepeated() => $pb.PbList<QueryPlaceListBySquareResponse>();
  @$core.pragma('dart2js:noInline')
  static QueryPlaceListBySquareResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QueryPlaceListBySquareResponse>(create);
  static QueryPlaceListBySquareResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Place> get results => $_getList(0);
}

class QueryPlaceListByRadiusRequest extends $pb.GeneratedMessage {
  factory QueryPlaceListByRadiusRequest({
    $core.double? centerLatitude,
    $core.double? centerLongitude,
    $core.int? meterRadius,
    $core.double? userLatitude,
    $core.double? userLongitude,
  }) {
    final $result = create();
    if (centerLatitude != null) {
      $result.centerLatitude = centerLatitude;
    }
    if (centerLongitude != null) {
      $result.centerLongitude = centerLongitude;
    }
    if (meterRadius != null) {
      $result.meterRadius = meterRadius;
    }
    if (userLatitude != null) {
      $result.userLatitude = userLatitude;
    }
    if (userLongitude != null) {
      $result.userLongitude = userLongitude;
    }
    return $result;
  }
  QueryPlaceListByRadiusRequest._() : super();
  factory QueryPlaceListByRadiusRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QueryPlaceListByRadiusRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'QueryPlaceListByRadiusRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..a<$core.double>(1, _omitFieldNames ? '' : 'centerLatitude', $pb.PbFieldType.OD, protoName: 'centerLatitude')
    ..a<$core.double>(2, _omitFieldNames ? '' : 'centerLongitude', $pb.PbFieldType.OD, protoName: 'centerLongitude')
    ..a<$core.int>(3, _omitFieldNames ? '' : 'meterRadius', $pb.PbFieldType.OU3, protoName: 'meterRadius')
    ..a<$core.double>(4, _omitFieldNames ? '' : 'userLatitude', $pb.PbFieldType.OD, protoName: 'userLatitude')
    ..a<$core.double>(5, _omitFieldNames ? '' : 'userLongitude', $pb.PbFieldType.OD, protoName: 'userLongitude')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QueryPlaceListByRadiusRequest clone() => QueryPlaceListByRadiusRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QueryPlaceListByRadiusRequest copyWith(void Function(QueryPlaceListByRadiusRequest) updates) => super.copyWith((message) => updates(message as QueryPlaceListByRadiusRequest)) as QueryPlaceListByRadiusRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static QueryPlaceListByRadiusRequest create() => QueryPlaceListByRadiusRequest._();
  QueryPlaceListByRadiusRequest createEmptyInstance() => create();
  static $pb.PbList<QueryPlaceListByRadiusRequest> createRepeated() => $pb.PbList<QueryPlaceListByRadiusRequest>();
  @$core.pragma('dart2js:noInline')
  static QueryPlaceListByRadiusRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QueryPlaceListByRadiusRequest>(create);
  static QueryPlaceListByRadiusRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.double get centerLatitude => $_getN(0);
  @$pb.TagNumber(1)
  set centerLatitude($core.double v) { $_setDouble(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCenterLatitude() => $_has(0);
  @$pb.TagNumber(1)
  void clearCenterLatitude() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get centerLongitude => $_getN(1);
  @$pb.TagNumber(2)
  set centerLongitude($core.double v) { $_setDouble(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCenterLongitude() => $_has(1);
  @$pb.TagNumber(2)
  void clearCenterLongitude() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get meterRadius => $_getIZ(2);
  @$pb.TagNumber(3)
  set meterRadius($core.int v) { $_setUnsignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasMeterRadius() => $_has(2);
  @$pb.TagNumber(3)
  void clearMeterRadius() => clearField(3);

  @$pb.TagNumber(4)
  $core.double get userLatitude => $_getN(3);
  @$pb.TagNumber(4)
  set userLatitude($core.double v) { $_setDouble(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUserLatitude() => $_has(3);
  @$pb.TagNumber(4)
  void clearUserLatitude() => clearField(4);

  @$pb.TagNumber(5)
  $core.double get userLongitude => $_getN(4);
  @$pb.TagNumber(5)
  set userLongitude($core.double v) { $_setDouble(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasUserLongitude() => $_has(4);
  @$pb.TagNumber(5)
  void clearUserLongitude() => clearField(5);
}

class QueryPlaceListByRadiusResponse extends $pb.GeneratedMessage {
  factory QueryPlaceListByRadiusResponse({
    $core.Iterable<$2.Place>? results,
  }) {
    final $result = create();
    if (results != null) {
      $result.results.addAll(results);
    }
    return $result;
  }
  QueryPlaceListByRadiusResponse._() : super();
  factory QueryPlaceListByRadiusResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QueryPlaceListByRadiusResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'QueryPlaceListByRadiusResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$2.Place>(1, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QueryPlaceListByRadiusResponse clone() => QueryPlaceListByRadiusResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QueryPlaceListByRadiusResponse copyWith(void Function(QueryPlaceListByRadiusResponse) updates) => super.copyWith((message) => updates(message as QueryPlaceListByRadiusResponse)) as QueryPlaceListByRadiusResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static QueryPlaceListByRadiusResponse create() => QueryPlaceListByRadiusResponse._();
  QueryPlaceListByRadiusResponse createEmptyInstance() => create();
  static $pb.PbList<QueryPlaceListByRadiusResponse> createRepeated() => $pb.PbList<QueryPlaceListByRadiusResponse>();
  @$core.pragma('dart2js:noInline')
  static QueryPlaceListByRadiusResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QueryPlaceListByRadiusResponse>(create);
  static QueryPlaceListByRadiusResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Place> get results => $_getList(0);
}

class CreatePlaceRequest extends $pb.GeneratedMessage {
  factory CreatePlaceRequest({
    $core.String? name,
    $core.double? latitude,
    $core.double? longitude,
  }) {
    final $result = create();
    if (name != null) {
      $result.name = name;
    }
    if (latitude != null) {
      $result.latitude = latitude;
    }
    if (longitude != null) {
      $result.longitude = longitude;
    }
    return $result;
  }
  CreatePlaceRequest._() : super();
  factory CreatePlaceRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreatePlaceRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'name')
    ..a<$core.double>(2, _omitFieldNames ? '' : 'latitude', $pb.PbFieldType.OD)
    ..a<$core.double>(3, _omitFieldNames ? '' : 'longitude', $pb.PbFieldType.OD)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreatePlaceRequest clone() => CreatePlaceRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreatePlaceRequest copyWith(void Function(CreatePlaceRequest) updates) => super.copyWith((message) => updates(message as CreatePlaceRequest)) as CreatePlaceRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreatePlaceRequest create() => CreatePlaceRequest._();
  CreatePlaceRequest createEmptyInstance() => create();
  static $pb.PbList<CreatePlaceRequest> createRepeated() => $pb.PbList<CreatePlaceRequest>();
  @$core.pragma('dart2js:noInline')
  static CreatePlaceRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreatePlaceRequest>(create);
  static CreatePlaceRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get latitude => $_getN(1);
  @$pb.TagNumber(2)
  set latitude($core.double v) { $_setDouble(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasLatitude() => $_has(1);
  @$pb.TagNumber(2)
  void clearLatitude() => clearField(2);

  @$pb.TagNumber(3)
  $core.double get longitude => $_getN(2);
  @$pb.TagNumber(3)
  set longitude($core.double v) { $_setDouble(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasLongitude() => $_has(2);
  @$pb.TagNumber(3)
  void clearLongitude() => clearField(3);
}

class ReadPlaceRequest extends $pb.GeneratedMessage {
  factory ReadPlaceRequest({
    $core.String? id,
  }) {
    final $result = create();
    if (id != null) {
      $result.id = id;
    }
    return $result;
  }
  ReadPlaceRequest._() : super();
  factory ReadPlaceRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'id')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ReadPlaceRequest clone() => ReadPlaceRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ReadPlaceRequest copyWith(void Function(ReadPlaceRequest) updates) => super.copyWith((message) => updates(message as ReadPlaceRequest)) as ReadPlaceRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ReadPlaceRequest create() => ReadPlaceRequest._();
  ReadPlaceRequest createEmptyInstance() => create();
  static $pb.PbList<ReadPlaceRequest> createRepeated() => $pb.PbList<ReadPlaceRequest>();
  @$core.pragma('dart2js:noInline')
  static ReadPlaceRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReadPlaceRequest>(create);
  static ReadPlaceRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);
}

class ReadPlaceResponse extends $pb.GeneratedMessage {
  factory ReadPlaceResponse({
    $2.Place? place,
  }) {
    final $result = create();
    if (place != null) {
      $result.place = place;
    }
    return $result;
  }
  ReadPlaceResponse._() : super();
  factory ReadPlaceResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$2.Place>(1, _omitFieldNames ? '' : 'place', subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ReadPlaceResponse clone() => ReadPlaceResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ReadPlaceResponse copyWith(void Function(ReadPlaceResponse) updates) => super.copyWith((message) => updates(message as ReadPlaceResponse)) as ReadPlaceResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ReadPlaceResponse create() => ReadPlaceResponse._();
  ReadPlaceResponse createEmptyInstance() => create();
  static $pb.PbList<ReadPlaceResponse> createRepeated() => $pb.PbList<ReadPlaceResponse>();
  @$core.pragma('dart2js:noInline')
  static ReadPlaceResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReadPlaceResponse>(create);
  static ReadPlaceResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $2.Place get place => $_getN(0);
  @$pb.TagNumber(1)
  set place($2.Place v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlace() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlace() => clearField(1);
  @$pb.TagNumber(1)
  $2.Place ensurePlace() => $_ensure(0);
}

class ReadPlaceListRequest extends $pb.GeneratedMessage {
  factory ReadPlaceListRequest({
    $core.Iterable<ReadPlaceRequest>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  ReadPlaceListRequest._() : super();
  factory ReadPlaceListRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceListRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<ReadPlaceRequest>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: ReadPlaceRequest.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ReadPlaceListRequest clone() => ReadPlaceListRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ReadPlaceListRequest copyWith(void Function(ReadPlaceListRequest) updates) => super.copyWith((message) => updates(message as ReadPlaceListRequest)) as ReadPlaceListRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ReadPlaceListRequest create() => ReadPlaceListRequest._();
  ReadPlaceListRequest createEmptyInstance() => create();
  static $pb.PbList<ReadPlaceListRequest> createRepeated() => $pb.PbList<ReadPlaceListRequest>();
  @$core.pragma('dart2js:noInline')
  static ReadPlaceListRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReadPlaceListRequest>(create);
  static ReadPlaceListRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ReadPlaceRequest> get places => $_getList(0);
}

class ReadPlaceListResponse extends $pb.GeneratedMessage {
  factory ReadPlaceListResponse({
    $core.Iterable<$2.Place>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  ReadPlaceListResponse._() : super();
  factory ReadPlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$2.Place>(2, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ReadPlaceListResponse clone() => ReadPlaceListResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ReadPlaceListResponse copyWith(void Function(ReadPlaceListResponse) updates) => super.copyWith((message) => updates(message as ReadPlaceListResponse)) as ReadPlaceListResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ReadPlaceListResponse create() => ReadPlaceListResponse._();
  ReadPlaceListResponse createEmptyInstance() => create();
  static $pb.PbList<ReadPlaceListResponse> createRepeated() => $pb.PbList<ReadPlaceListResponse>();
  @$core.pragma('dart2js:noInline')
  static ReadPlaceListResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReadPlaceListResponse>(create);
  static ReadPlaceListResponse? _defaultInstance;

  @$pb.TagNumber(2)
  $core.List<$2.Place> get places => $_getList(0);
}

class CreatePlaceResponse extends $pb.GeneratedMessage {
  factory CreatePlaceResponse({
    $2.Place? place,
  }) {
    final $result = create();
    if (place != null) {
      $result.place = place;
    }
    return $result;
  }
  CreatePlaceResponse._() : super();
  factory CreatePlaceResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreatePlaceResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$2.Place>(1, _omitFieldNames ? '' : 'place', subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreatePlaceResponse clone() => CreatePlaceResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreatePlaceResponse copyWith(void Function(CreatePlaceResponse) updates) => super.copyWith((message) => updates(message as CreatePlaceResponse)) as CreatePlaceResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreatePlaceResponse create() => CreatePlaceResponse._();
  CreatePlaceResponse createEmptyInstance() => create();
  static $pb.PbList<CreatePlaceResponse> createRepeated() => $pb.PbList<CreatePlaceResponse>();
  @$core.pragma('dart2js:noInline')
  static CreatePlaceResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreatePlaceResponse>(create);
  static CreatePlaceResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $2.Place get place => $_getN(0);
  @$pb.TagNumber(1)
  set place($2.Place v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlace() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlace() => clearField(1);
  @$pb.TagNumber(1)
  $2.Place ensurePlace() => $_ensure(0);
}

class CreatePlaceListRequest extends $pb.GeneratedMessage {
  factory CreatePlaceListRequest({
    $core.Iterable<CreatePlaceRequest>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  CreatePlaceListRequest._() : super();
  factory CreatePlaceListRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreatePlaceListRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<CreatePlaceRequest>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: CreatePlaceRequest.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreatePlaceListRequest clone() => CreatePlaceListRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreatePlaceListRequest copyWith(void Function(CreatePlaceListRequest) updates) => super.copyWith((message) => updates(message as CreatePlaceListRequest)) as CreatePlaceListRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreatePlaceListRequest create() => CreatePlaceListRequest._();
  CreatePlaceListRequest createEmptyInstance() => create();
  static $pb.PbList<CreatePlaceListRequest> createRepeated() => $pb.PbList<CreatePlaceListRequest>();
  @$core.pragma('dart2js:noInline')
  static CreatePlaceListRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreatePlaceListRequest>(create);
  static CreatePlaceListRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<CreatePlaceRequest> get places => $_getList(0);
}

class CreatePlaceListResponse extends $pb.GeneratedMessage {
  factory CreatePlaceListResponse({
    $core.Iterable<$2.Place>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  CreatePlaceListResponse._() : super();
  factory CreatePlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreatePlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$2.Place>(2, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreatePlaceListResponse clone() => CreatePlaceListResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreatePlaceListResponse copyWith(void Function(CreatePlaceListResponse) updates) => super.copyWith((message) => updates(message as CreatePlaceListResponse)) as CreatePlaceListResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreatePlaceListResponse create() => CreatePlaceListResponse._();
  CreatePlaceListResponse createEmptyInstance() => create();
  static $pb.PbList<CreatePlaceListResponse> createRepeated() => $pb.PbList<CreatePlaceListResponse>();
  @$core.pragma('dart2js:noInline')
  static CreatePlaceListResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreatePlaceListResponse>(create);
  static CreatePlaceListResponse? _defaultInstance;

  @$pb.TagNumber(2)
  $core.List<$2.Place> get places => $_getList(0);
}

class UpdatePlaceRequest extends $pb.GeneratedMessage {
  factory UpdatePlaceRequest({
    $core.String? name,
    $core.double? latitude,
    $core.double? longitude,
  }) {
    final $result = create();
    if (name != null) {
      $result.name = name;
    }
    if (latitude != null) {
      $result.latitude = latitude;
    }
    if (longitude != null) {
      $result.longitude = longitude;
    }
    return $result;
  }
  UpdatePlaceRequest._() : super();
  factory UpdatePlaceRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdatePlaceRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'name')
    ..a<$core.double>(2, _omitFieldNames ? '' : 'latitude', $pb.PbFieldType.OD)
    ..a<$core.double>(3, _omitFieldNames ? '' : 'longitude', $pb.PbFieldType.OD)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdatePlaceRequest clone() => UpdatePlaceRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdatePlaceRequest copyWith(void Function(UpdatePlaceRequest) updates) => super.copyWith((message) => updates(message as UpdatePlaceRequest)) as UpdatePlaceRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdatePlaceRequest create() => UpdatePlaceRequest._();
  UpdatePlaceRequest createEmptyInstance() => create();
  static $pb.PbList<UpdatePlaceRequest> createRepeated() => $pb.PbList<UpdatePlaceRequest>();
  @$core.pragma('dart2js:noInline')
  static UpdatePlaceRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdatePlaceRequest>(create);
  static UpdatePlaceRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get latitude => $_getN(1);
  @$pb.TagNumber(2)
  set latitude($core.double v) { $_setDouble(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasLatitude() => $_has(1);
  @$pb.TagNumber(2)
  void clearLatitude() => clearField(2);

  @$pb.TagNumber(3)
  $core.double get longitude => $_getN(2);
  @$pb.TagNumber(3)
  set longitude($core.double v) { $_setDouble(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasLongitude() => $_has(2);
  @$pb.TagNumber(3)
  void clearLongitude() => clearField(3);
}

class UpdatePlaceResponse extends $pb.GeneratedMessage {
  factory UpdatePlaceResponse({
    $2.Place? place,
  }) {
    final $result = create();
    if (place != null) {
      $result.place = place;
    }
    return $result;
  }
  UpdatePlaceResponse._() : super();
  factory UpdatePlaceResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdatePlaceResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$2.Place>(1, _omitFieldNames ? '' : 'place', subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdatePlaceResponse clone() => UpdatePlaceResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdatePlaceResponse copyWith(void Function(UpdatePlaceResponse) updates) => super.copyWith((message) => updates(message as UpdatePlaceResponse)) as UpdatePlaceResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdatePlaceResponse create() => UpdatePlaceResponse._();
  UpdatePlaceResponse createEmptyInstance() => create();
  static $pb.PbList<UpdatePlaceResponse> createRepeated() => $pb.PbList<UpdatePlaceResponse>();
  @$core.pragma('dart2js:noInline')
  static UpdatePlaceResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdatePlaceResponse>(create);
  static UpdatePlaceResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $2.Place get place => $_getN(0);
  @$pb.TagNumber(1)
  set place($2.Place v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlace() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlace() => clearField(1);
  @$pb.TagNumber(1)
  $2.Place ensurePlace() => $_ensure(0);
}

class UpdatePlaceListRequest extends $pb.GeneratedMessage {
  factory UpdatePlaceListRequest({
    $core.Iterable<UpdatePlaceRequest>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  UpdatePlaceListRequest._() : super();
  factory UpdatePlaceListRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdatePlaceListRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<UpdatePlaceRequest>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: UpdatePlaceRequest.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdatePlaceListRequest clone() => UpdatePlaceListRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdatePlaceListRequest copyWith(void Function(UpdatePlaceListRequest) updates) => super.copyWith((message) => updates(message as UpdatePlaceListRequest)) as UpdatePlaceListRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdatePlaceListRequest create() => UpdatePlaceListRequest._();
  UpdatePlaceListRequest createEmptyInstance() => create();
  static $pb.PbList<UpdatePlaceListRequest> createRepeated() => $pb.PbList<UpdatePlaceListRequest>();
  @$core.pragma('dart2js:noInline')
  static UpdatePlaceListRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdatePlaceListRequest>(create);
  static UpdatePlaceListRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<UpdatePlaceRequest> get places => $_getList(0);
}

class UpdatePlaceListResponse extends $pb.GeneratedMessage {
  factory UpdatePlaceListResponse({
    $core.Iterable<$2.Place>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  UpdatePlaceListResponse._() : super();
  factory UpdatePlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdatePlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$2.Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdatePlaceListResponse clone() => UpdatePlaceListResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdatePlaceListResponse copyWith(void Function(UpdatePlaceListResponse) updates) => super.copyWith((message) => updates(message as UpdatePlaceListResponse)) as UpdatePlaceListResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdatePlaceListResponse create() => UpdatePlaceListResponse._();
  UpdatePlaceListResponse createEmptyInstance() => create();
  static $pb.PbList<UpdatePlaceListResponse> createRepeated() => $pb.PbList<UpdatePlaceListResponse>();
  @$core.pragma('dart2js:noInline')
  static UpdatePlaceListResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdatePlaceListResponse>(create);
  static UpdatePlaceListResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Place> get places => $_getList(0);
}

class DeletePlaceRequest extends $pb.GeneratedMessage {
  factory DeletePlaceRequest({
    $core.String? id,
  }) {
    final $result = create();
    if (id != null) {
      $result.id = id;
    }
    return $result;
  }
  DeletePlaceRequest._() : super();
  factory DeletePlaceRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeletePlaceRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'id')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeletePlaceRequest clone() => DeletePlaceRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeletePlaceRequest copyWith(void Function(DeletePlaceRequest) updates) => super.copyWith((message) => updates(message as DeletePlaceRequest)) as DeletePlaceRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static DeletePlaceRequest create() => DeletePlaceRequest._();
  DeletePlaceRequest createEmptyInstance() => create();
  static $pb.PbList<DeletePlaceRequest> createRepeated() => $pb.PbList<DeletePlaceRequest>();
  @$core.pragma('dart2js:noInline')
  static DeletePlaceRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeletePlaceRequest>(create);
  static DeletePlaceRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);
}

class DeletePlaceResponse extends $pb.GeneratedMessage {
  factory DeletePlaceResponse({
    $2.Place? place,
  }) {
    final $result = create();
    if (place != null) {
      $result.place = place;
    }
    return $result;
  }
  DeletePlaceResponse._() : super();
  factory DeletePlaceResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeletePlaceResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$2.Place>(1, _omitFieldNames ? '' : 'place', subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeletePlaceResponse clone() => DeletePlaceResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeletePlaceResponse copyWith(void Function(DeletePlaceResponse) updates) => super.copyWith((message) => updates(message as DeletePlaceResponse)) as DeletePlaceResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static DeletePlaceResponse create() => DeletePlaceResponse._();
  DeletePlaceResponse createEmptyInstance() => create();
  static $pb.PbList<DeletePlaceResponse> createRepeated() => $pb.PbList<DeletePlaceResponse>();
  @$core.pragma('dart2js:noInline')
  static DeletePlaceResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeletePlaceResponse>(create);
  static DeletePlaceResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $2.Place get place => $_getN(0);
  @$pb.TagNumber(1)
  set place($2.Place v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlace() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlace() => clearField(1);
  @$pb.TagNumber(1)
  $2.Place ensurePlace() => $_ensure(0);
}

class DeletePlaceListRequest extends $pb.GeneratedMessage {
  factory DeletePlaceListRequest({
    $core.Iterable<DeletePlaceRequest>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  DeletePlaceListRequest._() : super();
  factory DeletePlaceListRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeletePlaceListRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<DeletePlaceRequest>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: DeletePlaceRequest.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeletePlaceListRequest clone() => DeletePlaceListRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeletePlaceListRequest copyWith(void Function(DeletePlaceListRequest) updates) => super.copyWith((message) => updates(message as DeletePlaceListRequest)) as DeletePlaceListRequest;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static DeletePlaceListRequest create() => DeletePlaceListRequest._();
  DeletePlaceListRequest createEmptyInstance() => create();
  static $pb.PbList<DeletePlaceListRequest> createRepeated() => $pb.PbList<DeletePlaceListRequest>();
  @$core.pragma('dart2js:noInline')
  static DeletePlaceListRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeletePlaceListRequest>(create);
  static DeletePlaceListRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<DeletePlaceRequest> get places => $_getList(0);
}

class DeletePlaceListResponse extends $pb.GeneratedMessage {
  factory DeletePlaceListResponse({
    $core.Iterable<$2.Place>? places,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    return $result;
  }
  DeletePlaceListResponse._() : super();
  factory DeletePlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeletePlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$2.Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: $2.Place.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeletePlaceListResponse clone() => DeletePlaceListResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeletePlaceListResponse copyWith(void Function(DeletePlaceListResponse) updates) => super.copyWith((message) => updates(message as DeletePlaceListResponse)) as DeletePlaceListResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static DeletePlaceListResponse create() => DeletePlaceListResponse._();
  DeletePlaceListResponse createEmptyInstance() => create();
  static $pb.PbList<DeletePlaceListResponse> createRepeated() => $pb.PbList<DeletePlaceListResponse>();
  @$core.pragma('dart2js:noInline')
  static DeletePlaceListResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeletePlaceListResponse>(create);
  static DeletePlaceListResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Place> get places => $_getList(0);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
