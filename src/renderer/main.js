import Vue from 'vue'
import App from "./app.vue";
import router from './router'
import store from './store'
import lbIcon from './components/lbIcon/lbIcon.vue'

import prototypeInstall from './util/vue.prototype.install.util'
Vue.use(prototypeInstall)

Vue.component('lb-icon', lbIcon)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')