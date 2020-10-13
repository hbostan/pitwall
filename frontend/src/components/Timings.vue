<template>
  <div id="timings">
    <h1>Timings</h1>
    <ul>
      <li v-for="(timing,index) in timings" :key="index">
        <div class="card">
          <div class="card-info order">{{index}}</div>
          <div class="card-info car-no">{{timing.carNo}}</div>
          <div class="card-info name">{{timing.name}}</div>
          <div class="card-info time">{{timing.time}}</div>
          <div class="card-info gap">{{timing.gap}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Timings',
  data() {
    return {
      // timings array should be filled with data.
      timings: [],
    };
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
