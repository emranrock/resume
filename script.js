
$(window).scroll(function() {
//    if($(window).scrollTop()<=200){
      
//    }
var srollval = $(window).scrollTop();
if(srollval >45){
    $(".progress").html('<div class="progress-bar bg-success" role="progressbar" style="width: '+srollval+'%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> <div class="progress-bar" role="progressbar" style="width: '+srollval+'%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>              <div class="progress-bar  bg-info" role="progressbar" style="width: '+srollval+'%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>                <div class="progress-bar  bg-warning" role="progressbar" style="width: '+srollval+'%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>                <div class="progress-bar  bg-danger" role="progressbar" style="width: '+srollval+'%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>');
}
});
