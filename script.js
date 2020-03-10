function swaping() {
  var fromObj = document.getElementById("origin");
  (toObj = document.getElementById("destination")), (fromValue = fromObj.value);

  fromObj.value = toObj.value;
  toObj.value = fromValue;
}

function validation() {
  if (document.getElementById("origin").value == "") {
    document.getElementById("error").innerText = "Enter From Value";
  } else if (document.getElementById("destination").value == "") {
    document.getElementById("error").innerText = "Enter Destination Value";
  } else if (document.getElementById("caldate").value == "") {
    document.getElementById("error").innerText = "Select Date";
  } else {
    document.getElementById("dispaly-from").innerText = document.getElementById(
      "origin"
    ).value;
    document.getElementById(
      "display-destination"
    ).innerText = document.getElementById("destination").value;
    document.getElementById("display-date").innerText = document.getElementById(
      "caldate"
    ).value;
  }
}
