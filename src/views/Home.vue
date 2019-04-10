<template>
  <div class="home">
    <MarkerWidget v-if="activeMarker" :marker="activeMarker"></MarkerWidget>
    <MapWrapper :markers="markers" @marker-click="onMarkerClick"></MapWrapper>
  </div>
</template>

<script>
// @ is an alias to /src
import MapWrapper from "@/components/MapWrapper.vue";
import MarkerWidget from "@/components/MarkerWidget.vue";

export default {
  name: "home",
  components: {
    MarkerWidget,
    MapWrapper
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
    onMarkerClick(event, marker) {
      this.$store.commit("clearActiveMarker");
      this.$store.commit("setActiveMarker", marker);
    }
  }
};
</script>
