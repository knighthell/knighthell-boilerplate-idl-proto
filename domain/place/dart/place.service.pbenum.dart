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

class PlaceServiceRequestEventType extends $pb.ProtobufEnum {
  static const PlaceServiceRequestEventType CREATE_PLACE = PlaceServiceRequestEventType._(0, _omitEnumNames ? '' : 'CREATE_PLACE');
  static const PlaceServiceRequestEventType READ_PLACE = PlaceServiceRequestEventType._(1, _omitEnumNames ? '' : 'READ_PLACE');
  static const PlaceServiceRequestEventType UPDATE_PLACE = PlaceServiceRequestEventType._(2, _omitEnumNames ? '' : 'UPDATE_PLACE');
  static const PlaceServiceRequestEventType DELETE_PLACE = PlaceServiceRequestEventType._(3, _omitEnumNames ? '' : 'DELETE_PLACE');

  static const $core.List<PlaceServiceRequestEventType> values = <PlaceServiceRequestEventType> [
    CREATE_PLACE,
    READ_PLACE,
    UPDATE_PLACE,
    DELETE_PLACE,
  ];

  static final $core.Map<$core.int, PlaceServiceRequestEventType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PlaceServiceRequestEventType? valueOf($core.int value) => _byValue[value];

  const PlaceServiceRequestEventType._($core.int v, $core.String n) : super(v, n);
}

class PlaceServiceResponseEventType extends $pb.ProtobufEnum {
  static const PlaceServiceResponseEventType PLACE_CREATED = PlaceServiceResponseEventType._(0, _omitEnumNames ? '' : 'PLACE_CREATED');
  static const PlaceServiceResponseEventType PLACE_READ = PlaceServiceResponseEventType._(1, _omitEnumNames ? '' : 'PLACE_READ');
  static const PlaceServiceResponseEventType PLACE_UPDATED = PlaceServiceResponseEventType._(2, _omitEnumNames ? '' : 'PLACE_UPDATED');
  static const PlaceServiceResponseEventType PLACE_DELETED = PlaceServiceResponseEventType._(3, _omitEnumNames ? '' : 'PLACE_DELETED');

  static const $core.List<PlaceServiceResponseEventType> values = <PlaceServiceResponseEventType> [
    PLACE_CREATED,
    PLACE_READ,
    PLACE_UPDATED,
    PLACE_DELETED,
  ];

  static final $core.Map<$core.int, PlaceServiceResponseEventType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PlaceServiceResponseEventType? valueOf($core.int value) => _byValue[value];

  const PlaceServiceResponseEventType._($core.int v, $core.String n) : super(v, n);
}


const _omitEnumNames = $core.bool.fromEnvironment('protobuf.omit_enum_names');
