package server

import (
	"context"
	"log"
	protos "pitwall/backend/protos"
	"time"
)

type TimingsServer struct {
	protos.UnimplementedTimingsServer
}

func (s *TimingsServer) Session(ctx context.Context, req *protos.EmptyRequest) (*protos.SessionReply, error) {
	reply := protos.SessionReply{
		Session: &protos.Session{
			Participants: []*protos.Participant{
				{
					Name:       "test_driver1",
					TeamId:     1,
					RaceNumber: 1,
				},
				{
					Name:       "test_driver2",
					TeamId:     2,
					RaceNumber: 2,
				},
				{
					Name:       "test_driver3",
					TeamId:     3,
					RaceNumber: 3,
				},
			},
		},
	}
	return &reply, nil
}

func (s *TimingsServer) RaceUpdates(req *protos.EmptyRequest, stream protos.Timings_RaceUpdatesServer) error {
	reply := protos.CarReply{
		Cars: []*protos.Car{
			{
				Position: &protos.Car_WorldPosition{
					X: 0,
					Y: 0,
				},
			},
			{
				Position: &protos.Car_WorldPosition{
					X: 1,
					Y: 0,
				},
			},
			{
				Position: &protos.Car_WorldPosition{
					X: 2,
					Y: 0,
				},
			},
		},
	}
	for {
		if err := stream.Send(&reply); err != nil {
			log.Print(err)
			return err
		}
		for _, car := range reply.Cars {
			car.Position.X += 1
			car.Position.Y += 1
		}
		time.Sleep(5 * time.Second)
	}
}
