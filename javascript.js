function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}
function init(){
    var txt="";
    for (let index=0;index<9;index++){
        txt += "<div id='" + index + "'><p></p></div>";
    }
    ID("jatekter").innerHTML=txt;
    for (let index=0;index<9;index++){
        ID(index).addEventListener("click", kattintas)
    }
}
var tomb = ["-","-","-","-","-","-","-","-","-","-"]
lepes=0;

function kattintas() {
    var aktIndex= (event.target.id);
    ID(aktIndex).innerHTML="X";
    if(lepes%2===0){
        ID(aktIndex).innerHTML="X";
        tomb[aktIndex]="X";
    }
    else{
        ID(aktIndex).innerHTML="O";
        tomb[aktIndex]="O";
    }
    lepes++;
    ID(aktIndex).removeEventListener("click",kattintas)
    ID(aktIndex).style.backgroundColor="lightgray";
}

const val = document.querySelector('input').value;
console.log(val);


/*window.addEventListener("load",init);

function ID(elem){
    return document.getElementById(elem);
}
var tomb=["1.tartalom","2.tartalom","3.tartalom"]

function init(){
    var txt="";
    for (let index=0;index<tomb.length;index++){
        txt+="<div><p id='"+index+"'>"+tomb[index]+"<p></div>";
    }
    ID("tablazat").innerHTML=txt;
    for (let index=0;index<tomb.length;index++){
        ID(index).addEventListener("click",kattintas);
    }
    CLASS("tarolo")[1].style.border = "1px solid purple";

    document.querySelector(".tarolo").style.textSize="30px";
    for (let index=0;index<2;index++){
        $(".tarolo")[index].style.fontSize="30px";
    }
}

function kattintas(){
    var aktIndex=(event.target.id);
    ID(aktIndex).style.color="red";
    ID(aktIndex).style.color="green";
    ID(aktIndex).style.color="blue";
    ID(aktIndex).style.color="tint";
}
*/
