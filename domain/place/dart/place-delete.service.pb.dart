//
//  Generated code. Do not modify.
//  source: place-delete.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'place.pb.dart' as $6;

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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListRequest.Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.delete'), createEmptyInstance: create)
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListRequest', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.delete'), createEmptyInstance: create)
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
    $core.Iterable<$6.Place>? results,
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

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'DeletePlaceListResponse', package: const $pb.PackageName(_omitMessageNames ? '' : 'place.service.delete'), createEmptyInstance: create)
    ..pc<$6.Place>(2, _omitFieldNames ? '' : 'results', $pb.PbFieldType.PM, subBuilder: $6.Place.create)
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
  $core.List<$6.Place> get results => $_getList(0);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
