import tpl from './index.tpl'
import { tplReplace } from '../../libs/utils';
import './index.scss'

export default {
    name: "Header",
    tpl(options) {
        const { url, title, showLeftIcon, showRightIcon } = options;
        // tpl 经过loade变成一个函数  
        return tplReplace(tpl, {
            url, // 左边icon跳转的连接
            title, // 中间标题
            showLeftIcon: showLeftIcon ? 'block' : 'none',
            showRightIcon: showRightIcon ? 'block' : 'none'
        });
    }

}