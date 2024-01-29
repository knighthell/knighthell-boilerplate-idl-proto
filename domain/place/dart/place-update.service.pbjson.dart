//
//  Generated code. Do not modify.
//  source: place-update.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use updatePlaceListRequestDescriptor instead')
const UpdatePlaceListRequest$json = {
  '1': 'UpdatePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.service.update.UpdatePlaceListRequest.Place', '10': 'places'},
  ],
  '3': [UpdatePlaceListRequest_Place$json],
};

@$core.Deprecated('Use updatePlaceListRequestDescriptor instead')
const UpdatePlaceListRequest_Place$json = {
  '1': 'Place',
  '2': [
    {'1': 'placeId', '3': 1, '4': 1, '5': 9, '10': 'placeId'},
    {'1': 'name', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'name', '17': true},
    {'1': 'latitude', '3': 3, '4': 1, '5': 1, '9': 1, '10': 'latitude', '17': true},
    {'1': 'longitude', '3': 4, '4': 1, '5': 1, '9': 2, '10': 'longitude', '17': true},
  ],
  '8': [
    {'1': '_name'},
    {'1': '_latitude'},
    {'1': '_longitude'},
  ],
};

/// Descriptor for `UpdatePlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updatePlaceListRequestDescriptor = $convert.base64Decode(
    'ChZVcGRhdGVQbGFjZUxpc3RSZXF1ZXN0EkoKBnBsYWNlcxgBIAMoCzIyLnBsYWNlLnNlcnZpY2'
    'UudXBkYXRlLlVwZGF0ZVBsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxqiAQoFUGxhY2US'
    'GAoHcGxhY2VJZBgBIAEoCVIHcGxhY2VJZBIXCgRuYW1lGAIgASgJSABSBG5hbWWIAQESHwoIbG'
    'F0aXR1ZGUYAyABKAFIAVIIbGF0aXR1ZGWIAQESIQoJbG9uZ2l0dWRlGAQgASgBSAJSCWxvbmdp'
    'dHVkZYgBAUIHCgVfbmFtZUILCglfbGF0aXR1ZGVCDAoKX2xvbmdpdHVkZQ==');

@$core.Deprecated('Use updatePlaceListResponseDescriptor instead')
const UpdatePlaceListResponse$json = {
  '1': 'UpdatePlaceListResponse',
  '2': [
    {'1': 'results', '3': 2, '4': 3, '5': 11, '6': '.place.Place', '10': 'results'},
  ],
};

/// Descriptor for `UpdatePlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updatePlaceListResponseDescriptor = $convert.base64Decode(
    'ChdVcGRhdGVQbGFjZUxpc3RSZXNwb25zZRImCgdyZXN1bHRzGAIgAygLMgwucGxhY2UuUGxhY2'
    'VSB3Jlc3VsdHM=');

