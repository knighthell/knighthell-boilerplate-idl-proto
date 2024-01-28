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
    {'1': 'placeId', '3': 1, '4': 1, '5': 9, '10': 'placeId'},
    {'1': 'latitude', '3': 2, '4': 1, '5': 1, '10': 'latitude'},
    {'1': 'longitude', '3': 3, '4': 1, '5': 1, '10': 'longitude'},
    {'1': 'createdBy', '3': 4, '4': 1, '5': 11, '6': '.place.PlaceUser', '10': 'createdBy'},
    {'1': 'createdAt', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    {'1': 'updatedBy', '3': 6, '4': 1, '5': 11, '6': '.place.PlaceUser', '10': 'updatedBy'},
    {'1': 'updatedAt', '3': 7, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    {'1': 'deletedBy', '3': 8, '4': 1, '5': 11, '6': '.place.PlaceUser', '9': 0, '10': 'deletedBy', '17': true},
    {'1': 'deletedAt', '3': 9, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '9': 1, '10': 'deletedAt', '17': true},
    {'1': 'name', '3': 10, '4': 1, '5': 9, '10': 'name'},
    {'1': 'nameTranslation', '3': 11, '4': 1, '5': 11, '6': '.place.PlaceNameTranslation', '9': 2, '10': 'nameTranslation', '17': true},
    {'1': 'address', '3': 12, '4': 1, '5': 11, '6': '.place.PlaceAddress', '9': 3, '10': 'address', '17': true},
    {'1': 'distanceFromUser', '3': 13, '4': 1, '5': 5, '9': 4, '10': 'distanceFromUser', '17': true},
  ],
  '8': [
    {'1': '_deletedBy'},
    {'1': '_deletedAt'},
    {'1': '_nameTranslation'},
    {'1': '_address'},
    {'1': '_distanceFromUser'},
  ],
};

/// Descriptor for `Place`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List placeDescriptor = $convert.base64Decode(
    'CgVQbGFjZRIYCgdwbGFjZUlkGAEgASgJUgdwbGFjZUlkEhoKCGxhdGl0dWRlGAIgASgBUghsYX'
    'RpdHVkZRIcCglsb25naXR1ZGUYAyABKAFSCWxvbmdpdHVkZRIuCgljcmVhdGVkQnkYBCABKAsy'
    'EC5wbGFjZS5QbGFjZVVzZXJSCWNyZWF0ZWRCeRI4CgljcmVhdGVkQXQYBSABKAsyGi5nb29nbG'
    'UucHJvdG9idWYuVGltZXN0YW1wUgljcmVhdGVkQXQSLgoJdXBkYXRlZEJ5GAYgASgLMhAucGxh'
    'Y2UuUGxhY2VVc2VyUgl1cGRhdGVkQnkSOAoJdXBkYXRlZEF0GAcgASgLMhouZ29vZ2xlLnByb3'
    'RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EjMKCWRlbGV0ZWRCeRgIIAEoCzIQLnBsYWNlLlBs'
    'YWNlVXNlckgAUglkZWxldGVkQnmIAQESPQoJZGVsZXRlZEF0GAkgASgLMhouZ29vZ2xlLnByb3'
    'RvYnVmLlRpbWVzdGFtcEgBUglkZWxldGVkQXSIAQESEgoEbmFtZRgKIAEoCVIEbmFtZRJKCg9u'
    'YW1lVHJhbnNsYXRpb24YCyABKAsyGy5wbGFjZS5QbGFjZU5hbWVUcmFuc2xhdGlvbkgCUg9uYW'
    '1lVHJhbnNsYXRpb26IAQESMgoHYWRkcmVzcxgMIAEoCzITLnBsYWNlLlBsYWNlQWRkcmVzc0gD'
    'UgdhZGRyZXNziAEBEi8KEGRpc3RhbmNlRnJvbVVzZXIYDSABKAVIBFIQZGlzdGFuY2VGcm9tVX'
    'NlcogBAUIMCgpfZGVsZXRlZEJ5QgwKCl9kZWxldGVkQXRCEgoQX25hbWVUcmFuc2xhdGlvbkIK'
    'CghfYWRkcmVzc0ITChFfZGlzdGFuY2VGcm9tVXNlcg==');

@$core.Deprecated('Use placeNameTranslationDescriptor instead')
const PlaceNameTranslation$json = {
  '1': 'PlaceNameTranslation',
  '2': [
    {'1': 'ko', '3': 1, '4': 1, '5': 9, '9': 0, '10': 'ko', '17': true},
    {'1': 'en', '3': 2, '4': 1, '5': 9, '9': 1, '10': 'en', '17': true},
    {'1': 'ja', '3': 3, '4': 1, '5': 9, '9': 2, '10': 'ja', '17': true},
    {'1': 'zh', '3': 4, '4': 1, '5': 9, '9': 3, '10': 'zh', '17': true},
  ],
  '8': [
    {'1': '_ko'},
    {'1': '_en'},
    {'1': '_ja'},
    {'1': '_zh'},
  ],
};

/// Descriptor for `PlaceNameTranslation`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List placeNameTranslationDescriptor = $convert.base64Decode(
    'ChRQbGFjZU5hbWVUcmFuc2xhdGlvbhITCgJrbxgBIAEoCUgAUgJrb4gBARITCgJlbhgCIAEoCU'
    'gBUgJlbogBARITCgJqYRgDIAEoCUgCUgJqYYgBARITCgJ6aBgEIAEoCUgDUgJ6aIgBAUIFCgNf'
    'a29CBQoDX2VuQgUKA19qYUIFCgNfemg=');

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

