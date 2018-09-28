// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//+= require jquery-2.2.0.min
//= require bootstrap
//= require_tree .
//= require_self

$(document).ready(function() {
    // show the user search query in the banner search input - so they can easily modify their search
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('q');
    $('#biesearch').val(query);
});
