import { ListView, Item } from 'rgui-ui-listview';
import listViewTemplate from './listView.rgl';
import itemTemplate from './item.rgl';

/**
 * @class Sample
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const MusicListView = ListView.extend({
    name: 'musicListView',
    template: listViewTemplate,
});

const MusicItem = Item.extend({
    name: 'musicItem',
    template: itemTemplate,
});

export default MusicListView;
