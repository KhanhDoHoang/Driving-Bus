$(document).ready(function () {
  //var
  $surface = $(".surface");
  $car = $(".car");
  $img = $(".car img");
  let flag = true;

  const car = ["./assets/Img_05.png", "./assets/Img_06.png"];
  //key
  $(document).on("keypress", function (e) {
    if (e.which == 13) {
      $($surface).toggleClass("moveRight");
      $($car).toggleClass("suspension");
    }
  });

  $(document).on("keypress", function (e) {
    if (e.which == 119) {
      if (flag) {
        flag = false;
        $img.attr("src", car[0]);
      } else {
        flag = true;
        $img.attr("src", car[1]);
      }
    }
  });
});
