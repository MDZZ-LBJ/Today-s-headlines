import tpl0 from './tpl/tpl0.tpl';
import tpl1 from './tpl/tpl1.tpl';
import tpl2 from './tpl/tpl2.tpl';
import tpl3 from './tpl/tpl3.tpl';
import wrapperTpl from './tpl/wrapper.tpl';

import './index.scss';
import { getItemNode, tplReplace } from '../../libs/utils';

export default {
    name: 'NewsList',
    wrapperTpl(top) {
        return tplReplace(wrapperTpl, {
            top
        })
    },
    tpl(options) {
        const { data, pageNum } = options
    }
}