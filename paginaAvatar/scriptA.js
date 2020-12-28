imgA = window.document.getElementById('imagem-avatar');
imgH = window.document.getElementById('imagem-hair');
imgB = window.document.getElementById('imagem-body');
imgL = window.document.getElementById('imagem-leg');
imgF = window.document.getElementById('imagem-foot');



// MUDAR A COR
function changecolor1() {
    imgA.src = 'avatar/avatar-principal.png'
}

function changecolor2() {
    imgA.src = 'avatar/avatar-pink.png'
}

function changecolor3() {
    imgA.src = 'avatar/avatar-white.png'
}

function changecolor4() {
    imgA.src = 'avatar/avatar-brown.png'
}

function changecolor5() {
    imgA.src = 'avatar/avatar-black.png'
}

// MUDAR A CABEÇA
function changehair1() {
    imgH.src = 'avatar/noneH.png'
}
function changehair2() {
    imgH.src = 'avatar/terryH.png'
}

function changehair3() {
    imgH.src = 'avatar/cowboyH.png'
}

function changehair4() {
    imgH.src = 'avatar/seraH.png'
}

function changehair5() {
    imgH.src = 'avatar/wittH.png'
}

// MUDAR O CORPO
function changebody1() {
    imgB.src = 'avatar/sem-roupa.png'
}

function changebody2() {
    imgB.src = 'avatar/terryB.png'
}

function changebody3() {
    imgB.src = 'avatar/cowboyB.png'
}

function changebody4() {
   imgB.src = 'avatar/seraB.png'
}

function changebody5() {
    imgB.src = 'avatar/wittB.png'
}

// MUDAR AS PERNAS
function changeleg1() {
    imgL.src = 'avatar/sem-roupa.png'
}

function changeleg2() {
    imgL.src = 'avatar/terryL.png'
}

function changeleg3() {
    imgL.src = 'avatar/cowboyL.png'
}

function changeleg4() {
    imgL.src = 'avatar/seraL.png'
}

function changeleg5() {
    imgL.src = 'avatar/wittL.png'
}

// MUDAR AS P
function changefoot1() {
    imgF.src = 'avatar/sem-roupa.png'
}

function changefoot2() {
    imgF.src = 'avatar/terryF.png'
}

function changefoot3() {
    imgF.src = 'avatar/cowboyF.png'
}

function changefoot4() {
    imgF.src = 'avatar/seraF.png'
}

function changefoot5() {
    imgF.src = 'avatar/wittF.png'
}

function reset() {
    changebody1();
    changecolor1();
    changefoot1();
    changehair1();
    changeleg1();
}


