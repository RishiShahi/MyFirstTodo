import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
    state () {
        return {
            todos: [],
            loading: true,
            error: null,
        }
    },
    mutations: {
        getTodos(state,payload){
            state.todos = payload.newTodos
            state.loading = false
        },
        removeTodo(state, payload){
           state.todos =  state.todos.filter(todo => todo.id !== payload.todoId )
        },
        addTodo(state, payload){
            state.todos.push(payload.todoData)
        }
    }
})

createApp(App).use(store).mount('#app')
