//
//  Generated code. Do not modify.
//  source: place.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $5;
import 'place-user.pb.dart' as $4;

class Place extends $pb.GeneratedMessage {
  factory Place({
    $core.String? placeId,
    $core.double? latitude,
    $core.double? longitude,
    $4.PlaceUser? createdBy,
    $5.Timestamp? createdAt,
    $4.PlaceUser? updatedBy,
    $5.Timestamp? updatedAt,
    $4.PlaceUser? deletedBy,
    $5.Timestamp? deletedAt,
    $core.String? name,
    PlaceNameTranslation? nameTranslation,
    PlaceAddress? address,
    $core.int? distanceFromUser,
  }) {
    final $result = create();
    if (placeId != null) {
      $result.placeId = placeId;
    }
    if (latitude != null) {
      $result.latitude = latitude;
    }
    if (longitude != null) {
      $result.longitude = longitude;
    }
    if (createdBy != null) {
      $result.createdBy = createdBy;
    }
    if (createdAt != null) {
      $result.createdAt = createdAt;
    }
    if (updatedBy != null) {
      $result.updatedBy = updatedBy;
    }
    if (updatedAt != null) {
      $result.updatedAt = updatedAt;
    }
    if (deletedBy != null) {
      $result.deletedBy = deletedBy;
    }
    if (deletedAt != null) {
      $result.deletedAt = deletedAt;
    }
    if (name != null) {
      $result.name = name;
    }
    if (nameTranslation != null) {
      $result.nameTranslation = nameTranslation;
    }
    if (address != null) {
      $result.address = address;
    }
    if (distanceFromUser != null) {
      $result.distanceFromUser = distanceFromUser;
    }
    return $result;
  }
  Place._() : super();
  factory Place.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Place.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'Place', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'placeId', protoName: 'placeId')
    ..a<$core.double>(2, _omitFieldNames ? '' : 'latitude', $pb.PbFieldType.OD)
    ..a<$core.double>(3, _omitFieldNames ? '' : 'longitude', $pb.PbFieldType.OD)
    ..aOM<$4.PlaceUser>(4, _omitFieldNames ? '' : 'createdBy', protoName: 'createdBy', subBuilder: $4.PlaceUser.create)
    ..aOM<$5.Timestamp>(5, _omitFieldNames ? '' : 'createdAt', protoName: 'createdAt', subBuilder: $5.Timestamp.create)
    ..aOM<$4.PlaceUser>(6, _omitFieldNames ? '' : 'updatedBy', protoName: 'updatedBy', subBuilder: $4.PlaceUser.create)
    ..aOM<$5.Timestamp>(7, _omitFieldNames ? '' : 'updatedAt', protoName: 'updatedAt', subBuilder: $5.Timestamp.create)
    ..aOM<$4.PlaceUser>(8, _omitFieldNames ? '' : 'deletedBy', protoName: 'deletedBy', subBuilder: $4.PlaceUser.create)
    ..aOM<$5.Timestamp>(9, _omitFieldNames ? '' : 'deletedAt', protoName: 'deletedAt', subBuilder: $5.Timestamp.create)
    ..aOS(10, _omitFieldNames ? '' : 'name')
    ..aOM<PlaceNameTranslation>(11, _omitFieldNames ? '' : 'nameTranslation', protoName: 'nameTranslation', subBuilder: PlaceNameTranslation.create)
    ..aOM<PlaceAddress>(12, _omitFieldNames ? '' : 'address', subBuilder: PlaceAddress.create)
    ..a<$core.int>(13, _omitFieldNames ? '' : 'distanceFromUser', $pb.PbFieldType.O3, protoName: 'distanceFromUser')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Place clone() => Place()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Place copyWith(void Function(Place) updates) => super.copyWith((message) => updates(message as Place)) as Place;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static Place create() => Place._();
  Place createEmptyInstance() => create();
  static $pb.PbList<Place> createRepeated() => $pb.PbList<Place>();
  @$core.pragma('dart2js:noInline')
  static Place getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Place>(create);
  static Place? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get placeId => $_getSZ(0);
  @$pb.TagNumber(1)
  set placeId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPlaceId() => $_has(0);
  @$pb.TagNumber(1)
  void clearPlaceId() => clearField(1);

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

  @$pb.TagNumber(4)
  $4.PlaceUser get createdBy => $_getN(3);
  @$pb.TagNumber(4)
  set createdBy($4.PlaceUser v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCreatedBy() => $_has(3);
  @$pb.TagNumber(4)
  void clearCreatedBy() => clearField(4);
  @$pb.TagNumber(4)
  $4.PlaceUser ensureCreatedBy() => $_ensure(3);

  @$pb.TagNumber(5)
  $5.Timestamp get createdAt => $_getN(4);
  @$pb.TagNumber(5)
  set createdAt($5.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $5.Timestamp ensureCreatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $4.PlaceUser get updatedBy => $_getN(5);
  @$pb.TagNumber(6)
  set updatedBy($4.PlaceUser v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUpdatedBy() => $_has(5);
  @$pb.TagNumber(6)
  void clearUpdatedBy() => clearField(6);
  @$pb.TagNumber(6)
  $4.PlaceUser ensureUpdatedBy() => $_ensure(5);

  @$pb.TagNumber(7)
  $5.Timestamp get updatedAt => $_getN(6);
  @$pb.TagNumber(7)
  set updatedAt($5.Timestamp v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasUpdatedAt() => $_has(6);
  @$pb.TagNumber(7)
  void clearUpdatedAt() => clearField(7);
  @$pb.TagNumber(7)
  $5.Timestamp ensureUpdatedAt() => $_ensure(6);

  @$pb.TagNumber(8)
  $4.PlaceUser get deletedBy => $_getN(7);
  @$pb.TagNumber(8)
  set deletedBy($4.PlaceUser v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasDeletedBy() => $_has(7);
  @$pb.TagNumber(8)
  void clearDeletedBy() => clearField(8);
  @$pb.TagNumber(8)
  $4.PlaceUser ensureDeletedBy() => $_ensure(7);

  @$pb.TagNumber(9)
  $5.Timestamp get deletedAt => $_getN(8);
  @$pb.TagNumber(9)
  set deletedAt($5.Timestamp v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasDeletedAt() => $_has(8);
  @$pb.TagNumber(9)
  void clearDeletedAt() => clearField(9);
  @$pb.TagNumber(9)
  $5.Timestamp ensureDeletedAt() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.String get name => $_getSZ(9);
  @$pb.TagNumber(10)
  set name($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasName() => $_has(9);
  @$pb.TagNumber(10)
  void clearName() => clearField(10);

  @$pb.TagNumber(11)
  PlaceNameTranslation get nameTranslation => $_getN(10);
  @$pb.TagNumber(11)
  set nameTranslation(PlaceNameTranslation v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasNameTranslation() => $_has(10);
  @$pb.TagNumber(11)
  void clearNameTranslation() => clearField(11);
  @$pb.TagNumber(11)
  PlaceNameTranslation ensureNameTranslation() => $_ensure(10);

  @$pb.TagNumber(12)
  PlaceAddress get address => $_getN(11);
  @$pb.TagNumber(12)
  set address(PlaceAddress v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasAddress() => $_has(11);
  @$pb.TagNumber(12)
  void clearAddress() => clearField(12);
  @$pb.TagNumber(12)
  PlaceAddress ensureAddress() => $_ensure(11);

  @$pb.TagNumber(13)
  $core.int get distanceFromUser => $_getIZ(12);
  @$pb.TagNumber(13)
  set distanceFromUser($core.int v) { $_setSignedInt32(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasDistanceFromUser() => $_has(12);
  @$pb.TagNumber(13)
  void clearDistanceFromUser() => clearField(13);
}

class PlaceNameTranslation extends $pb.GeneratedMessage {
  factory PlaceNameTranslation({
    $core.String? ko,
    $core.String? en,
    $core.String? ja,
    $core.String? zh,
  }) {
    final $result = create();
    if (ko != null) {
      $result.ko = ko;
    }
    if (en != null) {
      $result.en = en;
    }
    if (ja != null) {
      $result.ja = ja;
    }
    if (zh != null) {
      $result.zh = zh;
    }
    return $result;
  }
  PlaceNameTranslation._() : super();
  factory PlaceNameTranslation.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlaceNameTranslation.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'PlaceNameTranslation', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'ko')
    ..aOS(2, _omitFieldNames ? '' : 'en')
    ..aOS(3, _omitFieldNames ? '' : 'ja')
    ..aOS(4, _omitFieldNames ? '' : 'zh')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PlaceNameTranslation clone() => PlaceNameTranslation()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PlaceNameTranslation copyWith(void Function(PlaceNameTranslation) updates) => super.copyWith((message) => updates(message as PlaceNameTranslation)) as PlaceNameTranslation;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static PlaceNameTranslation create() => PlaceNameTranslation._();
  PlaceNameTranslation createEmptyInstance() => create();
  static $pb.PbList<PlaceNameTranslation> createRepeated() => $pb.PbList<PlaceNameTranslation>();
  @$core.pragma('dart2js:noInline')
  static PlaceNameTranslation getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlaceNameTranslation>(create);
  static PlaceNameTranslation? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get ko => $_getSZ(0);
  @$pb.TagNumber(1)
  set ko($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasKo() => $_has(0);
  @$pb.TagNumber(1)
  void clearKo() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get en => $_getSZ(1);
  @$pb.TagNumber(2)
  set en($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEn() => $_has(1);
  @$pb.TagNumber(2)
  void clearEn() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get ja => $_getSZ(2);
  @$pb.TagNumber(3)
  set ja($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasJa() => $_has(2);
  @$pb.TagNumber(3)
  void clearJa() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get zh => $_getSZ(3);
  @$pb.TagNumber(4)
  set zh($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasZh() => $_has(3);
  @$pb.TagNumber(4)
  void clearZh() => clearField(4);
}

class PlaceAddress extends $pb.GeneratedMessage {
  factory PlaceAddress({
    $core.String? roadNameAddress,
    $core.String? lotNumberAddress,
  }) {
    final $result = create();
    if (roadNameAddress != null) {
      $result.roadNameAddress = roadNameAddress;
    }
    if (lotNumberAddress != null) {
      $result.lotNumberAddress = lotNumberAddress;
    }
    return $result;
  }
  PlaceAddress._() : super();
  factory PlaceAddress.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PlaceAddress.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'PlaceAddress', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'roadNameAddress', protoName: 'roadNameAddress')
    ..aOS(2, _omitFieldNames ? '' : 'lotNumberAddress', protoName: 'lotNumberAddress')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PlaceAddress clone() => PlaceAddress()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PlaceAddress copyWith(void Function(PlaceAddress) updates) => super.copyWith((message) => updates(message as PlaceAddress)) as PlaceAddress;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static PlaceAddress create() => PlaceAddress._();
  PlaceAddress createEmptyInstance() => create();
  static $pb.PbList<PlaceAddress> createRepeated() => $pb.PbList<PlaceAddress>();
  @$core.pragma('dart2js:noInline')
  static PlaceAddress getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PlaceAddress>(create);
  static PlaceAddress? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get roadNameAddress => $_getSZ(0);
  @$pb.TagNumber(1)
  set roadNameAddress($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRoadNameAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearRoadNameAddress() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get lotNumberAddress => $_getSZ(1);
  @$pb.TagNumber(2)
  set lotNumberAddress($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasLotNumberAddress() => $_has(1);
  @$pb.TagNumber(2)
  void clearLotNumberAddress() => clearField(2);
}

class Wgs84Coordinates extends $pb.GeneratedMessage {
  factory Wgs84Coordinates({
    $core.double? latitude,
    $core.double? longitude,
  }) {
    final $result = create();
    if (latitude != null) {
      $result.latitude = latitude;
    }
    if (longitude != null) {
      $result.longitude = longitude;
    }
    return $result;
  }
  Wgs84Coordinates._() : super();
  factory Wgs84Coordinates.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Wgs84Coordinates.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'Wgs84Coordinates', package: const $pb.PackageName(_omitMessageNames ? '' : 'place'), createEmptyInstance: create)
    ..a<$core.double>(1, _omitFieldNames ? '' : 'latitude', $pb.PbFieldType.OD)
    ..a<$core.double>(2, _omitFieldNames ? '' : 'longitude', $pb.PbFieldType.OD)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Wgs84Coordinates clone() => Wgs84Coordinates()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Wgs84Coordinates copyWith(void Function(Wgs84Coordinates) updates) => super.copyWith((message) => updates(message as Wgs84Coordinates)) as Wgs84Coordinates;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static Wgs84Coordinates create() => Wgs84Coordinates._();
  Wgs84Coordinates createEmptyInstance() => create();
  static $pb.PbList<Wgs84Coordinates> createRepeated() => $pb.PbList<Wgs84Coordinates>();
  @$core.pragma('dart2js:noInline')
  static Wgs84Coordinates getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Wgs84Coordinates>(create);
  static Wgs84Coordinates? _defaultInstance;

  @$pb.TagNumber(1)
  $core.double get latitude => $_getN(0);
  @$pb.TagNumber(1)
  set latitude($core.double v) { $_setDouble(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasLatitude() => $_has(0);
  @$pb.TagNumber(1)
  void clearLatitude() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get longitude => $_getN(1);
  @$pb.TagNumber(2)
  set longitude($core.double v) { $_setDouble(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasLongitude() => $_has(1);
  @$pb.TagNumber(2)
  void clearLongitude() => clearField(2);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');
