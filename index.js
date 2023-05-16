const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const error = (mensaje) => {
  const contenedor = document.querySelector(".contenedor");
  contenedor.innerHTML = "";

  const inputNumber = document.querySelector("#input-number");
  inputNumber.classList.add("mensaje-error");

  const textError = document.querySelector(".text-error");
  textError.innerHTML = "";

  const small = document.createElement("small");
  small.classList.add("mensaje-error");
  small.innerText = mensaje;

  textError.appendChild(small);
};

const informacion = "informacion";

const mostrarPizza = (pizza) => {
  const contenedor = document.querySelector(".contenedor");
  contenedor.innerHTML = "";

  const div = document.createElement("div");
  div.classList.add("contenedor-pizza");

  const h3 = document.createElement("h3");
  h3.classList.add("nombre-pizza");
  h3.innerText = pizza.nombre;

  const img = document.createElement("img");
  img.classList.add("imagen-pizza");
  img.src = pizza.imagen;

  const p = document.createElement("p");
  p.classList.add("precio-pizza");
  p.textContent = "$" + " " + pizza.precio;

  contenedor.appendChild(div);
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
};

const buscarPizza = () => {
  const inputNumber = document.querySelector("#input-number");
  let number = inputNumber.value;
  inputNumber.classList.remove("mensaje-error");

  const textError = document.querySelector(".text-error");
  textError.innerHTML = "";

  if (number.trim() === "") {
    error("Ingresa un numero como ID");
    return;
  }

  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    if (pizza.id == number) {
      mostrarPizza(pizza);
      ingredientesPizza(pizza);

      localStorage.setItem(informacion, JSON.stringify(pizza));
      return;
    }
  }

  error("No existe pizza con ese ID");
};

ingredientesPizza = (pizza) => {
  const contenedor = document.querySelector(".contenedor-pizza");

  const p = document.createElement("p");
  p.classList.add("ingredientes");
  p.innerText = `Ingredientes: ${pizza.ingredientes}.`;

  contenedor.appendChild(p);
};

init = () => {
  const pizzaString = localStorage.getItem(informacion);
  if (pizzaString !== null) {
    const pizza = JSON.parse(pizzaString);
    mostrarPizza(pizza);
    ingredientesPizza(pizza);
  }
};

init();
