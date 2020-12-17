import tpl from './index.tpl'
import './index.scss'

export default {
    name: "Header",
    tpl(options) {
        const { url, title, showLeftIcon, showRightIcon } = options;
        // tpl 经过loade变成一个函数
        return tplReplace(tpl, {
            url,
            title,
            showLeftIcon: showLeftIcon ? 'block' : 'none',
            showRightIcon: showRightIcon ? 'block' : 'none'
        });
    }

}