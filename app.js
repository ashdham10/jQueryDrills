//$('#btnSubmit').on( "click", function(){
  // if ($('#form-text').val() === '') {
    //   $('#btnSubmit').prop('disabled');
  // }
  //else {
    //alert($('#form-text').val());
   //}
//});

//$("body").append("<div></div>");

//$('#btnSubmit').on("click", function(e){
  //  e.preventDefault();
    //$("div").append("<h2>" + $('#form-text').val() + "</h2>");
//});

//$('div').on('mouseover', function(){
  //  $('div').css({
    //    'background-color': 'yellow',
      //  'border-radius': '.5em'
   // })
//})
$('body').append('<ul></ul>');

$('#btnSubmit').on('click', function (e) {
    e.preventDefault();
    let item = $(`<li>${$('#form-text').val()}</li>`)

    item.on('click', function randomColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var textColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(textColor);
       item.css('color', textColor);

    item.on('dblclick', function(){
       $(item).remove();
    })
    });

 
    $('ul').append(item);
});

