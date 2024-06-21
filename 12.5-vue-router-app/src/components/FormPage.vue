<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="card p-2">
          <h3>Add new contact:</h3>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="firstnameinput" placeholder="Firstname"
              v-model="userData.firstname">
            <label for="firstnameinput">Firstname</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="lastnameinput" placeholder="Lastname" v-model="userData.lastname">
            <label for="lastnameinput">Lastname</label>
          </div>
          <div class="form-floating mb-3">
            <input type="tel" class="form-control" id="phoneinput" placeholder="Phone" v-model="userData.phone">
            <label for="phoneinput">Phone</label>
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-secondary me-1" @click="$router.push('/')">İptal</button>
            <button class="btn btn-sm btn-primary" @click="addNewContact">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstname: null,
        lastname: null,
        phone: null
      }
    }
  },
  methods: {
    addNewContact() {
      this.$appAxios.post("/contacts", this.userData).then(save_response =>
        console.log(save_response))

      this.$router.push({
        name: "HomePage"
      })
    }
  }
}
</script>