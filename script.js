$(function() {
  
    var $searchTrack = $("#spotify-search");
    $searchTrack.on("submit", function(event) { 
      event.preventDefault();
      console.log('form submitted!');



var templatingFunction = _.template($('#spotify-template').html());
var $results = ("#results");
    var $playTrack = $("#track");
    var playTrack = $playTrack.val();
    var $newTrack = "http://api.spotify.com/v1/search?type=track&q="+ playTrack; 
    $.get($newTrack, function(data) {
        console.log(data.tracks.items);
         var results = data.tracks.items;
         console.log(templatingFunction(data.tracks.items[0]))
    });

  })

    _.each(results, function (result, index) {
    var trackView = $(templatingFunction(result));
    console.log(trackView);
    $results.append(itemView);
    console.log(itemView);
});


});

