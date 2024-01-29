//
//  Generated code. Do not modify.
//  source: place-create.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use placeCreateServiceEventTypeDescriptor instead')
const PlaceCreateServiceEventType$json = {
  '1': 'PlaceCreateServiceEventType',
  '2': [
    {'1': 'CREATE_PLACE', '2': 0},
  ],
};

/// Descriptor for `PlaceCreateServiceEventType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List placeCreateServiceEventTypeDescriptor = $convert.base64Decode(
    'ChtQbGFjZUNyZWF0ZVNlcnZpY2VFdmVudFR5cGUSEAoMQ1JFQVRFX1BMQUNFEAA=');

@$core.Deprecated('Use createPlaceListRequestDescriptor instead')
const CreatePlaceListRequest$json = {
  '1': 'CreatePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.service.create.CreatePlaceListRequest.Place', '10': 'places'},
  ],
  '3': [CreatePlaceListRequest_Place$json],
};

@$core.Deprecated('Use createPlaceListRequestDescriptor instead')
const CreatePlaceListRequest_Place$json = {
  '1': 'Place',
  '2': [
    {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    {'1': 'latitude', '3': 3, '4': 1, '5': 1, '10': 'latitude'},
    {'1': 'longitude', '3': 4, '4': 1, '5': 1, '10': 'longitude'},
  ],
};

/// Descriptor for `CreatePlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createPlaceListRequestDescriptor = $convert.base64Decode(
    'ChZDcmVhdGVQbGFjZUxpc3RSZXF1ZXN0EkoKBnBsYWNlcxgBIAMoCzIyLnBsYWNlLnNlcnZpY2'
    'UuY3JlYXRlLkNyZWF0ZVBsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxpVCgVQbGFjZRIS'
    'CgRuYW1lGAIgASgJUgRuYW1lEhoKCGxhdGl0dWRlGAMgASgBUghsYXRpdHVkZRIcCglsb25naX'
    'R1ZGUYBCABKAFSCWxvbmdpdHVkZQ==');

@$core.Deprecated('Use createPlaceListResponseDescriptor instead')
const CreatePlaceListResponse$json = {
  '1': 'CreatePlaceListResponse',
  '2': [
    {'1': 'results', '3': 5, '4': 3, '5': 11, '6': '.place.Place', '10': 'results'},
  ],
};

/// Descriptor for `CreatePlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createPlaceListResponseDescriptor = $convert.base64Decode(
    'ChdDcmVhdGVQbGFjZUxpc3RSZXNwb25zZRImCgdyZXN1bHRzGAUgAygLMgwucGxhY2UuUGxhY2'
    'VSB3Jlc3VsdHM=');

