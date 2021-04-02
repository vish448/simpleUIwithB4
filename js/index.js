$(document).ready(function(){
    $("ul.btn-toggle-nav li").click(function(){
        
        if($(this).text() == 'Link 1'){
            $("#link1").addClass('d-block');
            $("#link1").removeClass('d-none');
        }else{
            $("#link1").removeClass('d-block');
            $("#link1").addClass('d-none');
            
        }
        if($(this).text() == 'Link 2'){
            $("#link2").addClass('d-block');
            $("#link2").removeClass('d-none');
        }else{
            $("#link2").removeClass('d-block');
            $("#link2").addClass('d-none');
            
        }
    });

});