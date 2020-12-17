import itemTpl from './tpl/item.tpl'
import wrapperTpl from './tpl/index.tpl'

import { tplReplace } from '../../libs/utils'


export default {
    name: 'NavBar',
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
            wrapperTpl: 0.6 * data.length
        })
    }
}