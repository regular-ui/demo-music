import App from './module';
import { dom } from 'regularjs';
import { Component } from 'rgui-ui-base';

Component.filter({
    timeFormat: function(value) {
        if(!value)
            return '00:00';

        value = value>>0;
        let minute = value/60>>0;
        let second = value%60;

        const fix = (num) => {
            num = num + '';
            return num.length === 1 ? '0' + num : num;
        }

        return fix(minute) + ':' + fix(second);
    }
});

const app = new App().$inject('#app');

dom.on(window, 'hashchange', ($event) => {
    app.$update();
});
