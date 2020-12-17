import './imports'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NewsList from '../components/NewsList'
import { NEWS_TYPE } from '../data'
import services from '../services'

((doc) => {

    const oApp = doc.querySelector('#app')
    let oListWrapper = null;

    const config = {
        type: 'top',
        count: 10,
        pageNum: 0
    }

    const newsData = {

    }

    const init = async () => {
        render()
        await setNewsList()
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
        
        // 渲染列表
        const listWrapperTpl = NewsList.wrapperTpl(82)

        oApp.innerHTML += (headerTpl + navBarTpl + listWrapperTpl)
        oListWrapper=oApp.querySelector('.news-list')
    }

    async function setNewsList() {
        const { type, count } = config
        if (newsData[type]) {
            return;
        }
        newsData[type] = await services.getNewsList(type, count)
        console.log(newsData)
    }

    function setType(type) {
        config.type = type
        setNewsList()
    }

    init()
})(document)