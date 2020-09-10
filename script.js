$(document).ready(function () {



$('body').addClass('js');

// for testing
var apiListings = 'listings.json';
var strCurrentDate = moment.utc('Thu Feb 01 2018 02:15:00', 'ddd MMM DD YYYY HH:mm:ss');

// for live
// var apiListings = 'http://api.tvmedia.ca/tv/v4/lineups/36617/listings?api_key={{ TV_API }}';
// var strCurrentDate = moment.utc();

var intCount = 0;

$.getJSON(apiListings, function(data) {

  $.each(data, function(index, element) {

    if (element.seriesID == '32852') {

      var strShowDate = moment.utc(element.listDateTime);
      if ( moment(strCurrentDate).isSame(strShowDate, 'hour') == true ) {
        intCount++;
        $('#results').append($( '<div class="episode" id="episode' + intCount + '">' ));
        $('#episode'+intCount)
          .append($( '<h2>"' + element.episodeTitle + '"</h2>' ))
          .append($( '<p class="network">' + element.name + '</p>' ))
          .append($( '<p class="datetime">' + element.listDateTime + '</p>' ))
          .append($( '<p class="description">' + element.description + '</p>' ));
      }

    }

  });

  if (intCount > 0) {
    $('#answer').html('Yes');
  } else {
    $('#answer').html('No');
  }

});



});
