<template>
  <div class="fill">
    <GmapMap
      ref="mapRef"
      :center="mapDetails.center"
      :heading="mapDetails.heading"
      :map-type-id="mapDetails.mapTypeId"
      :options="mapDetails.options"
      :tilt="mapDetails.tilt"
      :zoom="mapDetails.zoom"
      class="google-map"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index + '-marker'"
        :position="marker.googleLocation"
        @click="onMarkerClick($event, marker)"
      >
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
export default {
  name: "PrimeBasicMap",
  props: {
    mapOptions: Object,
    markers: Array,
  },
  data() {
    return {
      bounds: null,
      paths: [],
      activePipeStroke: null,
      activePipeFlasher: null,
      activePipeFlasherTime: 1200
    };
  },
  computed: {
    google: gmapApi,
    mapDetails() {
      if (this.mapOptions) {
        return this.mapOptions;
      } else {
        //no map options so make an object with sensible defaults
        let centerCoods = null;
        if (this.markers && this.markers >= 1) {
          centerCoods = this.markers[0].googleLocation;
        } else {
          centerCoods = {
            lat: 50.895229,
            lng: -1.069013
          };
        }
        let opt = {
          center: centerCoods,
          heading: 0,
          mapTypeId: "terrain",
          options: {
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
              }
            ],
          },
          tilt: 0,
          zoom: 15
        };
        return opt;
      }
    }
  },
  methods: {
    // event bypassers: Markers
    onMarkerClick(e, marker) {
        console.log(marker)
      this.$emit("marker-click", e, marker);
    },
  }
};
</script>

<style scoped>
.fill {
  height: 100%;
  width: 100%;
}
.flex-fill {
  flex: 1;
}
.google-map {
  min-width: 100px;
  min-height: 400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: gray;
}

@media screen and (max-width: 767px) and (min-width: 320px) {
  .google-map {
    min-width: 300px;
  }
}
</style>
