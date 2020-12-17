import itemTpl from './tpl/itemTpl'
import wrapperTpl from './tpl/index.Tpl'

import { tplReplace } from '../../libs/utils'
import { data } from 'autoprefixer'

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
        return tplReplace(wa)
    }
}