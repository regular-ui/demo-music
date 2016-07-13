import { Component } from 'rgui-ui-base';
import template from './index.rgl';

import Carousel from '../common/carousel';

const App = Component.extend({
    name: 'app',
    template,
    config() {
        this.data = Object.assign({

        }, this.data);
        this.supr();
    },
    isCurrent: function(type) {
        var hash = location.href.split('#')[1] || '';

        return hash.includes(type);
    }
});

export default App;
