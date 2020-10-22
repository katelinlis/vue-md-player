<template lang="pug">
  v-container
    v-card
      v-card-text
        v-layout.mb-3
          v-flex.px-1
            v-text-field(
              label="Video source"
              v-model="videoSrc[Quality]"
              hide-details
            )

        pre(v-text="videoSnippet")
      video-player(v-if="videoSrc[Quality]" :audiosrc="videoSrc.audio" :src="videoSrc[Quality]" :CurrentValue="Current")
</template>

<script>
export default {
  data () {
    return {
      audioSrc: 'http://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3',
      videoSrc: {
        720: 'https://347819.selcdn.ru/Steach/720.mp4',
        480: 'https://347819.selcdn.ru/Steach/480.mp4',
        240: 'https://347819.selcdn.ru/Steach/240.mp4',
        audio: 'https://347819.selcdn.ru/Steach/audio.m4a'
      }
    }
  },
  computed: {
    Quality () {
      return this.$store.state.quality
    },
    Current () {
      return this.$store.state.current
    },
    snippetTemplate () {
      return `<audio-player>
  <source src="${this.audioSrc}" />
</audio-player>


import { audioPlayer } from 'vue-md-player'
import 'vue-md-player/dist/vue-md-player.css'
export default {
  components: {
    audioPlayer
  }
}`
    },
    videoSnippet () {
      return `<video-player>
  <source src="${this.videoSrc}" />
</video-player>

import { videoPlayer } from 'vue-md-player'
import 'vue-md-player/dist/vue-md-player.css'
export default {
  components: {
    videoPlayer
  }
}`
    }
  },
  metaInfo () {
    return {
      title: 'vue-md-player demo'
    }
  }
}
</script>

<style lang="stylus">
.theme--light.application.home
  background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%) !important
</style>
