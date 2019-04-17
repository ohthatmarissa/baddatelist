let chad = new Report (
  neighborhood = "hood",
  place = "alley",
  contacted = "poke",
  incident = "ouch",
  gender = "Male",
  ethnicity = "white",
  haircolor = "red",
  hairstyle = "long",
  time = "yesterday",
  name = "Chad Badboi",
  car = "firebird",
  phone = "123-456-7890",
  email = "douche@douchey.com",

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
  time = "",
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
  time = "",
  name = "Chaddington Baddington",
  car = "",
  phone = "",
  email = ""
);
let chadda = new Report (
  neighborhood = "",
  place = "",
  incident = "",
  contacted = "",
  gender = "",
  ethnicity = "",
  haircolor = "",
  hairstyle = "",
  time = "",
  name = "Chadda Hound",
  car = "",
  phone = "",
  email = ""
);

// business logic for Report List -----
function ReportList() {
  this.reports = [],
  this.currentId = 0
}

ReportList.prototype.addReport = function(report) {
  report.id = this.assignId();
  this.reports.push(report);
}

ReportList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ReportList.prototype.findReport = function(id) {
  for (var i=0; i< this.reports.length; i++) {
    if (this.reports[i]) {
      if (this.reports[i].id == id) {
        return this.reports[i];
      }
    }
  }
  return false;
}

ReportList.prototype.deleteReport = function(id) {
  for (var i=0; i< this.reports.length; i++) {
    if (this.reports[i]) {
      if(this.reports[i].id == id) {
        delete this.reports[i];
        return true;
      }
    }
  }
  return false;
}

// business logic for Reports --------
  function Report(neighborhood, place, incident, contacted, gender, ethnicity, haircolor, hairstyle, time, name, car, phone, email) {
    this.neighborhood = neighborhood,
    this.place = place,
    this.incident = incident,
    this.contacted = contacted,
    this.gender = gender,
    this.ethnicity = ethnicity,
    this.haircolor = haircolor,
    this.hairstyle = hairstyle,
    this.time = time,
    this.name = name,
    this.car = car,
    this.phone = phone,
    this.email = email
  }
// UI logic ----

let reportList = new ReportList();
  reportList.addReport(chad);
  reportList.addReport(chadwick);
  reportList.addReport(chaddington);
  reportList.addReport(chadda);

function displayReportDetails(reportListToDisplay) {
  let reportsList = $("ul#reports");
  let reportInfo = "";
  reportListToDisplay.reports.forEach(function(report) {
    reportInfo += "<li id=" + report.id + ">" + report.name + "</li>"
  });
  reportsList.html(reportInfo);
};

function showReport(reportId) {
  let report = reportList.findReport(reportId);
  $("#displayResult").show();
  $(".neighborhood").html(report.neighborhood);
  $(".place").html(report.place);
  $(".contacted").html(report.contacted);
  $(".incident").html(report.incident);
  $(".gender").html(report.gender);
  $(".ethnicity").html(report.ethnicity);
  $(".haircolor").html(report.haircolor);
  $(".hairstyle").html(report.hairstyle);
  $(".time").html(report.time);
  $(".name").html(report.name);
  $(".car").html(report.car);
  $(".phone").html(report.phone);
  $(".email").html(report.email);

  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + report.id + ">Delete</button>");
}

function attachReportListeners() {
  $("ul#reports").on("click", "li", function() {
    showReport(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    reportList.deleteReport(this.id);
    $("#displayResult").hide();
    displayReportDetails(reportList);
  });
};

  $(document).ready(function(){
    attachReportListeners();
    $("form#report").submit(function(event){
      event.preventDefault();

      reportList.addReport(new Report($("input[name=neighborhood]:checked").val(), $("input[name=place]:checked").val(), $("input[name=contacted]:checked").val(), $("#incident").val(), $("#gender").val(), $("#ethnicity").val(), $("#hair").val(), $("input[type='checkbox']").val(), $("#time").val(), $("#name").val(), $("#car").val(), $("#phone").val(), $("#email").val()
      ));

      $("input[name=neighborhood]:checked").val("");
      $("input[name=place]:checked").val("");
      $("#incident").val("")
      $("input[name=contacted]:checked").val("")
      $("#gender").val("");
      $("#ethnicity").val();
      $("#hair").val("");
      $("#hairstyle").val("");
      $("#time").val("");
      $("#name").val("");
      $("#car").val("");
      $("#phone").val("");
      $("#email").val("");

      displayReportDetails(reportList);
  });
});





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
