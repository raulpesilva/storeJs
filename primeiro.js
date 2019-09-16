import store from './store.js'


const primeiro = () =>{

    const botao = document.querySelector('.primeiro')
    
    botao.addEventListener('click',()=>{
        
        store.updateDashBoard({id: 1, value: 2})
        
        
    })
}

export default primeiro;