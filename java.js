$(document).ready(function(){
	$("body").fadeIn(1500);
    
    var wd = $(window).width();
    if(wd >= 1440 ){
     var $fadeleft = $('.fadeleft');
        $fadeleft.css('visibility', 'hidden')
        $fadeleft.waypoint(function(){
            $fadeleft.addClass('animated fadeInLeft')
            $fadeleft.css('visibility', 'visible')
        }, {offset:'75%'});
    
    var $faderigth= $('.faderigth');
        $faderigth.css('visibility', 'hidden')
        $faderigth.waypoint(function(){
            $faderigth.addClass('animated fadeInRight')
            $faderigth.css('visibility', 'visible')
        }, {offset:'75%'});
    
    var $fadeup = $('.fadeup');
        $fadeup.css('visibility', 'hidden')
        $fadeup.waypoint(function(){
            $fadeup.addClass('animated fadeInUp')
            $fadeup.css('visibility', 'visible')
        }, {offset:'75%'});
    
    var $fadeuptm = $('.fadeuptm');
        $fadeuptm.css('visibility', 'hidden')
    $fadeuptm.addClass('animated fadeInUp')
        $fadeuptm.css('visibility', 'visible')
    
    var $fadeleftpv = $('.fadeleftpv');
        $fadeleftpv.css('visibility', 'hidden')
        $fadeleftpv.waypoint(function(){
            $fadeleftpv.addClass('animated fadeInLeft')
            $fadeleftpv.css('visibility', 'visible')
        }, {offset:'75%'});
    
     var $fadefootermv= $('.faderigthpv');
        $fadefootermv.css('visibility', 'hidden')
        $fadefootermv.waypoint(function(){
            $fadefootermv.addClass('animated fadeInRight')
            $fadefootermv.css('visibility', 'visible')
        }, {offset:'75%'});
    
    var $fadefooterm= $('.jumbotron');
        $fadefooterm.css('visibility', 'hidden')
        $fadefooterm.waypoint(function(){
            $fadefooterm.addClass('animated fadeInUp')
            $fadefooterm.css('visibility', 'visible')
        }, {offset:'75%'});
        
         var $fadefooterm2= $('.fup');
        $fadefooterm2.css('visibility', 'hidden')
        $fadefooterm2.waypoint(function(){
            $fadefooterm2.addClass('animated fadeInUp')
            $fadefooterm2.css('visibility', 'visible')
        }, {offset:'75%'});
    
    var $fadefooter= $('.fade-up-footer');
        $fadefooter.css('visibility', 'hidden')
        $fadefooter.waypoint(function(){
            $fadefooter.addClass('animated fadeIn')
            $fadefooter.css('visibility', 'visible')
        }, {offset:'85%'});
    }
});