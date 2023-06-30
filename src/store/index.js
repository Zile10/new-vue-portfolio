import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tabs: [
      {
        isActive: true,
        isHovering: false,
        routeName: 'home',
        routePath: '/'
      },
    ],
    lastActiveTab: null,
    route: {
      name: null,
      path: null
    }
  },
  getters: {
  },
  mutations: {
    switchTabs(state, index){
      if (state.tabs[index]) {
        for (const tab of state.tabs){
          if (tab.isActive) {
            tab.isActive = false
            state.lastActiveTab = state.tabs.indexOf(tab)
          }
        }
        state.tabs[index].isActive = true   
      }
    },
    newTab(state) {
      for (const tab of state.tabs) {
        if (tab.isActive) {
          tab.isActive = false;
        }
      }
      state.tabs.push(
        {
          isActive: true,
          isHovering: false,
          routeName: 'home',
          routePath: '/'
        },
      );
      router.push('/')
    },
    closeTab(state, index) {
      state.tabs.splice(index, 1);
      state.tabs.forEach(tab => {
        tab.isActive = false
        state.tabs[state.tabs.length - 1].isActive = true
        if (tab.isActive) {
          router.replace(tab.routePath)
        }
      })
    },
    setCurrentRoute(state, route){
      state.route = route
    },
    updateCurrentTab(state){
      state.tabs.forEach((tab) => {
        if (tab.isActive) {
          tab.routeName = state.route.name
          tab.routePath = state.route.path
        }
      })
    }
  },
  actions: {
    switchTabs(context, index){
      context.commit('switchTabs', index)
    },
    newTab(context) {
      context.commit('newTab')
    },
    closeTab(context, tab) {
      context.commit('closeTab', tab)
    },
  },
  modules: {
  }
})
