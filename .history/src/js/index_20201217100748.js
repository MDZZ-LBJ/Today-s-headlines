import './imports'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { NEWS_TYPE } from '../data'

((doc) => {

    const oApp = doc.querySelector('#app')

    const init = () => {
        render()
        bindEvent()
    }

    function bindEvent() {
        NavBar.bindEvent(setType)
    }

    function render() {
        // 渲染头部
        const headerTpl = Header.tpl({
            url: '/',
            title: '新闻头条',
            showLeftIcon: false,
            showRightIcon: true
        })

        // 渲染导航
        const navBarTpl = NavBar.tpl(NEWS_TYPE)

        oApp.innerHTML += (headerTpl + navBarTpl)
    }

    function setType() {
        console.log('setType')
    }

    init()
})(document)