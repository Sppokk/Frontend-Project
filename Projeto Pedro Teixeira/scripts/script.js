

//carousel
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);


function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);


function plusSlides3(n) {
    showSlides3(slideIndex += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("dot3");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//escolha cor artigo

let black = document.getElementById("black");


black.addEventListener("click", function () {
    document.getElementById("blue").classList.remove("selectedBlue");
    document.getElementById("black").classList.add("selectedBlack");
    document.getElementById("red").classList.remove("selectedRed");
})

//add to cart

let escolha = document.getElementById("add");

let conteudoEscolha = `
<span>Valor: $299</span>

`;

escolha.addEventListener("click", function () {
    document.getElementById("conteudo").innerHTML = conteudoEscolha
})

function displayCart() {
    var showCart = document.querySelector('.bagContent');
    showCart.style.display = 'block';
}

function hiddeCart() {
    var hiddeCart = document.querySelector('.bagContent');
    hiddeCart.style.display = 'none';
}

function displaySearch() {
    var displaySearch = document.querySelector('.displaySearch');
    displaySearch.style.display = 'block';
}

function hiddeSearch() {
    var displaySearch = document.querySelector('.displaySearch');
    displaySearch.style.display = 'none';
}


let red = document.getElementById("red");

if (typeof (red) != 'undefined' && red != null) {
    red.addEventListener("click", function () {
        document.getElementById("black").classList.remove("selectedBlack");
        document.getElementById("blue").classList.remove("selectedBlue");
        document.getElementById("red").classList.add("selectedRed");
    });
}

let blue = document.getElementById("blue");

if (typeof (blue) != 'undefined' && blue != null) {
    blue.addEventListener("click", function () {
        document.getElementById("black").classList.remove("selectedBlack");
        document.getElementById("blue").classList.add("selectedBlue");
        document.getElementById("red").classList.remove("selectedRed");
    });
}

let add = document.getElementById("add");

add.addEventListener("click", function () {
    document.getElementById("add").classList.add("selected");
    document.getElementById("home").classList.remove("selected");
    alert("Saved to cart")
});

let home = document.getElementById("home");

home.addEventListener("click", function () {
    document.getElementById("home").classList.add("selected");
    document.getElementById("add").classList.remove("selected");
});

//opinion

function showComents() {
    var coments = document.querySelector('.opinion');
    coments.style.display = 'block';
}


function hiddeComents() {
    var hiddeComents = document.querySelector('.opinion');
    hiddeComents.style.display = 'none';
}

//botao play

let play = document.getElementById("play");

play.addEventListener("click", function () {
    document.location.href = 'https://www.youtube.com/watch?v=5vsWmZ2Fr5Q', target = "_blank";
});

//infos

function displayPopup1() {
    var popup = document.querySelector('.texto1');
    popup.style.display = 'block';
}

function displayPopup2() {
    var popup = document.querySelector('.texto2');
    popup.style.display = 'block';
}

function displayPopup3() {
    var popup = document.querySelector('.texto3');
    popup.style.display = 'block';
}

function displayPopup4() {
    var popup = document.querySelector('.texto4');
    popup.style.display = 'block';
}

function hiddePopup1() {
    var del = document.querySelector('.texto1');
    del.style.display = 'none';
}

function hiddePopup2() {
    var del = document.querySelector('.texto2');
    del.style.display = 'none';
}

function hiddePopup3() {
    var del = document.querySelector('.texto3');
    del.style.display = 'none';
}
function hiddePopup4() {
    var del = document.querySelector('.texto4');
    del.style.display = 'none';
}

function selectBlue() {
    var btBlue = document.querySelector('.carrosel2');
    btBlue.style.display = 'block';
    var btBlack = document.querySelector('.carrosel1');
    btBlack.style.display = 'none';
    var btRed = document.querySelector('.carrosel3');
    btRed.style.display = 'none';

}


function selectBlack() {
    var btBlue = document.querySelector('.carrosel2');
    btBlue.style.display = 'none';
    var btBlack = document.querySelector('.carrosel1');
    btBlack.style.display = 'block';
    var btRed = document.querySelector('.carrosel3');
    btRed.style.display = 'none';

}

function selectRed() {
    var btBlue = document.querySelector('.carrosel2');
    btBlue.style.display = 'none';
    var btBlack = document.querySelector('.carrosel1');
    btBlack.style.display = 'none';
    var btRed = document.querySelector('.carrosel3');
    btRed.style.display = 'block';

}

let pesquisaForm = document.getElementById("pesquisa-form");
let pesquisaButton = document.getElementById("pesquisa-form-submit");


    pesquisaButton.addEventListener("click", (e) => {
        e.preventDefault();
        const models= ["THE LEVEL", "THE EMPIRE","THE OASIS"];

        const marcaPesquisada = pesquisaForm.model.value;
        const trimPesquisa=marcaPesquisada.trim();
        const upper=trimPesquisa.toUpperCase();

        if (models.includes(upper)){

            let conteudo=`<p>The model <b> " ${upper}</b> " is available! </P>
        <p>Buy now and get dellivered at your home with no extra charge!</p> `

        document.getElementById("encontrado").innerHTML= conteudo;
        }
        
        else{
            let conteudo=`<p>Sorry! We don't have that model</p>`

            document.getElementById("encontrado").innerHTML= conteudo;
        }
        
      
    })


