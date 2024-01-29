//
//  Generated code. Do not modify.
//  source: place-create.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'place.pb.dart' as $6;

export 'place-create.service.pbenum.dart';

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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.create'), createEmptyInstance: create)
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.create'), createEmptyInstance: create)
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
    $core.Iterable<$6.Place>? results,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'CreatePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.create'), createEmptyInstance: create)
    ..pc<$6.Place>(5, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $6.Place.create)
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
  $core.List<$6.Place> get results => $_getList(0);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
