import './imports'
import Header from '../components/Header'


((doc)=>{

    const oApp = doc.querySelector('#app')

    const init =()=>{

    }

    function render(){
        const headerTpl = Header.tpl({
            url:'/',
            title:'新闻头条',
            showLeftIcon: showLeftIcon ? 'block' : 'none',
            showRightIcon: showRightIcon ? 'block' : 'none'
        })
    }


})(document)