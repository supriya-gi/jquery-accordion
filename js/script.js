
$('.accordion').click(function(extra){

   extra.preventDefault(); //Remove extra link

   $(this).next().slideToggle()
    })