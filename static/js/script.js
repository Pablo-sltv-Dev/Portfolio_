// import { create_tag_div } from "../../src/utils/criacoes.js";
import { open_table, open_table_front, open_table_Bnc, open_table_FM, open_table_FmWk } from "../../src/sct_for.js";

// ______________________________________

const bto_back = document.getElementById("opc_bckd");


const bto_front = document.getElementById("opc_frnt");

const bto_bnc = document.getElementById("opc_BncDds");

const bto_FM = document.getElementById("opc_frrmnts")

const bto_FrWk = document.getElementById("opc_frmwrk");

// ______________________________________


const sessao = document.getElementById("for")
// ___________________________________________

bto_back.addEventListener('click', ()=> open_table(sessao))

// ==============================================
bto_front.addEventListener("click", () => open_table_front(sessao))

// ==============================================


bto_bnc.addEventListener("click", () => open_table_Bnc(sessao))


// ==============================================

bto_FM.addEventListener("click", ()=>open_table_FM(sessao))


// ==============================================


bto_FrWk.addEventListener("click", ()=> open_table_FmWk(sessao))