// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.25.1
// source: chat-room.proto

package chat

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

type ChatRoom struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                 string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	CreatedBy          *ChatUser              `protobuf:"bytes,2,opt,name=createdBy,proto3" json:"createdBy,omitempty"`
	CreatedDateTimeUTC *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=createdDateTimeUTC,proto3" json:"createdDateTimeUTC,omitempty"`
	UpdatedBy          *ChatUser              `protobuf:"bytes,4,opt,name=updatedBy,proto3,oneof" json:"updatedBy,omitempty"`
	UpdatedDateTimeUTC *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=updatedDateTimeUTC,proto3,oneof" json:"updatedDateTimeUTC,omitempty"`
	DeletedBy          *ChatUser              `protobuf:"bytes,6,opt,name=deletedBy,proto3,oneof" json:"deletedBy,omitempty"`
	DeletedDateTimeUTC *timestamppb.Timestamp `protobuf:"bytes,7,opt,name=deletedDateTimeUTC,proto3,oneof" json:"deletedDateTimeUTC,omitempty"`
	Title              string                 `protobuf:"bytes,8,opt,name=title,proto3" json:"title,omitempty"`
	Statistics         *ChatRoomStatistics    `protobuf:"bytes,9,opt,name=statistics,proto3" json:"statistics,omitempty"`
}

func (x *ChatRoom) Reset() {
	*x = ChatRoom{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chat_room_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ChatRoom) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ChatRoom) ProtoMessage() {}

func (x *ChatRoom) ProtoReflect() protoreflect.Message {
	mi := &file_chat_room_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ChatRoom.ProtoReflect.Descriptor instead.
func (*ChatRoom) Descriptor() ([]byte, []int) {
	return file_chat_room_proto_rawDescGZIP(), []int{0}
}

func (x *ChatRoom) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ChatRoom) GetCreatedBy() *ChatUser {
	if x != nil {
		return x.CreatedBy
	}
	return nil
}

func (x *ChatRoom) GetCreatedDateTimeUTC() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedDateTimeUTC
	}
	return nil
}

func (x *ChatRoom) GetUpdatedBy() *ChatUser {
	if x != nil {
		return x.UpdatedBy
	}
	return nil
}

func (x *ChatRoom) GetUpdatedDateTimeUTC() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedDateTimeUTC
	}
	return nil
}

func (x *ChatRoom) GetDeletedBy() *ChatUser {
	if x != nil {
		return x.DeletedBy
	}
	return nil
}

func (x *ChatRoom) GetDeletedDateTimeUTC() *timestamppb.Timestamp {
	if x != nil {
		return x.DeletedDateTimeUTC
	}
	return nil
}

func (x *ChatRoom) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *ChatRoom) GetStatistics() *ChatRoomStatistics {
	if x != nil {
		return x.Statistics
	}
	return nil
}

var File_chat_room_proto protoreflect.FileDescriptor

