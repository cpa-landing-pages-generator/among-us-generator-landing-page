var BAR;
var USERNAME;
var PCHOSEN;

$(function() {

    BAR = new ProgressBar.Path("#AU", {
        duration: 18000
    });
      
    BAR.set(0);

    var BWIDTH = $("body").width();

    if (BWIDTH < 576) {
        MOBILE = true;
        //$(".collapse").collapse("hide");
        tsParticles.loadJSON("particles-js", "particles-mobile.json").then(function(p) {
            console.log("MOBILE");
        });
    } else {
        MOBILE = false;
        //$(".collapse").collapse()
        tsParticles.loadJSON("particles-js", "particles.json").then(function(p) {
            console.log("DESKTOP");
        });
    }

})

$(".collapse").on("shown.bs.collapse", function () {
    document.querySelector(".xD").scrollIntoView({
        behavior: "smooth" 
      });
})

function S1() {
    $(".S1").fadeOut(1000);
    setTimeout(function() {
        $(".S1").attr("style", "display: none !important");
        $(".S2").fadeIn(1000).removeClass("S2").addClass("S2S2");
        $(".RS2").css("display", "flex");
    }, 1000);
}

function S2() {

    USERNAME = $("#USERNAME").val();

    $(".FROG").fadeOut(1000);
    $(".S2S2").fadeOut(1000);

    setInterval(function() {
        BAR.animate(1);
        setTimeout(function() {
          BAR.set(0);
          BAR.animate(1);
        }, 3500)
       }, 3500)

    setTimeout(function() {
        $(".S2S2").attr("style", "display: none !important");
        $(".S3").fadeIn(1000).removeClass("S3").addClass("S3S3");
          
        var OPT = {
            strings: ["Connecting with MOD server...^1000", "Injecting '<strong>MENU MOD</strong>' for <strong>" + USERNAME + "</strong> user...^1000", "Patching <strong>" + PCHOSEN + "</strong> data...^1000", "<RED>ERROR!^1500 Pass human verification to activate your Among Us Mod Menu Hack!</RED>^1000"],
            typeSpeed: 40,
            backSpeed: 25,
            showCursor: false,
            startDelay: 1000,
            onComplete: (self) => {
              $(".VERIFY").fadeIn(1000);
            }
          };
          
          var TYPED = new Typed(".TYPED", OPT);

    }, 1000);

}

function PLAT(PLATFORM) {
    $(".PL").removeClass("BBG");
    $(".PL").not(PLATFORM).css("opacity", "0.25");
    $(PLATFORM).css("opacity", "1").addClass("BBG");
  
    PCHOSEN = PLATFORM.replace(".","");

    //if ($("#CODNAME").val().length > 0) {
      //$(".STEP1BUTTON").fadeTo(1000, 1);
    //}
  
  }
