import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class Carousel
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Carousel = Component.extend({
    name: 'carousel',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            current: 2,
            duration: 3000,
            list: [
                {color: '#ada4ff', src: 'assets/img/carousel-1.jpg', href: '#'},
                {color: '#81a69e', src: 'assets/img/carousel-2.jpg', href: '#'},
                {color: '#dfcbb2', src: 'assets/img/carousel-3.jpg', href: '#'},
                {color: '#34190e', src: 'assets/img/carousel-4.jpg', href: '#'},
                {color: '#000000', src: 'assets/img/carousel-5.jpg', href: '#'},
            ],
            animation: 'on: enter; class: animated fadeIn;',
        }, this.data);
        this.supr();

        setInterval(() => {
            this.data.current++;
            this.data.current %= this.data.list.length;
            this.$update();
        }, this.data.duration);
    },
});

export default Carousel;
