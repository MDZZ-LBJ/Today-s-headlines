import tpl from './index.tpl'
import { tplReplace } from '../../libs/utils';
import './index.scss'

export default {
    name: "Header",
    tpl(options) {
        const { url, title, showLeftIcon, showRightIcon } = options;
        // tpl 经过loade变成一个函数  
        let templateStr = tplReplace(tpl, {
            url, // 左边icon跳转的连接
            title, // 中间标题
            showLeftIcon: showLeftIcon ? 'block' : 'none', // 左边icon是否显示
            showRightIcon: showRightIcon ? 'block' : 'none'// 右边icon是否显示
        });
        console.log(templateStr)
        return templateStr
    }

}