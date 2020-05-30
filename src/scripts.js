/*Menu Hamburguesa*/
let menu = document.getElementById('menu');
let open = false;
menu.addEventListener('click', () =>{
    let logo = document.querySelector('.logo');
    let navbar = document.querySelector('.navbar');
    let navbaritem = document.querySelector('.contenedor_items');
    if (open == false){
        logo.classList.add('logo_res');
        navbar.classList.add('navbar_res');
        navbaritem.classList.add('mostrar');
        open = true;
        navbaritem.addEventListener('click', () => {
            logo.classList.remove('logo_res');
            navbar.classList.remove('navbar_res');
            navbaritem.classList.remove('mostrar');
            open = false;
        })
            }else if (open == true){
        logo.classList.remove('logo_res');
        navbar.classList.remove('navbar_res');
        navbaritem.classList.remove('mostrar');
        open = false;
    }
})
/*Sticky menu*/
window.addEventListener('scroll', () => {
    let menu = document.getElementById('menu');
    if (window.pageYOffset > menu.offsetHeight){
        menu.style.top = "0";
        menu.style.marginRight = "0";
    } else {
        menu.style.marginRight = "7%";
        menu.style.top = "inherit";
    }
})
/*SLIDER*/
//Variables globales
var galerias = [
    grafito = ['graf1.webp','graf2.webp','graf3.webp','graf4.webp',
    'graf5.webp','graf6.webp','graf7.webp','graf8.webp'],
    acuarela = ['acua1.webp', 'acua2.webp','acua3.webp', 'acua4.webp',
    'acua5.webp', 'acua6.webp','acua7.webp', 'acua8.webp','acua9.webp'],
    carboncillo = ['carbon1.webp', 'carbon2.webp','carbon3.webp',
     'carbon4.webp','carbon5.webp', 'carbon6.webp'],
    pasteles = ['pastel1.webp', 'pastel2.webp'],
    digital = ['digital1.webp', 'digital2.webp', 'digital3.webp'],
    videos = ['video1', 'video2']
  ];
var contador = 0;
//FUNCIONES
function abrirGaleria(){
    let secGalerias = document.querySelectorAll('.boton_mas');
    secGalerias.forEach( (elemento) => {
        elemento.addEventListener('click', ()=>{
            let slider = document.getElementById('slider');
            slider.style.display = "flex";
            cargarGaleria(elemento);
        })
    })
}

function menuGaleria(){
    let btnAnterior = document.getElementById('anterior');
    let btnSiguiente = document.getElementById('siguiente');
    btnAnterior.addEventListener('click', () =>{
        if (((contador) * 100) <= 0){
            return 0;
        }
        let imagen = document.querySelectorAll('.foto');
        contador--;
        imagen.forEach( (item) => {
            item.style.transform = "translateX(" + ((-contador) * 100)  + "%)";
       })
    })
    btnSiguiente.addEventListener('click', () =>{
        let imagen = document.querySelectorAll('.foto');
        if (contador+2 > imagen.length){
            return 0;
        }
        contador++;
        imagen.forEach( (item) => {
            item.style.transform = "translateX(" + (-contador) * 100 + "%)";
       })
    })
}
function limpiarGaleria(){ /*Elimina nodos img*/
    let contenedorGaleria = document.getElementById('contenedor_galeria');
    contador = 0;
    while (contenedorGaleria.hasChildNodes()){
        contenedorGaleria.removeChild(contenedorGaleria.childNodes[0]);
    }
}
function cerrarGaleria(){
    let btnSlider = document.getElementById('cerrarSlider');
    btnSlider.addEventListener('click', () => {
            limpiarGaleria();
            let slider = document.getElementById('slider');
            slider.style.display = "none";
    })
};
function cargarImagenes(numero){
    let contenedorGaleria = document.getElementById('contenedor_galeria');
    galerias[numero].forEach((item) => {
        let newImg = document.createElement("img");
        newImg.setAttribute("src","src/assets/" + item );
        contenedorGaleria.appendChild(newImg);
        newImg.classList.add('foto');
      //  newImg.style.width = "100%";
    })
}
function cargarGaleria(elemento){
    if (elemento.getAttribute('id') == 'grafitoBtn'){
        cargarImagenes(0);
        } else
      if (elemento.getAttribute('id') == 'acuarelaBtn'){
        cargarImagenes(1);
        }else
        if (elemento.getAttribute('id') == 'carboncilloBtn'){
            cargarImagenes(2);
        }else
        if (elemento.getAttribute('id') == 'pastelesBtn'){
            cargarImagenes(3);
        }else
        if (elemento.getAttribute('id') == 'digitalBtn'){
            cargarImagenes(4);
        }else
        if (elemento.getAttribute('id') == 'videosBtn'){
            cargarImagenes(5);
        }
}
abrirGaleria();
menuGaleria();
cerrarGaleria();

