const Savatar = document.querySelector(".avatar-store");
const Stitulo = document.querySelector(".titulos-store");
const Sperfil = document.querySelector(".perfil-store");
const Lavatar = document.querySelector(".ladinhoA");
const pele = document.getElementsByClassName("pele-store");
const cabeca = document.getElementsByClassName("cabeca-store");
const corpo = document.getElementsByClassName("corpo-store");
const perna = document.getElementsByClassName("perna-store");
const pe = document.getElementsByClassName("pe-store");
const PrecoPele = document.getElementsByClassName("preco-pele");
const PrecoCabeca = document.getElementsByClassName("preco-hair");
const PrecoCorpo = document.getElementsByClassName("preco-corpo");
const PrecoPerna = document.getElementsByClassName("preco-perna");
const PrecoPe = document.getElementsByClassName("preco-pe");
const PrecoTitulo = document.getElementsByClassName("preco-titulo");
const PrecoPerfil = document.getElementsByClassName("preco-perfil");
var coins = 600;
var preco = 0;

texts = coins + " Coins";
document.getElementById("coinscoint").innerHTML = texts;


function showAvatar() {
    Stitulo.classList.add("hide");
    Sperfil.classList.add("hide");
    Savatar.classList.remove("hide");
    Lavatar.classList.remove("hide");


    text1 = "Avatar";
    document.querySelector("#subtitulo").innerHTML = text1;
}

function showTitle() {
    Savatar.classList.add("hide");
    Sperfil.classList.add("hide");
    Lavatar.classList.add("hide");
    Stitulo.classList.remove("hide");

    for (i = 0; i < PrecoTitulo.length; i++) {
    PrecoTitulo[i].classList.remove("hide");
    }

    text2 = "Titulos";
    document.querySelector("#subtitulo").innerHTML = text2;
}

function showPerfil() {
    Savatar.classList.add("hide");
    Stitulo.classList.add("hide");
    Sperfil.classList.remove("hide");

    for (i = 0; i < PrecoPerfil.length; i++) {
        PrecoPerfil[i].classList.remove("hide");
        }

    text3 = "Perfil";
    document.querySelector("#subtitulo").innerHTML = text3;
}

function showPele() {
for (i = 0; i < pele.length; i++) {
    pe[i].classList.add("hide");
    perna[i].classList.add("hide");
    corpo[i].classList.add("hide");
    cabeca[i].classList.add("hide");
    PrecoCabeca[i].classList.add("hide");
    PrecoCorpo[i].classList.add("hide");
    PrecoPerna[i].classList.add("hide");
    PrecoPe[i].classList.add("hide");
    pele[i].classList.remove("hide");
    PrecoPele[i].classList.remove("hide");
    }
}

function showCabeca() {
    for (i = 0; i < cabeca.length; i++) {
        pe[i].classList.add("hide");
        perna[i].classList.add("hide");
        corpo[i].classList.add("hide");
        pele[i].classList.add("hide");
        PrecoPele[i].classList.add("hide");
        PrecoCorpo[i].classList.add("hide");
        PrecoPerna[i].classList.add("hide");
        PrecoPe[i].classList.add("hide");
        cabeca[i].classList.remove("hide");
        PrecoCabeca[i].classList.remove("hide");
        }
    }

    function showCorpo() {
        for (i = 0; i < corpo.length; i++) {
            pe[i].classList.add("hide");
            perna[i].classList.add("hide");
            cabeca[i].classList.add("hide");
            pele[i].classList.add("hide");
            PrecoPele[i].classList.add("hide");
            PrecoCabeca[i].classList.add("hide");
            PrecoPerna[i].classList.add("hide");
            PrecoPe[i].classList.add("hide");
            corpo[i].classList.remove("hide");
            PrecoCorpo[i].classList.remove("hide");
            }
        }

     function showPerna() {
        for (i = 0; i < perna.length; i++) {
            pe[i].classList.add("hide");
            corpo[i].classList.add("hide");
            cabeca[i].classList.add("hide");
            pele[i].classList.add("hide");
            PrecoCabeca[i].classList.add("hide");
            PrecoPele[i].classList.add("hide");
            PrecoCorpo[i].classList.add("hide");
            PrecoPe[i].classList.add("hide");
            perna[i].classList.remove("hide");
            PrecoPerna[i].classList.remove("hide");
            }
        }

    
        function showPe() {
            for (i = 0; i < pe.length; i++) {
                corpo[i].classList.add("hide");
                perna[i].classList.add("hide");
                cabeca[i].classList.add("hide");
                pele[i].classList.add("hide");
                PrecoCabeca[i].classList.add("hide");
                PrecoPele[i].classList.add("hide");
                PrecoCorpo[i].classList.add("hide");
                PrecoPerna[i].classList.add("hide");
                pe[i].classList.remove("hide");
                PrecoPe[i].classList.remove("hide");
                }
            }

function buy() {
    preco = 200;
if (coins >= preco) {
    coins = coins - preco;

    alert("Produto adquirido com sucesso!!");
    texts = coins + " Coins";
document.getElementById("coinscoint").innerHTML = texts;
}
else {
    alert("Coins insuficientes, jogue para adquirir mais!!");
}
}

function buyN() {
    alert("Produto indisponivel no momento");
}

document.getElementById("defaultOpen").click();
