 
<template>
  <div>
      <h1>List of Course</h1>
      <hr>
      <div class="row">
          <div class="col-md-3">
              <h4>Course Entry</h4>
             
            
                  <div class="mb-3">
                    <label for="code">Code</label>
                    <input type="text" v-model="course.code" class="form-control">
                </div>
                <div class="mb-3">
                      <label for="course_no">Course_no</label>
                      <input type="text" v-model="course.course_no" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="description">Description</label>
                      <input type="text" v-model="course.description" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="instructor">Instructor</label>
                     <input type="text" v-model="course.instructor" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="room">Room</label>
                     <input type="text" v-model="course.room" class="form-control">
                  </div>
                  <button type="submit" class="btn btn-sm btn-success" @click="submitCourse">Add Course</button>
              <form action="/action_page.php">
            </form>
            &nbsp;
          </div>
          <div class="col-md-9">
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Course No</th>
                        <th>Description</th>
                        <th>Instructor</th>
                        <th>Room</th>
                        <th>...</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr v-for="course in courses" :key="course.id">
                        <td>{{course.code}}</td>
                        <td>{{course.course_no}}</td>
                        <td>{{course.description}}</td>
                        <td>{{course.instructor}}</td>
                        <td>{{course.room}}</td>
                        <td>
                            <router-link :to="{name: 'ViewCourse', params: {id:course.id}}"
                                class="btn btn-success btn-sm"
                            >
                                Open
                            </router-link>
                        </td>

                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
            courses: [
            ],
            course: {
            },
        }
    },
    methods: {
            getData() {
                fetch('http://127.0.0.1:8000/api/courses')
                .then(res => res.json())
                .then(data => this.courses = data.courses)
                .catch(err => console.log(err))
            },
            
            submitCourse() {
            fetch('http://127.0.0.1:8000/api/courses',{
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify(this.course)
            })
              .then(res => res.json())
              .then(data => {
                  this.courses.unshift(data)
                  this.course = {}
              })
              .catch(err=>console.log(err))
            }
    },
        mounted() {
            this.getData()  
        }
}
</script>

<style>
.card{
    width: fit-content;
    height: fit-content;
}
</style>