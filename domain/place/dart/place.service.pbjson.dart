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

@$core.Deprecated('Use placeServiceRequestEventTypeDescriptor instead')
const PlaceServiceRequestEventType$json = {
  '1': 'PlaceServiceRequestEventType',
  '2': [
    {'1': 'CREATE_PLACE', '2': 0},
    {'1': 'READ_PLACE', '2': 1},
    {'1': 'UPDATE_PLACE', '2': 2},
    {'1': 'DELETE_PLACE', '2': 3},
  ],
};

/// Descriptor for `PlaceServiceRequestEventType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List placeServiceRequestEventTypeDescriptor = $convert.base64Decode(
    'ChxQbGFjZVNlcnZpY2VSZXF1ZXN0RXZlbnRUeXBlEhAKDENSRUFURV9QTEFDRRAAEg4KClJFQU'
    'RfUExBQ0UQARIQCgxVUERBVEVfUExBQ0UQAhIQCgxERUxFVEVfUExBQ0UQAw==');

@$core.Deprecated('Use placeServiceResponseEventTypeDescriptor instead')
const PlaceServiceResponseEventType$json = {
  '1': 'PlaceServiceResponseEventType',
  '2': [
    {'1': 'PLACE_CREATED', '2': 0},
    {'1': 'PLACE_READ', '2': 1},
    {'1': 'PLACE_UPDATED', '2': 2},
    {'1': 'PLACE_DELETED', '2': 3},
  ],
};

/// Descriptor for `PlaceServiceResponseEventType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List placeServiceResponseEventTypeDescriptor = $convert.base64Decode(
    'Ch1QbGFjZVNlcnZpY2VSZXNwb25zZUV2ZW50VHlwZRIRCg1QTEFDRV9DUkVBVEVEEAASDgoKUE'
    'xBQ0VfUkVBRBABEhEKDVBMQUNFX1VQREFURUQQAhIRCg1QTEFDRV9ERUxFVEVEEAM=');

@$core.Deprecated('Use createPlaceListRequestDescriptor instead')
const CreatePlaceListRequest$json = {
  '1': 'CreatePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.CreatePlaceListRequest.Place', '10': 'places'},
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
    'ChZDcmVhdGVQbGFjZUxpc3RSZXF1ZXN0EjsKBnBsYWNlcxgBIAMoCzIjLnBsYWNlLkNyZWF0ZV'
    'BsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxpVCgVQbGFjZRISCgRuYW1lGAIgASgJUgRu'
    'YW1lEhoKCGxhdGl0dWRlGAMgASgBUghsYXRpdHVkZRIcCglsb25naXR1ZGUYBCABKAFSCWxvbm'
    'dpdHVkZQ==');

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

