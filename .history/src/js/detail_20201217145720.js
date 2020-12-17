import './imports'
import Header from '../components/Header'
import { getUrlQueryValue } from '../libs/utils';

((doc) => {

    const oApp = doc.querySelector('#app')

    const init = () => {
        render()
    }

    function render() {
        const headerTpl = Header.tpl({
            url:getUrlQueryValue('path'),
            title: '新闻详情',
            showLeftIcon: true,
            showRightIcon: false
        })
        oApp.innerHTML += headerTpl
    }

    init()
})(document)