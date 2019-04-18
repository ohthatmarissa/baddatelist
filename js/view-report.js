// let chad = new Report (
//   neighborhood = "",
//   place = "",
//   contacted = "",
//   incident = "",
//   gender = "",
//   ethnicity = "",
//   haircolor = "",
//   hairstyle = "",
//   date = "",
//   name = "Chad Badboi",
//   car = "",
//   phone = "",
//   email = "",
//
// );
// let chadwick = new Report (
//   neighborhood = "",
//   place = "",
//   contacted = "",
//   incident = "",
//   gender = "",
//   ethnicity = "",
//   haircolor = "",
//   hairstyle = "",
//   date = "",
//   name = "Chadwick Weedick",
//   car = "",
//   phone = "",
//   email = ""
// );
// let chaddington = new Report (
//   neighborhood = "",
//   place = "",
//   contacted = "",
//   incident = "",
//   gender = "",
//   ethnicity = "",
//   haircolor = "",
//   hairstyle = "",
//   date = "",
//   name = "Chaddington Baddington",
//   car = "",
//   phone = "",
//   email = ""
// );
// let chad = new Report (
//   neighborhood = "",
//   place = "",
//   contacted = "",
//   incident = "",
//   gender = "",
//   ethnicity = "",
//   haircolor = "",
//   hairstyle = "",
//   date = "",
//   name = "Chadda Hound",
//   car = "",
//   phone = "",
//   email = ""
// );
//
//
// // UI logic
// let reportList = new ReportList();
//   reportList.addReport(chad);
//   reportList.addReport(chadwick);
//   reportList.addReport(chaddington);
//   reportList.addReport(chadda);
//
//
//
//
// $(document).ready(function() {
//   $("form#viewReport")submit(function(event){
//     event.preventDafault();
//   });
// });


function searchName() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('reports');
  filter = input.value.toUpperCase();
  ul = document.getElementById('ul1');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