/*Animaciones*/
let textoHeader = document.querySelector('.texto_header');
let acerca = document.getElementById('acerca');
let metas = document.getElementById('suenos');
let separadorTodos = document.querySelectorAll('.separador');
let contenedorGaleria = document.querySelectorAll('.seccion_dibujos');
let galeriaVideos = document.getElementById('galeriaVideos');
let preguntasfrecuentes = document.getElementById('preguntasFrecuentes');
let contacto = document.getElementById('contacto');
let contenedorInput = document.querySelectorAll('.contenedor_input');
let tituloContacto = document.querySelector('.tituloContacto');
    window.addEventListener('scroll', () =>{
        if (window.pageYOffset < acerca.offsetTop){ /*Pantalla negra*/
            let pantalla = document.querySelector(".pantalla");
            let control = acerca.offsetHeight/100;
            let alturaActual = window.pageYOffset;
            pantalla.style.backgroundColor = "rgba(0,0,0," + (((control*alturaActual)/4250)+0.3) + ")";
            textoHeader.style.opacity = (((control*100)/(alturaActual))/10)-0.1;
        }
        if (window.pageYOffset+300 > acerca.offsetTop){ /*Acerca*/
            let textoAcerca = document.getElementById('textoAcerca');
            textoAcerca.style.animation = "textoDerecha 2s ease forwards";
        }
        if (window.pageYOffset+300 > metas.offsetTop){ /*Metas*/
            let contenedorMetas = document.querySelector('.contenedor_metas');
            contenedorMetas.style.animation = "textoMetas 1s ease forwards";
        }
        separadorTodos.forEach((elemento) =>{ /*Separadores*/
            if(window.pageYOffset+500 > elemento.offsetTop ){ 
                let contenedorSeparador = elemento.children.item(0);
                let linea = contenedorSeparador.children.item(0);
                let textoSeparador = contenedorSeparador.children.item(1);
                contenedorSeparador.style.animation = "separador 1s ease forwards";
                textoSeparador.style.animation = "textoSeparador 1s ease forwards";
                linea.style.animation = "textoSeparador 1s ease forwards";
            }
        })
        contenedorGaleria.forEach((elemento) => { /*Galeria Imagenes*/
            if (window.pageYOffset+300 > elemento.offsetTop){
              elemento = elemento.children.item(0);
                if (contenedorGaleria.item(0).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards"; 
                }else if (contenedorGaleria.item(1).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(2).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(3).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(4).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }
            }
        })
        if (window.pageYOffset+300 > galeriaVideos.offsetTop){
            let contenedorVideo = document.querySelectorAll('.video');
            contenedorVideo.forEach( (elemento) => {
                elemento.style.animation = "aparecerVideos 2s ease forwards"
            })
        }
        if (window.pageYOffset+300 > preguntasfrecuentes.offsetTop){
            let contenedores = document.querySelectorAll('.itemPreguntas')
            contenedores.forEach( (elemento) => {
                elemento.style.animation = "aparecerPreguntas 2s ease forwards"
            })
        } 
        if (window.pageYOffset+300 > contacto.offsetTop){
            tituloContacto.style.animation = "inputAnimacion 2s ease forwards";
            contenedorInput.forEach((elemento) =>{
                elemento.style.animation = "inputAnimacion 2s ease forwards";
              
            })
        }
    })
    /*Setter de animaciones*/
    if (window.pageYOffset >= acerca.offsetHeight){
        let pantalla = document.querySelector(".pantalla");
        pantalla.style.backgroundColor = "rgba(0,0,0,1)";
    }
