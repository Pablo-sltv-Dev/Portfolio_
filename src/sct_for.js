import { create_tag_div, create_tag_Ul, create_tag_Li, create_tag_img, create_tag_bto, create_tag_figure, create_tag_figcaption } from "./utils/criacoes.js";

export function open_table(tag_section){

  document.getElementById("opc_bckd").disabled= true;
  document.getElementById("opc_frnt").disabled=true;
  document.getElementById("opc_BncDds").disabled=true;
  document.getElementById("opc_frrmnts").disabled=true;
  document.getElementById("opc_frmwrk").disabled=true;

  setTimeout(()=>{ // 1 segundo
    tag_section.style.justifyContent = "center"  
    
  const table = create_tag_div("prancheta");

  const bto_fech = create_tag_bto("qt", "X");
  table.appendChild(bto_fech)


  
  const fig = create_tag_figure("fg_back")
  const img_py = create_tag_img("py", "https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/Python-Dark.svg", "img da logo python")
  
  
  fig.appendChild(img_py)
  // fig.appendChild(create_tag_figcaption("Python"))
  
  // const fig_ph = create_tag_figure("fg_ph")
  const img_ph = create_tag_img("icon_php" ,"https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/PHP-Dark.svg", "imagem da logo php", "logo da linguagem php")
  fig.appendChild(img_ph)
  // fig_ph.appendChild(create_tag_figcaption("PHP"))
  // table.appendChild(fig_ph)
  
  table.appendChild(fig)
  

  
   tag_section.appendChild(table)

// _____________________________________________________________



   bto_fech.addEventListener("click", () => {
    
    document.getElementById("opc_bckd").disabled= false;
    document.getElementById("opc_frnt").disabled=false;
    document.getElementById("opc_BncDds").disabled=false;
  document.getElementById("opc_frrmnts").disabled=false;
  document.getElementById("opc_frmwrk").disabled=false;

    tag_section.style.justifyContent = "space-around"
    tag_section.removeChild(table)
   })
  }, 1000) // 1 segundo

  
// _____________________________________________________________

  
}

// ==========================================================

export function open_table_front(tag_section){
  tag_section.style.justifyContent = "center"  
  const table = create_tag_div("prancheta");

  // ____________________________________________
  const bto_fech = create_tag_bto("qt", "X");
  table.appendChild(bto_fech)


  


  // ________________________________________________________
  const fg= create_tag_figure("fg_front")
  const img_js = create_tag_img("img_js","https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/JavaScript.svg", "logo da linguagem javascript")
  fg.appendChild(img_js)
  // fg_js.appendChild(create_tag_figcaption("JavaScript"))
  
  
  
  
  // ________________________________________________________
  const img_html = create_tag_img("html", "https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/HTML.svg", "img da logo python")
  fg.appendChild(img_html)
  
  // table.appendChild(fg_ht)
  
  // ________________________________________________________
  const img_css = create_tag_img("icon_css" ,"https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/CSS.svg", "imagem da logo php", "logo da linguagem php")
  fg.appendChild(img_css)
  // list.appendChild(p3_lt)
  
  
  // ________________________________________________________
  
  
  
  
  table.appendChild(fg)
  // table.appendChild(list)
  

  
   tag_section.appendChild(table)

  // _____________________________________________________________

   document.getElementById("opc_bckd").disabled= true;
    document.getElementById("opc_frnt").disabled=true;
    document.getElementById("opc_BncDds").disabled=true;
  document.getElementById("opc_frrmnts").disabled=true;
  document.getElementById("opc_frmwrk").disabled=true;

   bto_fech.addEventListener("click", () => {
    document.getElementById("opc_bckd").disabled= false;
    document.getElementById("opc_frnt").disabled=false;
    document.getElementById("opc_BncDds").disabled=false;
  document.getElementById("opc_frrmnts").disabled=false;
  document.getElementById("opc_frmwrk").disabled=false;

    tag_section.style.justifyContent = "space-around"

    tag_section.removeChild(table)
   })
// _____________________________________________________________
}

// ===========================================================

