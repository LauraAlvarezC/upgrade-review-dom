//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const lista = document.createElement("ul");

for (const countrie of countries) {
  const li = document.createElement("li");
  li.innerText = countrie;
  lista.appendChild(li);
}
document.body.appendChild(lista);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remove = document.querySelector(".fn-remove-me").remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere"".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const lista3 = document.createElement("ul");
const data = document.querySelector('[data-function ="printHere"]');

for (const car of cars) {
  const li3 = document.createElement("li");
  li3.innerText = car;
  lista3.appendChild(li3);
  data.appendChild(lista3);
}

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.

const countries4 = [
  { title: "Random title 1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title 2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title 3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title 4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title 5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const divPadre = document.createElement("ul");

document.body.appendChild(divPadre);

for (const countrie4 of countries4) {
  const lista3 = document.createElement("li");
  lista3.innerHTML = `<div> 
  <h4> ${countrie4.title}</h4>
  <img src="${countrie4.imgUrl}" alt="${countrie4.title}">
</div>`;
  divPadre.appendChild(lista3);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la lista.

const button = document.createElement("button");
button.innerText = "elimina ultimo elemento";
document.body.appendChild(button);

button.addEventListener("click", function () {
  const listaLi = document.querySelectorAll("li");
  listaLi[listaLi.length - 1].remove();
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//elementos de las listas que elimine ese mismo elemento del html.

for (const countrie4 of countries4) {
  const lista3 = document.createElement("li");
  const botonEliminar = document.createElement("button");
  botonEliminar.innerText = "remove";
  lista3.innerHTML = `<div> 
  <h4> ${countrie4.title}</h4>
  <img src="${countrie4.imgUrl}" alt="${countrie4.title}">
 
</div>`;

  botonEliminar.addEventListener("click", function () {
    lista3.remove();
  });

  divPadre.appendChild(lista3);
  lista3.appendChild(botonEliminar);
}
