//
//  Generated code. Do not modify.
//  source: place-read.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'period-datetime.pb.dart' as $7;
import 'place.pb.dart' as $6;
import 'response-info.pb.dart' as $8;

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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.read'), createEmptyInstance: create)
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
    $7.PeriodDateTime? createdAtPeriod,
    $7.PeriodDateTime? updatedAtPeriod,
    $7.PeriodDateTime? deletedAtPeriod,
    $core.bool? isIncludeDeletedPlace,
    BoundSquare? boundSquare,
    BoundCircle? boundCircle,
    $6.Wgs84Coordinates? userLocation,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.read'), createEmptyInstance: create)
    ..pc<ReadPlaceListRequest_Place>(1, _omitFieldNames ? '' : 'places', $pb.PbFieldType.PM, subBuilder: ReadPlaceListRequest_Place.create)
    ..aOS(2, _omitFieldNames ? '' : 'keywords')
    ..aOM<$7.PeriodDateTime>(3, _omitFieldNames ? '' : 'createdAtPeriod', protoName: 'createdAtPeriod', subBuilder: $7.PeriodDateTime.create)
    ..aOM<$7.PeriodDateTime>(4, _omitFieldNames ? '' : 'updatedAtPeriod', protoName: 'updatedAtPeriod', subBuilder: $7.PeriodDateTime.create)
    ..aOM<$7.PeriodDateTime>(5, _omitFieldNames ? '' : 'deletedAtPeriod', protoName: 'deletedAtPeriod', subBuilder: $7.PeriodDateTime.create)
    ..aOB(6, _omitFieldNames ? '' : 'isIncludeDeletedPlace', protoName: 'isIncludeDeletedPlace')
    ..aOM<BoundSquare>(7, _omitFieldNames ? '' : 'boundSquare', protoName: 'boundSquare', subBuilder: BoundSquare.create)
    ..aOM<BoundCircle>(8, _omitFieldNames ? '' : 'boundCircle', protoName: 'boundCircle', subBuilder: BoundCircle.create)
    ..aOM<$6.Wgs84Coordinates>(9, _omitFieldNames ? '' : 'userLocation', protoName: 'userLocation', subBuilder: $6.Wgs84Coordinates.create)
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
  $7.PeriodDateTime get createdAtPeriod => $_getN(2);
  @$pb.TagNumber(3)
  set createdAtPeriod($7.PeriodDateTime v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCreatedAtPeriod() => $_has(2);
  @$pb.TagNumber(3)
  void clearCreatedAtPeriod() => clearField(3);
  @$pb.TagNumber(3)
  $7.PeriodDateTime ensureCreatedAtPeriod() => $_ensure(2);

  @$pb.TagNumber(4)
  $7.PeriodDateTime get updatedAtPeriod => $_getN(3);
  @$pb.TagNumber(4)
  set updatedAtPeriod($7.PeriodDateTime v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasUpdatedAtPeriod() => $_has(3);
  @$pb.TagNumber(4)
  void clearUpdatedAtPeriod() => clearField(4);
  @$pb.TagNumber(4)
  $7.PeriodDateTime ensureUpdatedAtPeriod() => $_ensure(3);

  @$pb.TagNumber(5)
  $7.PeriodDateTime get deletedAtPeriod => $_getN(4);
  @$pb.TagNumber(5)
  set deletedAtPeriod($7.PeriodDateTime v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasDeletedAtPeriod() => $_has(4);
  @$pb.TagNumber(5)
  void clearDeletedAtPeriod() => clearField(5);
  @$pb.TagNumber(5)
  $7.PeriodDateTime ensureDeletedAtPeriod() => $_ensure(4);

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
  $6.Wgs84Coordinates get userLocation => $_getN(8);
  @$pb.TagNumber(9)
  set userLocation($6.Wgs84Coordinates v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasUserLocation() => $_has(8);
  @$pb.TagNumber(9)
  void clearUserLocation() => clearField(9);
  @$pb.TagNumber(9)
  $6.Wgs84Coordinates ensureUserLocation() => $_ensure(8);

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
    $8.ResponseInfo? responseInfo,
    $core.Iterable<$6.Place>? results,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'ReadPlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.read'), createEmptyInstance: create)
    ..aOM<$8.ResponseInfo>(1, _omitFieldNames ? '' : 'responseInfo', protoName: 'responseInfo', subBuilder: $8.ResponseInfo.create)
    ..pc<$6.Place>(2, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $6.Place.create)
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
  $8.ResponseInfo get responseInfo => $_getN(0);
  @$pb.TagNumber(1)
  set responseInfo($8.ResponseInfo v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasResponseInfo() => $_has(0);
  @$pb.TagNumber(1)
  void clearResponseInfo() => clearField(1);
  @$pb.TagNumber(1)
  $8.ResponseInfo ensureResponseInfo() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$6.Place> get results => $_getList(1);
}

class BoundSquare extends $pb.GeneratedMessage {
  factory BoundSquare({
    $6.Wgs84Coordinates? topRight,
    $6.Wgs84Coordinates? bottomLeft,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'BoundSquare', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.read'), createEmptyInstance: create)
    ..aOM<$6.Wgs84Coordinates>(1, _omitFieldNames ? '' : 'topRight', protoName: 'topRight', subBuilder: $6.Wgs84Coordinates.create)
    ..aOM<$6.Wgs84Coordinates>(2, _omitFieldNames ? '' : 'bottomLeft', protoName: 'bottomLeft', subBuilder: $6.Wgs84Coordinates.create)
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
  $6.Wgs84Coordinates get topRight => $_getN(0);
  @$pb.TagNumber(1)
  set topRight($6.Wgs84Coordinates v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasTopRight() => $_has(0);
  @$pb.TagNumber(1)
  void clearTopRight() => clearField(1);
  @$pb.TagNumber(1)
  $6.Wgs84Coordinates ensureTopRight() => $_ensure(0);

  @$pb.TagNumber(2)
  $6.Wgs84Coordinates get bottomLeft => $_getN(1);
  @$pb.TagNumber(2)
  set bottomLeft($6.Wgs84Coordinates v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasBottomLeft() => $_has(1);
  @$pb.TagNumber(2)
  void clearBottomLeft() => clearField(2);
  @$pb.TagNumber(2)
  $6.Wgs84Coordinates ensureBottomLeft() => $_ensure(1);
}

class BoundCircle extends $pb.GeneratedMessage {
  factory BoundCircle({
    $6.Wgs84Coordinates? center,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'BoundCircle', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.read'), createEmptyInstance: create)
    ..aOM<$6.Wgs84Coordinates>(1, _omitFieldNames ? '' : 'center', subBuilder: $6.Wgs84Coordinates.create)
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
  $6.Wgs84Coordinates get center => $_getN(0);
  @$pb.TagNumber(1)
  set center($6.Wgs84Coordinates v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasCenter() => $_has(0);
  @$pb.TagNumber(1)
  void clearCenter() => clearField(1);
  @$pb.TagNumber(1)
  $6.Wgs84Coordinates ensureCenter() => $_ensure(0);

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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'Pagination', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.read'), createEmptyInstance: create)
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