export function open_table_Bnc(tag_section){
  tag_section.style.justifyContent = "center"  
  const table = create_tag_div("prancheta");

  // ____________________________________________


  const bto_fech = create_tag_bto("qt", "X");
  table.appendChild(bto_fech)




  // ________________________________________________________


  const fig = create_tag_figure("fig_bnc")
  const img_Msql = create_tag_img("img_Msql","https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/MySQL-Dark.svg", "logo da linguagem MYSQL")
  fig.appendChild(img_Msql)




  // ________________________________________________________


  const img_ptsql = create_tag_img("img_ptsql", "https://www.postgresql.org/media/img/about/press/elephant.png", "img da logo PostgreSQL")
  fig.appendChild(img_ptsql)

  

  // ________________________________________________________
  const img_lite = create_tag_img("icon_ite" ,"https://icon.icepanel.io/Technology/png-shadow-512/SQLite.png", "imagem da logo SQLite")
  fig.appendChild(img_lite)


  // ________________________________________________________




  table.appendChild(fig)
  

  
   tag_section.appendChild(table)

   // _____________________________________________________________

   document.getElementById("opc_bckd").disabled= true;
    document.getElementById("opc_frnt").disabled=true;
    document.getElementById("opc_BncDds").disabled=true;
  document.getElementById("opc_frrmnts").disabled=true;
  document.getElementById("opc_frmwrk").disabled=true;

   bto_fech.addEventListener("click", () => {
    document.getElementById("opc_bckd").disabled= false;
    document.getElementById("opc_frnt").disabled=false;
    document.getElementById("opc_BncDds").disabled=false;
  document.getElementById("opc_frrmnts").disabled=false;
  document.getElementById("opc_frmwrk").disabled=false;

        tag_section.style.justifyContent = "space-around"

    tag_section.removeChild(table)
   })
// _____________________________________________________________
}


// ===========================================================


export function open_table_FM(tag_section){
  tag_section.style.justifyContent = "center"  
  const table = create_tag_div("prancheta");

  // ____________________________________________


  const bto_fech = create_tag_bto("qt", "X");
  table.appendChild(bto_fech)




  // ________________________________________________________


  const fig = create_tag_figure("fig_fr")
  const img_VsCd = create_tag_img("img_vd","https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/VSCode-Dark.svg", "logo da linguagem MYSQL")
  fig.appendChild(img_VsCd)




  // ________________________________________________________


  const img_GB = create_tag_img("img_GtHb", "https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/Github-Dark.svg", "img da logo GitHub")
  fig.appendChild(img_GB)


  // ________________________________________________________
  const img_Git = create_tag_img("img_Gt" ,"https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/Git.svg", "imagem da logo Git")
  fig.appendChild(img_Git)


  // ________________________________________________________

  const img_PM = create_tag_img("img_pst", "https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/Postman.svg", "imagem sem fundo do Postman")

  fig.appendChild(img_PM)
  // ________________________________________________________


  
  table.appendChild(fig)
  
   tag_section.appendChild(table)

  // _____________________________________________________________

   document.getElementById("opc_bckd").disabled= true;
    document.getElementById("opc_frnt").disabled=true;
    document.getElementById("opc_BncDds").disabled=true;
  document.getElementById("opc_frrmnts").disabled=true;
  document.getElementById("opc_frmwrk").disabled=true;

   bto_fech.addEventListener("click", () => {
    document.getElementById("opc_bckd").disabled= false;
    document.getElementById("opc_frnt").disabled=false;
    document.getElementById("opc_BncDds").disabled=false;
  document.getElementById("opc_frrmnts").disabled=false;
  document.getElementById("opc_frmwrk").disabled=false;

    tag_section.style.justifyContent = "space-around"

    tag_section.removeChild(table)
   })
// _____________________________________________________________
}

// ===========================================================


export function open_table_FmWk(tag_section){
  tag_section.style.justifyContent = "center"  

  const table = create_tag_div("prancheta");

  // ____________________________________________


  const bto_fech = create_tag_bto("qt", "X");
  table.appendChild(bto_fech)




  // ________________________________________________________


const fig = create_tag_figure("fig_fm")

  const img_Flks = create_tag_img("img_flask","https://raw.githubusercontent.com/tandpfun/skill-icons/7f7e691e71aec64e8354bf697835e009d1ad80f8/icons/Flask-Dark.svg", "logo da linguagem MYSQL")
  fig.appendChild(img_Flks)




  // ________________________________________________________


  // ________________________________________________________


  table.appendChild(fig)
  

  
   tag_section.appendChild(table)

  // _____________________________________________________________

   document.getElementById("opc_bckd").disabled= true;
    document.getElementById("opc_frnt").disabled=true;
    document.getElementById("opc_BncDds").disabled=true;
  document.getElementById("opc_frrmnts").disabled=true;
  document.getElementById("opc_frmwrk").disabled=true;

   bto_fech.addEventListener("click", () => {
    document.getElementById("opc_bckd").disabled= false;
    document.getElementById("opc_frnt").disabled=false;
    document.getElementById("opc_BncDds").disabled=false;
  document.getElementById("opc_frrmnts").disabled=false;
  document.getElementById("opc_frmwrk").disabled=false;

    tag_section.style.justifyContent = "space-around"

    tag_section.removeChild(table)
   })
// _____________________________________________________________
}