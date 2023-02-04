//API URL and Key
const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=uvVapquUUS1RObMLR1Ok146ju0rSM5a50r40o4Rr&start_date=2022-12-01';

// const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=ZX7HZcHK3wF9DUsCJ68GAcCP4qoAzGBSDicNbVK3&';

// console.log(baseURL);

//Elements
const astronomyPic = document.getElementById('astronomyPic')
const picDescription = document.getElementById('picDescription')
// Previous Images Navigation
const startDate = document.querySelector('start-date')
const img = document.getElementById('prev')
const imgT = document.getElementById('next')

img.addEventListener('click', PrevImg)
imgT.addEventListener('click', NextImg)

var totalInfo = 0
var currentInfo = 0

fetch(baseURL)
    .then(res => res.json())
    .then(json => {
        getPicDay(json)
        getPicDayInfo(json)
        // fetchPrevimg(json)
        readyDisplay()
    })
// .then(json => getPicDayInfo(json))

//asynchronous function to fetch data from API
async function fetchPictures() {
    const response = await fetch(baseURL);
    console.log(response);
    const json = await response.json();
    displayPicInfo(json)
}

//function that will get the picture of the day from the API
function getPicDay(pictures) {
    console.log('test');
    console.log(pictures);
    for (var i = 0; i < pictures.length; i++) {
        console.log(pictures[i].url);
        var card = document.createElement("div");
        card.setAttribute("class", "displayImage row");

        // var multimedia = document.createElement("multimedia")
        // if ()

        var img = document.createElement("img");
        img.src = pictures[i].url;
        // img.src = `<img src="${pictures.url}"> || <video src="${pictures.url}">`;
        img.setAttribute("class", "media img-fluid d-block mx-auto");

        var innerCard = document.createElement("div");
        innerCard.setAttribute("class", "format col-6 mx-auto");

        card.appendChild(innerCard);
        astronomyPic.appendChild(card);

        innerCard.appendChild(img);

    }

    console.log(pictures[i]);

}
//function that will get the info of the picture of the day from the API
function getPicDayInfo(picInfo) {
    for (var i = 0; i < picInfo.length; i++) {
        console.log(picInfo[i].title);
        console.log(picInfo[i].date);
        console.log(picInfo[i].copyright);
        console.log(picInfo[i].explanation);
        var card = document.createElement("div");
        card.setAttribute("class", "content row");

        var h1 = document.createElement("h1");
        h1.textContent = picInfo[i].title;

        var h2 = document.createElement("h2");
        h2.textContent = picInfo[i].date;

        var h5 = document.createElement("h5");
        h5.textContent = picInfo[i].copyright;

        var p = document.createElement("p");
        p.textContent = picInfo[i].explanation;

        var innerCard = document.createElement("div")
        innerCard.setAttribute("class", "info col-md-6 mx-auto");

        card.appendChild(innerCard);
        picDescription.appendChild(card)

        innerCard.appendChild(h1);
        innerCard.appendChild(h2);
        innerCard.appendChild(h5);
        innerCard.appendChild(p);
    }
    console.log(picInfo[i]);
}

// this function will fetch previous images
function fetchPrevimg(images) {
    if (startDate.value !== '') {
        url += '&start_date=2022-12-01' + startDate.value;
    }
    var card = document.createElement("div");
    card.setAttribute("class", "cardBaground col-md-6");

    var img = document.createElement("img");
    img.src = "./public/assets/leftButton.png";
    img.setAttribute("class", "divbackground");

    var imgTwo = document.createElement("img");
    imgTwo.src = "./public/assets/rightButton.png";
    imgTwo.setAttribute("class", "divbackgroundNext");

    card.appendChild(innerCard);
    butttons.appendChild(card);

    innerCard.appendChild(img);
    innerCard.appendChild(imgTwo);

    console.log(images)
}

function readyDisplay() {
    let domImages = document.getElementsByClassName("displayImage");
    let domContent = document.getElementsByClassName("content");

    console.log(domImages);
    console.log(domContent);

    totalInfo = domImages.length
    currentInfo = totalInfo -1
    for (let i = 0; i < domImages.length; i++) {
        if (i != totalInfo -1) {
            console.log(domImages[i]);
            domImages[i].style.display = "none";
        }
    }
    for (let i = 0; i < domContent.length; i++) {
        if (i != totalInfo -1) {
            console.log(domContent[i]);
            domContent[i].style.display = "none";
        }
    }

}

function PrevImg() {
    console.log(totalInfo);
    console.log(currentInfo);
    // bscamos todas las images y las guardamos en un arreglo
    let domImages = document.getElementsByClassName("displayImage");
    //buscamos el contenido y lo guardamos en un arreglo
    let domContent = document.getElementsByClassName("content");

    // if (currentInfo < totalInfo -1) 
    // sabemos que queremos ir del la fecha mas reciente y nunca vamos a buscar un valor menor que zero que es la posicion de los areglos. "currentInfo" es indexe del elemento que se muestra actualmente
    if (currentInfo > 0){
        // first we will put in display non the current images and text–position found in currentInfo
        // aqui queremos ocultar la informacion actual que se esta mostrando y nos guiamos por la variable currentInfo que nos indica que tenemos que olcultar en los arreglos
        domImages[currentInfo].style.display = "none";
        domContent[currentInfo].style.display = "none";

        //Define next position to be displayed
        // actualizamos el valor de current info por el que queremos mostrar ahora que en este caso es el anterior
        currentInfo = currentInfo - 1
        //currentInfo++;
        //currentInfo+=1;
        //show the element of the next position
        // como ya sabemos que posion del arreglo tenemos que mostrar ahora por que actualizamos currentInfo usamos ese indixe para mostrar los elementos
        domImages[currentInfo].style.display = "block";
        domContent[currentInfo].style.display = "block";
    }
}

function NextImg() {
    console.log(totalInfo);
    console.log(currentInfo);
    let domImages = document.getElementsByClassName("displayImage");
    let domContent = document.getElementsByClassName("content");

    if (currentInfo < totalInfo -1){ 
    
        // first we will put in display non the current images and text–position found in currentInfo
        domImages[currentInfo].style.display = "none";
        domContent[currentInfo].style.display = "none";

        //Define next position to be displayed
        currentInfo = currentInfo + 1
        //currentInfo++;
        //currentInfo+=1;
        //show the element of the next position
        domImages[currentInfo].style.display = "block";
        domContent[currentInfo].style.display = "block";
    }

}
