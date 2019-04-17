// business logic for Report List -----
function ReportList() {
  this.reports = [],
  this.currentId = 0
}

ReportList.prototype.addReport = function (report) {
  report.id = this.assignId();
  this.reports.push(report);
}

ReportList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ReportList.prototype.findReport = function(id) {
  for (var i = 0; i < this.reports.length; i++) {
    if (this.reports[i]) {
      if (this.reports[i].id == id) {
        return this.reports[i];
      }
    }
  }
  return false;
}

// business logic for Reports --------
  function Report(neighborhood, place, contacted, incident, gender, ethnicity, haircolor, hairstyle, date, name, car, phone, email) {
    this.neighborhood = neighborhood,
    this.place = place,
    this.contacted = contacted,
    this.incident = incident,
    this.gender = gender,
    this.ethnicity = ethnicity,
    this.haircolor = haircolor,
    this.hairstyle = hairstyle,
    this.date = date,
    this.name = name,
    this.car = car,
    this.phone = phone,
    this.email = email
  }
// UI logic ----
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

let reportList = new ReportList();
  reportList.addReport(chad);
  reportList.addReport(chadwick);
  reportList.addReport(chaddington);
  reportList.addReport(chadda);





$(document).ready(function(){
  $("form#report").submit(function(event){
    event.preventDafault();




    //let report = new Report(userPlace, userDate, userIncident, userContacted, userNeighborhood);
    //let total = "";
  //}
//});//
//

// $("#confirmation").text(result);
// $("#hiddenText").show();
// $("firstPage").fadeOut();
// $("thankYourPage").fadeIn();
//
// let userNeighborhood = $("select#neighborhood").val();
// let userPlace = $("select#place").val();
// let userContacted = $("select#contacted").val();
// let userIncident = $("select#incident").val();
// let userDate = $ ("select#date").val();
//
// let userNeighborhood = $("select#neighborhood option:selected").text();
// let userPlace = $("select#place option:selected").text();
// let userContacted = $("select#contacted option:selected").text();
// let userIncident = $("select#incident option:selected").text();
// let userDate = $("select#incident option:selected").text();
