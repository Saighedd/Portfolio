$.getJSON("https://api.countabc.xyz/hit/saighed.xyz/visits", function(response) {
$("#views").text(response.value);
});
