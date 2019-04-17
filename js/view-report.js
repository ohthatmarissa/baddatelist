let chad = new Report (
  neighborhood = "",
  place = "",
  contacted = "",
  incident = "",
  gender = "",
  ethnicity = "",
  haircolor = "",
  hairstyle = "",
  date = "",
  name = "Chad Badboi",
  car = "",
  phone = "",
  email = "",

);
let chadwick = new Report (
  neighborhood = "",
  place = "",
  contacted = "",
  incident = "",
  gender = "",
  ethnicity = "",
  haircolor = "",
  hairstyle = "",
  date = "",
  name = "Chadwick Weedick",
  car = "",
  phone = "",
  email = ""
);
let chaddington = new Report (
  neighborhood = "",
  place = "",
  contacted = "",
  incident = "",
  gender = "",
  ethnicity = "",
  haircolor = "",
  hairstyle = "",
  date = "",
  name = "Chaddington Baddington",
  car = "",
  phone = "",
  email = ""
);
let chad = new Report (
  neighborhood = "",
  place = "",
  contacted = "",
  incident = "",
  gender = "",
  ethnicity = "",
  haircolor = "",
  hairstyle = "",
  date = "",
  name = "Chadda Hound",
  car = "",
  phone = "",
  email = ""
);


// UI logic
let reportList = new ReportList();
  reportList.addReport(chad);
  reportList.addReport(chadwick);
  reportList.addReport(chaddington);
  reportList.addReport(chadda);




$(document).ready(function() {
  $("form#viewReport")submit(function(event){
    event.preventDafault();
  });
});
