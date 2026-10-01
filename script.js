const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

const toast = document.querySelector("#toast");

const checkin = document.querySelector("#checkin");
const checkout = document.querySelector("#checkout");

const checkinText = document.querySelector("#checkinText");
const checkoutText = document.querySelector("#checkoutText");


/* MOBILE MENU */

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("open");

});


document.querySelectorAll(".nav a").forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


/* DATE FORMAT */

function formatDate(value) {

  if (!value) {
    return "Select date";
  }

  return new Date(value + "T00:00:00")
    .toLocaleDateString(
      "en-AU",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    );

}


/* CHECK-IN */

checkin.addEventListener("change", () => {

  checkinText.textContent = formatDate(checkin.value);

  checkout.min = checkin.value;

});


/* CHECK-OUT */

checkout.addEventListener("change", () => {

  checkoutText.textContent = formatDate(checkout.value);

});


/* AVAILABILITY */

document
  .querySelector("#availabilityBtn")
  .addEventListener("click", () => {

    if (!checkin.value || !checkout.value) {

      showToast(
        "Please select your check-in and check-out dates."
      );

      return;

    }


    if (checkout.value <= checkin.value) {

      showToast(
        "Check-out must be after check-in."
      );

      return;

    }


    showToast(
      "Availability request received — demo booking flow."
    );

  });


/* TOAST MESSAGE */

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3200);

}
