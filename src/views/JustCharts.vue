<template>
  <div>
    <h1>This is a test page to see if the bug only exisits with vue and highcharts</h1>
    <div>
        <MarkerWidget v-if="activeMarker" :marker="activeMarker"></MarkerWidget>
        <div>
            <span v-for="marker in markers" :key="marker.name">
                <button @click="onMarkerClick(marker)">{{marker.name}}</button>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MarkerWidget from "@/components/MarkerWidget.vue";

export default {
  name: "home",
  components: {
    MarkerWidget
  },
  data() {
    return {
      options: {

      }
    }
  },
  computed: {
    markers() {
      return this.$store.getters.markers;
    },
    activeMarker() {
      return this.$store.getters.activeMarker;
    }
  },
  methods: {
    onMarkerClick(marker) {
      console.log(marker)
      this.$store.commit("clearActiveMarker");
      this.$store.commit("setActiveMarker", marker);
    }
  }
};
</script>