export function create_tag_div(ide){
    const div = document.createElement("div")
    div.id = String(ide)
    return div
}


export function create_tag_Ul(prgt, ide){
    const ul = document.createElement("ul")
    if (prgt ===false){
        return ul
    }else if(prgt ===true){
        ul.id = String(ide)
        return ul
    }else{
        console.log("responda a pergunta")
    }
}

export function create_tag_Li(){
    const l_list = document.createElement("li")

    return l_list
}

export function create_tag_img(ide, url, descr){
    const img = document.createElement("img");
    img.id = ide
    img.classList.add("icons")
    img.src = url;
    img.alt = descr;
    return img
}


export function create_tag_bto(ide, text){
    
    const bto = document.createElement("button")
    bto.id = ide
    bto.type="button";
    bto.textContent = text
    return bto
}

export function create_tag_figure(ide){
    const figure = document.createElement("figure")
    figure.id = ide

    return figure
}

export function create_tag_figcaption(text){
    const element = document.createElement("figcaption")
    element.textContent = text
    return element 

}
