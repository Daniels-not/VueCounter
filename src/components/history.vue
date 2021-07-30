<template>
    <div class="container">
        <h3>History</h3>
        <div class="flex">
            <p v-for="(number , index) in history" :key="index" :class="activeIndex(parseInt(value)).includes(index) && 'bold' ">{{ number }}</p>
        </div>
        <div>
            <input 
              type="number"
              placeholder="Search by index"
              v-model="value"
            />
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    data() {
        return{
            value: 0
        }
    },
    computed: {
        ...mapState(['history']),
        ...mapGetters(['activeIndex'])
    }
}
</script>

<style>
.container{
    margin-top: 2rem;
}
.flex{
    display: flex;
    margin: 0 auto;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 22rem;
}

.flex p{
    margin: 1.5rem;
}

.bold{
    font-weight: bold;
}
</style>
