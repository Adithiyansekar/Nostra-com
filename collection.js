// pop-up
let popup = document.getElementById("pop-up")
let topclose = document.getElementById("topclose")
topclose.addEventListener("click", ()=> {
    popup.style.display="none"
})


// menu bar
let menuicon = document.getElementById("menuicon")
let sidebar = document.getElementById("sidebar")
let close = document.getElementById("close")
menuicon.addEventListener("click", ()=> {
    sidebar.style.right=0
})

close.addEventListener("click", ()=> {
    sidebar.style.right="-40%"
})


// search and checkbox

const products = document.getElementById("Products");
const search = document.getElementById("search");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const productlist = products.querySelectorAll(".grid > div"); // product cards only

function filterProducts() {
    const searchValue = search.value.trim().toUpperCase();

    // Get all selected checkbox values
    const selectedFilters = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.trim().toUpperCase());

    for (let i = 0; i < productlist.length; i++) {
        const product = productlist[i];
        const name = product.querySelector("h1").textContent.toUpperCase();

        // 1. Check search match
        const matchesSearch = name.includes(searchValue);

        // 2. Check checkbox filter match
        let matchesFilter = false;

        if (selectedFilters.length === 0) {
            matchesFilter = true; // no filters means match all
        } else {
            // check if any filter value is in the product name
            for (let j = 0; j < selectedFilters.length; j++) {
                if (name.includes(selectedFilters[j])) {
                    matchesFilter = true;
                    break;
                }
            }
        }

        // 3. Final decision
        if (matchesSearch && matchesFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

// Attach search input listener
search.addEventListener("keyup", filterProducts);

// Attach listeners to all checkboxes
checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});



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





//   



