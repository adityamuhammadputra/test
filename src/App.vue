<template>
  <v-app class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      class="app-bar-img-bg-custom"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <div class="d-flex align-center">
        <v-img
          router to="/"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-toolbar-title>Bin S</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text v-for="link in links" :key="link.title" router :to="link.route" class="my-2">
        {{ link.title }}
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
     <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto auto-max-height">
        <v-skeleton-loader
            v-if="myVar"
            height="404"
            type="list-item-two-line"
            style="padding-top:120px"
          >
          </v-skeleton-loader>
        <router-view style="padding-top:120px" v-else></router-view>
      <Footer></Footer>
    </v-sheet>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      drawer: false,
      myVar: false,
      links: [
        { title: 'Home', route: '/' },
        { title: 'About', route: '/about' }
      ]
    }
  }
}
</script>
