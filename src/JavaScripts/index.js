console.log("Works");
import "../SCSS/index.scss";
import "./module";

//функция вставки нового элемента при случившемся событии

document //обращение к документу
  .querySelector(".header__buttons-registration") //поиск элемента "класс(id)" в документе
  .addEventListener("click", (event) => {
    // прослушка события "клик", => после события выполняется код
    let el = document.createElement("div"); //инициализация переменной el, которая создает элемент "тег"
    el.setAttribute("class", "modal"); // выбор атрибута "class(alt,href)" и его наименование
    el.innerHTML = `                              
    <div class="modal">
    <div class="modal__window">
      <div class="modal__window__close">
        <span class="material-icons">
          close
        </span>
      </div>
      <div class="modal__window__title">Sign up</div>
      <div class="modal__window__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at
        illo corporis illum consequuntur! Qui veritatis sit earum eius consequatur
        dolorem fuga ipsa, et libero tempora mollitia iste! Incidunt, quo.
      </div>
      <div class="modal__window__button">Sign up</div>
    </div>
  </div>
`; //вставка HTML-кода
    document.querySelector("body").appendChild(el); //поиск элемента "класс" в документе и вставка HTML кода из переменной el в его дочерний элемент
  });

//вызов модального окна при нажатии кнопки sign up
document
  .querySelector(".banner__content__button")
  .addEventListener("click", (event) => {
    document.querySelector(".modal").style.display = "block";
  });
//удаление модального окна при нажатии крестика
// document
//   .querySelector(".modal__window__close")
//   .addEventListener("click", (event) => {
//     document.querySelector(".modal").style.display = "none";
//   });

//удаление модального окна при нажатии вне модалки или при нажатии крестика
document.querySelector(".modal").addEventListener("click", (event) => {
  if (
    event.target.dataset.type === "window" ||
    event.target.dataset.type === "close" ||
    event.target.dataset.type === "button"
  )
    document.querySelector(".modal").style.display = "none";
});
