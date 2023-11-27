// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.25.1
// source: place.proto

package place

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Place struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id              string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Latitude        float64                `protobuf:"fixed64,2,opt,name=latitude,proto3" json:"latitude,omitempty"`
	Longitude       float64                `protobuf:"fixed64,3,opt,name=longitude,proto3" json:"longitude,omitempty"`
	CreatedBy       *PlaceUser             `protobuf:"bytes,4,opt,name=createdBy,proto3" json:"createdBy,omitempty"`
	CreatedAt       *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
	UpdatedBy       *PlaceUser             `protobuf:"bytes,6,opt,name=updatedBy,proto3" json:"updatedBy,omitempty"`
	UpdatedAt       *timestamppb.Timestamp `protobuf:"bytes,7,opt,name=updatedAt,proto3" json:"updatedAt,omitempty"`
	DeletedBy       *PlaceUser             `protobuf:"bytes,8,opt,name=deletedBy,proto3" json:"deletedBy,omitempty"`
	DeletedAt       *timestamppb.Timestamp `protobuf:"bytes,9,opt,name=deletedAt,proto3" json:"deletedAt,omitempty"`
	Name            string                 `protobuf:"bytes,10,opt,name=name,proto3" json:"name,omitempty"`
	NameTranslation *PlaceNameTranslation  `protobuf:"bytes,11,opt,name=nameTranslation,proto3,oneof" json:"nameTranslation,omitempty"`
	Address         *PlaceAddress          `protobuf:"bytes,12,opt,name=address,proto3,oneof" json:"address,omitempty"`
}

func (x *Place) Reset() {
	*x = Place{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Place) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Place) ProtoMessage() {}

func (x *Place) ProtoReflect() protoreflect.Message {
	mi := &file_place_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Place.ProtoReflect.Descriptor instead.
func (*Place) Descriptor() ([]byte, []int) {
	return file_place_proto_rawDescGZIP(), []int{0}
}

func (x *Place) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Place) GetLatitude() float64 {
	if x != nil {
		return x.Latitude
	}
	return 0
}

func (x *Place) GetLongitude() float64 {
	if x != nil {
		return x.Longitude
	}
	return 0
}

func (x *Place) GetCreatedBy() *PlaceUser {
	if x != nil {
		return x.CreatedBy
	}
	return nil
}

func (x *Place) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Place) GetUpdatedBy() *PlaceUser {
	if x != nil {
		return x.UpdatedBy
	}
	return nil
}

func (x *Place) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

func (x *Place) GetDeletedBy() *PlaceUser {
	if x != nil {
		return x.DeletedBy
	}
	return nil
}

func (x *Place) GetDeletedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.DeletedAt
	}
	return nil
}

func (x *Place) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Place) GetNameTranslation() *PlaceNameTranslation {
	if x != nil {
		return x.NameTranslation
	}
	return nil
}

func (x *Place) GetAddress() *PlaceAddress {
	if x != nil {
		return x.Address
	}
	return nil
}

type PlaceUser struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Email       string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	PhotoURL    string `protobuf:"bytes,3,opt,name=photoURL,proto3" json:"photoURL,omitempty"`
	DisplayName string `protobuf:"bytes,4,opt,name=displayName,proto3" json:"displayName,omitempty"`
}

func (x *PlaceUser) Reset() {
	*x = PlaceUser{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlaceUser) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlaceUser) ProtoMessage() {}

func (x *PlaceUser) ProtoReflect() protoreflect.Message {
	mi := &file_place_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlaceUser.ProtoReflect.Descriptor instead.
func (*PlaceUser) Descriptor() ([]byte, []int) {
	return file_place_proto_rawDescGZIP(), []int{1}
}

func (x *PlaceUser) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *PlaceUser) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *PlaceUser) GetPhotoURL() string {
	if x != nil {
		return x.PhotoURL
	}
	return ""
}

func (x *PlaceUser) GetDisplayName() string {
	if x != nil {
		return x.DisplayName
	}
	return ""
}

type PlaceNameTranslation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ko string `protobuf:"bytes,1,opt,name=ko,proto3" json:"ko,omitempty"`
	En string `protobuf:"bytes,2,opt,name=en,proto3" json:"en,omitempty"`
}

func (x *PlaceNameTranslation) Reset() {
	*x = PlaceNameTranslation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlaceNameTranslation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlaceNameTranslation) ProtoMessage() {}

