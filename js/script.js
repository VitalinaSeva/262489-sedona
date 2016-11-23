var link = document.querySelector(".hotel-search-button-text");
var popup = document.querySelector(".hotel-search-form");
var form = document.querySelector(".callback-form");
var checkin = document.querySelector("[name=checkin]");
var checkout = document.querySelector("[name=checkout]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Клик по ссылке Поиск гостиницы в Седоне");
  popup.classList.toggle("hotel-search-form-open");
  checkin.focus();
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!checkin.value || !checkout.value) {
    console.log("Нужно ввести даты заезда и выезда");
  } else {
  event.preventDefault();
  console.log("Отправляем форму");
}
});
