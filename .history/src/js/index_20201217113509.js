import './imports'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NewsList from '../components/NewsList'
import PageLoading from '../components/PageLoading';
import { NEWS_TYPE } from '../data'
import services from '../services'
import { scrollToBottom } from '../libs/utils';

((doc) => {

    const oApp = doc.querySelector('#app')
    let oListWrapper = null;

    const config = {
        type: 'top',
        count: 10,
        pageNum: 0,// 第几页,
        isLoading: false
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
        window.addEventListener('scroll', scrollToBottom.bind(null, getMoreList), false)
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

        // 渲染列表
        oListWrapper = oApp.querySelector('.news-list')
    }

    function renderList(data) {
        const { pageNum } = config
        const newsListTpl = NewsList.tpl({
            data,
            pageNum
        })
        oListWrapper.innerHTML += newsListTpl
        NewsList.imgShow()
    }

    async function setNewsList() {
        const { type, count, pageNum } = config
        if (newsData[type]) { // 切换tab时有数据就不请求
            renderList(newsData[type][pageNum]);
            return;
        }
        oListWrapper.innerHTML = PageLoading.tpl(); // 显示loading图片
        newsData[type] = await services.getNewsList(type, count)
        setTimeout(() => {
            oListWrapper.innerHTML = '';
            renderList(newsData[type][pageNum]);
        }, 1500);
    }

    function setType(type) {
        config.type = type;
        config.pageNum = 0;
        config.isLoading = false;
        oListWrapper.innerHTML = '';
        setNewsList();
    }

    function getMoreList() {
        if (!config.isLoading) {
            config.pageNum++;
            clearTimeout(t);
            const { pageNum, type } = config;
            if (pageNum >= newsData[type].length) {
                MoreLoading.add(oListWrapper, false);
            } else {
                config.isLoading = true;
                MoreLoading.add(oListWrapper, true);
                t = setTimeout(() => {
                    setNewsList();
                }, 1000);
            }
        }
    }

    init()
})(document)