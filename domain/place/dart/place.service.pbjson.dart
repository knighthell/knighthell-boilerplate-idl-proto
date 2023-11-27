//
//  Generated code. Do not modify.
//  source: place.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use queryPlaceListBySquareRequestDescriptor instead')
const QueryPlaceListBySquareRequest$json = {
  '1': 'QueryPlaceListBySquareRequest',
  '2': [
    {'1': 'topRightLatitude', '3': 1, '4': 1, '5': 1, '10': 'topRightLatitude'},
    {'1': 'topRightLongitude', '3': 2, '4': 1, '5': 1, '10': 'topRightLongitude'},
    {'1': 'bottomLeftLatitude', '3': 3, '4': 1, '5': 1, '10': 'bottomLeftLatitude'},
    {'1': 'bottomLeftLongitude', '3': 4, '4': 1, '5': 1, '10': 'bottomLeftLongitude'},
    {'1': 'userLatitude', '3': 5, '4': 1, '5': 1, '9': 0, '10': 'userLatitude', '17': true},
    {'1': 'userLongitude', '3': 6, '4': 1, '5': 1, '9': 1, '10': 'userLongitude', '17': true},
  ],
  '8': [
    {'1': '_userLatitude'},
    {'1': '_userLongitude'},
  ],
};

/// Descriptor for `QueryPlaceListBySquareRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List queryPlaceListBySquareRequestDescriptor = $convert.base64Decode(
    'Ch1RdWVyeVBsYWNlTGlzdEJ5U3F1YXJlUmVxdWVzdBIqChB0b3BSaWdodExhdGl0dWRlGAEgAS'
    'gBUhB0b3BSaWdodExhdGl0dWRlEiwKEXRvcFJpZ2h0TG9uZ2l0dWRlGAIgASgBUhF0b3BSaWdo'
    'dExvbmdpdHVkZRIuChJib3R0b21MZWZ0TGF0aXR1ZGUYAyABKAFSEmJvdHRvbUxlZnRMYXRpdH'
    'VkZRIwChNib3R0b21MZWZ0TG9uZ2l0dWRlGAQgASgBUhNib3R0b21MZWZ0TG9uZ2l0dWRlEicK'
    'DHVzZXJMYXRpdHVkZRgFIAEoAUgAUgx1c2VyTGF0aXR1ZGWIAQESKQoNdXNlckxvbmdpdHVkZR'
    'gGIAEoAUgBUg11c2VyTG9uZ2l0dWRliAEBQg8KDV91c2VyTGF0aXR1ZGVCEAoOX3VzZXJMb25n'
    'aXR1ZGU=');

@$core.Deprecated('Use queryPlaceListBySquareResponseDescriptor instead')
const QueryPlaceListBySquareResponse$json = {
  '1': 'QueryPlaceListBySquareResponse',
  '2': [
    {'1': 'results', '3': 1, '4': 3, '5': 11, '6': '.place.Place', '10': 'results'},
  ],
};

/// Descriptor for `QueryPlaceListBySquareResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List queryPlaceListBySquareResponseDescriptor = $convert.base64Decode(
    'Ch5RdWVyeVBsYWNlTGlzdEJ5U3F1YXJlUmVzcG9uc2USJgoHcmVzdWx0cxgBIAMoCzIMLnBsYW'
    'NlLlBsYWNlUgdyZXN1bHRz');

@$core.Deprecated('Use queryPlaceListByRadiusRequestDescriptor instead')
const QueryPlaceListByRadiusRequest$json = {
  '1': 'QueryPlaceListByRadiusRequest',
  '2': [
    {'1': 'centerLatitude', '3': 1, '4': 1, '5': 1, '10': 'centerLatitude'},
    {'1': 'centerLongitude', '3': 2, '4': 1, '5': 1, '10': 'centerLongitude'},
    {'1': 'meterRadius', '3': 3, '4': 1, '5': 13, '10': 'meterRadius'},
    {'1': 'userLatitude', '3': 4, '4': 1, '5': 1, '9': 0, '10': 'userLatitude', '17': true},
    {'1': 'userLongitude', '3': 5, '4': 1, '5': 1, '9': 1, '10': 'userLongitude', '17': true},
  ],
  '8': [
    {'1': '_userLatitude'},
    {'1': '_userLongitude'},
  ],
};