var file_chat_room_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x63, 0x68, 0x61, 0x74, 0x2d, 0x72, 0x6f, 0x6f, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x63, 0x68, 0x61, 0x74, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0f, 0x63, 0x68, 0x61, 0x74, 0x2d, 0x75,
	0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x63, 0x68, 0x61, 0x74, 0x2d,
	0x72, 0x6f, 0x6f, 0x6d, 0x2d, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb6, 0x04, 0x0a, 0x08, 0x43, 0x68, 0x61, 0x74, 0x52, 0x6f,
	0x6f, 0x6d, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x2c, 0x0a, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61,
	0x74, 0x55, 0x73, 0x65, 0x72, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x12, 0x4a, 0x0a, 0x12, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x54,
	0x69, 0x6d, 0x65, 0x55, 0x54, 0x43, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x12, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x44, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x55, 0x54, 0x43, 0x12, 0x31, 0x0a, 0x09,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0e, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x55, 0x73, 0x65, 0x72, 0x48,
	0x00, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x88, 0x01, 0x01, 0x12,
	0x4f, 0x0a, 0x12, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x54, 0x69,
	0x6d, 0x65, 0x55, 0x54, 0x43, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x48, 0x01, 0x52, 0x12, 0x75, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x55, 0x54, 0x43, 0x88, 0x01, 0x01,
	0x12, 0x31, 0x0a, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x42, 0x79, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x55,
	0x73, 0x65, 0x72, 0x48, 0x02, 0x52, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x88, 0x01, 0x01, 0x12, 0x4f, 0x0a, 0x12, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x44, 0x61,
	0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x55, 0x54, 0x43, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x48, 0x03, 0x52, 0x12, 0x64,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x55, 0x54,
	0x43, 0x88, 0x01, 0x01, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x38, 0x0a, 0x0a, 0x73, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18,
	0x2e, 0x63, 0x68, 0x61, 0x74, 0x2e, 0x43, 0x68, 0x61, 0x74, 0x52, 0x6f, 0x6f, 0x6d, 0x53, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x52, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x73, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64,
	0x42, 0x79, 0x42, 0x15, 0x0a, 0x13, 0x5f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x44, 0x61,
	0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x55, 0x54, 0x43, 0x42, 0x0c, 0x0a, 0x0a, 0x5f, 0x64, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x64, 0x42, 0x79, 0x42, 0x15, 0x0a, 0x13, 0x5f, 0x64, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x64, 0x44, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x55, 0x54, 0x43, 0x42, 0x39,
	0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x6e, 0x69,
	0x67, 0x68, 0x74, 0x68, 0x65, 0x6c, 0x6c, 0x2d, 0x66, 0x61, 0x6d, 0x69, 0x6c, 0x79, 0x2f, 0x6b,
	0x6e, 0x69, 0x67, 0x68, 0x74, 0x68, 0x65, 0x6c, 0x6c, 0x2d, 0x66, 0x61, 0x6d, 0x69, 0x6c, 0x79,
	0x2d, 0x69, 0x64, 0x6c, 0x2f, 0x63, 0x68, 0x61, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_chat_room_proto_rawDescOnce sync.Once
	file_chat_room_proto_rawDescData = file_chat_room_proto_rawDesc
)

func file_chat_room_proto_rawDescGZIP() []byte {
	file_chat_room_proto_rawDescOnce.Do(func() {
		file_chat_room_proto_rawDescData = protoimpl.X.CompressGZIP(file_chat_room_proto_rawDescData)
	})
	return file_chat_room_proto_rawDescData
}

var file_chat_room_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_chat_room_proto_goTypes = []interface{}{
	(*ChatRoom)(nil),              // 0: chat.ChatRoom
	(*ChatUser)(nil),              // 1: chat.ChatUser
	(*timestamppb.Timestamp)(nil), // 2: google.protobuf.Timestamp
	(*ChatRoomStatistics)(nil),    // 3: chat.ChatRoomStatistics
}
var file_chat_room_proto_depIdxs = []int32{
	1, // 0: chat.ChatRoom.createdBy:type_name -> chat.ChatUser
	2, // 1: chat.ChatRoom.createdDateTimeUTC:type_name -> google.protobuf.Timestamp
	1, // 2: chat.ChatRoom.updatedBy:type_name -> chat.ChatUser
	2, // 3: chat.ChatRoom.updatedDateTimeUTC:type_name -> google.protobuf.Timestamp
	1, // 4: chat.ChatRoom.deletedBy:type_name -> chat.ChatUser
	2, // 5: chat.ChatRoom.deletedDateTimeUTC:type_name -> google.protobuf.Timestamp
	3, // 6: chat.ChatRoom.statistics:type_name -> chat.ChatRoomStatistics
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_chat_room_proto_init() }
func file_chat_room_proto_init() {
	if File_chat_room_proto != nil {
		return
	}
	file_chat_user_proto_init()
	file_chat_room_statistics_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_chat_room_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ChatRoom); i {
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
	file_chat_room_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_chat_room_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_chat_room_proto_goTypes,
		DependencyIndexes: file_chat_room_proto_depIdxs,
		MessageInfos:      file_chat_room_proto_msgTypes,
	}.Build()
	File_chat_room_proto = out.File
	file_chat_room_proto_rawDesc = nil
	file_chat_room_proto_goTypes = nil
	file_chat_room_proto_depIdxs = nil
}
