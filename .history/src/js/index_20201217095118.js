import './imports'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import {NEWS_TYPE} from '../data'

((doc) => {

    const oApp = doc.querySelector('#app')

    const init = () => {
        render()
    }

    function render() {
        // 渲染头部
        const headerTpl = Header.tpl({
            url: '/',
            title: '新闻头条',
            showLeftIcon: false,
            showRightIcon: true
        })
        const navBarTpl = NavBar.tpl(NEWS_TYPE)
        oApp.innerHTML += headerTpl
    }

    init()
})(document)