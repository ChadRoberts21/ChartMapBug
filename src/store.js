import Vue from "vue";
import Vuex from "vuex";
import { data } from "./testData/markerData";
import { Marker } from "./models/marker";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    markers: [],
    activeMarker: null
  },
  mutations: {
    setMarkers(state, payload) {
      state.markers = payload;
    },
    setActiveMarker(state, payload) {
      console.log(payload)
      state.activeMarker = payload;
    },
    clearActiveMarker(state) {
      state.activeMarker = null;
    }
  },
  actions: {
    initTestMarkers({commit}) {
      // get test data from file
      let markerArray = []
      data.forEach(dp => {
        markerArray.push(new Marker(dp));
      });
      commit("setMarkers", markerArray);
    }
  },
  getters: {
    markers(state) {
      return state.markers;
    },
    activeMarker(state) {
      return state.activeMarker;
    }
  }
});
