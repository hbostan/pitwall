<template>
  <div id="timings">
    <h1>Timings</h1>
    <ul>
      <li v-for="(participant,index) in session.participants" :key="index">
        <div class="card">
          <div class="card-info order">{{index}}</div>
          <div class="card-info car-no">{{participant.getRaceNumber()}}</div>
          <div class="card-info name">{{participant.getName()}}</div>
          <div class="card-info time" v-if="cars.length > index">
            {{cars[index].getPosition().getX()}}
          </div>
          <div class="card-info gap" v-if="cars.length > index">
            {{cars[index].getPosition().getY()}}
          </div>
        </div>
      </li>
    </ul>
    <h1>Positions</h1>
    <canvas id="position-canvas" width="480" height="480" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const { Car, Participant, Session } = require('../protos/car_pb.js');
// eslint-disable-next-line no-unused-vars
const { SessionReply, CarReply, EmptyRequest } = require('../protos/service_pb.js');
const { TimingsClient } = require('../protos/service_grpc_web_pb.js');

export default {
  name: 'Timings',
  data() {
    return {
      // timings array should be filled with data.
      cars: [],
      session: {
        type: Number,
        track_id: Number,
        participants: [],
      },
      canvas: null,
    };
  },
  methods: {
    GetParticipants() {
      const timingsService = new TimingsClient('http://localhost:50052');
      const request = new EmptyRequest();
      timingsService.session(request, {}, (err, resp) => {
        if (err != null) {
          console.log(err);
          return;
        }
        const s = resp.getSession();
        this.session.type = s.getType();
        this.session.track_id = s.getTrackId();
        this.session.participants = s.getParticipantsList();
      });
    },
    UpdateGraph(newCars) {
      const c = this.canvas;
      for (let i = 0; i < this.cars.length; i += 1) {
        c.beginPath();
        c.strokeStyle = ['black', 'cyan', 'yellow'][i];
        c.lineWidth = 1;
        c.moveTo(this.cars[i].getPosition().getX() * 50, this.cars[i].getPosition().getY() * 50);
        c.lineTo(newCars[i].getPosition().getX() * 50, newCars[i].getPosition().getY() * 50);
        c.stroke();
        c.closePath();
      }
    },
    GetRaceUpdates() {
      const timingsService = new TimingsClient('http://localhost:50052');
      const stream = timingsService.raceUpdates(new EmptyRequest(), {});
      stream.on('data', (resp) => {
        const cars = resp.getCarsList();
        this.UpdateGraph(cars);
        this.cars = cars;
      });
    },
  },
  mounted() {
    this.GetParticipants();
    this.GetRaceUpdates();
    const c = document.getElementById('position-canvas');
    this.canvas = c.getContext('2d');
  },
};
</script>

<style scoped>
#timings{
  font-family: 'Orbitron', sans-serif;
  padding: 2em;
}

.h1{
  font-weight: medium;
}

ul{
  list-style-type:none;
}

li {
  margin-bottom: 0.5em;
}

.card{
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 1em;
  font-size: 1.15em;
}

.card-info {
  flex: 1;
}

.order{
  flex-grow: 1;
}
.car-no{
  flex-grow: 1;
}
.name{
  flex-grow: 4;
}
.time{
  flex-grow: 2;
}
.gap{
  flex-grow: 2;
}

</style>
