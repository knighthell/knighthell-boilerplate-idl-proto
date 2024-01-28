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

import 'period-datetime.pb.dart' as $4;
import 'place.pb.dart' as $3;
import 'response-info.pb.dart' as $5;

export 'place.service.pbenum.dart';

class CreatePlaceListRequest_Place extends $pb.GeneratedMessage {
  factory CreatePlaceListRequest_Place({
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
  CreatePlaceListRequest_Place._() : super();
  factory CreatePlaceListRequest_Place.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreatePlaceListRequest_Place.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(2, _omitFieldNames ? '' : 'name')
    ..a<$core.double>(3, _omitFieldNames ? '' : 'latitude', $pb.PbFieldType.OD)
    ..a<$core.double>(4, _omitFieldNames ? '' : 'longitude', $pb.PbFieldType.OD)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CreatePlaceListRequest_Place clone() => CreatePlaceListRequest_Place()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CreatePlaceListRequest_Place copyWith(void Function(CreatePlaceListRequest_Place) updates) => super.copyWith((message) => updates(message as CreatePlaceListRequest_Place)) as CreatePlaceListRequest_Place;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static CreatePlaceListRequest_Place create() => CreatePlaceListRequest_Place._();
  CreatePlaceListRequest_Place createEmptyInstance() => create();
  static $pb.PbList<CreatePlaceListRequest_Place> createRepeated() => $pb.PbList<CreatePlaceListRequest_Place>();
  @$core.pragma('dart2js:noInline')
  static CreatePlaceListRequest_Place getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CreatePlaceListRequest_Place>(create);
  static CreatePlaceListRequest_Place? _defaultInstance;

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.double get latitude => $_getN(1);
  @$pb.TagNumber(3)
  set latitude($core.double v) { $_setDouble(1, v); }
  @$pb.TagNumber(3)
  $core.bool hasLatitude() => $_has(1);
  @$pb.TagNumber(3)
  void clearLatitude() => clearField(3);

  @$pb.TagNumber(4)
  $core.double get longitude => $_getN(2);
  @$pb.TagNumber(4)
  set longitude($core.double v) { $_setDouble(2, v); }
  @$pb.TagNumber(4)
  $core.bool hasLongitude() => $_has(2);
  @$pb.TagNumber(4)
  void clearLongitude() => clearField(4);
}

class CreatePlaceListRequest extends $pb.GeneratedMessage {
  factory CreatePlaceListRequest({
    $core.Iterable<CreatePlaceListRequest_Place>? places,
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
    ..pc<CreatePlaceListRequest_Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: CreatePlaceListRequest_Place.create)
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
  $core.List<CreatePlaceListRequest_Place> get places => $_getList(0);
}

class CreatePlaceListResponse extends $pb.GeneratedMessage {
  factory CreatePlaceListResponse({
    $core.Iterable<$3.Place>? results,
  }) {
    final $result = create();
    if (results != null) {
      $result.results.addAll(results);
    }
    return $result;
  }
  CreatePlaceListResponse._() : super();
  factory CreatePlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CreatePlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$3.Place>(5, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $3.Place.create)
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

  @$pb.TagNumber(5)
  $core.List<$3.Place> get results => $_getList(0);
}

class ReadPlaceListRequest_Place extends $pb.GeneratedMessage {
  factory ReadPlaceListRequest_Place({
    $core.String? placeId,
  }) {
    final $result = create();
    if (placeId != null) {
      $result.placeId = placeId;
    }
    return $result;
  }
  ReadPlaceListRequest_Place._() : super();
  factory ReadPlaceListRequest_Place.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceListRequest_Place.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'placeId', protoName: 'placeId')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ReadPlaceListRequest_Place clone() => ReadPlaceListRequest_Place()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ReadPlaceListRequest_Place copyWith(void Function(ReadPlaceListRequest_Place) updates) => super.copyWith((message) => updates(message as ReadPlaceListRequest_Place)) as ReadPlaceListRequest_Place;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static ReadPlaceListRequest_Place create() => ReadPlaceListRequest_Place._();
  ReadPlaceListRequest_Place createEmptyInstance() => create();
  static $pb.PbList<ReadPlaceListRequest_Place> createRepeated() => $pb.PbList<ReadPlaceListRequest_Place>();
  @$core.pragma('dart2js:noInline')
  static ReadPlaceListRequest_Place getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ReadPlaceListRequest_Place>(create);
  static ReadPlaceListRequest_Place? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get placeId => $_getSZ(0);
  @$pb.TagNumber(1)
  set placeId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlaceId() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlaceId() => clearField(1);
}

class ReadPlaceListRequest extends $pb.GeneratedMessage {
  factory ReadPlaceListRequest({
    $core.Iterable<ReadPlaceListRequest_Place>? places,
    $core.String? keywords,
    $4.PeriodDateTime? createdAtPeriod,
    $4.PeriodDateTime? updatedAtPeriod,
    $4.PeriodDateTime? deletedAtPeriod,
    $core.bool? isIncludeDeletedPlace,
    BoundSquare? boundSquare,
    BoundCircle? boundCircle,
    $3.Wgs84Coordinates? userLocation,
    Pagination? pagination,
  }) {
    final $result = create();
    if (places != null) {
      $result.places.addAll(places);
    }
    if (keywords != null) {
      $result.keywords = keywords;
    }
    if (createdAtPeriod != null) {
      $result.createdAtPeriod = createdAtPeriod;
    }
    if (updatedAtPeriod != null) {
      $result.updatedAtPeriod = updatedAtPeriod;
    }
    if (deletedAtPeriod != null) {
      $result.deletedAtPeriod = deletedAtPeriod;
    }
    if (isIncludeDeletedPlace != null) {
      $result.isIncludeDeletedPlace = isIncludeDeletedPlace;
    }
    if (boundSquare != null) {
      $result.boundSquare = boundSquare;
    }
    if (boundCircle != null) {
      $result.boundCircle = boundCircle;
    }
    if (userLocation != null) {
      $result.userLocation = userLocation;
    }
    if (pagination != null) {
      $result.pagination = pagination;
    }
    return $result;
  }
  ReadPlaceListRequest._() : super();
  factory ReadPlaceListRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceListRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<ReadPlaceListRequest_Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: ReadPlaceListRequest_Place.create)
    ..aOS(2, _omitFieldNames ? '' : 'keywords')
    ..aOM<$4.PeriodDateTime>(3, _omitFieldNames ? '' : 'createdAtPeriod', protoName: 'createdAtPeriod', subBuilder: $4.PeriodDateTime.create)
    ..aOM<$4.PeriodDateTime>(4, _omitFieldNames ? '' : 'updatedAtPeriod', protoName: 'updatedAtPeriod', subBuilder: $4.PeriodDateTime.create)
    ..aOM<$4.PeriodDateTime>(5, _omitFieldNames ? '' : 'deletedAtPeriod', protoName: 'deletedAtPeriod', subBuilder: $4.PeriodDateTime.create)
    ..aOB(6, _omitFieldNames ? '' : 'isIncludeDeletedPlace', protoName: 'isIncludeDeletedPlace')
    ..aOM<BoundSquare>(7, _omitFieldNames ? '' : 'boundSquare', protoName: 'boundSquare', subBuilder: BoundSquare.create)
    ..aOM<BoundCircle>(8, _omitFieldNames ? '' : 'boundCircle', protoName: 'boundCircle', subBuilder: BoundCircle.create)
    ..aOM<$3.Wgs84Coordinates>(9, _omitFieldNames ? '' : 'userLocation', protoName: 'userLocation', subBuilder: $3.Wgs84Coordinates.create)
    ..aOM<Pagination>(10, _omitFieldNames ? '' : 'pagination', subBuilder: Pagination.create)
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
  $core.List<ReadPlaceListRequest_Place> get places => $_getList(0);

  @$pb.TagNumber(2)
  $core.String get keywords => $_getSZ(1);
  @$pb.TagNumber(2)
  set keywords($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasKeywords() => $_has(1);
  @$pb.TagNumber(2)
  void clearKeywords() => clearField(2);

  @$pb.TagNumber(3)
  $4.PeriodDateTime get createdAtPeriod => $_getN(2);
  @$pb.TagNumber(3)
  set createdAtPeriod($4.PeriodDateTime v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAtPeriod() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAtPeriod() => clearField(3);
  @$pb.TagNumber(3)
  $4.PeriodDateTime ensureCreatedAtPeriod() => $_ensure(2);

  @$pb.TagNumber(4)
  $4.PeriodDateTime get updatedAtPeriod => $_getN(3);
  @$pb.TagNumber(4)
  set updatedAtPeriod($4.PeriodDateTime v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasUpdatedAtPeriod() => $_has(3);
  @$pb.TagNumber(4)
  void clearUpdatedAtPeriod() => clearField(4);
  @$pb.TagNumber(4)
  $4.PeriodDateTime ensureUpdatedAtPeriod() => $_ensure(3);

  @$pb.TagNumber(5)
  $4.PeriodDateTime get deletedAtPeriod => $_getN(4);
  @$pb.TagNumber(5)
  set deletedAtPeriod($4.PeriodDateTime v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasDeletedAtPeriod() => $_has(4);
  @$pb.TagNumber(5)
  void clearDeletedAtPeriod() => clearField(5);
  @$pb.TagNumber(5)
  $4.PeriodDateTime ensureDeletedAtPeriod() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.bool get isIncludeDeletedPlace => $_getBF(5);
  @$pb.TagNumber(6)
  set isIncludeDeletedPlace($core.bool v) { $_setBool(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasIsIncludeDeletedPlace() => $_has(5);
  @$pb.TagNumber(6)
  void clearIsIncludeDeletedPlace() => clearField(6);

  @$pb.TagNumber(7)
  BoundSquare get boundSquare => $_getN(6);
  @$pb.TagNumber(7)
  set boundSquare(BoundSquare v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasBoundSquare() => $_has(6);
  @$pb.TagNumber(7)
  void clearBoundSquare() => clearField(7);
  @$pb.TagNumber(7)
  BoundSquare ensureBoundSquare() => $_ensure(6);

  @$pb.TagNumber(8)
  BoundCircle get boundCircle => $_getN(7);
  @$pb.TagNumber(8)
  set boundCircle(BoundCircle v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasBoundCircle() => $_has(7);
  @$pb.TagNumber(8)
  void clearBoundCircle() => clearField(8);
  @$pb.TagNumber(8)
  BoundCircle ensureBoundCircle() => $_ensure(7);

  @$pb.TagNumber(9)
  $3.Wgs84Coordinates get userLocation => $_getN(8);
  @$pb.TagNumber(9)
  set userLocation($3.Wgs84Coordinates v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasUserLocation() => $_has(8);
  @$pb.TagNumber(9)
  void clearUserLocation() => clearField(9);
  @$pb.TagNumber(9)
  $3.Wgs84Coordinates ensureUserLocation() => $_ensure(8);

  @$pb.TagNumber(10)
  Pagination get pagination => $_getN(9);
  @$pb.TagNumber(10)
  set pagination(Pagination v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasPagination() => $_has(9);
  @$pb.TagNumber(10)
  void clearPagination() => clearField(10);
  @$pb.TagNumber(10)
  Pagination ensurePagination() => $_ensure(9);
}

class ReadPlaceListResponse extends $pb.GeneratedMessage {
  factory ReadPlaceListResponse({
    $5.ResponseInfo? responseInfo,
    $core.Iterable<$3.Place>? results,
  }) {
    final $result = create();
    if (responseInfo != null) {
      $result.responseInfo = responseInfo;
    }
    if (results != null) {
      $result.results.addAll(results);
    }
    return $result;
  }
  ReadPlaceListResponse._() : super();
  factory ReadPlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ReadPlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$5.ResponseInfo>(1, _omitFieldNames ? '' : 'responseInfo', protoName: 'responseInfo', subBuilder: $5.ResponseInfo.create)
    ..pc<$3.Place>(2, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $3.Place.create)
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

  @$pb.TagNumber(1)
  $5.ResponseInfo get responseInfo => $_getN(0);
  @$pb.TagNumber(1)
  set responseInfo($5.ResponseInfo v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasResponseInfo() => $_has(0);
  @$pb.TagNumber(1)
  void clearResponseInfo() => clearField(1);
  @$pb.TagNumber(1)
  $5.ResponseInfo ensureResponseInfo() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$3.Place> get results => $_getList(1);
}

class UpdatePlaceListRequest_Place extends $pb.GeneratedMessage {
  factory UpdatePlaceListRequest_Place({
    $core.String? placeId,
    $core.String? name,
    $core.double? latitude,
    $core.double? longitude,
  }) {
    final $result = create();
    if (placeId != null) {
      $result.placeId = placeId;
    }
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
  UpdatePlaceListRequest_Place._() : super();
  factory UpdatePlaceListRequest_Place.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdatePlaceListRequest_Place.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'placeId', protoName: 'placeId')
    ..aOS(2, _omitFieldNames ? '' : 'name')
    ..a<$core.double>(3, _omitFieldNames ? '' : 'latitude', $pb.PbFieldType.OD)
    ..a<$core.double>(4, _omitFieldNames ? '' : 'longitude', $pb.PbFieldType.OD)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdatePlaceListRequest_Place clone() => UpdatePlaceListRequest_Place()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdatePlaceListRequest_Place copyWith(void Function(UpdatePlaceListRequest_Place) updates) => super.copyWith((message) => updates(message as UpdatePlaceListRequest_Place)) as UpdatePlaceListRequest_Place;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdatePlaceListRequest_Place create() => UpdatePlaceListRequest_Place._();
  UpdatePlaceListRequest_Place createEmptyInstance() => create();
  static $pb.PbList<UpdatePlaceListRequest_Place> createRepeated() => $pb.PbList<UpdatePlaceListRequest_Place>();
  @$core.pragma('dart2js:noInline')
  static UpdatePlaceListRequest_Place getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdatePlaceListRequest_Place>(create);
  static UpdatePlaceListRequest_Place? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get placeId => $_getSZ(0);
  @$pb.TagNumber(1)
  set placeId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlaceId() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlaceId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.double get latitude => $_getN(2);
  @$pb.TagNumber(3)
  set latitude($core.double v) { $_setDouble(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasLatitude() => $_has(2);
  @$pb.TagNumber(3)
  void clearLatitude() => clearField(3);

  @$pb.TagNumber(4)
  $core.double get longitude => $_getN(3);
  @$pb.TagNumber(4)
  set longitude($core.double v) { $_setDouble(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasLongitude() => $_has(3);
  @$pb.TagNumber(4)
  void clearLongitude() => clearField(4);
}

class UpdatePlaceListRequest extends $pb.GeneratedMessage {
  factory UpdatePlaceListRequest({
    $core.Iterable<UpdatePlaceListRequest_Place>? places,
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
    ..pc<UpdatePlaceListRequest_Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: UpdatePlaceListRequest_Place.create)
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
  $core.List<UpdatePlaceListRequest_Place> get places => $_getList(0);
}

class UpdatePlaceListResponse extends $pb.GeneratedMessage {
  factory UpdatePlaceListResponse({
    $core.Iterable<$3.Place>? results,
  }) {
    final $result = create();
    if (results != null) {
      $result.results.addAll(results);
    }
    return $result;
  }
  UpdatePlaceListResponse._() : super();
  factory UpdatePlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdatePlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$3.Place>(2, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $3.Place.create)
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

  @$pb.TagNumber(2)
  $core.List<$3.Place> get results => $_getList(0);
}

class DeletePlaceListRequest_Place extends $pb.GeneratedMessage {
  factory DeletePlaceListRequest_Place({
    $core.String? placeId,
  }) {
    final $result = create();
    if (placeId != null) {
      $result.placeId = placeId;
    }
    return $result;
  }
  DeletePlaceListRequest_Place._() : super();
  factory DeletePlaceListRequest_Place.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeletePlaceListRequest_Place.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'placeId', protoName: 'placeId')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DeletePlaceListRequest_Place clone() => DeletePlaceListRequest_Place()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DeletePlaceListRequest_Place copyWith(void Function(DeletePlaceListRequest_Place) updates) => super.copyWith((message) => updates(message as DeletePlaceListRequest_Place)) as DeletePlaceListRequest_Place;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static DeletePlaceListRequest_Place create() => DeletePlaceListRequest_Place._();
  DeletePlaceListRequest_Place createEmptyInstance() => create();
  static $pb.PbList<DeletePlaceListRequest_Place> createRepeated() => $pb.PbList<DeletePlaceListRequest_Place>();
  @$core.pragma('dart2js:noInline')
  static DeletePlaceListRequest_Place getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DeletePlaceListRequest_Place>(create);
  static DeletePlaceListRequest_Place? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get placeId => $_getSZ(0);
  @$pb.TagNumber(1)
  set placeId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlaceId() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlaceId() => clearField(1);
}

class DeletePlaceListRequest extends $pb.GeneratedMessage {
  factory DeletePlaceListRequest({
    $core.Iterable<DeletePlaceListRequest_Place>? places,
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
    ..pc<DeletePlaceListRequest_Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: DeletePlaceListRequest_Place.create)
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
  $core.List<DeletePlaceListRequest_Place> get places => $_getList(0);
}

class DeletePlaceListResponse extends $pb.GeneratedMessage {
  factory DeletePlaceListResponse({
    $core.Iterable<$3.Place>? results,
  }) {
    final $result = create();
    if (results != null) {
      $result.results.addAll(results);
    }
    return $result;
  }
  DeletePlaceListResponse._() : super();
  factory DeletePlaceListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DeletePlaceListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..pc<$3.Place>(2, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $3.Place.create)
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

  @$pb.TagNumber(2)
  $core.List<$3.Place> get results => $_getList(0);
}

class BoundSquare extends $pb.GeneratedMessage {
  factory BoundSquare({
    $3.Wgs84Coordinates? topRight,
    $3.Wgs84Coordinates? bottomLeft,
  }) {
    final $result = create();
    if (topRight != null) {
      $result.topRight = topRight;
    }
    if (bottomLeft != null) {
      $result.bottomLeft = bottomLeft;
    }
    return $result;
  }
  BoundSquare._() : super();
  factory BoundSquare.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BoundSquare.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'BoundSquare', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$3.Wgs84Coordinates>(1, _omitFieldNames ? '' : 'topRight', protoName: 'topRight', subBuilder: $3.Wgs84Coordinates.create)
    ..aOM<$3.Wgs84Coordinates>(2, _omitFieldNames ? '' : 'bottomLeft', protoName: 'bottomLeft', subBuilder: $3.Wgs84Coordinates.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BoundSquare clone() => BoundSquare()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BoundSquare copyWith(void Function(BoundSquare) updates) => super.copyWith((message) => updates(message as BoundSquare)) as BoundSquare;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static BoundSquare create() => BoundSquare._();
  BoundSquare createEmptyInstance() => create();
  static $pb.PbList<BoundSquare> createRepeated() => $pb.PbList<BoundSquare>();
  @$core.pragma('dart2js:noInline')
  static BoundSquare getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BoundSquare>(create);
  static BoundSquare? _defaultInstance;

  @$pb.TagNumber(1)
  $3.Wgs84Coordinates get topRight => $_getN(0);
  @$pb.TagNumber(1)
  set topRight($3.Wgs84Coordinates v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasTopRight() => $_has(0);
  @$pb.TagNumber(1)
  void clearTopRight() => clearField(1);
  @$pb.TagNumber(1)
  $3.Wgs84Coordinates ensureTopRight() => $_ensure(0);

  @$pb.TagNumber(2)
  $3.Wgs84Coordinates get bottomLeft => $_getN(1);
  @$pb.TagNumber(2)
  set bottomLeft($3.Wgs84Coordinates v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasBottomLeft() => $_has(1);
  @$pb.TagNumber(2)
  void clearBottomLeft() => clearField(2);
  @$pb.TagNumber(2)
  $3.Wgs84Coordinates ensureBottomLeft() => $_ensure(1);
}

class BoundCircle extends $pb.GeneratedMessage {
  factory BoundCircle({
    $3.Wgs84Coordinates? center,
    $core.int? radiusMeter,
  }) {
    final $result = create();
    if (center != null) {
      $result.center = center;
    }
    if (radiusMeter != null) {
      $result.radiusMeter = radiusMeter;
    }
    return $result;
  }
  BoundCircle._() : super();
  factory BoundCircle.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BoundCircle.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'BoundCircle', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOM<$3.Wgs84Coordinates>(1, _omitFieldNames ? '' : 'center', subBuilder: $3.Wgs84Coordinates.create)
    ..a<$core.int>(2, _omitFieldNames ? '' : 'radiusMeter', $pb.PbFieldType.O3, protoName: 'radiusMeter')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BoundCircle clone() => BoundCircle()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BoundCircle copyWith(void Function(BoundCircle) updates) => super.copyWith((message) => updates(message as BoundCircle)) as BoundCircle;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static BoundCircle create() => BoundCircle._();
  BoundCircle createEmptyInstance() => create();
  static $pb.PbList<BoundCircle> createRepeated() => $pb.PbList<BoundCircle>();
  @$core.pragma('dart2js:noInline')
  static BoundCircle getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BoundCircle>(create);
  static BoundCircle? _defaultInstance;

  @$pb.TagNumber(1)
  $3.Wgs84Coordinates get center => $_getN(0);
  @$pb.TagNumber(1)
  set center($3.Wgs84Coordinates v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasCenter() => $_has(0);
  @$pb.TagNumber(1)
  void clearCenter() => clearField(1);
  @$pb.TagNumber(1)
  $3.Wgs84Coordinates ensureCenter() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.int get radiusMeter => $_getIZ(1);
  @$pb.TagNumber(2)
  set radiusMeter($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasRadiusMeter() => $_has(1);
  @$pb.TagNumber(2)
  void clearRadiusMeter() => clearField(2);
}

class Pagination extends $pb.GeneratedMessage {
  factory Pagination({
    $core.int? pageNumber,
    $core.int? rowPerPage,
  }) {
    final $result = create();
    if (pageNumber != null) {
      $result.pageNumber = pageNumber;
    }
    if (rowPerPage != null) {
      $result.rowPerPage = rowPerPage;
    }
    return $result;
  }
  Pagination._() : super();
  factory Pagination.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Pagination.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'Pagination', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..a<$core.int>(10, _omitFieldNames ? '' : 'pageNumber', $pb.PbFieldType.O3, protoName: 'pageNumber')
    ..a<$core.int>(11, _omitFieldNames ? '' : 'rowPerPage', $pb.PbFieldType.O3, protoName: 'rowPerPage')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Pagination clone() => Pagination()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Pagination copyWith(void Function(Pagination) updates) => super.copyWith((message) => updates(message as Pagination)) as Pagination;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static Pagination create() => Pagination._();
  Pagination createEmptyInstance() => create();
  static $pb.PbList<Pagination> createRepeated() => $pb.PbList<Pagination>();
  @$core.pragma('dart2js:noInline')
  static Pagination getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Pagination>(create);
  static Pagination? _defaultInstance;

  @$pb.TagNumber(10)
  $core.int get pageNumber => $_getIZ(0);
  @$pb.TagNumber(10)
  set pageNumber($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(10)
  $core.bool hasPageNumber() => $_has(0);
  @$pb.TagNumber(10)
  void clearPageNumber() => clearField(10);

  @$pb.TagNumber(11)
  $core.int get rowPerPage => $_getIZ(1);
  @$pb.TagNumber(11)
  set rowPerPage($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(11)
  $core.bool hasRowPerPage() => $_has(1);
  @$pb.TagNumber(11)
  void clearRowPerPage() => clearField(11);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
