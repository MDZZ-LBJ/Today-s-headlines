import itemTpl from './tpl/item.tpl'
import wrapperTpl from './tpl/index.tpl'
import './index.scss'
import { tplReplace } from '../../libs/utils'

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
    bindEvent(setType) {
        const oNavBar = document.querySelector('.nav')
        const oNavItems = document.querySelectorAll('.item')
        oNavBar.addEventListener('click', this._setNav.bind(this, oNavItems, setType), false)
    },
    _setNav(items, setType) { // 设置点击高亮
        const className = arguments[2].target.className // 找的点击的那一项的类名
        const className = arguments[2].target.className // 找的点击的那一项的类名
        if (className === 'item') {
            const type = ta
            items[this._curIdx].className = 'item'
            this._curIdx = [].indexOf.call(items, tar)
            items[this._curIdx].className += 'current'
            setType()
        }
    }
}