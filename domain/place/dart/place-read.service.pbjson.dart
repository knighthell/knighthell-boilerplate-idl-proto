//
//  Generated code. Do not modify.
//  source: place-read.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use readPlaceListRequestDescriptor instead')
const ReadPlaceListRequest$json = {
  '1': 'ReadPlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.service.read.ReadPlaceListRequest.Place', '10': 'places'},
    {'1': 'keywords', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'keywords', '17': true},
    {'1': 'createdAtPeriod', '3': 3, '4': 1, '5': 11, '6': '.common.PeriodDateTime', '9': 1, '10': 'createdAtPeriod', '17': true},
    {'1': 'updatedAtPeriod', '3': 4, '4': 1, '5': 11, '6': '.common.PeriodDateTime', '9': 2, '10': 'updatedAtPeriod', '17': true},
    {'1': 'deletedAtPeriod', '3': 5, '4': 1, '5': 11, '6': '.common.PeriodDateTime', '9': 3, '10': 'deletedAtPeriod', '17': true},
    {'1': 'isIncludeDeletedPlace', '3': 6, '4': 1, '5': 8, '9': 4, '10': 'isIncludeDeletedPlace', '17': true},
    {'1': 'boundSquare', '3': 7, '4': 1, '5': 11, '6': '.place.service.read.BoundSquare', '9': 5, '10': 'boundSquare', '17': true},
    {'1': 'boundCircle', '3': 8, '4': 1, '5': 11, '6': '.place.service.read.BoundCircle', '9': 6, '10': 'boundCircle', '17': true},
    {'1': 'userLocation', '3': 9, '4': 1, '5': 11, '6': '.place.Wgs84Coordinates', '9': 7, '10': 'userLocation', '17': true},
    {'1': 'pagination', '3': 10, '4': 1, '5': 11, '6': '.place.service.read.Pagination', '9': 8, '10': 'pagination', '17': true},
  ],
  '3': [ReadPlaceListRequest_Place$json],
  '8': [
    {'1': '_keywords'},
    {'1': '_createdAtPeriod'},
    {'1': '_updatedAtPeriod'},
    {'1': '_deletedAtPeriod'},
    {'1': '_isIncludeDeletedPlace'},
    {'1': '_boundSquare'},
    {'1': '_boundCircle'},
    {'1': '_userLocation'},
    {'1': '_pagination'},
  ],
};

@$core.Deprecated('Use readPlaceListRequestDescriptor instead')
const ReadPlaceListRequest_Place$json = {
  '1': 'Place',
  '2': [
    {'1': 'placeId', '3': 1, '4': 1, '5': 9, '10': 'placeId'},
  ],
};

/// Descriptor for `ReadPlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List readPlaceListRequestDescriptor = $convert.base64Decode(
    'ChRSZWFkUGxhY2VMaXN0UmVxdWVzdBJGCgZwbGFjZXMYASADKAsyLi5wbGFjZS5zZXJ2aWNlLn'
    'JlYWQuUmVhZFBsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxIfCghrZXl3b3JkcxgCIAEo'
    'CUgAUghrZXl3b3Jkc4gBARJFCg9jcmVhdGVkQXRQZXJpb2QYAyABKAsyFi5jb21tb24uUGVyaW'
    '9kRGF0ZVRpbWVIAVIPY3JlYXRlZEF0UGVyaW9kiAEBEkUKD3VwZGF0ZWRBdFBlcmlvZBgEIAEo'
    'CzIWLmNvbW1vbi5QZXJpb2REYXRlVGltZUgCUg91cGRhdGVkQXRQZXJpb2SIAQESRQoPZGVsZX'
    'RlZEF0UGVyaW9kGAUgASgLMhYuY29tbW9uLlBlcmlvZERhdGVUaW1lSANSD2RlbGV0ZWRBdFBl'
    'cmlvZIgBARI5ChVpc0luY2x1ZGVEZWxldGVkUGxhY2UYBiABKAhIBFIVaXNJbmNsdWRlRGVsZX'
    'RlZFBsYWNliAEBEkYKC2JvdW5kU3F1YXJlGAcgASgLMh8ucGxhY2Uuc2VydmljZS5yZWFkLkJv'
    'dW5kU3F1YXJlSAVSC2JvdW5kU3F1YXJliAEBEkYKC2JvdW5kQ2lyY2xlGAggASgLMh8ucGxhY2'
    'Uuc2VydmljZS5yZWFkLkJvdW5kQ2lyY2xlSAZSC2JvdW5kQ2lyY2xliAEBEkAKDHVzZXJMb2Nh'
    'dGlvbhgJIAEoCzIXLnBsYWNlLldnczg0Q29vcmRpbmF0ZXNIB1IMdXNlckxvY2F0aW9uiAEBEk'
    'MKCnBhZ2luYXRpb24YCiABKAsyHi5wbGFjZS5zZXJ2aWNlLnJlYWQuUGFnaW5hdGlvbkgIUgpw'
    'YWdpbmF0aW9uiAEBGiEKBVBsYWNlEhgKB3BsYWNlSWQYASABKAlSB3BsYWNlSWRCCwoJX2tleX'
    'dvcmRzQhIKEF9jcmVhdGVkQXRQZXJpb2RCEgoQX3VwZGF0ZWRBdFBlcmlvZEISChBfZGVsZXRl'
    'ZEF0UGVyaW9kQhgKFl9pc0luY2x1ZGVEZWxldGVkUGxhY2VCDgoMX2JvdW5kU3F1YXJlQg4KDF'
    '9ib3VuZENpcmNsZUIPCg1fdXNlckxvY2F0aW9uQg0KC19wYWdpbmF0aW9u');

