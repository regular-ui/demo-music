import { Component } from 'rgui-ui-base';
import template from './index.rgl';
import 'rgui-ui-slider';

/**
 * @class Player
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const Player = Component.extend({
    name: 'player',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.data = Object.assign({
            mode: 'one',
            music: {},
        }, this.data);
        this.supr();
    },
});

export default Player;
