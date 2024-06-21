<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="card p-2 m-2">
          <h3 class="text-center m-2">Phone Book</h3>
          <hr>
          <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-primary" @click="$router.push('/new')">Add New Contact</button>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in contactsList" :key="contact.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ contact.firstname }}</td>
                <td>{{ contact.lastname }}</td>
                <td>{{ contact.phone }}</td>
                <td><button @click="deleteContact(contact)" class="btn btn-sm btn-danger">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactsList: []
    }
  },
  created() {
    this.$appAxios.get("/contacts").then(request_response =>
      this.contactsList = request_response.data);
  },
  methods: {
    deleteContact(contact) {
      this.$appAxios.delete(`/contacts/${contact.id}`).then(deleted_response => {
        if (deleted_response.status == 200) {
          this.contactsList = this.contactsList.filter(item => item.id != contact.id)
        }
      });

    }
  }
}
</script>