import store from './store.js'

const segundo = () =>{
    const botao = document.querySelector('.segundo')
    botao.addEventListener('click',()=>{
        console.log(store.getState())
    })
}

export default segundo;