//
//  Generated code. Do not modify.
//  source: place.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use placeDescriptor instead')
const Place$json = {
  '1': 'Place',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'latitude', '3': 2, '4': 1, '5': 1, '10': 'latitude'},
    {'1': 'longitude', '3': 3, '4': 1, '5': 1, '10': 'longitude'},
    {'1': 'createdBy', '3': 4, '4': 1, '5': 11, '6': '.place.PlaceUser', '10': 'createdBy'},
    {'1': 'createdAt', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    {'1': 'updatedBy', '3': 6, '4': 1, '5': 11, '6': '.place.PlaceUser', '10': 'updatedBy'},
    {'1': 'updatedAt', '3': 7, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    {'1': 'deletedBy', '3': 8, '4': 1, '5': 11, '6': '.place.PlaceUser', '10': 'deletedBy'},
    {'1': 'deletedAt', '3': 9, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'deletedAt'},
    {'1': 'name', '3': 10, '4': 1, '5': 9, '10': 'name'},
    {'1': 'nameTranslation', '3': 11, '4': 1, '5': 11, '6': '.place.PlaceNameTranslation', '9': 0, '10': 'nameTranslation', '17': true},
    {'1': 'address', '3': 12, '4': 1, '5': 11, '6': '.place.PlaceAddress', '9': 1, '10': 'address', '17': true},
  ],
  '8': [
    {'1': '_nameTranslation'},
    {'1': '_address'},
  ],
};

/// Descriptor for `Place`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List placeDescriptor = $convert.base64Decode(
    'CgVQbGFjZRIOCgJpZBgBIAEoCVICaWQSGgoIbGF0aXR1ZGUYAiABKAFSCGxhdGl0dWRlEhwKCW'
    'xvbmdpdHVkZRgDIAEoAVIJbG9uZ2l0dWRlEi4KCWNyZWF0ZWRCeRgEIAEoCzIQLnBsYWNlLlBs'
    'YWNlVXNlclIJY3JlYXRlZEJ5EjgKCWNyZWF0ZWRBdBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi'
    '5UaW1lc3RhbXBSCWNyZWF0ZWRBdBIuCgl1cGRhdGVkQnkYBiABKAsyEC5wbGFjZS5QbGFjZVVz'
    'ZXJSCXVwZGF0ZWRCeRI4Cgl1cGRhdGVkQXQYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZX'
    'N0YW1wUgl1cGRhdGVkQXQSLgoJZGVsZXRlZEJ5GAggASgLMhAucGxhY2UuUGxhY2VVc2VyUglk'
    'ZWxldGVkQnkSOAoJZGVsZXRlZEF0GAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcF'
    'IJZGVsZXRlZEF0EhIKBG5hbWUYCiABKAlSBG5hbWUSSgoPbmFtZVRyYW5zbGF0aW9uGAsgASgL'
    'MhsucGxhY2UuUGxhY2VOYW1lVHJhbnNsYXRpb25IAFIPbmFtZVRyYW5zbGF0aW9uiAEBEjIKB2'
    'FkZHJlc3MYDCABKAsyEy5wbGFjZS5QbGFjZUFkZHJlc3NIAVIHYWRkcmVzc4gBAUISChBfbmFt'
    'ZVRyYW5zbGF0aW9uQgoKCF9hZGRyZXNz');

@$core.Deprecated('Use placeUserDescriptor instead')
const PlaceUser$json = {
  '1': 'PlaceUser',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    {'1': 'photoURL', '3': 3, '4': 1, '5': 9, '10': 'photoURL'},
    {'1': 'displayName', '3': 4, '4': 1, '5': 9, '10': 'displayName'},
  ],
};

/// Descriptor for `PlaceUser`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List placeUserDescriptor = $convert.base64Decode(
    'CglQbGFjZVVzZXISDgoCaWQYASABKAlSAmlkEhQKBWVtYWlsGAIgASgJUgVlbWFpbBIaCghwaG'
    '90b1VSTBgDIAEoCVIIcGhvdG9VUkwSIAoLZGlzcGxheU5hbWUYBCABKAlSC2Rpc3BsYXlOYW1l');

@$core.Deprecated('Use placeNameTranslationDescriptor instead')
const PlaceNameTranslation$json = {
  '1': 'PlaceNameTranslation',
  '2': [
    {'1': 'ko', '3': 1, '4': 1, '5': 9, '10': 'ko'},
    {'1': 'en', '3': 2, '4': 1, '5': 9, '10': 'en'},
  ],
};

/// Descriptor for `PlaceNameTranslation`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List placeNameTranslationDescriptor = $convert.base64Decode(
    'ChRQbGFjZU5hbWVUcmFuc2xhdGlvbhIOCgJrbxgBIAEoCVICa28SDgoCZW4YAiABKAlSAmVu');

@$core.Deprecated('Use placeAddressDescriptor instead')
const PlaceAddress$json = {
  '1': 'PlaceAddress',
  '2': [
    {'1': 'roadNameAddress', '3': 1, '4': 1, '5': 9, '9': 0, '10': 'roadNameAddress', '17': true},
    {'1': 'lotNumberAddress', '3': 2, '4': 1, '5': 9, '9': 1, '10': 'lotNumberAddress', '17': true},
  ],
  '8': [
    {'1': '_roadNameAddress'},
    {'1': '_lotNumberAddress'},
  ],
};

/// Descriptor for `PlaceAddress`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List placeAddressDescriptor = $convert.base64Decode(
    'CgxQbGFjZUFkZHJlc3MSLQoPcm9hZE5hbWVBZGRyZXNzGAEgASgJSABSD3JvYWROYW1lQWRkcm'
    'Vzc4gBARIvChBsb3ROdW1iZXJBZGRyZXNzGAIgASgJSAFSEGxvdE51bWJlckFkZHJlc3OIAQFC'
    'EgoQX3JvYWROYW1lQWRkcmVzc0ITChFfbG90TnVtYmVyQWRkcmVzcw==');

@$core.Deprecated('Use wgs84CoordinatesDescriptor instead')
const Wgs84Coordinates$json = {
  '1': 'Wgs84Coordinates',
  '2': [
    {'1': 'latitude', '3': 1, '4': 1, '5': 1, '10': 'latitude'},
    {'1': 'longitude', '3': 2, '4': 1, '5': 1, '10': 'longitude'},
  ],
};

/// Descriptor for `Wgs84Coordinates`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List wgs84CoordinatesDescriptor = $convert.base64Decode(
    'ChBXZ3M4NENvb3JkaW5hdGVzEhoKCGxhdGl0dWRlGAEgASgBUghsYXRpdHVkZRIcCglsb25naX'
    'R1ZGUYAiABKAFSCWxvbmdpdHVkZQ==');