/// Descriptor for `QueryPlaceListByRadiusRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List queryPlaceListByRadiusRequestDescriptor = $convert.base64Decode(
    'Ch1RdWVyeVBsYWNlTGlzdEJ5UmFkaXVzUmVxdWVzdBImCg5jZW50ZXJMYXRpdHVkZRgBIAEoAV'
    'IOY2VudGVyTGF0aXR1ZGUSKAoPY2VudGVyTG9uZ2l0dWRlGAIgASgBUg9jZW50ZXJMb25naXR1'
    'ZGUSIAoLbWV0ZXJSYWRpdXMYAyABKA1SC21ldGVyUmFkaXVzEicKDHVzZXJMYXRpdHVkZRgEIA'
    'EoAUgAUgx1c2VyTGF0aXR1ZGWIAQESKQoNdXNlckxvbmdpdHVkZRgFIAEoAUgBUg11c2VyTG9u'
    'Z2l0dWRliAEBQg8KDV91c2VyTGF0aXR1ZGVCEAoOX3VzZXJMb25naXR1ZGU=');

@$core.Deprecated('Use queryPlaceListByRadiusResponseDescriptor instead')
const QueryPlaceListByRadiusResponse$json = {
  '1': 'QueryPlaceListByRadiusResponse',
  '2': [
    {'1': 'results', '3': 1, '4': 3, '5': 11, '6': '.place.Place', '10': 'results'},
  ],
};

/// Descriptor for `QueryPlaceListByRadiusResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List queryPlaceListByRadiusResponseDescriptor = $convert.base64Decode(
    'Ch5RdWVyeVBsYWNlTGlzdEJ5UmFkaXVzUmVzcG9uc2USJgoHcmVzdWx0cxgBIAMoCzIMLnBsYW'
    'NlLlBsYWNlUgdyZXN1bHRz');

@$core.Deprecated('Use createPlaceRequestDescriptor instead')
const CreatePlaceRequest$json = {
  '1': 'CreatePlaceRequest',
  '2': [
    {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    {'1': 'latitude', '3': 2, '4': 1, '5': 1, '10': 'latitude'},
    {'1': 'longitude', '3': 3, '4': 1, '5': 1, '10': 'longitude'},
  ],
};

/// Descriptor for `CreatePlaceRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createPlaceRequestDescriptor = $convert.base64Decode(
    'ChJDcmVhdGVQbGFjZVJlcXVlc3QSEgoEbmFtZRgBIAEoCVIEbmFtZRIaCghsYXRpdHVkZRgCIA'
    'EoAVIIbGF0aXR1ZGUSHAoJbG9uZ2l0dWRlGAMgASgBUglsb25naXR1ZGU=');

@$core.Deprecated('Use readPlaceRequestDescriptor instead')
const ReadPlaceRequest$json = {
  '1': 'ReadPlaceRequest',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `ReadPlaceRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List readPlaceRequestDescriptor = $convert.base64Decode(
    'ChBSZWFkUGxhY2VSZXF1ZXN0Eg4KAmlkGAEgASgJUgJpZA==');

@$core.Deprecated('Use readPlaceResponseDescriptor instead')
const ReadPlaceResponse$json = {
  '1': 'ReadPlaceResponse',
  '2': [
    {'1': 'place', '3': 1, '4': 1, '5': 11, '6': '.place.Place', '10': 'place'},
  ],
};

/// Descriptor for `ReadPlaceResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List readPlaceResponseDescriptor = $convert.base64Decode(
    'ChFSZWFkUGxhY2VSZXNwb25zZRIiCgVwbGFjZRgBIAEoCzIMLnBsYWNlLlBsYWNlUgVwbGFjZQ'
    '==');

@$core.Deprecated('Use readPlaceListRequestDescriptor instead')
const ReadPlaceListRequest$json = {
  '1': 'ReadPlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.ReadPlaceRequest', '10': 'places'},
  ],
};

