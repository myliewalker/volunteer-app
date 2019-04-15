$(document).ready(function(){
    console.log ("ready!");
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyBEqLaREsvuoIpsuXMkORKnST1JLboUHU0",
    authDomain: "volunteer-project-932da.firebaseapp.com",
    databaseURL: "https://volunteer-project-932da.firebaseio.com",
    projectId: "volunteer-project-932da",
    storageBucket: "",
    messagingSenderId: "608058845701"
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
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var middlename = $("#middlename").val();
        var email = $("#email").val();
        var phonenumber = $("#phonenumber").val();
        var birthday = $("#birthday").val();
        var interests = [];
        if(document.getElementById('calling').checked) {
          interests.push("calling");
        }
        if(document.getElementById('media').checked) {
          interests.push("media");
        }
        if(document.getElementById('calling').checked) {
          interests.push("fundraising");
        }
      
      // Checks that user input is valid
        if (firstname.length == 0 || lastname.length == 0) {
          alert('Please enter your full name.');
          return false;
        }
        if (email.includes("@") == false && phonenumber.length == 0) {
          alert('Please enter email or phone number.');
          return false;
        }
  
        var newVolunteer = {
          firstname: firstname,
          lastname: lastname,
          middlename: middlename,
          email: email,
          phonenumber: phonenumber,
          birthday: birthday,
          interests: interests
        }
  
        database.ref().push(newVolunteer);
  
    console.log(newVolunteer.firstname, newVolunteer.lastname, newVolunteer.middlename, 
      newVolunteer.email, newVolunteer.phonenumber, newVolunteer.birthday, newVolunteer.interests)
    module.exports.volunteer = newVolunteer;

  
  // Clears all of the text-boxes
    $("#firstname").val("");
    $("#lastname").val("");
    $("#middlename").val("");
    $("#email").val("");
    $("#phonenumber").val("");
    $("#birthday").val("");
    // $('#calling').prop('checked', false)
    // $('#media').prop('checked', false)
    // $('#fundraising').prop('checked', false)
  
    return false;
  
    });
  
      // Firebase watcher + initial loader HINT: .on("value")
      database.ref().on("child_added", function(childSnapshot, prevChildKey){
  
          console.log(childSnapshot.val());
  
  
      // Store everything into a variable.
      var tbirthday = childSnapshot.val().birthday;
      var temail = childSnapshot.val().email;
      var tfirstname = childSnapshot.val().firstname;
      var tlastname = childSnapshot.val().lastname;
      var tmiddlename = childSnapshot.val().middlename;
      var tphonenumber = childSnapshot.val().phonenumber;
      var tinterests = childSnapshot.val().interests;
  
    });
  });
  