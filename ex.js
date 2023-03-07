
let tab=["my first", "my second", "my thirty", "my fourth"];
let boxGauche=document.querySelector('.box_gauche');
let boxDroite = document.querySelector('.box_droite');
let btnDroite = document.querySelector('#droite');
let btnGauche = document.querySelector('#gauche');




// console.log(boxGauche);

function generate() {
for(let i=0; i<tab.length; i++){
    let element=document.createElement('p');
    element.innerText=tab[i];
    boxGauche.appendChild(element);

    // element.addEventListener('mouseover', function() {
    //     element.classList.add('active');
    // })
    // deplacer(element);
}

}

function deplacer(element) {
    btnDroite.addEventListener('click', function () {
        if(element.classList.contains("active"))
           boxDroite.appendChild(element);
    });
}

deplacer();
generate();