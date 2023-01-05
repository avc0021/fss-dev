const el_filters = document.querySelectorAll('[name="country"], [name="semester"]'),
  el_filterable = document.querySelectorAll('[data-filter]');
    
const applyFilter = () => {

  // Filter checked inputs
  const el_checked = [...el_filters].filter(el => el.checked && el.value);
  
  // Collect checked inputs values to array
  const filters = [...el_checked].map(el => el.value);
   console.log(filters)
  // Get elements to filter
  const el_filtered = [...el_filterable].filter(el => {
    const props = el.getAttribute('data-filter').trim().split(/\s+/);
    return filters.every(fi => props.includes(fi))
  });

//   // Hide all
//   el_filterable.forEach(el => el.classList.add('hide'));

  // Show filtered
   el_filtered.forEach(el => {
        let location = el.querySelector(".program-location")
        
        let isVisible = location.indexOf(value) !== -1;
            program.classList.toggle("hide", !isVisible)
   
   });
   
//       programs.forEach(program => {

//     let title = program.querySelector(".program-title");
//     let name = title.textContent.toLowerCase().trim();

//     // let location = program.querySelector(".program-location")
//     let isVisible = name.indexOf(value) !== -1 ;
//       program.classList.toggle("hide", !isVisible)

//   })
}

// Assign event listener
el_filters.forEach(el => el.addEventListener('click', applyFilter));
// Init
applyFilter();








// const el_filters = document.querySelectorAll(".program-item"),
//     el_filterable = document.querySelector('input[type="checkbox"]');

  
  

// const applyFilter = () => {

//   // Filter checked inputs
//   const el_checked = [...el_filters].filter(el => el.checked && el.value);
  
//   // Collect checked inputs values to array
//   const filters = [...el_checked].map(el => el.value);
  
//   // Get elements to filter
//   const el_filtered = [...el_filterable].filter(el => {
//     const props = el.getAttribute('data-groups').trim().split(/\s+/);
//     return filters.every(fi => props.includes(fi))
//   });

//   // Hide all
//   el_filterable.forEach(el => el.classList.add('hide'));

//   // Show filtered
//   el_filtered.forEach(el => el.classList.remove('hide'));
// }

// // Assign event listener
// el_filters.forEach(el => el.addEventListener('change', applyFilter));
// // Init
// applyFilter();

////////// THIS IS THE GOOD CODE 11/8

// Multi Filter
// const itemsToFilter = document.querySelectorAll('#program-item div');
// const checkBoxes = document.querySelectorAll('.filter-checkbox input');
// const testCheckbox = document.getElementById('mainFilter');
// // console.log(itemsToFilter)
// // console.log(checkBoxes)

// const mainFilter = () => {
//    let testArray = []
    
//     for (var i = 0; i < checkBoxes.length; i++) {
//         var checkBoxesIndex = checkBoxes[i]

//         if (checkBoxesIndex.checked ) {
//                 testArray.push(checkBoxesIndex.getAttribute("value"))
//             }
//     }
//     console.log(testArray)
//     // function filterItems(e){
//     //     var clickedItem = e.target;
//     //     console.log(clickedItem) 
//     //   if (clickedItem.checked == true) {
//     //       hideOrShowItems(clickedItem.value, "hideItem", "showItem");
//     //   } else if (clickedItem.checked == false) {
//     //       hideOrShowItems(clickedItem.value, "showItem", "hideItem");
//     //   } 
//     // }
// };

// for (var i = 0; i < checkBoxes.length; i++) {
//     checkBoxes[i].addEventListener("click", () => {
//         filterItems(checkBoxes[i])
//     });
//     // checkBoxes[i].checked = true;
// }
// // the event handler!
// function filterItems(e) {
//     // var clickedItem = e.target;
//      console.log(e) 
//     // if (clickedItem.checked == true) {
//     //     hideOrShowItems(clickedItem.value, "hideItem", "showItem");
//     // } else if (clickedItem.checked == false) {
//     //     hideOrShowItems(clickedItem.value, "showItem", "hideItem");
//     // } else {
//     //     // deal with the indeterminate state if needed
//     // }
// }
// add or remove classes to show or hide our content
// function hideOrShowItems(itemType, classToRemove, classToAdd) {
//     for (var i = 0; i < itemsToFilter.length; i++) {
//         var currentItem = itemsToFilter[i];
           
//         if (currentItem.getAttribute("data-type") == itemType) {
//             removeClass(currentItem, classToRemove);
//             addClass(currentItem, classToAdd);
//         }
//     }
// }
// Helper functions for adding and removing class values
// function addClass(element, classToAdd) {
//     var currentClassValue = element.className;
        
//     if (currentClassValue.indexOf(classToAdd) == -1) {
//         if ((currentClassValue == null) || (currentClassValue === "")) {
//             element.className = classToAdd;
//         } else {
//             element.className += " " + classToAdd;
//         }
//     }
// }
        
// function removeClass(element, classToRemove) {
//     var currentClassValue = element.className;
  
//     if (currentClassValue == classToRemove) {
//         element.className = "";
//         return;
//     }
  
//     var classValues = currentClassValue.split(" ");
//     var filteredList = [];
  
//     for (var i = 0 ; i < classValues.length; i++) {
//         if (classToRemove != classValues[i]) {
//             filteredList.push(classValues[i]);
//         }
//     }
  
