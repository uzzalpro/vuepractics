import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'

// Vue.config.productionTip = false

// // global filter
// Vue.filter('snippet', values =>{
//     if (!values || typeof(values) !== 'string') return ''
//     values = values.slice(0, 40)
// })

// // createApp(App).mount('#app')

// new Vue({
//     render: (h) => h(App),
//   }).$mount('#app');

const app = createApp(App);

// Global method
app.config.globalProperties.$filters = {
    snippet(value) {
      if (!value || typeof value !== 'string') return '';
      return value.slice(0, 40);
    },
  };
  
  app.mount('#app');