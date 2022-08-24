function myFunction1() {
  document.getElementById("user").style.textTransform = "capitalize";
}

function navalidation() {
  var user = document.getElementById("user").value;

  if (user == "") {
    document.getElementById(
      "username"
    ).innerHTML = `**Plaease Fill Required Name`;
    console.log("hekeke");
  } else if (user.length < 5) {
    document.getElementById(
      "username"
    ).innerHTML = `**Minum length not matched`;
  } else {
    document.getElementById("username").innerHTML = "";
  }
  return false;
}

function emailvalidation() {
  var vaemail = document.getElementById("vaemail").value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (vaemail == "") {
    document.getElementById("validmail").innerHTML =
      "**Plaease Fill the required mail";
    console.log("hekeke");
  } else if (pattern.test(vaemail)) {
    return true;
  } else {
    document.getElementById("validmail").innerHTML = `**NOT Valid mail id`;
    return false;
  }
}

function CheckPassword() {
  var pass = document.getElementById("pass").value;
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (pass == "") {
    document.getElementById("validpass").innerHTML =
      "**Plaease Fill the required password";
    console.log("hekeke");
  } else if (passw.test(pass)) {
    console.log(pass);
    return true;
  } else {
    document.getElementById("validpass").innerHTML = "**Password is not valid";
    return false;
  }
}

function confirm() {
  var password = document.getElementById("pass").value;
  var confirmpass = document.getElementById("confirmpass").value;
  if (password != confirmpass) {
    document.getElementById("validconfirm").innerHTML = "Password not matched";
    return false;
  } else {
    document.getElementById("validconfirm").innerHTML = "";
  }
}

function mobilevalidate() {
  var phone = /^[6-9]\d{9}$/gi;
  var mobile = document.getElementById("mobile").value;
  if (mobile == "") {
    document.getElementById("validmobile").innerHTML =
      "**Plaease Fill the required number";
    console.log("hekeke");
  } else if (phone.test(mobile)) {
    console.log(mobile);
    document.getElementById("validmobile").innerHTML = "";
    return true;
  } else {
    document.getElementById("validmobile").innerHTML = "**Plaease valid number";
    return false;
  }
}
var HomeTown = {
  INDIA: {
    AndraPradesh: [
      "Anantapur",
      "Chittoor",
      "East Godavari",
      "Guntur",
      "Kadapa",
      "Krishna",
      "Kurnool",
      "Prakasam",
      "Nellore",
      "Srikakulam",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
    ],
    ArunachalPradesh: [
      "Anjaw",
      "Changlang",
      "Dibang Valley",
      "East Kameng",
      "East Siang",
      "Kra Daadi",
      "Kurung Kumey",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Subansiri",
      "Namsai",
      "Papum Pare",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
      "Itanagar",
    ],
    Assam: [
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup Metropolitan",
      "Kamrup (Rural)",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Dima Hasao",
      "Sivasagar",
      "Sonitpur",
      "South Salmara Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong",
    ],
    UttarPradesh: [
      "Agra",
      "Aligarh",
      "Allahabad",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Balrampur",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bhadohi",
      "Bijnor",
      "Budaun",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kasganj",
      "Kaushambi",
      "Kheri",
      "Kushinagar",
      "Lalitpur",
      "Lucknow",
      "Maharajganj",
      "Mahoba",
      "Mainpuri",
      "Mathura",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "Raebareli",
      "Rampur",
      "Saharanpur",
      "Sambhal",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamli",
      "Shravasti",
      "Siddharthnagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi",
    ],
  },
  Australia: {},
  USA: {},

  canada: {},
};
window.onload = function () {
  var country = document.getElementById("country");
  var state = document.getElementById("state");
  var city = document.getElementById("city");
  for (var x in HomeTown) {
    country.options[country.options.length] = new Option(x, x);
  }
  country.onchange = function () {
    state.length = 1;
    city.length = 1;

    for (var y in HomeTown[this.value]) {
      state.options[state.options.length] = new Option(y, y);
    }
  };
  state.onchange = function () {
    city.length = 1;

    var z = HomeTown[country.value][this.value];
    for (var i = 0; i < z.length; i++) {
      city.options[city.options.length] = new Option(z[i], z[i]);
    }
  };
};
function formvalues() {
  var user = document.getElementById("user").value;
  var vaemail = document.getElementById("vaemail").value;
  var pass = document.getElementById("pass").value;
  var mobile = document.getElementById("mobile").value;
  var country = document.getElementById("country").value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;
  document.writeln(user);
  document.writeln(vaemail);
  document.writeln(pass);
  document.writeln(mobile);
  document.writeln(country);
  document.writeln(state);
  document.writeln(city);
}