func (x *PlaceNameTranslation) ProtoReflect() protoreflect.Message {
	mi := &file_place_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlaceNameTranslation.ProtoReflect.Descriptor instead.
func (*PlaceNameTranslation) Descriptor() ([]byte, []int) {
	return file_place_proto_rawDescGZIP(), []int{2}
}

func (x *PlaceNameTranslation) GetKo() string {
	if x != nil {
		return x.Ko
	}
	return ""
}

func (x *PlaceNameTranslation) GetEn() string {
	if x != nil {
		return x.En
	}
	return ""
}

type PlaceAddress struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RoadNameAddress  *string `protobuf:"bytes,1,opt,name=roadNameAddress,proto3,oneof" json:"roadNameAddress,omitempty"`
	LotNumberAddress *string `protobuf:"bytes,2,opt,name=lotNumberAddress,proto3,oneof" json:"lotNumberAddress,omitempty"`
}

func (x *PlaceAddress) Reset() {
	*x = PlaceAddress{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlaceAddress) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlaceAddress) ProtoMessage() {}

func (x *PlaceAddress) ProtoReflect() protoreflect.Message {
	mi := &file_place_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlaceAddress.ProtoReflect.Descriptor instead.
func (*PlaceAddress) Descriptor() ([]byte, []int) {
	return file_place_proto_rawDescGZIP(), []int{3}
}

func (x *PlaceAddress) GetRoadNameAddress() string {
	if x != nil && x.RoadNameAddress != nil {
		return *x.RoadNameAddress
	}
	return ""
}

func (x *PlaceAddress) GetLotNumberAddress() string {
	if x != nil && x.LotNumberAddress != nil {
		return *x.LotNumberAddress
	}
	return ""
}

type Wgs84Coordinates struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Latitude  float64 `protobuf:"fixed64,1,opt,name=latitude,proto3" json:"latitude,omitempty"`
	Longitude float64 `protobuf:"fixed64,2,opt,name=longitude,proto3" json:"longitude,omitempty"`
}

func (x *Wgs84Coordinates) Reset() {
	*x = Wgs84Coordinates{}
	if protoimpl.UnsafeEnabled {
		mi := &file_place_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Wgs84Coordinates) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Wgs84Coordinates) ProtoMessage() {}

func (x *Wgs84Coordinates) ProtoReflect() protoreflect.Message {
	mi := &file_place_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Wgs84Coordinates.ProtoReflect.Descriptor instead.
func (*Wgs84Coordinates) Descriptor() ([]byte, []int) {
	return file_place_proto_rawDescGZIP(), []int{4}
}

func (x *Wgs84Coordinates) GetLatitude() float64 {
	if x != nil {
		return x.Latitude
	}
	return 0
}

func (x *Wgs84Coordinates) GetLongitude() float64 {
	if x != nil {
		return x.Longitude
	}
	return 0
}

var File_place_proto protoreflect.FileDescriptor

var file_place_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70,
	0x6c, 0x61, 0x63, 0x65, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc3, 0x04, 0x0a, 0x05, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x1a, 0x0a, 0x08, 0x6c, 0x61, 0x74, 0x69, 0x74, 0x75, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x01, 0x52, 0x08, 0x6c, 0x61, 0x74, 0x69, 0x74, 0x75, 0x64, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6c,
	0x6f, 0x6e, 0x67, 0x69, 0x74, 0x75, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x09,
	0x6c, 0x6f, 0x6e, 0x67, 0x69, 0x74, 0x75, 0x64, 0x65, 0x12, 0x2e, 0x0a, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70,
	0x6c, 0x61, 0x63, 0x65, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x09,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12, 0x38, 0x0a, 0x09, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x41, 0x74, 0x12, 0x2e, 0x0a, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x50,
	0x6c, 0x61, 0x63, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x42, 0x79, 0x12, 0x38, 0x0a, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x2e, 0x0a,
	0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x42, 0x79, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x10, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12, 0x38, 0x0a,
	0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x41, 0x74, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x64, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x4a, 0x0a, 0x0f, 0x6e,
	0x61, 0x6d, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x6c, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0b,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x2e, 0x50, 0x6c, 0x61,
	0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x6c, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x48, 0x00, 0x52, 0x0f, 0x6e, 0x61, 0x6d, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x6c, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x88, 0x01, 0x01, 0x12, 0x32, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x70, 0x6c, 0x61, 0x63, 0x65,
	0x2e, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x48, 0x01, 0x52,
	0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x88, 0x01, 0x01, 0x42, 0x12, 0x0a, 0x10, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x6c, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x42,
	0x0a, 0x0a, 0x08, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22, 0x6f, 0x0a, 0x09, 0x50,
	0x6c, 0x61, 0x63, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x1a,
	0x0a, 0x08, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x55, 0x52, 0x4c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x55, 0x52, 0x4c, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x69,
	0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0x36, 0x0a, 0x14,
	0x50, 0x6c, 0x61, 0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x6c, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x6b, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x6b, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x02, 0x65, 0x6e, 0x22, 0x97, 0x01, 0x0a, 0x0c, 0x50, 0x6c, 0x61, 0x63, 0x65, 0x41, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x2d, 0x0a, 0x0f, 0x72, 0x6f, 0x61, 0x64, 0x4e, 0x61, 0x6d,
	0x65, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00,
	0x52, 0x0f, 0x72, 0x6f, 0x61, 0x64, 0x4e, 0x61, 0x6d, 0x65, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x88, 0x01, 0x01, 0x12, 0x2f, 0x0a, 0x10, 0x6c, 0x6f, 0x74, 0x4e, 0x75, 0x6d, 0x62, 0x65,
	0x72, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01,
	0x52, 0x10, 0x6c, 0x6f, 0x74, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x41, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x88, 0x01, 0x01, 0x42, 0x12, 0x0a, 0x10, 0x5f, 0x72, 0x6f, 0x61, 0x64, 0x4e, 0x61,
	0x6d, 0x65, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x42, 0x13, 0x0a, 0x11, 0x5f, 0x6c, 0x6f,
	0x74, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22, 0x4c,
	0x0a, 0x10, 0x57, 0x67, 0x73, 0x38, 0x34, 0x43, 0x6f, 0x6f, 0x72, 0x64, 0x69, 0x6e, 0x61, 0x74,
	0x65, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x6c, 0x61, 0x74, 0x69, 0x74, 0x75, 0x64, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x01, 0x52, 0x08, 0x6c, 0x61, 0x74, 0x69, 0x74, 0x75, 0x64, 0x65, 0x12, 0x1c,
	0x0a, 0x09, 0x6c, 0x6f, 0x6e, 0x67, 0x69, 0x74, 0x75, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x01, 0x52, 0x09, 0x6c, 0x6f, 0x6e, 0x67, 0x69, 0x74, 0x75, 0x64, 0x65, 0x42, 0x3e, 0x5a, 0x3c,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x6e, 0x69, 0x67, 0x68,
	0x74, 0x68, 0x65, 0x6c, 0x6c, 0x2f, 0x6b, 0x6e, 0x69, 0x67, 0x68, 0x74, 0x68, 0x65, 0x6c, 0x6c,
	0x2d, 0x62, 0x6f, 0x69, 0x6c, 0x65, 0x72, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x2d, 0x69, 0x64, 0x6c,
	0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_place_proto_rawDescOnce sync.Once
	file_place_proto_rawDescData = file_place_proto_rawDesc
)

