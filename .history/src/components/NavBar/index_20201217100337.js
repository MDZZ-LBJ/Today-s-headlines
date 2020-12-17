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
    _setNav(items, setType) {
        const target = arguments[2].target
        const className = target.className
        if (className === 'item') {
            items[this._curIdx].className = 'item'
            this._curIdx = [].indexOf.call(item, tar)
            item[this._curIdx].className += 'current'
        }
    }
}