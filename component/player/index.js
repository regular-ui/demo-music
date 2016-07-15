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
            time: 0,
            status: 0,
            mode: 'one',
            music: {},
            CTRL_STATUS: ['play', 'pause'],
        }, this.data);
        this.supr();

        this.$watch('music', (newValue, oldValue) => {
            this.data.time = 0;
            this.data.status = 1;
        });

        setInterval(() => {
            if(this.data.music && this.data.music.duration && this.data.status)
                this.data.time++;
            this.$update();
        }, 1000);
    },
    play() {
        this.data.status = 1;
        this.$emit('play', {
            sender: this,
            status: this.data.status,
            music: music,
        });
    }
}).filter({
    toPercent: {
        get: function(time, duration) {
            if(!duration)
                return 0;

            return time/duration*100;
        },
        set: function(percent, duration) {
            return percent*0.01*duration;
        }
    }
})

export default Player;
