var topics = ["mickey mouse", "minnie mouse", "donald duck"];

function disneyButtons() {

    // deleting buttons prior to adding new ones
    $("#button-population").empty();
 
    // looping through topics array
    // creating buttons for each disney character in the array
    // appending buttons to the DOM
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("gif");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#button-population").append(button);
    }
}

// calling the function to render the buttons to the HTML
disneyButtons();

// AJAX call that happens on button click
$("button").on("click", function() {
    var disneyCharacter = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + disneyCharacter + "&api_key=z0Pf01lnsg55HQOR8Pt249FEpNqXQI1H&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
       
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var ratingParagraph = $("<p>");
            ratingParagraph.text("Rating: " + results[i].rating);
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifDiv.append(ratingParagraph);
            gifDiv.append(gifImage);
            $("#gif-population").prepend(gifDiv);
        }
    });
});

// animating the GIFs when image is clicked



