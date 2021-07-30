import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
    state(){
        return{
            counter: 0,
            history: [0]
        }
    },
    mutations:{
        addToCounter(state, paylow){
            state.counter = state.counter + paylow
            state.history.push(state.counter)
        },
        subtracFromCounter(state, paylow){
            state.counter = state.counter - paylow
            state.history.push(state.counter)
        }
    },
    actions: {
        async getRandomNumber(context){
            const data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
            context.commit('addToCounter', data.data)
            console.log(data);
        }
    },
    getters: {activeIndex
        : (state) => (paylowad) => {
            let indexs = [];
            state.history.forEach((element, index ) => {
                if (element === paylowad) {
                    indexs.push(index)
                }
            })
            return indexs; 
        }
    }

})

const app = createApp(App)

app.use(store)

app.mount('#app')
