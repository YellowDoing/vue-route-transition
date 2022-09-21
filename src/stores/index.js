import { defineStore } from 'pinia'
import HomeView from "../components/HomeView";
import {markRaw} from "vue";


export const useRouterStore = defineStore('Router', {
  state: () => {
    return {
      currentView : [markRaw(HomeView)],
      action:'push'
    }
  },

  actions: {
    push() {
      //this.routeAction = 'slide-fade'
    },
    pop() {
      //this.routeAction = 'slide-fade'
    },
  },
})

