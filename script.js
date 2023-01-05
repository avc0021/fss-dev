function onChangeFunction(){
  // Here we creating a array of each of these different documents query selectors
  let results = Array.from(document.querySelectorAll('#program-item')),
          stateChecked = document.querySelectorAll('.filter-options input:checked')
          //seasonsChecked = document.querySelectorAll('.filter-options input:checked');
    console.log(results)
//Here we are doing a forEach on each of the html tags and adding a style of none initially
  results.forEach((result) => {
      result.style.display = 'none';
  });
console.log(stateChecked)
  
  //Here we are calling filterStateAndSeason and passing in the state checked variable from line 8
  filterStateAndSeason(stateChecked);


  
//we are checking if the seasonsChecked is not equal to 0 if its not we will call the
//filterStateAndSeason function and pass in the seasons checked
//   if(seasonsChecked.length != 0){
//       filterStateAndSeason(seasonsChecked);
//   };

// this function is the meat and potatoes of the filtering. on line 40 we are creating
// a shallow-copied array of the param we are getting when called. We are then calling the reduce method
// and passing in sum and input. we are creating a variable on line 44 and getting the input attribute with
// .getAttribute('rel'). after that we then return sum.concat(results.filter((results) => {
// and inside this filter function we check to see if results contain the attrib we saved
// }))
// param stateOrSeasonsChecked - this is the param it is taking in when it is being called
// return - when this function is called it will get the results array and add block to the display
// to show what is being filtered
   
  function filterStateAndSeason(stateOrSeasonsChecked){
        results = Array.from(stateOrSeasonsChecked).reduce((sum, input) => {
            const attrib = input.getAttribute('rel');
            return sum.concat(results.filter((result) => {
                return result.classList.contains(attrib);
          }));
      }, [])
  }
  results.forEach((result) => {
    result.style.display = 'block'

  });
}

// const el_filters = document.querySelectorAll('[name="year"], [name="type"]'),
//   el_filterable = document.querySelectorAll('[data-filterable]');

// const applyFilter = () => {

//   // Filter checked inputs
//   const el_checked = [...el_filters].filter(el => el.checked && el.value);

//   // Collect checked inputs values to array
//   const filters = [...el_checked].map(el => el.value);

//   // Get elements to filter
//   const el_filtered = [...el_filterable].filter(el => {
//     const props = el.getAttribute('data-filterable').trim().split(/\s+/);
//     console.log(props)
//     return filters.every(fi => props.includes(fi))
//   });
//   console.log(el_filtered)

//   // Hide all
//   el_filterable.forEach(el => el.classList.add('is-hidden'));

//   // Show filtered
//   el_filtered.forEach(el => el.classList.remove('is-hidden'));
// }

// // Assign event listener
// el_filters.forEach(el => el.addEventListener('change', applyFilter));
// // Init
// applyFilter();

//THIS IS GOOD AS PER 11/3/22
// const el_filters = document.querySelectorAll('[name="country"], [name="semester"]'),
//     el_filterable = document.querySelectorAll('[data-filter]');

// const applyFilter = () => {

//   // Filter checked inputs
//   const el_checked = [...el_filters].filter(el => el.checked && el.value);

//   // Collect checked inputs values to array
//   const filters = [...el_checked].map(el => el.value);
//   console.log(filters)
//   // Get elements to filter
//   const el_filtered = [...el_filterable].filter(el => {
//     const props = el.getAttribute('data-filter').trim();
//     return filters.every(fi => props.includes(fi))
//   });
//     console.log(el_filtered)
//   // Hide all
//   el_filterable.forEach(el => el.classList.add('hide'));

//   // Show filtered
//   el_filtered.forEach(el => el.classList.remove('hide'));
// }
// // Init
// applyFilter();

// // Assign event listener
// el_filters.forEach(el => el.addEventListener('change', applyFilter));

// Using jQuery
// Multi Filter
// $(document).ready(function() {
//   //filter files list
//   function filterTrigger() {
//     var rows = $('#program-item');
//     console.log(rows)
//     var checked = $("#filter-options :checkbox:checked");
//     if (checked.length) {
//       rows.hide(200);
//       checked.each(function() {
//         $("." + $(this).val()).show(200);
//       });
//     } else {
//       rows.show();
//     }
//   }

//   $("#filter-options :checkbox").click(filterTrigger);
//   filterTrigger();

// });