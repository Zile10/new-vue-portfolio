<template>
  <nav class="tabs">
    <ul class="nav nav-tabs" id="myTab" role="tablist" ref="tabsList">
      <li
        class="nav-item"
        role="presentation"
        v-for="tab in tabs"
        :key="tabs.indexOf(tab)"
      >
        <!-- <router-link :to="tab.routePath" style="text-decoration: none"> -->
          <div :class="{ cut: tab.isActive }">
            <div 
              class="tab d-flex" 
              :class="{ active: tab.isActive }"
              @mouseenter="tab.isHovering = true"
              @mouseleave="tab.isHovering = false"
            >
              <button
                style="text-transform: capitalize"
                class="nav-link p-0 ms-4 border-0"
                id="home-tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                :aria-selected="tab.isActive"
                @click="switchTabs(tabs.indexOf(tab))"
              >
                {{ tab.routeName }}
              </button>
              <button
                v-if="!tab.isActive || (tab.isHovering && tabs.length > 1)"
                style="border: none; background-color: transparent"
                class="p-0 m-auto"
                @click="closeTab(tabs.indexOf(tab))"
              >
                <img
                  width="25"
                  height="25"
                  class="close"
                  src="https://img.icons8.com/ios-glyphs/60/f91e4e/macos-close.png"
                  alt="macos-close"
                />
              </button>
            </div>
          </div>
        <!-- </router-link> -->
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
            src="https://img.icons8.com/ios-glyphs/30/f91e4e/plus--v1.png"
            alt="plus--v1"
          />
        </button>
      </li>
    </ul>

    <div class="bookmark-bar sticky-top"></div>
  </nav>
</template>
<script>
import CornerCutBox from "./CornerCutBox.vue";
export default {
  components: {
    CornerCutBox,
  },
  methods: {
    switchTabs(index) {
      this.$store.dispatch("activateTab", index);
    },
    newTab() {
      this.$store.dispatch("newTab");
    },
    closeTab(index) {
      this.$store.dispatch("closeTab", index);
    },
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
    routeName() {
      return this.$route.name;
    },
    tabs() {
      return this.$store.state.tabs;
    },
    activeTab() {
      return this.tabs[this.$store.state.activeTabIndex];
    },
  },
  watch: {
    $route(to, from) {
      this.$store.state.tabs.forEach(tab => {
        if (tab.isActive) {
          tab.routeName = this.routeName
          tab.routePath = this.currentPath
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
nav.tabs {
  position: sticky;
  top: 0;
  overflow: hidden;
  /* box-shadow: 0 0px 5px rgba(0, 0, 0, 0.8); */
  z-index: 10;

  --cut-size: 1em;
  --border-width: 1px;

  ul {
    background-color: var(--primColor);
    border: none;
    li {
      padding: 0;
      .cut {
        clip-path: polygon(
          0em var(--cut-size),
          var(--cut-size) 0em,
          100% 0,
          100% 100%,
          0 100%
        );
        position: relative;
        background: linear-gradient(var(--accentColor) 60%, var(--secColor) 85%);
        border-radius: 0 var(--border-width) 0 0;
        margin: 0 2px;
      }
      .tab {
        min-width: 100px;
        height: 35px;
        line-height: 35px;
        padding-top: 0;
        padding-bottom: 0;
        background-color: var(--primColor);
        color: var(--textColor) !important;
        margin-bottom: none;
        clip-path: polygon(
          var(--border-width) calc(var(--cut-size) + var(--border-width) * 0.5),
          calc(var(--cut-size) + var(--border-width) * 0.5) var(--border-width),
          calc(100% - var(--border-width)) var(--border-width),
          calc(100% - var(--border-width)) 100%,
          var(--border-width) 100%
        );
        &.active {
          background-color: var(--secColor);
          /* color: white; */
        }
      }
      .plus {
        padding: 0;
        background: transparent;
        border: none;
      }
    }
  }
}
.bookmark-bar {
  min-height: 20px;
  background-color: var(--secColor);
  margin-top: -1px;
  border-bottom: 1px solid #111;
}
</style>
