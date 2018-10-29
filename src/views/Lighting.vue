<template>
  <div>
    <div class="header">
      <Back/>
      <h2 class="title">Lighting</h2>
    </div>
    <v-card
      flat
      class="lighting">
      <v-card-text>
        <v-container fluid>
          <v-layout
            row
            wrap
            column
          >
            <v-flex
              xs12
              sm6
              md6>
              <h3>Тень:</h3>
              <v-switch
                color="red"
                value="red"
                hide-details
                aria-selected
              />
              <v-switch
                color="red darken-3"
                value="red darken-3"
                hide-details
              />
              <v-switch
                color="indigo"
                value="indigo"
                hide-details
              />
              <v-switch
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              />
            </v-flex>
            <div class="flex">
              <h3>Интенсивность</h3>
              <v-slider
                v-model="ex1.val"
                :color="ex1.color"
              />
            </div>
            <div class="flex">
              <h3>Режим:</h3>
              <v-select
                :items="items"
              />
            </div>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Back from '../components/Back.vue';

export default {
  name: 'Lighting',
  components: {
    Back,
  },
  data() {
    return {
      ex1: { val: 25, color: 'red darken-3' },
      items: ['Day', 'Night'],
    };
  },
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style
    scoped
    lang="scss">
    .lighting {
      margin: 30px 0;
      padding: 15px;
      width: 100%;
      border: 0 solid white;
      border-radius: 5px;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.1);
      background-color: white;
      &__title {
      color: black;
      }
     }
      .flex {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      }
      h3 {
      margin-right: 30px;
      }
      .header {
        display: flex;
        align-items: center;
      }
  </style>

