console.log("Works");
import "../SCSS/index.scss";
import "./module";

//функция вставки нового элемента при случившемся событии
let i = 0;
document //обращение к документу
  .querySelector(".header__buttons-registration") //поиск элемента "класс(id)" в документе
  .addEventListener("click", (event) => {
    // прослушка события "клик", => после события выполняется код
    let el = document.createElement("div"); //инициализация переменной el, которая создает элемент "тег"
    el.setAttribute("class", "header__nav-item"); // выбор атрибута "class(alt,href)" и его наименование
    el.innerHTML = `                              
  <a class="nav-item__link" href="#!">${i}</a>
`; //вставка HTML-кода
    //alert("click123");
    i++;
    document.querySelector(".header__buttons-registration").appendChild(el); //поиск элемента "класс" в документе и вставка HTML кода из переменной el в его дочерний элемент
  });
