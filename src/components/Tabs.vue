<template>
  <nav class="tabs">
    <ul class="nav nav-tabs" id="myTab" role="tablist" ref="tabsList">
      <li
        class="nav-item"
        role="presentation"
        v-for="tab in tabs"
        :key="tabs.indexOf(tab)"
      >
      <router-link :to="tab.routePath" style="text-decoration: none;">
        <div :class="{ cut: tab.isActive }">
          <button
            style="text-transform: capitalize"
            class="nav-link tab pe-1"
            :class="{ active: tab.isActive }"
            id="home-tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            :aria-selected="tab.isActive"
            @click="switchTabs(tabs.indexOf(tab))"
            @mouseenter="tab.isHovering = true"
            @mouseleave="tab.isHovering = false"
          >
            {{ tab.routeName }}
            <button
            v-if="!tab.isActive || (tab.isHovering && tabs.length>1)"
              style="border: none; background-color: transparent"
              class="p-0 m-auto"
              @click="closeTab(tabs.indexOf(tab))"
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/60/afafaf/macos-close.png"
                alt="macos-close"
              />
            </button>
          </button>
        </div>
      </router-link>
      </li>

      <li
        class="nav-item d-flex justify-content-center align-items-center px-1"
        role="presentation"
      >
        <button
          class="nav-link plus"
          @click="newTab()"
          id="contact-tab"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/afafaf/plus--v1.png"
            alt="plus--v1"
          />
        </button>
      </li>
    </ul>

    <div class="bookmark-bar sticky-top bg-white"></div>
  </nav>
</template>
<script>
import CornerCutBox from "./CornerCutBox.vue";
export default {
  data() {
    return {
      tabs: [
        {
          isActive: true,
          isHovering: false,
          routeName: this.routeName,
          routePath: this.currentPath || '/'
        },
      ],
      lastActiveTab: null
    };
  },
  methods: {
    switchTabs(index){
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
    newTab() {
      for (const tab of this.tabs) {
        if (tab.isActive) {
          tab.isActive = false;
        }
      }
      this.tabs.push(
        {
          isActive: true,
          isHovering: false,
          routeName: 'home',
          routePath: '/'
        },
      );
      this.$router.push('/')
    },
    closeTab(index) {
      this.tabs.splice(index, 1);
      this.tabs[this.tabs.length - 1].isActive = true
      this.tabs.forEach(tab => {
        if (tab.isActive) {
          this.$router.replace(tab.routePath)
        }
      })
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
  },

  components: {
    CornerCutBox,
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
    routeName() {
      return this.$route.name;
    },
  },
  mounted() {
    this.fixTabs();
  },
  watch:{
    $route(to, from) {
      this.tabs.forEach(tab => {
        if (tab.isActive){
          tab.routeName = this.routeName
          tab.routePath = this.currentPath
        }
      })
    }
  }
};
</script>

<style scoped>
.tabs {
  position: sticky;
  top: 0;
  overflow: hidden;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.8);
  z-index: 10;

  --cut-size: 1em;
  --border-width: 2px;
}
nav.tabs ul {
  background-color: #ddd;
  border: none;
}
ul li {
  padding: 0;
}
nav.tabs ul li .cut {
  clip-path: polygon(
    0em var(--cut-size),
    var(--cut-size) 0em,
    100% 0,
    100% 100%,
    0 100%
  );
  position: relative;
  background: linear-gradient(rgba(255, 20, 20, 1), rgba(255, 20, 20, 0));
  border-radius: 0 var(--border-width) 0 0;
  margin: 0 2px;
}
/* li > *:not(.cut) {
  border-bottom: 2px solid rgb(255, 20, 20);
} */
nav.tabs ul li .tab {
  min-width: 100px;
  height: 35px;
  line-height: 35px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #ddd;
  margin-bottom: none;
  clip-path: polygon(
    var(--border-width) calc(var(--cut-size) + var(--border-width) * 0.5),
    calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width),
    calc(100% - var(--border-width)) var(--border-width),
    calc(100% - var(--border-width)) 100%,
    var(--border-width) 100%
  );
}
.tabs ul li .tab.active {
  background-color: white;
  /* color: white; */
}
.tabs ul li .plus {
  padding: 0;
}

.bookmark-bar {
  min-height: 20px;
  background-color: var(--primaryColor);
}
</style>
