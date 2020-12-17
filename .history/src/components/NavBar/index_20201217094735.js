import itemTpl from './tpl/itemTpl'
import wrapperTpl from './tpl/index.Tpl'

import { tplReplace } from '../../libs/utils'
import { data } from 'autoprefixer'

export default {
    name:'NavBar',
    tpl(data){
        let itemList = ""
        data.map(({item},index)=>{
            itemList+=tplReplace(itemTpl,{
                isCurrent:
            })
        })
    }
}