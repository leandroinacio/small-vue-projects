<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <form>
        <div class="form-group">
          <label for="input-email">Email</label>
          <input
            type="email"
            class="form-control"
            id="input-email"
            aria-describedby="emailHelp"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group">
          <label for="input-password">Password</label>
          <input
            type="password"
            class="form-control"
            id="input-password"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="remember-user" />
          <label class="form-check-label" for="remember-user"
            >Remember me</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>
