// Imports
import { createStore } from 'vuex';
import router from '../router';
import axios from "axios";

const apiUrl = 'http://localhost:6969/'

export default createStore({
  state: {
    tabs: JSON.parse(localStorage.getItem('portfolioTabs')) || [
      {
        isActive: true,
        isHovering: false,
        routeName: 'home',
        routePath: '/'
      },
    ],
    activeTabIndex: 0, 
    projects: [
      {
        id: 1,
        projectName: 'Project Name',
        projectUrl: 'https://john-bruce-capstone-project.netlify.app',
        codeUrl: 'https://john-bruce-capstone-project.netlify.app',
        imgUrl: '...'
      },
      {
        id: 2,
        projectName: 'Project Name',
        projectUrl: 'https://john-bruce-capstone-project.netlify.app',
        codeUrl: 'https://john-bruce-capstone-project.netlify.app',
        imgUrl: '...'
      },
      {
        id: 3,
        projectName: 'Project Name',
        projectUrl: 'https://john-bruce-capstone-project.netlify.app',
        codeUrl: 'https://john-bruce-capstone-project.netlify.app',
        imgUrl: '...'
      },
      {
        id: 4,
        projectName: 'Project Name',
        projectUrl: 'https://john-bruce-capstone-project.netlify.app',
        codeUrl: 'https://john-bruce-capstone-project.netlify.app',
        imgUrl: '...'
      }
    ],
  },
  getters: {
  },
  mutations: {
    setActiveTab(state, index) {
      state.activeTabIndex = index
    },
    newTab(state) {
      state.tabs.push(
        {
          isActive: true,
          isHovering: false,
          routeName: 'home',
          routePath: '/'
        },
      );
    },
    switchTabs(state, index){
      
    },
    closeTab(state, index) {
      let deletedTab = state.tabs.splice(index, 1);
    },

    // API - Projects
    setProjects(state, projects){
      state.projects = projects
    },
  },
  actions: {
    // Tabs
    activateTab(context, index) {
      let tabs = context.state.tabs
      tabs.forEach(tab => {
        let tabIndex = tabs.indexOf(tab);
        // Check to see which tab must be active
        if (tabIndex == index) {
          // If correct tab, set its 'isActive' value to true & navigate to tab
          tab.isActive = true
          router.push(tab.routePath);
        } else {
          // All OTHER tabs, have their 'isActive' value set to false
          tab.isActive = false;
        }
      });

      // Sets 'activeTabIndex'in state
      context.commit('setActiveTab', index)    
    },
    newTab(context) {
      context.commit('newTab')
      let tabs = context.state.tabs
      context.dispatch('activateTab', tabs.length - 1)
    },
    async closeTab(context, tab) {
      // Removing Deleted Tab From Array. Initializing local copy of tabs
      context.commit('closeTab', tab)
      // Activating last Tab in array
      let tabs = context.state.tabs
      context.dispatch('activateTab', tabs.length - 1)
    },


    // API - Projects
    async getProjects(context) {
      const res = await axios.get(`${apiUrl}projects`);
      context.commit('setProjects', res.data);
    }
  },
  modules: {
  }
})
