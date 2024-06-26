// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.1
// source: chat-room-read-list.service.proto

package chat

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ChatRoomReadListServiceClient is the client API for ChatRoomReadListService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ChatRoomReadListServiceClient interface {
	ReadListChatRoom(ctx context.Context, in *ReadListChatRoomRequest, opts ...grpc.CallOption) (*ReadListChatRoomResponse, error)
}

type chatRoomReadListServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewChatRoomReadListServiceClient(cc grpc.ClientConnInterface) ChatRoomReadListServiceClient {
	return &chatRoomReadListServiceClient{cc}
}

func (c *chatRoomReadListServiceClient) ReadListChatRoom(ctx context.Context, in *ReadListChatRoomRequest, opts ...grpc.CallOption) (*ReadListChatRoomResponse, error) {
	out := new(ReadListChatRoomResponse)
	err := c.cc.Invoke(ctx, "/chat.ChatRoomReadListService/ReadListChatRoom", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ChatRoomReadListServiceServer is the server API for ChatRoomReadListService service.
// All implementations must embed UnimplementedChatRoomReadListServiceServer
// for forward compatibility
type ChatRoomReadListServiceServer interface {
	ReadListChatRoom(context.Context, *ReadListChatRoomRequest) (*ReadListChatRoomResponse, error)
	mustEmbedUnimplementedChatRoomReadListServiceServer()
}

// UnimplementedChatRoomReadListServiceServer must be embedded to have forward compatible implementations.
type UnimplementedChatRoomReadListServiceServer struct {
}

func (UnimplementedChatRoomReadListServiceServer) ReadListChatRoom(context.Context, *ReadListChatRoomRequest) (*ReadListChatRoomResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadListChatRoom not implemented")
}
func (UnimplementedChatRoomReadListServiceServer) mustEmbedUnimplementedChatRoomReadListServiceServer() {
}

// UnsafeChatRoomReadListServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ChatRoomReadListServiceServer will
// result in compilation errors.
type UnsafeChatRoomReadListServiceServer interface {
	mustEmbedUnimplementedChatRoomReadListServiceServer()
}

func RegisterChatRoomReadListServiceServer(s grpc.ServiceRegistrar, srv ChatRoomReadListServiceServer) {
	s.RegisterService(&ChatRoomReadListService_ServiceDesc, srv)
}

func _ChatRoomReadListService_ReadListChatRoom_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadListChatRoomRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatRoomReadListServiceServer).ReadListChatRoom(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chat.ChatRoomReadListService/ReadListChatRoom",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatRoomReadListServiceServer).ReadListChatRoom(ctx, req.(*ReadListChatRoomRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ChatRoomReadListService_ServiceDesc is the grpc.ServiceDesc for ChatRoomReadListService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ChatRoomReadListService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "chat.ChatRoomReadListService",
	HandlerType: (*ChatRoomReadListServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ReadListChatRoom",
			Handler:    _ChatRoomReadListService_ReadListChatRoom_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "chat-room-read-list.service.proto",
}
