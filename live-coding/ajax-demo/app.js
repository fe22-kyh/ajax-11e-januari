/*let ajax = new XMLHttpRequest();

ajax.onreadystatechange = () => {
  console.log("Download completed");
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      document.querySelector(".text-box").textContent = ajax.response;
    } else if (ajax.status == 404) {
      document.querySelector(".text-box").textContent = "Text file was not found";
    }
  }
};

ajax.open("GET", "message.txt");
ajax.send();
*/

let getRequest = $.get("https://fe22-kyh.github.io/", response => {
  $(".text-box").html(response);
});

getRequest.fail(data => {
  if (data.status == 404) {
    $(".text-box").text("Text file was not found");
  }
});