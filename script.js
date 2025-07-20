
var headingX = document.querySelector(".heading__x"); // Use class selector

headingX.addEventListener("click", function() {
    var headingDiv = document.querySelector(".heading"); // Select the heading div
    if (headingDiv) {
        headingDiv.style.display = "none"; // Hide the heading div
    }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slider__item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

// Initialize first slide
// showSlide(currentSlide);


// document.querySelectorAll('.fa-heart').forEach(function(heart) {
//     heart.addEventListener('click', function() {
//         heart.classList.toggle('active');
//     });
// });



// const email = document.getElementById("email").value;

// row.innerHTML = '<td class="border px-4 py-2">' + name +

// '<td class="border px-4 py-2">' + email + '</td>' +





  function validateEmail() {
    const emailInput = document.getElementById("emailInput");

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity(); // triggers native popup like your screenshot
      return false; // prevent form submission
    }

    // Optional: You can add your custom code here
    alert("Subscribed successfully!");
    return false; // remove this if you want actual form submission
  }



 
  // Attach click event to all buttons with class 'redirect-button'
  document.querySelectorAll('.redirect-button').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'collections.html';
    });
  });

