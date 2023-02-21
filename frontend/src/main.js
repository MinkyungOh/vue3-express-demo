import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css" // [bootstrap]
import "bootstrap" // [bootstrap]


const app = createApp(App);

// [앱 글로벌 변수 선언 실시]

// [name / 이름]
//app.config.globalProperties.$name = "투케이"; 

// [store / 저장소]
app.config.globalProperties.$store = store; 

app.use(store)
   .use(router)
   .mount('#app')
