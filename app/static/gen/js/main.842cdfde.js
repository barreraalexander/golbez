
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

    var start_scroll_point = $(window).scrollTop()



    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();

        if (scroll+50 > start_scroll_point){
            start_scroll_point = scroll + 50
            console.log(start_scroll_point)

        }



        // Do something
    });


}


// $( "#index_section" ).on( "scroll", function() {
//     console.log('scrolled')
//     // $( "#log" ).append( "<div>Handler for `scroll` called.</div>" );
//   } );