//     element.className = filteredList.join(" ");
// }



// #set ( $currentPage = $_XPathTool.selectSingleNode($contentRoot, "/system-index-block/calling-page/system-page[@current='true']") )
// #set ( $rows = $_XPathTool.selectNodes($currentPage, "system-data-structure/row") )
// #set ( $title = $_XPathTool.selectSingleNode($currentPage, "title").value )
// #set ( $accNum = 0 )

// ## #foreach($block in $rows)
// ##     #set ( $blockType = "" )
// ##     #set ( $blockType = $block.getChild("type").value )  
// ##     #if ($blockType == "wysiwyg")
// ##         #wysiwyg($block)  
// ##     #elseif ($blockType == "intro")
// ##         #intro($block) 
// ##     #elseif ($blockType == "programs")
// ##         #programs($block)
// ##     #end
// ## #end


// ##macro (programs $block)
// <div class="filters-group">
// <div class="search-icon"></div>
// <div class="search-input">
//     <label for="fas fa-search" class="filter-label"></label>
//     ## <span class="fas fa-search"></span>
//     <input class="search" type="search" id="search" placeholder="Search for a program" data-search="data-search"></input>
// </div>
// </div>
// <div class="grid-wrap">
// <div class="filter-sidebar">
//     <div class="sidebar-wrap filter-by-location">
//     <div class="filter-head"><span class="fas fa-minus"></span><span class="filter-head-text">Filter by location</span></div>
//     <div class="filter-options filter-buttons">
//          <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="country" value="argentina"/>Argentina</label>
//          <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="country" value="australia"/>Australia</label>
//          <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="country" value="belgium"/>Belgium</label>
//          <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="country" value="china"/>China</label>
//          <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="country" value="cyprus"/>Cyprus</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="czech-republic"/>Czech Republic</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="egypt"/>Egypt</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="finland"/>Finland</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="france"/>France</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="germany"/>Germany</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="greece"/>Greece</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="italy"/>Italy</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="mexico"/>Mexico</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="south-korea"/>South Korea</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="spain"/>Spain</label>
//          <label class="filter-checkbox"><input type="checkbox" name="country" value="united-states"/>United States</label>
//     </div>
//     <div class="sidebar-wrap filter-by-semester">
//     <div class="filter-head"><span class="fas fa-minus"></span><span class="filter-head-text">Filter by Availability</span></div>
//     <div class="filter-options filters-semester filter-buttons">
//         <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="semester" value="fall"/>Fall</label>
//         <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="semester" value="spring"/>Spring</label>
//         <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="semester" value="summer"/>Summer</label>
//         <label class="filter-checkbox"><input onclick="mainFilter()" id="mainFilter" type="checkbox" name="semester" value="winter"/>Winter</label>
//         ## <button class="radio-input" data-group="fall">Fall</button>
//         ## <button class="radio-input" data-group="spring">Spring</button>
//         ## <button class="radio-input" data-group="summer">Summer</button>
//         ## <button class="radio-input" data-group="winter">Winter</button>
//     </div>
//     </div>
//     </div>
// </div>
// #set($studyAbroadPrograms = $_.query().byDataDefinition("site://UIW Main Site/Study Abroad").includeBlocks(true).sortBy("name").sortDirection("asc").siteName($currentPageSiteName).execute() )
    
//     <div id="grid" class="grid-results">
//     #foreach($program in $studyAbroadPrograms)
//     #set ($programName = "" )
//     #set ($programType = "")
//     #set ($programAvailable = "")
//     #set ($programLocation = "")
//     #set ($programCourseOfferings = "")
//     #set ($programLink = "")
//     #set ($programScholarships = "" )
//     #set ($programAccommodations = "")
//     #set ($programKeywords = "" )
    
//     #set ($programName = $program.getStructuredDataNode('program-info/program-name').textValue )
//     #set ($programType = $program.getStructuredDataNode('program-info/program-type').textValue )
//     #set ($programAvailable = $program.getStructuredDataNode('program-info/available').selectedFieldItems )
//     #set ($programLocation = $program.getStructuredDataNode('program-info/location').textValue )
//     #set ($programCourseOfferings = $program.getStructuredDataNode('program-info/course-offerings').textValue )
//     #set ($programLink = $program.getStructuredDataNode('program-info/fact-sheet').asset.link )
//     #set ($programScholarships = $program.getStructuredDataNode('program-info/scholarships').textValue )
//     #set ($programAccommodations = $program.getStructuredDataNode('program-info/accommodations').textValue )
//     #set ($programKeywords = $program.getStructuredDataNode('program-info/keywords').textValue )
    
//       #foreach($available in $programAvailable)
//           #set($availability = $available.value)
//       #end
//       <div id="program-item" data-filter='["${_EscapeTool.xml($programName)}", "${_EscapeTool.xml($programType)}", #foreach($program in $programAvailable)${program.value}#if(!$foreach.last), #end#end, "${_EscapeTool.xml($programLocation)}"]' data-title="${_EscapeTool.xml($programName)}">
//            <div id="program-title">${_EscapeTool.xml($programName)}</div>
//            <div>${_EscapeTool.xml($programLocation)}</div>
//            <div>#foreach($program in $programAvailable)${program.value}#if(!$foreach.last), #end#end</div>
//       </div>
//     #end
//     </div>
// </div>
// ##end

