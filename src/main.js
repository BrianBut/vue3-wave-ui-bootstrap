import { createApp, h } from 'vue'
import App from './App.vue'
//import WaveUI from 'wave-ui'
//import 'wave-ui/dist/wave-ui.css'
import WaveUI from 'wave-ui/src/wave-ui'
console.log("WaveUI imported from wave-ui/src/")


const app = createApp({
  render: () => h(App)
})

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')
