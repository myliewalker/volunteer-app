var txtFile = "c:/test.txt";
var file = new File(txtFile);
var voters = [];
var volunteers = [];
var callingTeam = ["calling"];
var socialMediaTeam = ["media"];
var fundraiserTeam = ["fundraising"];
var matched = new Map();

//reads voter data from a text file
call(readTextFile(filepath));
function readTextFile(filepath) {
    file.open("r");
    var voters = [],
    while (!file.eof) {
        var data = str.split(" ");
        var newVoter = {
            firstname: data[0],
            middlename: data[1],
            lastname: data[2],
            age: data[3],
            location: data[4],
            phone: data[5],
            contacted: data[6],
        }
        voters.push(newVoter);
    }
    file.close();
}

//updates the volunteer list based on info just added
volunteers.push(updateVolunteers());
function updateVolunteers() {
    var sourceFile = require('./app');
    var newVolunteer = console.log(sourceFile.volunteer);
    return newVolunteer;
}

//sort teams by fewest people
var order = [callingTeam, socialMediaTeam, fundraiserTeam];
order.sort(function(a, b) {
    return a.length - b.length;
})

//groups volunteers by interest
for (var person of volunteers) {
    groupInterests(person);
}
function groupInterests(person) {
    var interests = person.intersts.slice(0);
    //TODO: elegibility
    // var possible = [];
        //for social media: if age < 30
        //for fundraiser: if live in MI
    if (interests.length == 0) order[0].push(person);
    var i = 0;
    while (i != -1) {
        var job = order[i];
        if (interests.contains(job[0])) {
            if (job[0].equals("calling")) callingTeam.push(person);
            else if (job[0].equals("media")) mediaTeam.push(person);
            else fundraisingTeam.push(person);
            i = -1;
        }
    }
    return;
}

//matches volunteers with voters
var loc = 0;
var voters_per_caller = voters.length / callingTeam.length;
for (var caller of callingTeam) {
    matchVoters(caller, loc, voters, voters_per_caller);
    //TODO: include additional info
    var list = voters.slice(loc, loc+voters_per_caller);
    matched.set(caller, list);
    loc += voters_per_caller;
}