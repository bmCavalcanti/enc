import $ from "jquery";
import '@popperjs/core';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap';
import '../css/app.scss';

$(function() {
    $("iframe").css("height",( $("iframe").width() * 0.5617));
});