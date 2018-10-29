<template>
  <div class="body">
    <div class="all-devices">
      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0xNCwzNi4xODJoMTR2LTEwSDE0VjM2LjE4MnogTTE2LDM0LjE4MnYtM2gxMHYzSDE2eiBNMjYsMjguMTgydjFIMTZ2LTFIMjZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8cGF0aCBkPSJNMTQsNDAuMTgydjEyaDE0di0xMkgxNHogTTIwLDQyLjE4MnYzaC00di0zSDIweiBNMTYsNDcuMTgyaDR2M2gtNFY0Ny4xODJ6IE0yMiw1MC4xODJ2LTNoNHYzSDIyeiBNMjYsNDUuMTgyaC00di0zaDQgICBWNDUuMTgyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPHBhdGggZD0iTTMyLDM2LjE4MmgxNHYtMTBIMzJWMzYuMTgyeiBNMzQsMzQuMTgydi0xaDEwdjFIMzR6IE00NCwyOC4xODJ2M0gzNHYtM0g0NHoiIGZpbGw9IiNGRkZGRkYiLz4KCTxwYXRoIGQ9Ik01OSw0OC4xODJjLTAuNTUzLDAtMSwwLjQ0OC0xLDF2MWgtMXYtMWMwLTAuNTUyLTAuNDQ3LTEtMS0xcy0xLDAuNDQ4LTEsMXYxaC0xVjI5Ljk3OCAgIGMwLjUyMSwwLjIzNCwxLjA3MywwLjM2MywxLjYyNiwwLjM2M2MxLjA3MywwLDIuMTM5LTAuNDM2LDIuOTI3LTEuMjg0YzAuNzYtMC44MTgsMS4xNDUtMS45MjUsMS4wNTctMy4wMzggICBjLTAuMDg5LTEuMTEyLTAuNjQ0LTIuMTQ1LTEuNTIyLTIuODMzTDMyLjcyMiwzLjM0NUwzMCwwLjgxOEwyNy4zNDMsMy4yOUwxLjkxMywyMy4xODZjLTAuODc5LDAuNjg4LTEuNDM0LDEuNzIxLTEuNTIyLDIuODMzICAgYy0wLjA4OCwxLjExMywwLjI5NywyLjIyLDEuMDU3LDMuMDM4YzEuMTk0LDEuMjg2LDMuMDIxLDEuNjEsNC41NTMsMC45MjJ2MjAuMjA0SDV2LTFjMC0wLjU1Mi0wLjQ0Ny0xLTEtMXMtMSwwLjQ0OC0xLDF2MUgydi0xICAgYzAtMC41NTItMC40NDctMS0xLTFzLTEsMC40NDgtMSwxdjljMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMWgxdjFjMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMWgxdjJoMjZoMTRoOHYtMmgxICAgdjFjMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMWgxdjFjMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtOUM2MCw0OC42Myw1OS41NTMsNDguMTgyLDU5LDQ4LjE4MnogTTIuOTEyLDI3LjY5NSAgIGMtMC4zODUtMC40MTUtMC41NzItMC45NTQtMC41MjctMS41MThjMC4wNDUtMC41NjQsMC4zMTQtMS4wNjcsMC43NjEtMS40MTZMMjguNjQsNC44MTFsMS4zNjEtMS4yNjVsMS40MjQsMS4zMTlsMjUuNDMsMTkuODk2ICAgYzAuNDQ2LDAuMzQ5LDAuNzE2LDAuODUyLDAuNzYxLDEuNDE2YzAuMDQ1LDAuNTY0LTAuMTQzLDEuMTA0LTAuNTI3LDEuNTE4Yy0wLjcwOCwwLjc2Mi0xLjg2MSwwLjg1OC0yLjY4NiwwLjIyM0w1NCwyNy42MDh2MCAgIGwtMjQtMTguNWwtMjMuNjEsMTguMmwtMC4wMDEsMC4wMDFsLTAuNzkxLDAuNjA5QzQuNzcyLDI4LjU1MywzLjYyLDI4LjQ1NywyLjkxMiwyNy42OTV6IE0yLDU1LjE4MnYtM2gxdjNIMnogTTUsNTUuMTgydi0zaDF2M0g1eiAgICBNMzQsNTcuMTgydi0xNWgxMHYxNUgzNHogTTUyLDU3LjE4MmgtNnYtMTdIMzJ2MTdIOFYyOC41OTFsMjItMTYuOTU5bDIyLDE2Ljk1OVY1Ny4xODJ6IE01NCw1NS4xODJ2LTNoMXYzSDU0eiBNNTcsNTUuMTgydi0zaDF2MyAgIEg1N3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" >
      <div>
        <h3 class="all-devices__title">All Devices</h3>
        <p class="all-devices__description">45 devices</p>
      </div>
    </div>
    <Rooms/>
  </div>
</template>

<script>
import Rooms from '../components/Rooms.vue';

export default {
  name: 'Home',
  components: {
    Rooms,
  },
};
</script>

<style lang="scss">
    .body {
        margin: 30px auto;
        padding: 15px;
    }
    .all-devices {
        background: rgb(82,60,144);
        background: linear-gradient(90deg, rgba(82,60,144,1) 0%, rgba(124,75,151,1) 87%);
        padding: 30px;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &__title {
            color: white;
        }
        &__description {
            margin: 0;
            color: white;

        }
    }
</style>