@$core.Deprecated('Use readPlaceListResponseDescriptor instead')
const ReadPlaceListResponse$json = {
  '1': 'ReadPlaceListResponse',
  '2': [
    {'1': 'responseInfo', '3': 1, '4': 1, '5': 11, '6': '.common.ResponseInfo', '10': 'responseInfo'},
    {'1': 'results', '3': 2, '4': 3, '5': 11, '6': '.place.Place', '10': 'results'},
  ],
};

/// Descriptor for `ReadPlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List readPlaceListResponseDescriptor = $convert.base64Decode(
    'ChVSZWFkUGxhY2VMaXN0UmVzcG9uc2USOAoMcmVzcG9uc2VJbmZvGAEgASgLMhQuY29tbW9uLl'
    'Jlc3BvbnNlSW5mb1IMcmVzcG9uc2VJbmZvEiYKB3Jlc3VsdHMYAiADKAsyDC5wbGFjZS5QbGFj'
    'ZVIHcmVzdWx0cw==');

@$core.Deprecated('Use boundSquareDescriptor instead')
const BoundSquare$json = {
  '1': 'BoundSquare',
  '2': [
    {'1': 'topRight', '3': 1, '4': 1, '5': 11, '6': '.place.Wgs84Coordinates', '10': 'topRight'},
    {'1': 'bottomLeft', '3': 2, '4': 1, '5': 11, '6': '.place.Wgs84Coordinates', '10': 'bottomLeft'},
  ],
};

/// Descriptor for `BoundSquare`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List boundSquareDescriptor = $convert.base64Decode(
    'CgtCb3VuZFNxdWFyZRIzCgh0b3BSaWdodBgBIAEoCzIXLnBsYWNlLldnczg0Q29vcmRpbmF0ZX'
    'NSCHRvcFJpZ2h0EjcKCmJvdHRvbUxlZnQYAiABKAsyFy5wbGFjZS5XZ3M4NENvb3JkaW5hdGVz'
    'Ugpib3R0b21MZWZ0');

@$core.Deprecated('Use boundCircleDescriptor instead')
const BoundCircle$json = {
  '1': 'BoundCircle',
  '2': [
    {'1': 'center', '3': 1, '4': 1, '5': 11, '6': '.place.Wgs84Coordinates', '10': 'center'},
    {'1': 'radiusMeter', '3': 2, '4': 1, '5': 5, '10': 'radiusMeter'},
  ],
};

/// Descriptor for `BoundCircle`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List boundCircleDescriptor = $convert.base64Decode(
    'CgtCb3VuZENpcmNsZRIvCgZjZW50ZXIYASABKAsyFy5wbGFjZS5XZ3M4NENvb3JkaW5hdGVzUg'
    'ZjZW50ZXISIAoLcmFkaXVzTWV0ZXIYAiABKAVSC3JhZGl1c01ldGVy');

@$core.Deprecated('Use paginationDescriptor instead')
const Pagination$json = {
  '1': 'Pagination',
  '2': [
    {'1': 'pageNumber', '3': 10, '4': 1, '5': 5, '9': 0, '10': 'pageNumber', '17': true},
    {'1': 'rowPerPage', '3': 11, '4': 1, '5': 5, '9': 1, '10': 'rowPerPage', '17': true},
  ],
  '8': [
    {'1': '_pageNumber'},
    {'1': '_rowPerPage'},
  ],
};

/// Descriptor for `Pagination`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List paginationDescriptor = $convert.base64Decode(
    'CgpQYWdpbmF0aW9uEiMKCnBhZ2VOdW1iZXIYCiABKAVIAFIKcGFnZU51bWJlcogBARIjCgpyb3'
    'dQZXJQYWdlGAsgASgFSAFSCnJvd1BlclBhZ2WIAQFCDQoLX3BhZ2VOdW1iZXJCDQoLX3Jvd1Bl'
    'clBhZ2U=');

