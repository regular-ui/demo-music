import App from './module';
import { dom } from 'regularjs';

const app = new App().$inject('#app');

dom.on(window, 'hashchange', ($event) => {
    app.$update();
});
