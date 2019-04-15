$(document).ready(function(){
    console.log ("ready!");
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyBzcTdZ6rfvfFpaKlBQA1JucyTM7ddati4",
    authDomain: "volunteer-app-9c413.firebaseapp.com",
    databaseURL: "https://volunteer-app-9c413.firebaseio.com",
    projectId: "volunteer-app-9c413",
    storageBucket: "",
    messagingSenderId: "379188783517"
  };
  firebase.initializeApp(config);
  
  
  
  // holds the firebase the data
  var database = firebase.database();
  
      // button for adding adding volunteers
      $("#submit").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
        console.log("working");
  
      // Grabs user data entered into the form controls
        // var volunteerName = $("#volunteerName").val();
        var birthday = $("#birthday").val();
        var email = $("#email").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var middlename = $("#middlename").val();
        var phonenumber = $("#phonenumber").val();
        var interests = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < interests.length; i++) {
          var span = document.createElement("SPAN");
          var txt = document.createElement("\u00D7");
          span.className="close";
          span.appendChild(txt);
          interests[i].appendChild(span);
        }
        var close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
  
        var newVolunteer = {
          // volunteerName: volunteerName,
          birthday: birthday,
          email: email,
          firstname: firstname,
          lastname: lastname,
          middlename: middlename,
          phonenumber: phonenumber
        }
  
        //TODO: check if data is valid
        database.ref().push(newVolunteer);
  
    console.log(newVolunteer.birthday, newVolunteer.email, newVolunteer.firstname, newVolunteer.lastname, newVolunteer.middlename, newVolunteer.phonenumber)
    module.exports.volunteer = newVolunteer;

  
  // Clears all of the text-boxes
    // $("#volunteerName").val("");
    $("#birthday").val("");
    $("#email").val("");
    $("#firstname").val("");
    $("#lastname").val("");
    $("#middlename").val("");
    $("#phonenumber").val("");
  
    return false;
  
    });
  
      // Firebase watcher + initial loader HINT: .on("value")
      database.ref().on("child_added", function(childSnapshot, prevChildKey){
  
          console.log(childSnapshot.val());
  
  
      // Store everything into a variable.
      // var tName = childSnapshot.val().name;
      var tbirthday = childSnapshot.val().birthday;
      var temail = childSnapshot.val().email;
      var tfirstname = childSnapshot.val().firstname;
      var tlastname = childSnapshot.val().lastname;
      var tmiddlename = childSnapshot.val().middlename;
      var tphonenumber = childSnapshot.val().phonenumber;
  
    });
  });
  