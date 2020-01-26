$(document).ready(() => {
  $("#img-1").click(() => {
    $("#pop-img-1").css({
      display: "flex"
    });
  });

  $("#img-2").click(() => {
    $("#pop-img-2").css({
      display: "flex"
    });
  });

  $("#img-3").click(() => {
    $("#pop-img-3").css({
      display: "flex"
    });
  });

  $(".close").click(() => {
    $(".pop-up-container").css({
      display: "none"
    });
  });
});
