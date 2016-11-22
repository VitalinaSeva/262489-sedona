var link = document.querySelector(".search-button-link");
var popup = document.querySelector(".form-hotel-search");
var close = document.querySelector(".map");
var form = document.querySelector(".form-hotel-search");
var checkin = document.querySelector("[name=checkin]");
var checkout = document.querySelector("[name=checkout]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Клик по ссылке Поиск гостиницы в Седоне");
  popup.classList.add("form-hotel-search-show");
  checkin.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Клик по карте");
  popup.classList.remove("form-hotel-search-show");
});

form.addEventListener("submit", function(event) {
  if (!checkin.value || !checkout.value) {
    console.log("Нужно ввести даты заезда и выезда");
  } else {
  event.preventDefault();
  console.log("Отправляем форму");
}
});
