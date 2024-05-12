
const X = "100"




// $(window).on('scroll', '#index_section', function(event){
//     console.log(event)
// })

// $('body').on('scroll', '#index_section', function(event){
//     console.log(event)
// })
// alert('this')
if ($('#index_section').length){
    let $index_section = $('#index_section')



    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll)
        // Do something
    });


}


// $( "#index_section" ).on( "scroll", function() {
//     console.log('scrolled')
//     // $( "#log" ).append( "<div>Handler for `scroll` called.</div>" );
//   } );