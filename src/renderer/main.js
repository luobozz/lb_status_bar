import Vue from 'vue'
import App from "./app.vue";
import router from './router'
import store from './store'
import lbIcon from './components/lbIcon/lbIcon.vue'

Vue.component('lb-icon', lbIcon)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')