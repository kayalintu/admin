<template>
  <div class="back">
    <router-link :to="-1">
      <a @click="$router.go(-1)">
        <img
          class="back__icon"
          alt="back"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ny42MjIgNDg3LjYyMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg3LjYyMiA0ODcuNjIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNDRjZGNTU7IiBjeD0iMjQzLjgxMSIgY3k9IjI0My44MTEiIHI9IjI0My44MTEiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojQzA2MDQ2OyIgZD0iTTQ3My40MzgsMzI1LjkwNmwtNzcuMjQtODIuMDk2bC04OS45ODctMzQuNzZsLTY4LjA5Ni03OC4zODJMOTEuNDI0LDI0My44MWwyMTQuMzUyLDIzNS44NTQgICAgQzM4My43OTYsNDU5LjIyMSw0NDYuNTUyLDQwMS4wOTYsNDczLjQzOCwzMjUuOTA2eiIvPgoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjkxLjQyNCwyNDMuODEgMjM4LjExNiwxMzAuNjY4IDIzOC4xMTYsMTgyLjc0OCAzOTYuMTk4LDI0My44MSAyMzguMTE2LDMwNC44NzIgICAgIDIzOC4xMTYsMzU2Ljk1MiAgICIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=">
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Back',
};
</script>

<style lang="scss">
    .back {
      &__icon {
        width: 50px;
        margin: 30px;
      }
    }
</style>

