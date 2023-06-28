import { createStore } from 'vuex'

export default createStore({
  state: {
    tabs: [
      {
        isActive: true,
        isHovering: false,
        routeName: this.routeName,
        routePath: this.currentPath || '/'
      },
    ],
    lastActiveTab: null
  },
  getters: {
  },
  mutations: {
    switchTabs(state, index){
      if (this.tabs[index]) {
        for (const tab of this.tabs){
          if (tab.isActive) {
            tab.isActive = false
            this.lastActiveTab = index
          }
        }
        this.tabs[index].isActive = true   
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
      // this.$router.push('/')
    },
    closeTab(state, index) {
      state.tabs.splice(index, 1);
      state.tabs[state.tabs.length - 1].isActive = true
      setTimeout(() => {
        state.tabs.forEach(tab => {
          if (tab.isActive) {
            state.$router.replace(tab.routePath)
          }
        })

      }, 0.1)
    },
    fixTabs() {
      setTimeout(() => {
        state.tabs.shift();
        state.tabs.unshift({
          isActive: true,
          isHovering: false,
          routeName: state.routeName,
          routePath: state.currentPath
        });
      }, 0.1);
    },
  },
  actions: {
  },
  modules: {
    switchTabs(state, index){
      state.commit('switchTabs', index)
    },
    newTab(state) {
      state.commit('newTab')
    },
    closeTab(state, index) {
      state.commit('closeTab', index)
    },
    fixTabs() {
      setTimeout(() => {
        this.tabs.shift();
        this.tabs.unshift({
          isActive: true,
          isHovering: false,
          routeName: this.routeName,
          routePath: this.currentPath
        });
        console.log(this.tabs[0].routePath);
      }, 0.1);
    },
  }
})
