import { Component } from 'rgui-ui-base';
import template from './index.rgl';

const Navbar = Component.extend({
    name: 'navbar',
    template,
    isCurrent: function(type) {
        var hash = location.href.split('#')[1] || '';

        return hash.includes(type);
    }
});

export default Navbar;
