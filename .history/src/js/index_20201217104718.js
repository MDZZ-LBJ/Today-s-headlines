import './imports'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { NEWS_TYPE } from '../data'

((doc) => {

    const oApp = doc.querySelector('#app')

    const config = {
        type: 'top',
        count: 10
    }

    const newsData={

    }

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

    async function setNewsList() {
        const { type, count } = config
        if(newsData[type]){
            
        }
    }

    function setType(type) {
        config.type = type
        console.log(config)
    }

    init()
})(document)