<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="black" class="white--text todo-header">
        <v-toolbar-title class="display-1">Task</v-toolbar-title>
      </v-toolbar>
      <v-list class="black white--text pt-4">
        <v-list-item v-for="todo in pending.slice(0, maxLimit)" :key="todo.id" @click="markAsDone(todo)">
          <v-list-item-content class="pb-2">
            <v-list-item-title class="white--text title" v-text="todo.task"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon size="50" color="white">far fa-square</v-icon>
          </v-list-item-action>
        </v-list-item>
        <template v-if="done.length !== 0 && pending.length < maxLimit">
          <v-divider dark class="divider" v-if="pending.length !== 0"></v-divider>
          <v-list-item v-for="todo in done.slice(0, maxLimit-pending.length)" :key="todo.id" @click="markAsPending(todo)">
            <v-list-item-content class="pb-2">
              <v-list-item-title class="white--text title done" v-text="todo.task"></v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-icon size="50" color="white">far fa-check-square</v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import userAPI from "../../api/userAPI";
export default {
  data() {
    return {
      maxLimit: 6
    };
  },

  computed: {
    done() {
      return this.$store.state.Todo.todoList.filter(
        todoItem => todoItem.task && todoItem.done
      );
    },
    pending() {
      return this.$store.state.Todo.todoList.filter(
        todoItem => todoItem.task && !todoItem.done
      );
    }
  },

  methods: {
    markAsDone(todo) {
      todo.done = true;
      this.$store.dispatch('updateTodo', todo);
    },

    markAsPending(todo) {
      todo.done = false;
      this.$store.dispatch('updateTodo', todo);
    },

    async fetchAndStoreTodos() {
      this.todoList = await userAPI.getTodoList();
    },
    attachSocketListeners() {
      this.$io.on("addTodo", todo => {
        this.$store.dispatch("addTodo", todo);
      });

      this.$io.on("updateTodo", updatedTodo => {
        this.$store.dispatch("updateTodo", updatedTodo);
      });

      this.$io.on("removeTodo", todoId => {
        this.$store.dispatch("removeTodo", todoId);
      });
    }
  },

  beforeMount() {
    // this.attachSocketListeners();
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.todo-header {
  border-bottom: 2px solid white !important;
}
</style>
