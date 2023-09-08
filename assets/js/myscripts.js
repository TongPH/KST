let dropdown = document.getElementsByClassName("mydrop-item")[0];
let isopen = false;

function openDropdown(){
    isopen = !isopen;
    if(isopen){
        dropdown.setAttribute('class','mydrop-item mydrop-open')
    }else{
        dropdown.setAttribute('class','mydrop-item mydrop-cloes')
    }

    
}

let dropdown2 = document.getElementsByClassName("mydrop-item2")[0];
let isopen2 = false;

function openDropdown2(){
    isopen2 = !isopen2;
    if(isopen2){
        dropdown2.setAttribute('class','mydrop-item2 mydrop-open2')
    }else{
        dropdown2.setAttribute('class','mydrop-item2 mydrop-cloes2')
    }

    
}


let dropdown3 = document.getElementsByClassName("mydrop-item3")[0];
let isopen3 = false;

function openDropdown3(){
    isopen3 = !isopen3;
    if(isopen3){
        dropdown3.setAttribute('class','mydrop-item3 mydrop-open3')
    }else{
        dropdown3.setAttribute('class','mydrop-item3 mydrop-cloes3')
    }

    
}