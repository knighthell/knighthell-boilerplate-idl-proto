//
//  Generated code. Do not modify.
//  source: place-update.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'place.pb.dart' as $6;

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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.update'), createEmptyInstance: create)
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.update'), createEmptyInstance: create)
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
    $core.Iterable<$6.Place>? results,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdatePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.update'), createEmptyInstance: create)
    ..pc<$6.Place>(2, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $6.Place.create)
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
  $core.List<$6.Place> get results => $_getList(0);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
