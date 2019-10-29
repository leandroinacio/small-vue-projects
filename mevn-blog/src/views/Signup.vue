<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="alert" v-bind:class="[alertStatus]" role="alert">
        {{ alertMessage }}
      </div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="inputEmail">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-12">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
          <div class="form-group col-md-12">
            <label for="confirmPassword">Confirm Password</label>
            <input
              v-model="passwordConfirmation"
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <small v-show="!isPasswordMatch"
              >Passwords must be at least 6 characters and confirmation must
              match.</small
            >
          </div>
        </div>
        <button
          @click.prevent="submitForm()"
          type="submit"
          class="btn btn-primary"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      alertStatus: "hidden",
      alertMessage: ""
    };
  },
  computed: {
    isPasswordMatch() {
      return (
        this.password.length > 6 && this.password === this.passwordConfirmation
      );
    }
  },
  methods: {
    submitForm() {
      if (
        this.email &&
        this.password &&
        this.passwordConfirmation &&
        this.isPasswordMatch
      ) {
        this.alertStatus = "alert-sucess";
        this.alertMessage = "User created with success";
      } else {
        this.alertStatus = "alert-danger";
        this.alertMessage = "All fields are required";
      }
    }
  }
};
</script>
