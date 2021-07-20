<template >
  <div>
    <div class="container mt-5">
      <div class="row">
        <!-- <div class="col-lg-6"> -->
        <div class="myclass">
          <div class="card">
            <div class="card-header">
              <h1>Update Student</h1>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="">Enter Username</label>
                <input
                  type="text"
                  name="username"
                  class="form-control form-control-lg"
                  v-model="username"
                />
              </div>
              <div class="form-group">
                <label for="">Enter Age</label>
                <input
                  type="number"
                  name="age"
                  class="form-control form-control-lg"
                  v-model="age"
                />
              </div>
              <div class="form-group">
                <label for="">Enter City</label>
                <input
                  type="text"
                  name="city"
                  class="form-control form-control-lg"
                  v-model="city"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary" v-on:click="updateStudent()">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "EditStudent",
  data() {
    return {
      id: "",
      username: "",
      age: "",
      city: "",
    };
  },
  async mounted() {
    const route = useRoute();
    this.id = route.params.id;
    const response = await axios.get(
      `http://localhost:5000/editstudent/${this.id}`
    );
    this.username = response.data[0].std_name;
    this.age = response.data[0].std_age;
    this.city = response.data[0].std_city;
    // console.log(response.data[0].std_age);
  },
  methods: {
    async updateStudent() {
      const student = {
        username: this.username,
        age: this.age,
        city: this.city,
      };
      if (
        this.username == "" ||
        this.age == "" ||
        this.age == 0 ||
        this.city == ""
      ) {
        alert("all field is required");
      } else {
        const response = await axios.put(
          `http://localhost:5000/update/${this.id}`,
          student
        );
        alert(response.data);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style >
</style>