//
//  Generated code. Do not modify.
//  source: place-delete.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use deletePlaceListRequestDescriptor instead')
const DeletePlaceListRequest$json = {
  '1': 'DeletePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.service.delete.DeletePlaceListRequest.Place', '10': 'places'},
  ],
  '3': [DeletePlaceListRequest_Place$json],
};

@$core.Deprecated('Use deletePlaceListRequestDescriptor instead')
const DeletePlaceListRequest_Place$json = {
  '1': 'Place',
  '2': [
    {'1': 'placeId', '3': 1, '4': 1, '5': 9, '10': 'placeId'},
  ],
};

/// Descriptor for `DeletePlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deletePlaceListRequestDescriptor = $convert.base64Decode(
    'ChZEZWxldGVQbGFjZUxpc3RSZXF1ZXN0EkoKBnBsYWNlcxgBIAMoCzIyLnBsYWNlLnNlcnZpY2'
    'UuZGVsZXRlLkRlbGV0ZVBsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxohCgVQbGFjZRIY'
    'CgdwbGFjZUlkGAEgASgJUgdwbGFjZUlk');

@$core.Deprecated('Use deletePlaceListResponseDescriptor instead')
const DeletePlaceListResponse$json = {
  '1': 'DeletePlaceListResponse',
  '2': [
    {'1': 'results', '3': 2, '4': 3, '5': 11, '6': '.place.Place', '10': 'results'},
  ],
};

/// Descriptor for `DeletePlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deletePlaceListResponseDescriptor = $convert.base64Decode(
    'ChdEZWxldGVQbGFjZUxpc3RSZXNwb25zZRImCgdyZXN1bHRzGAIgAygLMgwucGxhY2UuUGxhY2'
    'VSB3Jlc3VsdHM=');

