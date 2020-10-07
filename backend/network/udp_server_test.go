package udp_server_test

import (
	"bytes"
	"context"
	"net"
	"pitwall/backend/network"
	"testing"
)

func TestUdpServer(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	port := ":27002"
	receive_chan := udp_server.Init(ctx, port)

	server_addr, err := net.ResolveUDPAddr("udp", port)
	if err != nil {
		t.Error(err)
	}
	connection, err := net.DialUDP("udp", nil, server_addr)
	if err != nil {
		t.Error(err)
	}

	expected := []byte("test")
	connection.Write(expected)
	connection.Close()

	got := <-receive_chan
	if !bytes.Equal(got, expected) {
		t.Errorf("Expected: %v, Got: %v", expected, got)
	}
	cancel()
}
