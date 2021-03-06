$(document).on('turbolinks:load', function () {
  function filterTableRows() {
      const value = $(this).val().toLowerCase();
      $("#language-tbody tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  }

  $("#language-search").on("input", filterTableRows);
});

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '../../assets/stylesheets/application';
import "bootstrap/dist/js/bootstrap"


Rails.start()
Turbolinks.start()
ActiveStorage.start()
var jQuery = require('jquery')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

//= require jquery
//= require jquery_ujs