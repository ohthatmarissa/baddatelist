
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
  function Report(neighborhood, place, incident, contacted, gender, ethnicity, haircolor, hairstyle, date, description, name, car, phone, email) {
    this.neighborhood = neighborhood,
    this.place = place,
    this.incident = incident,
    this.contacted = contacted,
    this.gender = gender,
    this.ethnicity = ethnicity,
    this.haircolor = haircolor,
    this.hairstyle = hairstyle,
    this.date = date,
    this.description = description,
    this.name = name,
    this.car = car,
    this.phone = phone,
    this.email = email
  }
// UI logic ----
// let chad = new Report (
//   neighborhood = "hood",
//   place = "alley",
//   contacted = "poke",
//   incident = "ouch",
//   gender = "Male",
//   ethnicity = "white",
//   haircolor = "red",
//   hairstyle = "long",
//   date = "yesterday",
//   description = "",
//   name = "Chad Badboi",
//   car = "firebird",
//   phone = "123-456-7890",
//   email = "douche@douchey.com",
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
//   description = "",
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
//   description = "",
//   name = "Chaddington Baddington",
//   car = "",
//   phone = "",
//   email = ""
// );
// let chadda = new Report (
//   neighborhood = "",
//   place = "",
//   incident = "",
//   contacted = "",
//   gender = "",
//   ethnicity = "",
//   haircolor = "",
//   hairstyle = "",
//   date = "",
//   description = "",
//   name = "Chadda Hound",
//   car = "",
//   phone = "",
//   email = ""
// );

let reportList = new ReportList();
  // reportList.addReport(chad);
  // reportList.addReport(chadwick);
  // reportList.addReport(chaddington);
  // reportList.addReport(chadda);

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

function displayReportDetails(reportListToDisplay) {
  let reportsList = $("ul#reports");
  let reportInfo = "";
  reportListToDisplay.reports.forEach(function(report) {
    reportInfo += "<li id=" + report.id + "><a href='javascript:void(0)'>" + report.name + "</a></li>"
  });
  reportsList.html(reportInfo);
  attachReportListeners();
};

function showReport(reportId) {
  let report = reportList.findReport(reportId);
  $("#displayResult").show();
  $(".neighborhood").html(report.neighborhood);
  $(".place").html(report.place);
  $(".incident").html(report.incident);
  $(".contacted").html(report.contacted);
  $(".gender").html(report.gender);
  $(".ethnicity").html(report.ethnicity);
  $(".haircolor").html(report.haircolor);
  $(".hairstyle").html(report.hairstyle);
  $(".date").html(report.date);
  $(".description").html(report.description);
  $(".name").html(report.name);
  $(".car").html(report.car);
  $(".phone").html(report.phone);
  $(".email").html(report.email);

  // let buttons = $("#buttons");
  // buttons.empty();
  // buttons.append("<button class='deleteButton' id=" + report.id + ">Delete</button>");
}



  $(document).ready(function(){
    displayReportDetails(reportList);
    $("form#report").submit(function(event){
      event.preventDefault();

      let userNeighborhood = $("input:radio[name=neighborhood]:checked").val();
      if (userNeighborhood === "other") {
            userNeighborhood = $("input#other_neighborhood").val();
      }
      let userPlace = $("input:radio[name=place]:checked").val();
      if (userPlace === "other") {
            userPlace = $("input#other_place").val();
      }
      let userIncident = $("input:radio[name=incident]:checked").val();
      if (userIncident === "other") {
            userIncident = $("input#other_incident").val();
      }
      let userContacted = $("input:radio[name=contacted]:checked").val();
      if (userContacted === "other") {
            userContacted = $("input#other_contacted").val();
      }

      reportList.addReport(new Report(userNeighborhood, userPlace, userIncident, userContacted,
      $("#gender").val(), $("#ethnicity").val(), $("#hair").val(), $("#hairstyle").val(), $("#date").val(), $("#description").val(), $("#name").val(), $("#car").val(), $("#phone").val(), $("#email").val()
      ));

      $('input[type="radio"]').prop('checked', false);
      $("#gender").val("");
      $("#ethnicity").val();
      $("#hair").val("");
      $("#hairstyle").val("");
      $("#date").val("");
      $("#description").val("");
      $("#name").val("");
      $("#car").val("");
      $("#phone").val("");
      $("#email").val("");

      displayReportDetails(reportList);
  });
});
