let output = new Output();
$("#sub").on("click", test);

function test() {
  $.ajax({
    type: "GET",
    url: "http://httpbin.org/get",
    success: function (data) {
      let arr = Object.entries(data["headers"]);
      
      arr.forEach((item) => output.addTableRow(item));
    },
  });
}
