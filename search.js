const programs = document.querySelectorAll("#program-item");
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener("input", e => {
  var value = e.target.value.toLowerCase()
   programs.forEach(program => {

    let title = program.querySelector("#program-title");
    let name = title.textContent.toLowerCase().trim();

    // let location = program.querySelector(".program-location")
    let isVisible = name.indexOf(value) !== -1 ;
       program.classList.toggle("hide", !isVisible)

   })
})