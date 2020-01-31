<template>
  <v-app class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
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
      class="overflow-y-auto"
      max-height="720"
    >
      <v-content id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="720">
        <router-view style="padding-top:120px"></router-view>
      </v-content>
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
      links: [
        { title: 'Home', route: '/' },
        { title: 'About', route: '/about' }
      ]
    }
  }
}

</script>
