/**
 * Created by Robin on 14-3-27.
 */

(function(){

    window.addEventListener("scroll",function(){

    });

    $("a[href*=#]").click(function(e){
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        $("html,body").animate({scrollTop:$target.offset().top},1000, "easeInOutCubic");
    });
})();