@$core.Deprecated('Use readPlaceListRequestDescriptor instead')
const ReadPlaceListRequest$json = {
  '1': 'ReadPlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.ReadPlaceListRequest.Place', '10': 'places'},
    {'1': 'keywords', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'keywords', '17': true},
    {'1': 'createdAtPeriod', '3': 3, '4': 1, '5': 11, '6': '.common.PeriodDateTime', '9': 1, '10': 'createdAtPeriod', '17': true},
    {'1': 'updatedAtPeriod', '3': 4, '4': 1, '5': 11, '6': '.common.PeriodDateTime', '9': 2, '10': 'updatedAtPeriod', '17': true},
    {'1': 'deletedAtPeriod', '3': 5, '4': 1, '5': 11, '6': '.common.PeriodDateTime', '9': 3, '10': 'deletedAtPeriod', '17': true},
    {'1': 'isIncludeDeletedPlace', '3': 6, '4': 1, '5': 8, '9': 4, '10': 'isIncludeDeletedPlace', '17': true},
    {'1': 'boundSquare', '3': 7, '4': 1, '5': 11, '6': '.place.BoundSquare', '9': 5, '10': 'boundSquare', '17': true},
    {'1': 'boundCircle', '3': 8, '4': 1, '5': 11, '6': '.place.BoundCircle', '9': 6, '10': 'boundCircle', '17': true},
    {'1': 'userLocation', '3': 9, '4': 1, '5': 11, '6': '.place.Wgs84Coordinates', '9': 7, '10': 'userLocation', '17': true},
    {'1': 'pagination', '3': 10, '4': 1, '5': 11, '6': '.place.Pagination', '9': 8, '10': 'pagination', '17': true},
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
    'ChRSZWFkUGxhY2VMaXN0UmVxdWVzdBI5CgZwbGFjZXMYASADKAsyIS5wbGFjZS5SZWFkUGxhY2'
    'VMaXN0UmVxdWVzdC5QbGFjZVIGcGxhY2VzEh8KCGtleXdvcmRzGAIgASgJSABSCGtleXdvcmRz'
    'iAEBEkUKD2NyZWF0ZWRBdFBlcmlvZBgDIAEoCzIWLmNvbW1vbi5QZXJpb2REYXRlVGltZUgBUg'
    '9jcmVhdGVkQXRQZXJpb2SIAQESRQoPdXBkYXRlZEF0UGVyaW9kGAQgASgLMhYuY29tbW9uLlBl'
    'cmlvZERhdGVUaW1lSAJSD3VwZGF0ZWRBdFBlcmlvZIgBARJFCg9kZWxldGVkQXRQZXJpb2QYBS'
    'ABKAsyFi5jb21tb24uUGVyaW9kRGF0ZVRpbWVIA1IPZGVsZXRlZEF0UGVyaW9kiAEBEjkKFWlz'
    'SW5jbHVkZURlbGV0ZWRQbGFjZRgGIAEoCEgEUhVpc0luY2x1ZGVEZWxldGVkUGxhY2WIAQESOQ'
    'oLYm91bmRTcXVhcmUYByABKAsyEi5wbGFjZS5Cb3VuZFNxdWFyZUgFUgtib3VuZFNxdWFyZYgB'
    'ARI5Cgtib3VuZENpcmNsZRgIIAEoCzISLnBsYWNlLkJvdW5kQ2lyY2xlSAZSC2JvdW5kQ2lyY2'
    'xliAEBEkAKDHVzZXJMb2NhdGlvbhgJIAEoCzIXLnBsYWNlLldnczg0Q29vcmRpbmF0ZXNIB1IM'
    'dXNlckxvY2F0aW9uiAEBEjYKCnBhZ2luYXRpb24YCiABKAsyES5wbGFjZS5QYWdpbmF0aW9uSA'
    'hSCnBhZ2luYXRpb26IAQEaIQoFUGxhY2USGAoHcGxhY2VJZBgBIAEoCVIHcGxhY2VJZEILCglf'
    'a2V5d29yZHNCEgoQX2NyZWF0ZWRBdFBlcmlvZEISChBfdXBkYXRlZEF0UGVyaW9kQhIKEF9kZW'
    'xldGVkQXRQZXJpb2RCGAoWX2lzSW5jbHVkZURlbGV0ZWRQbGFjZUIOCgxfYm91bmRTcXVhcmVC'
    'DgoMX2JvdW5kQ2lyY2xlQg8KDV91c2VyTG9jYXRpb25CDQoLX3BhZ2luYXRpb24=');

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

@$core.Deprecated('Use updatePlaceListRequestDescriptor instead')
const UpdatePlaceListRequest$json = {
  '1': 'UpdatePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.UpdatePlaceListRequest.Place', '10': 'places'},
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
    'ChZVcGRhdGVQbGFjZUxpc3RSZXF1ZXN0EjsKBnBsYWNlcxgBIAMoCzIjLnBsYWNlLlVwZGF0ZV'
    'BsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxqiAQoFUGxhY2USGAoHcGxhY2VJZBgBIAEo'
    'CVIHcGxhY2VJZBIXCgRuYW1lGAIgASgJSABSBG5hbWWIAQESHwoIbGF0aXR1ZGUYAyABKAFIAV'
    'IIbGF0aXR1ZGWIAQESIQoJbG9uZ2l0dWRlGAQgASgBSAJSCWxvbmdpdHVkZYgBAUIHCgVfbmFt'
    'ZUILCglfbGF0aXR1ZGVCDAoKX2xvbmdpdHVkZQ==');

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

@$core.Deprecated('Use deletePlaceListRequestDescriptor instead')
const DeletePlaceListRequest$json = {
  '1': 'DeletePlaceListRequest',
  '2': [
    {'1': 'places', '3': 1, '4': 3, '5': 11, '6': '.place.DeletePlaceListRequest.Place', '10': 'places'},
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
    'ChZEZWxldGVQbGFjZUxpc3RSZXF1ZXN0EjsKBnBsYWNlcxgBIAMoCzIjLnBsYWNlLkRlbGV0ZV'
    'BsYWNlTGlzdFJlcXVlc3QuUGxhY2VSBnBsYWNlcxohCgVQbGFjZRIYCgdwbGFjZUlkGAEgASgJ'
    'UgdwbGFjZUlk');

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

