import Vue from "vue";
import Router from "vue-router";
import Map from "../components/Map.vue";
import Req2 from "../components/requirement2.vue";
import Music from "../components/Music.vue"
import Visualisation from "../components/Visualisation.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Map",
      name: "Map",
      component: Map
    },
    {
      path: "/Req2",
      name: "Req2",
      component: Req2
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Visualisation',
      name: 'Visualisation',
      component: Visualisation
    }
  ]
});