/// Descriptor for `ReadPlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List readPlaceListRequestDescriptor = $convert.base64Decode(
    'ChRSZWFkUGxhY2VMaXN0UmVxdWVzdBIvCgZwbGFjZXMYASADKAsyFy5wbGFjZS5SZWFkUGxhY2'
    'VSZXF1ZXN0UgZwbGFjZXM=');

@$core.Deprecated('Use readPlaceListResponseDescriptor instead')
const ReadPlaceListResponse$json = {
  '1': 'ReadPlaceListResponse',
  '2': [
    {'1': 'places', '3': 2, '4': 3, '5': 11, '6': '.place.Place', '10': 'places'},
  ],
};

/// Descriptor for `ReadPlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List readPlaceListResponseDescriptor = $convert.base64Decode(
    'ChVSZWFkUGxhY2VMaXN0UmVzcG9uc2USJAoGcGxhY2VzGAIgAygLMgwucGxhY2UuUGxhY2VSBn'
    'BsYWNlcw==');

@$core.Deprecated('Use createPlaceResponseDescriptor instead')
const CreatePlaceResponse$json = {
  '1': 'CreatePlaceResponse',
  '2': [
    {'1': 'place', '3': 1, '4': 1, '5': 11, '6': '.place.Place', '10': 'place'},
  ],
};

/// Descriptor for `CreatePlaceResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createPlaceResponseDescriptor = $convert.base64Decode(
    'ChNDcmVhdGVQbGFjZVJlc3BvbnNlEiIKBXBsYWNlGAEgASgLMgwucGxhY2UuUGxhY2VSBXBsYW'
    'Nl');

@$core.Deprecated('Use createPlaceListRequestDescriptor instead')
const CreatePlaceListRequest$json = {
  '1': 'CreatePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.CreatePlaceRequest', '10': 'places'},
  ],
};

/// Descriptor for `CreatePlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createPlaceListRequestDescriptor = $convert.base64Decode(
    'ChZDcmVhdGVQbGFjZUxpc3RSZXF1ZXN0EjEKBnBsYWNlcxgBIAMoCzIZLnBsYWNlLkNyZWF0ZV'
    'BsYWNlUmVxdWVzdFIGcGxhY2Vz');

@$core.Deprecated('Use createPlaceListResponseDescriptor instead')
const CreatePlaceListResponse$json = {
  '1': 'CreatePlaceListResponse',
  '2': [
    {'1': 'places', '3': 2, '4': 3, '5': 11, '6': '.place.Place', '10': 'places'},
  ],
};

/// Descriptor for `CreatePlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List createPlaceListResponseDescriptor = $convert.base64Decode(
    'ChdDcmVhdGVQbGFjZUxpc3RSZXNwb25zZRIkCgZwbGFjZXMYAiADKAsyDC5wbGFjZS5QbGFjZV'
    'IGcGxhY2Vz');

@$core.Deprecated('Use updatePlaceRequestDescriptor instead')
const UpdatePlaceRequest$json = {
  '1': 'UpdatePlaceRequest',
  '2': [
    {'1': 'name', '3': 1, '4': 1, '5': 9, '9': 0, '10': 'name', '17': true},
    {'1': 'latitude', '3': 2, '4': 1, '5': 1, '9': 1, '10': 'latitude', '17': true},
    {'1': 'longitude', '3': 3, '4': 1, '5': 1, '9': 2, '10': 'longitude', '17': true},
  ],
  '8': [
    {'1': '_name'},
    {'1': '_latitude'},
    {'1': '_longitude'},
  ],
};

/// Descriptor for `UpdatePlaceRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updatePlaceRequestDescriptor = $convert.base64Decode(
    'ChJVcGRhdGVQbGFjZVJlcXVlc3QSFwoEbmFtZRgBIAEoCUgAUgRuYW1liAEBEh8KCGxhdGl0dW'
    'RlGAIgASgBSAFSCGxhdGl0dWRliAEBEiEKCWxvbmdpdHVkZRgDIAEoAUgCUglsb25naXR1ZGWI'
    'AQFCBwoFX25hbWVCCwoJX2xhdGl0dWRlQgwKCl9sb25naXR1ZGU=');

