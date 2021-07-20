<template >
  <div>
    <div class="container mt-5">
      <div class="row">
        <!-- <div class="col-lg-6"> -->
        <div class="myclass">
          <div class="card">
            <div class="card-header">
              <h1>Add Student</h1>
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
                <button class="btn btn-primary" v-on:click="addStudent()">
                  Save
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
export default {
  name: "AddStudent",
  data() {
    return {
      username: "",
      age: 0,
      city: "",
    };
  },
  methods: {
    async addStudent() {
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
        const response = await axios.post(
          "http://localhost:5000/addstudent",
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
.myclass {
  width: 50%;
  margin: auto;
}
@media screen and (max-width: 1000px) {
  .myclass {
    width: 60%;
  }
}
@media screen and (max-width: 780px) {
  .myclass {
    width: 80%;
  }
}
@media screen and (max-width: 450px) {
  .myclass {
    width: 100%;
  }
}
</style>