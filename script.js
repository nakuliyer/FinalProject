$(document).ready(function(){

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var divam = -1.7;
        $("#banner").css("top", scrollTop/divam+"px");
        $("#banner").css("height", 10000-(Math.round(scrollTop/divam))+"px");
        if (scrollTop > 350) {
            $(".container-banner").css({
                position: 'fixed',
                top: 0
            });
        } else {
            $(".container-banner").css({
                position: 'absolute',
                top: 350
            });
        }
    });
    for(i = 1; i < 6; i++) {
        for(j = 0; j < i; j++) {
            $("." + i + "star").append("<img class=\"rating\" src=\"http://images.clipartpanda.com/clipart-star-RTA9RqzTL.png\" />");
        }
        for(j = i; j < 5; j++) {
            $("." + i + "star").append("<img class=\"rating\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png\"/>");
        }
    }

    var foods = ["ff", "pz", "fc", "ic", "nc"];
    var foodlinks = ["http://www.clker.com/cliparts/E/X/A/Q/E/f/french-fries-hi.png", "https://content.mycutegraphics.com/graphics/food/whole-pepperoni-pizza.png", "http://images.clipartpanda.com/fried-chicken-clipart-fried-chicken-clipart.png", "https://content.mycutegraphics.com/graphics/icecream/ice-cream-clip-art-banana-split-clip-art.png", "https://openclipart.org/download/274956/nachos.svg"];

    /*for(var f = 0; f < 5; f++) {
      for(var r = 0; r < 3; r++) {
        for(var i = 1; i < 15; i++) {
          if(((i < 5 || (i == 5 && r % 2 == 1)) || i > 9) && !(i == 14 && r % 2 == 0)) {
              $("body").append("<img style=\"z-index: 10; top: " + r + "50px; left: " + (i*10 - (r % 2)*5) + "0px;\" src=\"" + foodlinks[f] + "\" class=\"" + foods[f] + "s foods\"/>");
          }
        }
      }
    }*/
    for(var f = 0; f < 5; f++) {
      for(var r = 0; r < 20; r++) {
        for(var i = 1; i < 15; i++) {
          if(!(i == 14 && r % 2 == 0)) {
              $("body").append("<img style=\"opacity: 0.2; z-index: -5; top: " + r + "50px; left: " + (i*10 - (r % 2)*5) + "0px;\" src=\"" + foodlinks[f] + "\" class=\"" + foods[f] + "s foods\"/>");
          }
        }
      }
    }

    $(".navigator").hover(function(){
        $(this).css("background-color", "#ffffe0");
        $("#" + $(this).attr('id')+"b").css("visibility", "visible");
        $("#" + $(this).attr('id')+"b").animate({height: "200px"});
        }, function(){
        $(this).css("background-color", "#5d6d7e");
        $("#" + $(this).attr('id')+"b").animate({height: "0px"});
        $("#" + $(this).attr('id')+"b").css("visibility", "hidden");
    });

    $("#" + foods[0]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[0] + "s").css("visibility", "visible");
      }, function() {
    });

    $("#" + foods[1]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[1] + "s").css("visibility", "visible");
      }, function() {
    });

    $("#" + foods[2]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[2] + "s").css("visibility", "visible");
      }, function() {
    });

    $("#" + foods[3]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[3] + "s").css("visibility", "visible");
      }, function() {
    });

    $("#" + foods[4]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[4] + "s").css("visibility", "visible");
      }, function() {
    });

    /*for(t = 0; t < 5; t++) {
        $("#" + foods[t]).hover(function(t) {
        $(".foods").css("visibility", "hidden");
        $("." + foods[t] + "s").css("visibility", "visible");
        }, function() {
      });
    }*/

    /*$("#pz").hover(function() {
      $(".foods").css("visibility", "hidden");
      $(".pzs").css("visibility", "visible");
      }, function() {
    });

    $("#ff").hover(function() {
      $(".foods").css("visibility", "hidden");
      $(".ffs").css("visibility", "visible");
      }, function() {
    });*/
});
