
const X = "100"


$('body').on('scroll', '#index_section', function(event){
    console.log(event)
})
// alert('this')
// if ($('#index_section').length){
//     let $index_section = $('#index_section')

//     $index_section.on( "scroll", function(event) {
//         // $( "#log" ).append( "<div>Handler for `scroll` called.</div>" );
//         console.log(event)
    
//     });



// }


$( "#index_section" ).on( "scroll", function() {
    console.log('scrolled')
    // $( "#log" ).append( "<div>Handler for `scroll` called.</div>" );
  } );