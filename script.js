$(document).ready(function(){

    var lastScroll = 1901;
    var scrollMargin = 100;
    var currentImg = 8;
    var dir = 1;
    var gifnum = 0;

    var gifs = ["https://images.food52.com/qtj-bnkgWXVItO3DuZcjGu0QJXo=/a7c2c101-a0b2-4f9f-9c90-8c365ac12147--tumblr_myjv1jb2q71t5z2fwo1_500.gif", "https://cdn.pastemagazine.com/www/articles/1CupcakeFrosting-FoodGifs.gif", "https://cdn.pastemagazine.com/www/articles/1Onion-FoodGifs.gif", "https://cdn.pastemagazine.com/www/articles/1SeparateEgg-FoodWine.gif", "https://cdn.pastemagazine.com/www/articles/1peelorange-gif.gif", "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/10/25/13/anigif_enhanced-buzz-15131-1351187087-4.gif?downsize=715"];


    $("#l_arr").click(function() {
        gifnum -= 1;
        if(gifnum < 0) {gifnum = gifs.length-1;}
        $("#gif").css("background-image", "url(" + gifs[gifnum] + ")");
    });

    $("#r_arr").click(function() {
        gifnum += 1;
        if(gifnum > gifs.length-1) {gifnum = 0;}
        $("#gif").css("background-image", "url(" + gifs[gifnum] + ")");
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        //if(scrollTop < 1900) {
          var divam = -1.3;
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
        //}
        /*else */if(scrollTop > 1900) {
          if(scrollTop - lastScroll > scrollMargin) {
            if(dir < 0) {currentImg -= 1; dir = 1;}
            $("#fim" + currentImg).css("top", "0");
            $("#fim" + currentImg).css("left", "50px");
            $("#fim" + currentImg).css("z-index", "-1");
            if(currentImg === 8) {
                for(i = 1; i < 8; i++) {
                    $("#fim" + i).css("z-index", "0");
                }
            }
            currentImg -= 1;
            if(currentImg < 1) {currentImg = 8;}
            for(i = 1; i < 9; i++) {
              $("#fim" + i).css("top", "+=50px");
              $("#fim" + i).css("left", "+=100px");
            }
            lastScroll = scrollTop;
          } else if(scrollTop - lastScroll < scrollMargin*-1) {
            if(dir > 0) {currentImg += 1; dir = -1;}
            $("#fim" + currentImg).css("top", "450px");
            $("#fim" + currentImg).css("left", "950px");
            $("#fim" + currentImg).css("z-index", "1");
            if(currentImg === 1) {
                for(i = 2; i < 9; i++) {
                    $("#fim" + i).css("z-index", "0");
                }
            }
            currentImg += 1;
            if(currentImg > 8) {currentImg = 1;}
            for(i = 8; i > 0; i--) {
              $("#fim" + i).css("top", "-=50px");
              $("#fim" + i).css("left", "-=100px");
            }
            lastScroll = scrollTop;
          }
        }
    });
    starMaker();

    var foods = ["ff", "pz", "fc", "ic", "nc"];
    var foodlinks = ["http://www.clker.com/cliparts/E/X/A/Q/E/f/french-fries-hi.png", "https://content.mycutegraphics.com/graphics/food/whole-pepperoni-pizza.png", "http://images.clipartpanda.com/fried-chicken-clipart-fried-chicken-clipart.png", "https://content.mycutegraphics.com/graphics/icecream/ice-cream-clip-art-banana-split-clip-art.png", "http://www.clker.com/cliparts/Z/9/L/L/4/J/hungry-nachos-hi.png"];
    for(var f = 0; f < 5; f++) {
      for(var r = 0; r < 10; r++) {
        for(var i = 1; i < 15; i++) {
          if(!(i == 14 && r % 2 == 0)) {
              $("body").append("<img style=\"opacity: 0.2; z-index: -5; top: " + r + "50px; left: " + (i*10 - (r % 2)*5) + "0px;\" src=\"" + foodlinks[f] + "\" class=\"" + foods[f] + "s foods\"/>");
          }
        }
      }
    }

    $(".navigator").hover(function(){
        $(".navigator").css("background-color", "#5d6d7e")
        $(this).css("background-color", "#ffffe0");
        $("#" + $(this).attr('id')+"b").css("visibility", "visible");
        $("#" + $(this).attr('id')+"b").animate({height: "200px"});
        }, function(){
        //$(this).css("background-color", "#5d6d7e");
        $("#" + $(this).attr('id')+"b").animate({height: "0px"});
        $("#" + $(this).attr('id')+"b").css("visibility", "hidden");
    });







    $("#" + foods[0]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[0] + "s").css("visibility", "visible");
      $("#img1").attr("src", "http://tastykitchen.com/recipes/wp-content/uploads/sites/2/2014/07/Extra-Crispy-Oven-Baked-French-Fries-by-Jen-and-Emily-@-Layers-of-Happiness-on-July-2-2014-410x273.jpg");
      $("#img2").attr("src", "https://i.ytimg.com/vi/AhImW2R9VDg/maxresdefault.jpg");
      $("#img3").attr("src", "https://www.pizzahagerstown.com/wp-content/uploads/lunch-dinner_555-menu_crispy-chicken-sandwich-fries.jpg");
      $("#a1").attr("href", "http://tastykitchen.com/recipes/wp-content/uploads/sites/2/2014/07/Extra-Crispy-Oven-Baked-French-Fries-by-Jen-and-Emily-@-Layers-of-Happiness-on-July-2-2014-410x273.jpg");
      $("#a2").attr("href", "https://i.ytimg.com/vi/AhImW2R9VDg/maxresdefault.jpg");
      $("#a3").attr("href", "https://www.pizzahagerstown.com/wp-content/uploads/lunch-dinner_555-menu_crispy-chicken-sandwich-fries.jpg");
      $(".rating").remove();
      $("#desc1").removeClass($("#desc1").attr("class").substring(5)).addClass("3star");
      $("#desc2").removeClass($("#desc2").attr("class").substring(5)).addClass("5star");
      $("#desc3").removeClass($("#desc3").attr("class").substring(5)).addClass("4star");
      $("#desc1").html("Crispy French Fries with Ketchup</br></br>");
      $("#desc2").html("Cheesy French Fries!</br></br>");
      $("#desc3").html("Chicken Patty Burger with Fries</br></br>");
      starMaker();
      $("#mftop").html("My favorite types of french fries:");
      $("#mftopol").html("<li>Truffle</li><li>Cheese Fries</li><li>Sweet Potato Fries</li><li>With Ketchup</li><li>Jalapeño Cheese Fries</li><li>Jalapeño Fries</li>");
      }, function() {
    });

    $("#" + foods[1]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[1] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://media-cdn.tripadvisor.com/media/photo-s/02/b2/a3/5c/that-pizza-place.jpg");
      $("#img2").attr("src", "https://www.360bistrobar.com/wp-content/uploads/sites/16/2017/03/veggie-pizza-600x400.jpg");
      $("#img3").attr("src", "http://assets.kraftfoods.com/recipe_images/opendeploy/179732_640x428.jpg");
      $("#a1").attr("href", "https://www.tripadvisor.com/LocationPhotoDirectLink-g34177-d2698421-i45261660-That_Pizza_Place-DeFuniak_Springs_Florida.html#45261660");
      $("#a2").attr("href", "https://www.360bistrobar.com/product/veggie-pizza/");
      $("#a3").attr("href", "http://www.kraftrecipes.com/recipes/grilled-white-chicken-pizza-179732.aspx");
      $(".rating").remove();
      $("#desc1").removeClass($("#desc1").attr("class").substring(5)).addClass("5star");
      $("#desc2").removeClass($("#desc2").attr("class").substring(5)).addClass("3star");
      $("#desc3").removeClass($("#desc3").attr("class").substring(5)).addClass("4star");
      $("#desc1").html("Cheese Pizza</br></br>");
      $("#desc2").html("Veggie Pizza</br></br>");
      $("#desc3").html("Buffalo Chicken and Veggie Pizza</br></br>");
      starMaker();
      $("#mftop").html("My favorite types of pizzas:");
      $("#mftopol").html("<li>Plain Cheese</li><li>Margherita</li><li>Veggie</li><li>Buffalo Chicken</li><li>Stuffed Crust</li><li>Garden Veggie</li>");
      }, function() {
    });

    $("#" + foods[2]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[2] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://assets.epicurious.com/photos/57a8a45db10b4fb03f234f34/2:1/w_1260%2Ch_630/southern-fried-chicken.jpg");
      $("#img2").attr("src", "https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg");
      $("#img3").attr("src", "https://www.maangchi.com/wp-content/uploads/2016/02/kkanpunggi-1.jpg");
      $("#a1").attr("href", "https://assets.epicurious.com/photos/57a8a45db10b4fb03f234f34/2:1/w_1260%2Ch_630/southern-fried-chicken.jpg");
      $("#a2").attr("href", "https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg");
      $("#a3").attr("href", "https://www.maangchi.com/wp-content/uploads/2016/02/kkanpunggi-1.jpg");
      $(".rating").remove();
      $("#desc1").removeClass($("#desc1").attr("class").substring(5)).addClass("3star");
      $("#desc2").removeClass($("#desc2").attr("class").substring(5)).addClass("4star");
      $("#desc3").removeClass($("#desc3").attr("class").substring(5)).addClass("5star");
      $("#desc1").html("Some regular fried chicken</br></br>");
      $("#desc2").html("Spicy Fried Chicken</br></br>");
      $("#desc3").html("Kung Pao Chicken</br></br>");
      starMaker();
      $("#mftop").html("My favorite types of Fried Chicken:");
      $("#mftopol").html("<li>The Chicken Wings at Sauce</li><li>Buffalo Chicken Wings</li><li>KFC</li><li>Garlic Parmesan Wings</li><li>Kung Pao Wings</li><li>Plain Fried Chicken</li>");
      }, function() {
    });

    $("#" + foods[3]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[3] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://truffle-assets.imgix.net/5f5c384a-111-icecreamconecupcakes-dishland2.jpg");
      $("#img2").attr("src", "https://cdn2.recipestonourish.com/wp-content/uploads/2011/08/Honey-Vanilla-Ice-Cream-Recipes-to-Nourish-2.jpg");
      $("#img3").attr("src", "https://www.foodmatters.com/media/images/articles/choc-chip-icecream.jpg");
      $("#a1").attr("href", "https://truffle-assets.imgix.net/5f5c384a-111-icecreamconecupcakes-dishland2.jpg");
      $("#a2").attr("href", "https://cdn2.recipestonourish.com/wp-content/uploads/2011/08/Honey-Vanilla-Ice-Cream-Recipes-to-Nourish-2.jpg");
      $("#a3").attr("href", "https://www.foodmatters.com/media/images/articles/choc-chip-icecream.jpg");
      $(".rating").remove();
      $("#desc1").removeClass($("#desc1").attr("class").substring(5)).addClass("5star");
      $("#desc2").removeClass($("#desc2").attr("class").substring(5)).addClass("5star");
      $("#desc3").removeClass($("#desc3").attr("class").substring(5)).addClass("4star");
      $("#desc1").html("Assorted Ice Cream!</br></br>");
      $("#desc2").html("Vanilla</br></br>");
      $("#desc3").html("Mint Chocolate Chip</br></br>");
      starMaker();
      $("#mftop").html("My favorite types of ice cream:");
      $("#mftopol").html("<li>Cookie's and Cream</li><li>Vanilla</li><li>Chocolate</li><li>Cookie Dough</li><li>Strawberry</li><li>Banana Split</li>");
      }, function() {
    });

    $("#" + foods[4]).hover(function() {
      $(".foods").css("visibility", "hidden");
      $("." + foods[4] + "s").css("visibility", "visible");
      $("#img1").attr("src", "https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/recipe_photos/28062_basic_cheese_nachos.jpg");
      $("#img2").attr("src", "https://images-gmi-pmc.edge-generalmills.com/4f5b624d-c9d0-4a75-acfe-fadbe40a7d1e.jpg");
      $("#img3").attr("src", "https://daiyafoods.com/wp-content/uploads/2016/05/Cinco-de-Mayo-Nachos-670x400.png");
      $("#a1").attr("href", "https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/recipe_photos/28062_basic_cheese_nachos.jpg");
      $("#a2").attr("href", "https://images-gmi-pmc.edge-generalmills.com/4f5b624d-c9d0-4a75-acfe-fadbe40a7d1e.jpg");
      $("#a3").attr("href", "https://daiyafoods.com/wp-content/uploads/2016/05/Cinco-de-Mayo-Nachos-670x400.png");
      $(".rating").remove();
      $("#desc1").removeClass($("#desc1").attr("class").substring(5)).addClass("5star");
      $("#desc2").removeClass($("#desc2").attr("class").substring(5)).addClass("4star");
      $("#desc3").removeClass($("#desc3").attr("class").substring(5)).addClass("3star");
      $("#desc1").html("CHEESY NACHOS!</br></br>");
      $("#desc2").html("Guacamole, Cheese, and more with nachos</br></br>");
      $("#desc3").html("Assortment of Nachos and cheese and some other things</br></br>");
      starMaker();
      $("#mftop").html("My favorite types of Nachos:");
      $("#mftopol").html("<li>Nachos with guacamole</li><li>Nachos and cheese</li><li>Doritos</li><li>Cool Ranch Doritos</li><li>Spicy Doritos</li><li>Nachos and Sour Cream</li>");
      }, function() {
    });

    for(i = 1; i < 9; i++) {
        $("#fim" + i).css("top", (50*i)+"px");
        $("#fim" + i).css("left", (50+100*i)+"px");
        $("#fdi" + i).css("top", (50*i-15)+"px");
        $("#fdi" + i).css("left", (35+100*i)+"px");
    }




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

function starMaker() {
  for(i = 1; i < 6; i++) {
      for(j = 0; j < i; j++) {
          $("." + i + "star").append("<img class=\"rating\" src=\"http://images.clipartpanda.com/clipart-star-RTA9RqzTL.png\" />");
      }
      for(j = i; j < 5; j++) {
          $("." + i + "star").append("<img class=\"rating\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png\"/>");
      }
  }
}
