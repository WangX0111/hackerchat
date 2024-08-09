<template>
  <!-- <div class="centered-screen">
    <span class="text-larger">vscode webvue</span>
    <span class="text-large">vscode extension development template using vue 3 and vite!</span>
    <button @click="increment">increment {{ counter }}</button>
  </div> -->

  <div>
		<vue-advanced-chat
			height="calc(100vh - 20px)"
      styles="{
        general: {
          color: '#0a0a0a',
          colorSpinner: '#333',
          borderStyle: 'none'
        },
        continer: {
          border: 'none'
        },
        footer: {
          background: 'none',
          backgroundReply: 'rgba(0, 0, 0, 0.08)'
        },
      
        icons: {
          search: '#9ca6af'
        }
      }"
			:current-user-id="currentUserId"
			:rooms="JSON.stringify(rooms)"
			:rooms-loaded="true"
			:messages="JSON.stringify(messages)"
			:messages-loaded="messagesLoaded"
		/>
	</div>
</template>

<script lang="ts">
import { register } from 'vue-advanced-chat'
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register()

export default {
  name: 'App',
  data: () => ({
    counter: 0,
			currentUserId: '1234',
			rooms: [
				{
					roomId: '1',
					roomName: 'Room 1',
					avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
					users: [
						{ _id: '1234', username: 'John Doe' },
						{ _id: '4321', username: 'John Snow' }
					]
				}
			],
			messages: [],
			messagesLoaded: false
		
  }),
  methods: {
    increment() {
      this.counter += 1
      // vscode.postMessage({
      //   message: 'extension can listen to vue events by using postMessage method!'
      // })
    },
  }
}
</script>

<style lang="scss" scoped>
body {
	font-family: 'Quicksand', sans-serif;
}
</style>
<!-- 
.centered-screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-larger {
  font-size: x-large;
  margin-bottom: 1rem;
}
.text-large {
  font-size: large;
  margin-bottom: 1rem;
}
</style> -->