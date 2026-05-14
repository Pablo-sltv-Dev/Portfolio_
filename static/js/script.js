// import { create_tag_div } from "../../src/utils/criacoes.js"; 
import { Section_for } from "../../src/sct_for.js";
// console.log("Temos de altura: ",window.screen.availHeight,"\n e de altura temos: ", window.screen.availWidth)
// ______________________________________

const bto_back = document.getElementById("opc_bckd");


const bto_front = document.getElementById("opc_frnt");

const bto_bnc = document.getElementById("opc_BncDds");

const bto_FM = document.getElementById("opc_frrmnts")

const bto_FrWk = document.getElementById("opc_frmwrk");

// ______________________________________


const sessao = document.getElementById("for")
// ___________________________________________

// bto_back.addEventListener('click', ()=> open_table(sessao))

bto_back.addEventListener('click', ()=> {
    const funcao = new Section_for()

    return funcao.open_table(sessao)
})



// ==============================================
// bto_front.addEventListener("click", () => open_table_front(sessao))

bto_front.addEventListener("click", () => {
    const funcao = new Section_for()

    return funcao.open_table_front(sessao)
} )


// ==============================================


bto_bnc.addEventListener("click", () => {
    const funcao = new Section_for()    
    
    return funcao.open_table_Bnc(sessao)
})


// ==============================================

bto_FM.addEventListener("click", ()=>{
    const funcao = new Section_for()

    return funcao.open_table_FM(sessao)

})


// ==============================================


bto_FrWk.addEventListener("click", ()=> {
    const funcao = new Section_for()

    return funcao.open_table_FmWk(sessao)


})