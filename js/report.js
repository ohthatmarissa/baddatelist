$(0).ready(function(){
  $("form#report").submit(function(event){
    event.preventDafault();

    let userNeighborhood = $("select#neighborhood").val();
    let userPlace = $("select#place").val();
    let userContacted = $("select#contacted").val();
    let userIncident = $("select#incident").val();
    let userDate = $ ("select#date").val();

     let userNeighborhood = $("select#neighborhood option:selected").text();
     let userPlace = $ ("select#place option:selected").text();
     let userContacted = $("select#contacted option:selected").text();
     let userIncident = $("select#incident option:selected").text();
     let userDate = $("select#incident option:selected").text();
  });
  function Report(neighborhood,place,contacted, incident)
  this.neighborhood = neighborhood;
  this.place = place;
  this.contacted = contacted;
  this.incident = incident;
  this.date = date;
  }
  let report = new Report(userPlace,userDate,userIncident,userContacted,userNeighborhood);
  let total = "";
  }
$("#confirmation").text(result);
$("#hiddenText").show();
$("firstPage").fadeOut();
$("thankYourPage").fadeIn();
});
});
});
