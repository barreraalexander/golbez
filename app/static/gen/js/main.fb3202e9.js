
const X = "100"

// give each line a class that will give it a full vh,
// when it's about to come in or go out of view, it disappears


if ($('#index_section').length){
    let options = {
        root: null,
        threshold: .4,
    }

    let section_observer = new IntersectionObserver(
        function(entries, section_observer){
        entries.forEach(entry => {
            if (entry.isIntersecting){
                let $target = $(entry.target)
                console.log($target)

                // $target.find('p').removeClass('')
                $target.find('p').css('opacity', 1)

            } else {
            }
        })
    }, options);
    

    $.each($('.disappearing_line_box'), function(elem_index, elem){
        section_observer.observe(elem)


    })


}



// $(window).on('scroll', '#index_section', function(event){
//     console.log(event)
// })

// $('body').on('scroll', '#index_section', function(event){
//     console.log(event)
// })
// alert('this')
// if ($('#index_section').length){
//     let $index_section = $('#index_section')

//     var start_scroll_point = $(window).scrollTop()



//     $(window).scroll(function (event) {
//         var scroll = $(window).scrollTop();

//         let segment = 200

//         if (scroll+segment > start_scroll_point){
//             start_scroll_point = scroll + segment

//         }



//         // Do something
//     });


// }


// $( "#index_section" ).on( "scroll", function() {
//     console.log('scrolled')
//     // $( "#log" ).append( "<div>Handler for `scroll` called.</div>" );
//   } );