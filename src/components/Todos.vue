<template>
  <h1>TodoList</h1>
  <form @submit.prevent="handleSubmit(myTodos)">
      <input type="text" placeholder="Add your todos.." v-model="myTodos"/>
  </form>
  <ul>
      <li v-if="loading">
          Loading....
      </li>
    <template v-for="todo in todos" :key="todo.id">
       <li >
          {{todo.title}}   
      </li>
      <button @click="deleteTodo(todo.id)">Delete</button>
    </template>
     
  </ul>
</template>

<script>
export default {
    data() {
       return {
           myTodos : ''
       }
    },
  computed: {
     loading() {
         return this.$store.state.loading
     },
     todos() {
         return this.$store.state.todos
     }
  },
   mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
         let allTodos = data.slice(0,10)
         this.$store.commit({
             type: 'getTodos',
             newTodos: allTodos
         })
      })
      .catch((err) => console.log(err))
   },
   methods: {
       deleteTodo(id) {
           this.$store.commit({
               type: 'removeTodo',
               todoId: id
           })
       },
       handleSubmit(myTodos) {
           let todos = this.$store.state.todos
           let lastId
           if(todos.length){
               lastId = todos[todos.length - 1].id + 1;
           } else {
               lastId = 1
           }
           this.$store.commit({
               type: 'addTodo',
               todoData : {
                   userId: 1,
                   id: lastId,
                   title: myTodos,
                   completed: false
               }
           })
           this.myTodos = ''
           console.log(todos)
       }
   }
}
</script>

<style scoped>
   ul {
     list-style-type:  none;
     width: 600px;
     background: linear-gradient(315deg, #42d392 25%, #647eff);
     margin: 30px auto;
     padding: 10px;
     border-radius: 10px;
   }
   li {
       background: #fff;
       color: #42d392;
       margin: 10px auto;
       padding: 12px 15px;
       border-radius: 10px;
       font-size: 1.3rem;
       letter-spacing: 1px;
   }
   button {
      font-weight: bold;
      letter-spacing: 1px;
      padding: 8px 12px;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 3px;
      color: #60b1e0;
   }
   input {
       width: 600px;
       outline: none;
       border: none;
       padding: 12px 15px;
       color: #fff;
       border-radius: 5px;
       font-size: 1.2rem;
       letter-spacing: 1px;
       font-weight: bold;
       background-color: #6cafee;
   }
   ::placeholder {
       color: #fff;
   }
</style>