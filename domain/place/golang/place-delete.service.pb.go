// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.25.1
// source: place-delete.service.proto

package place

import (
	place "github.com/knighthell/knighthell-boilerplate-idl-proto/place"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type DeletePlaceListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Places []*DeletePlaceListRequest_Place `protobuf:"bytes,1,rep,name=places,proto3" json:"places,omitempty"`
}

func (x *DeletePlaceListRequest) Reset() {
	*x = DeletePlaceListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_delete_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePlaceListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePlaceListRequest) ProtoMessage() {}

func (x *DeletePlaceListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_place_delete_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePlaceListRequest.ProtoReflect.Descriptor instead.
func (*DeletePlaceListRequest) Descriptor() ([]byte, []int) {
	return file_place_delete_service_proto_rawDescGZIP(), []int{0}
}

func (x *DeletePlaceListRequest) GetPlaces() []*DeletePlaceListRequest_Place {
	if x != nil {
		return x.Places
	}
	return nil
}

type DeletePlaceListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*place.Place `protobuf:"bytes,2,rep,name=results,proto3" json:"results,omitempty"`
}

func (x *DeletePlaceListResponse) Reset() {
	*x = DeletePlaceListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_delete_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePlaceListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePlaceListResponse) ProtoMessage() {}

func (x *DeletePlaceListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_place_delete_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePlaceListResponse.ProtoReflect.Descriptor instead.
func (*DeletePlaceListResponse) Descriptor() ([]byte, []int) {
	return file_place_delete_service_proto_rawDescGZIP(), []int{1}
}

func (x *DeletePlaceListResponse) GetResults() []*place.Place {
	if x != nil {
		return x.Results
	}
	return nil
}

type DeletePlaceListRequest_Place struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlaceId string `protobuf:"bytes,1,opt,name=placeId,proto3" json:"placeId,omitempty"`
}

func (x *DeletePlaceListRequest_Place) Reset() {
	*x = DeletePlaceListRequest_Place{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_delete_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeletePlaceListRequest_Place) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeletePlaceListRequest_Place) ProtoMessage() {}

func (x *DeletePlaceListRequest_Place) ProtoReflect() protoreflect.Message {
	mi := &file_place_delete_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeletePlaceListRequest_Place.ProtoReflect.Descriptor instead.
func (*DeletePlaceListRequest_Place) Descriptor() ([]byte, []int) {
	return file_place_delete_service_proto_rawDescGZIP(), []int{0, 0}
}

func (x *DeletePlaceListRequest_Place) GetPlaceId() string {
	if x != nil {
		return x.PlaceId
	}
	return ""
}

var File_place_delete_service_proto protoreflect.FileDescriptor

var file_place_delete_service_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2d, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x64, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x1a, 0x0b, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x87, 0x01, 0x0a, 0x16, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x4a, 0x0a, 0x06, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x70, 0x6c, 0x61,
	0x63, 0x65, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x64, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x52, 0x06,
	0x70, 0x6c, 0x61, 0x63, 0x65, 0x73, 0x1a, 0x21, 0x0a, 0x05, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x12,
	0x18, 0x0a, 0x07, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x49, 0x64, 0x22, 0x41, 0x0a, 0x17, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x50, 0x6c,
	0x61, 0x63, 0x65, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x32, 0x84, 0x01, 0x0a,
	0x12, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x6e, 0x0a, 0x0f, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x6c, 0x61,
	0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x2c, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x2e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x2d, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x42, 0x45, 0x5a, 0x43, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x6b, 0x6e, 0x69, 0x67, 0x68, 0x74, 0x68, 0x65, 0x6c, 0x6c, 0x2f, 0x6b, 0x6e, 0x69,
	0x67, 0x68, 0x74, 0x68, 0x65, 0x6c, 0x6c, 0x2d, 0x62, 0x6f, 0x69, 0x6c, 0x65, 0x72, 0x70, 0x6c,
	0x61, 0x74, 0x65, 0x2d, 0x69, 0x64, 0x6c, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x64, 0x6f,
	0x6d, 0x61, 0x69, 0x6e, 0x2f, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_place_delete_service_proto_rawDescOnce sync.Once
	file_place_delete_service_proto_rawDescData = file_place_delete_service_proto_rawDesc
)

func file_place_delete_service_proto_rawDescGZIP() []byte {
	file_place_delete_service_proto_rawDescOnce.Do(func() {
		file_place_delete_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_place_delete_service_proto_rawDescData)
	})
	return file_place_delete_service_proto_rawDescData
}

var file_place_delete_service_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_place_delete_service_proto_goTypes = []interface{}{
	(*DeletePlaceListRequest)(nil),       // 0: place.service.delete.DeletePlaceListRequest
	(*DeletePlaceListResponse)(nil),      // 1: place.service.delete.DeletePlaceListResponse
	(*DeletePlaceListRequest_Place)(nil), // 2: place.service.delete.DeletePlaceListRequest.Place
	(*place.Place)(nil),                  // 3: place.Place
}
var file_place_delete_service_proto_depIdxs = []int32{
	2, // 0: place.service.delete.DeletePlaceListRequest.places:type_name -> place.service.delete.DeletePlaceListRequest.Place
	3, // 1: place.service.delete.DeletePlaceListResponse.results:type_name -> place.Place
	0, // 2: place.service.delete.PlaceDeleteService.DeletePlaceList:input_type -> place.service.delete.DeletePlaceListRequest
	1, // 3: place.service.delete.PlaceDeleteService.DeletePlaceList:output_type -> place.service.delete.DeletePlaceListResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_place_delete_service_proto_init() }
func file_place_delete_service_proto_init() {
	if File_place_delete_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_place_delete_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePlaceListRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_place_delete_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePlaceListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_place_delete_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeletePlaceListRequest_Place); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_place_delete_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_place_delete_service_proto_goTypes,
		DependencyIndexes: file_place_delete_service_proto_depIdxs,
		MessageInfos:      file_place_delete_service_proto_msgTypes,
	}.Build()
	File_place_delete_service_proto = out.File
	file_place_delete_service_proto_rawDesc = nil
	file_place_delete_service_proto_goTypes = nil
	file_place_delete_service_proto_depIdxs = nil
}
