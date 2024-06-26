// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.1
// source: chat-message-create.service.proto

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

// ChatMessageCreateServiceClient is the client API for ChatMessageCreateService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ChatMessageCreateServiceClient interface {
	CreateChatMessage(ctx context.Context, in *CreateChatMessageRequest, opts ...grpc.CallOption) (*CreateChatMessageResponse, error)
}

type chatMessageCreateServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewChatMessageCreateServiceClient(cc grpc.ClientConnInterface) ChatMessageCreateServiceClient {
	return &chatMessageCreateServiceClient{cc}
}

func (c *chatMessageCreateServiceClient) CreateChatMessage(ctx context.Context, in *CreateChatMessageRequest, opts ...grpc.CallOption) (*CreateChatMessageResponse, error) {
	out := new(CreateChatMessageResponse)
	err := c.cc.Invoke(ctx, "/chat.ChatMessageCreateService/CreateChatMessage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ChatMessageCreateServiceServer is the server API for ChatMessageCreateService service.
// All implementations must embed UnimplementedChatMessageCreateServiceServer
// for forward compatibility
type ChatMessageCreateServiceServer interface {
	CreateChatMessage(context.Context, *CreateChatMessageRequest) (*CreateChatMessageResponse, error)
	mustEmbedUnimplementedChatMessageCreateServiceServer()
}

// UnimplementedChatMessageCreateServiceServer must be embedded to have forward compatible implementations.
type UnimplementedChatMessageCreateServiceServer struct {
}

func (UnimplementedChatMessageCreateServiceServer) CreateChatMessage(context.Context, *CreateChatMessageRequest) (*CreateChatMessageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateChatMessage not implemented")
}
func (UnimplementedChatMessageCreateServiceServer) mustEmbedUnimplementedChatMessageCreateServiceServer() {
}

// UnsafeChatMessageCreateServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ChatMessageCreateServiceServer will
// result in compilation errors.
type UnsafeChatMessageCreateServiceServer interface {
	mustEmbedUnimplementedChatMessageCreateServiceServer()
}

func RegisterChatMessageCreateServiceServer(s grpc.ServiceRegistrar, srv ChatMessageCreateServiceServer) {
	s.RegisterService(&ChatMessageCreateService_ServiceDesc, srv)
}

func _ChatMessageCreateService_CreateChatMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateChatMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChatMessageCreateServiceServer).CreateChatMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chat.ChatMessageCreateService/CreateChatMessage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChatMessageCreateServiceServer).CreateChatMessage(ctx, req.(*CreateChatMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ChatMessageCreateService_ServiceDesc is the grpc.ServiceDesc for ChatMessageCreateService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ChatMessageCreateService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "chat.ChatMessageCreateService",
	HandlerType: (*ChatMessageCreateServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateChatMessage",
			Handler:    _ChatMessageCreateService_CreateChatMessage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "chat-message-create.service.proto",
}
