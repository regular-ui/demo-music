import { Component } from 'rgui-ui-base';
import template from './index.rgl';

import '../component/navbar';
import '../component/carousel';
import '../component/player';
import '../component/musicListView';

const App = Component.extend({
    name: 'app',
    template,
    config() {
        this.defaults({
            musicList: [],
            selectedMusic: undefined,
        });
        this.supr();

        setTimeout(() => {
            this.data.musicList = [
                { title: '晴天', artist: '周杰伦', album: '叶惠美', duration: 269 },
                { title: 'River Flows In You', artist: 'Yiruma', album: 'First Love (Piano Collection)', duration: 187, disabled: true },
                { title: 'Letter Song', artist: 'ヲタみん', album: 'Letter Song', duration: 334 },
                { title: '不再犹豫', artist: 'Beyond', album: '犹豫', duration: 255 },
                { title: 'Back To December', artist: 'Taylor Swift', album: 'Back To December', duration: 294, disabled: true },
                { title: 'Ca Ira', artist: 'Joyce Jonathan', album: 'Ca Ira', duration: 225 },
                { title: '骄傲的少年', artist: '南征北战', album: '骄傲的少年', duration: 262 },
                { title: 'Sugar', artist: 'Maroon 5', album: 'V', duration: 235 },
                { title: '突然好想你', artist: '五月天', album: '后青春期的诗', duration: 299, disabled: true },
                { title: '七里香', artist: '周杰伦', album: '七里香', duration: 299 },
                { title: '棕发少女', artist: '克劳德·德彪西', album: '竖琴独奏', duration: 134 },
                { title: 'Unity', artist: 'TheFatRat', album: '最新热歌慢摇94', duration: 249 },
            ];
            this.$update();
        }, 200);
    },
});

export default App;
