$('.sidebar-button').click(function(){
    $('.sidebar').animate({'height': 'toggle'})
    $(this).toggleClass('bg-side')
})