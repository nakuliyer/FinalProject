$(document).ready(function(){

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var divam = -2;
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
    var foodlinks = ["http://www.clker.com/cliparts/E/X/A/Q/E/f/french-fries-hi.png", "https://content.mycutegraphics.com/graphics/food/whole-pepperoni-pizza.png", "http://images.clipartpanda.com/fried-chicken-clipart-fried-chicken-clipart.png", "https://content.mycutegraphics.com/graphics/icecream/ice-cream-clip-art-banana-split-clip-art.png", "http://www.clker.com/cliparts/Z/9/L/L/4/J/hungry-nachos-hi.png"];

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
      $("#img1").attr("src", "http://tastykitchen.com/recipes/wp-content/uploads/sites/2/2014/07/Extra-Crispy-Oven-Baked-French-Fries-by-Jen-and-Emily-@-Layers-of-Happiness-on-July-2-2014-410x273.jpg");
      $("#img2").attr("src", "https://i.ytimg.com/vi/AhImW2R9VDg/maxresdefault.jpg");
      $("#img3").attr("src", "https://www.pizzahagerstown.com/wp-content/uploads/lunch-dinner_555-menu_crispy-chicken-sandwich-fries.jpg");
      }, function() {
    });

    $("#" + foods[1]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[1] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://media-cdn.tripadvisor.com/media/photo-s/02/b2/a3/5c/that-pizza-place.jpg");
      $("#img2").attr("src", "https://www.360bistrobar.com/wp-content/uploads/sites/16/2017/03/veggie-pizza-600x400.jpg");
      $("#img3").attr("src", "http://assets.kraftfoods.com/recipe_images/opendeploy/179732_640x428.jpg");
      }, function() {
    });

    $("#" + foods[2]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[2] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://assets.epicurious.com/photos/57a8a45db10b4fb03f234f34/2:1/w_1260%2Ch_630/southern-fried-chicken.jpg");
      $("#img2").attr("src", "https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg");
      $("#img3").attr("src", "https://www.maangchi.com/wp-content/uploads/2016/02/kkanpunggi-1.jpg");
      }, function() {
    });

    $("#" + foods[3]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[3] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://truffle-assets.imgix.net/5f5c384a-111-icecreamconecupcakes-dishland2.jpg");
      $("#img2").attr("src", "https://cdn2.recipestonourish.com/wp-content/uploads/2011/08/Honey-Vanilla-Ice-Cream-Recipes-to-Nourish-2.jpg");
      $("#img3").attr("src", "https://www.foodmatters.com/media/images/articles/choc-chip-icecream.jpg");
      }, function() {
    });

    $("#" + foods[4]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[4] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/recipe_photos/28062_basic_cheese_nachos.jpg");
      $("#img2").attr("src", "https://images-gmi-pmc.edge-generalmills.com/4f5b624d-c9d0-4a75-acfe-fadbe40a7d1e.jpg");
      $("#img3").attr("src", "https://daiyafoods.com/wp-content/uploads/2016/05/Cinco-de-Mayo-Nachos-670x400.png");
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
