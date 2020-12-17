import itemTpl from './tpl/item.tpl'
import wrapperTpl from './tpl/index.tpl'
import './index.scss'
import { tplReplace, scrollToTop } from '../../libs/utils'

export default {
    name: 'NavBar',
    _curIdx: 0,
    tpl(data) {
        let itemList = ""
        data.map(({ title, type }, index) => {
            itemList += tplReplace(itemTpl, {
                isCurrent: !index ? 'current' : '',
                title,
                type
            })
        })
        return tplReplace(wrapperTpl, {
            itemList,
            wrapperW: .6 * data.length
        })
    },
    bindEvent(setType) { // 事件绑定传递给每一项
        const oNavBar = document.querySelector('.nav')
        const oNavItems = document.querySelectorAll('.item')
        oNavBar.addEventListener('click', this._setNav.bind(this, oNavItems, setType), false)
    },
    _setNav(items, setType) {
        const target = arguments[2].target
        const className = target.className.trim()
        if (className === 'item') { // 判断的点击的NavBar
            const type = target.dataset.type // 拿到点击的内容
            setType(type) // 告诉外面点击的是哪个
            scrollToTop() // 将滚动条移动打最上方
            items[this._curIdx].className = 'item' // 将现有的高亮还原
            this._curIdx = [].indexOf.call(items, target) // 找到当前点击的那个下标
            items[this._curIdx].className += ' current'
        }
    }
}