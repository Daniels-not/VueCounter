<template>
    <div>
        <h1>Vuex Counter</h1>
        <h1 class="counter">{{ counter }}</h1>
        <button @click="subtracFromCounter(parseInt(value))">-</button>
        <input type="number"  v-model="value"/>
        <button @click="(addToCounter(parseInt(value)))">+</button>
        <div>
          <button class="btn" @click="getRandomNumber">Get Random Number</button>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  data(){
    return {
      value: 1
    }
  },

  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapMutations(['addToCounter', 'subtracFromCounter']),
    ...mapActions(['getRandomNumber'])
  }
}
</script>

<style>
  .counter{
    font-size: 4rem;
  }

  input{
    margin: 0 0.5rem;
    padding: 0.4rem;
    text-align: center;
  }

  .btn{
    border: none;
    padding: 14px 24.5px;
    margin: 15px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    background-color: hsl(149, 21%, 45%);
    color: hsl(0, 0%, 100%);
  }

</style>
