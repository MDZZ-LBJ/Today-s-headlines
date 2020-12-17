import './imports'
import Header from '../components/Header'
import NewsFrame from '../components/Iframe';
import { getUrlQueryValue } from '../libs/utils';

((doc) => {

    const oApp = doc.querySelector('#app')
    const currentNews = JSON.parse(localStorage.getItem('currentNews'));
    const followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

    const init = () => {
        render()
    }

    function render() {
        const headerTpl = Header.tpl({
            url: getUrlQueryValue('path'),
            title: '新闻详情',
            showLeftIcon: true,
            showRightIcon: false
        })
        const newsFrameTpl = NewsFrame.tpl(currentNews.url);
        oApp.innerHTML += (headerTpl + newsFrameTpl)
    }

    init()
})(document)