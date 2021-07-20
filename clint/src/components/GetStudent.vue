<template >
  <div>
    <div class="header bg-primary text-center p-5">
      <h4 class="text-white">Crud using Node And VUE MEVN</h4>
    </div>
    <div class="container mt-5">
      <div class="card">
        <div class="d-flex justify-content-between p-4">
          <h3>Students ({{ total }})</h3>
          <router-link to="/add-student"
            ><button class="btn btn-primary" style="cursor: pointer">
              Add Student
            </button></router-link
          >
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="table-responsive">
        <table class="table table-bordered">
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tbody>
            <tr v-for="item in list" :key="item">
              <td>{{ item.id }}</td>
              <td>{{ item.std_name }}</td>
              <td>{{ item.std_age }}</td>
              <td>{{ item.std_city }}</td>
              <td>
                <router-link
                  class="btn btn-success"
                  :to="'/edit-student/' + item.id"
                  >Edit</router-link
                >
              </td>
              <td>
                <button v-on:click="deleteData(item.id)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "GetStudent",
  data() {
    return {
      list: [],
      total: "",
      id: "",
    };
  },
  methods: {
    async getStudents() {
      const response = await axios.get("http://localhost:5000/total");
      this.total = response.data;
      console.log(response.data);
    },
    async getdata() {
      const response = await axios.get("http://localhost:5000/");
      this.list = response.data;
      this.getStudents();
    },
    async deleteData(id) {
      const response = await axios.delete(`http://localhost:5000/delete/${id}`);
      this.getdata();
      this.getStudents();
      this.list = response.data;
    },
  },
  mounted() {
    this.getdata();
    this.getStudents();
  },
};
</script>
<style  scoped>
@import "~bootstrap/dist/css/bootstrap.css";
</style>