@$core.Deprecated('Use updatePlaceResponseDescriptor instead')
const UpdatePlaceResponse$json = {
  '1': 'UpdatePlaceResponse',
  '2': [
    {'1': 'place', '3': 1, '4': 1, '5': 11, '6': '.place.Place', '10': 'place'},
  ],
};

/// Descriptor for `UpdatePlaceResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updatePlaceResponseDescriptor = $convert.base64Decode(
    'ChNVcGRhdGVQbGFjZVJlc3BvbnNlEiIKBXBsYWNlGAEgASgLMgwucGxhY2UuUGxhY2VSBXBsYW'
    'Nl');

@$core.Deprecated('Use updatePlaceListRequestDescriptor instead')
const UpdatePlaceListRequest$json = {
  '1': 'UpdatePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.UpdatePlaceRequest', '10': 'places'},
  ],
};

/// Descriptor for `UpdatePlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updatePlaceListRequestDescriptor = $convert.base64Decode(
    'ChZVcGRhdGVQbGFjZUxpc3RSZXF1ZXN0EjEKBnBsYWNlcxgBIAMoCzIZLnBsYWNlLlVwZGF0ZV'
    'BsYWNlUmVxdWVzdFIGcGxhY2Vz');

@$core.Deprecated('Use updatePlaceListResponseDescriptor instead')
const UpdatePlaceListResponse$json = {
  '1': 'UpdatePlaceListResponse',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.Place', '10': 'places'},
  ],
};

/// Descriptor for `UpdatePlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updatePlaceListResponseDescriptor = $convert.base64Decode(
    'ChdVcGRhdGVQbGFjZUxpc3RSZXNwb25zZRIkCgZwbGFjZXMYASADKAsyDC5wbGFjZS5QbGFjZV'
    'IGcGxhY2Vz');

@$core.Deprecated('Use deletePlaceRequestDescriptor instead')
const DeletePlaceRequest$json = {
  '1': 'DeletePlaceRequest',
  '2': [
    {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
  ],
};

/// Descriptor for `DeletePlaceRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deletePlaceRequestDescriptor = $convert.base64Decode(
    'ChJEZWxldGVQbGFjZVJlcXVlc3QSDgoCaWQYASABKAlSAmlk');

@$core.Deprecated('Use deletePlaceResponseDescriptor instead')
const DeletePlaceResponse$json = {
  '1': 'DeletePlaceResponse',
  '2': [
    {'1': 'place', '3': 1, '4': 1, '5': 11, '6': '.place.Place', '10': 'place'},
  ],
};

/// Descriptor for `DeletePlaceResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deletePlaceResponseDescriptor = $convert.base64Decode(
    'ChNEZWxldGVQbGFjZVJlc3BvbnNlEiIKBXBsYWNlGAEgASgLMgwucGxhY2UuUGxhY2VSBXBsYW'
    'Nl');

@$core.Deprecated('Use deletePlaceListRequestDescriptor instead')
const DeletePlaceListRequest$json = {
  '1': 'DeletePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.DeletePlaceRequest', '10': 'places'},
  ],
};

/// Descriptor for `DeletePlaceListRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deletePlaceListRequestDescriptor = $convert.base64Decode(
    'ChZEZWxldGVQbGFjZUxpc3RSZXF1ZXN0EjEKBnBsYWNlcxgBIAMoCzIZLnBsYWNlLkRlbGV0ZV'
    'BsYWNlUmVxdWVzdFIGcGxhY2Vz');

@$core.Deprecated('Use deletePlaceListResponseDescriptor instead')
const DeletePlaceListResponse$json = {
  '1': 'DeletePlaceListResponse',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.Place', '10': 'places'},
  ],
};

/// Descriptor for `DeletePlaceListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List deletePlaceListResponseDescriptor = $convert.base64Decode(
    'ChdEZWxldGVQbGFjZUxpc3RSZXNwb25zZRIkCgZwbGFjZXMYASADKAsyDC5wbGFjZS5QbGFjZV'
    'IGcGxhY2Vz');

