<template>
  <div class="home home-img-custom"
    src="https://picsum.photos/1920/1080?random">
    <v-container >
      <v-row>
        <v-col cols="6" class="home-banner-left">
          <h1>Hello</h1>
          <h4>I'm <b>Adit's </b>
            <b>
              <vue-typer :text='["Kang Kopi","Kang kadal","Kang Toke"]'
                :repeat='Infinity'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='70'
                :pre-erase-delay='2000'
                :erase-delay='250'
                erase-style='select-all'
                :erase-on-complete='false'
                caret-animation='blink'>
              </vue-typer>
            </b>
          </h4>
          <p>
            Lorem Ipsum is <b>simply dummy </b>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </v-col>
        <v-col cols="6">
        b
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
