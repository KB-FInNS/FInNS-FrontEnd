// import 'vue-awesome-paginate/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueAwesomePaginate from 'vue-awesome-paginate';

import App from './App.vue';
import router from './router';
import mitt from 'mitt';

const app = createApp(App);

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

// const importAllCss = async () => {
//   const cssFiles = import.meta.glob('/src/assets/**/*.css');
//   for (const path in cssFiles) {
//     await cssFiles[path]();
//   }
// };
// const importAllJs = async () => {
//   const jsFiles = import.meta.glob('/src/assets/**/*.js');
//   for (const path in jsFiles) {
//     await jsFiles[path]();
//   }
// };
// importAllCss();
// importAllJs();

app.use(VueAwesomePaginate);
app.use(createPinia());
app.use(router);

app.mount('#app');
