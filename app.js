$(document).ready(function() {

    var color = 'white';
    var colors = 'white red yellow green blue';

    $('#red').on('click', function () {
      color = 'red';
    })

    $('#green').on('click', function (){
      color = 'green';
    })

    $('#blue').on('click', function (){
      color = 'blue';
    })

    $('#yellow').on('click', function (){
      color = 'yellow';
    })

    $('#white').on('click', function (){
      color = 'white';
    })

    $('.box').on('mousedown', function() {
      $('.box').on('mouseenter', function () {
        $(this).addClass(color);
      })
    });

    $('.box').on('mouseup', function() {
      $('.box').off('mouseenter');
    })

    $('.box').on('dblclick', function() {
      $(this).removeClass(colors);
    });

    $('#reset').on('click', function () {
      $('.box').removeClass(colors);
    })



})
// When the document is ready, invoke the callback function