func file_place_proto_rawDescGZIP() []byte {
	file_place_proto_rawDescOnce.Do(func() {
		file_place_proto_rawDescData = protoimpl.X.CompressGZIP(file_place_proto_rawDescData)
	})
	return file_place_proto_rawDescData
}

var file_place_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_place_proto_goTypes = []interface{}{
	(*Place)(nil),                 // 0: place.Place
	(*PlaceUser)(nil),             // 1: place.PlaceUser
	(*PlaceNameTranslation)(nil),  // 2: place.PlaceNameTranslation
	(*PlaceAddress)(nil),          // 3: place.PlaceAddress
	(*Wgs84Coordinates)(nil),      // 4: place.Wgs84Coordinates
	(*timestamppb.Timestamp)(nil), // 5: google.protobuf.Timestamp
}
var file_place_proto_depIdxs = []int32{
	1, // 0: place.Place.createdBy:type_name -> place.PlaceUser
	5, // 1: place.Place.createdAt:type_name -> google.protobuf.Timestamp
	1, // 2: place.Place.updatedBy:type_name -> place.PlaceUser
	5, // 3: place.Place.updatedAt:type_name -> google.protobuf.Timestamp
	1, // 4: place.Place.deletedBy:type_name -> place.PlaceUser
	5, // 5: place.Place.deletedAt:type_name -> google.protobuf.Timestamp
	2, // 6: place.Place.nameTranslation:type_name -> place.PlaceNameTranslation
	3, // 7: place.Place.address:type_name -> place.PlaceAddress
	8, // [8:8] is the sub-list for method output_type
	8, // [8:8] is the sub-list for method input_type
	8, // [8:8] is the sub-list for extension type_name
	8, // [8:8] is the sub-list for extension extendee
	0, // [0:8] is the sub-list for field type_name
}

func init() { file_place_proto_init() }
func file_place_proto_init() {
	if File_place_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_place_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Place); i {
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
		file_place_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlaceUser); i {
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
		file_place_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlaceNameTranslation); i {
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
		file_place_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlaceAddress); i {
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
		file_place_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Wgs84Coordinates); i {
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
	file_place_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_place_proto_msgTypes[3].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_place_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_place_proto_goTypes,
		DependencyIndexes: file_place_proto_depIdxs,
		MessageInfos:      file_place_proto_msgTypes,
	}.Build()
	File_place_proto = out.File
	file_place_proto_rawDesc = nil
	file_place_proto_goTypes = nil
	file_place_proto_depIdxs = nil
}
