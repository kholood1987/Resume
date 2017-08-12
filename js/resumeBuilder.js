var bio = {
  name: "Kholood Ahmed",
  role: "Web Developer",
  contacts: {
    mobile: "765-098-098",
    email: "new-day-08@hotmail.com",
    github: "kholood1987",
    location: "Saudi Arabia"
  },
  welcomeMessage:
    "Welcome in my Resume page.",
  skills: [
    "Computer Languages",
    "Creativity",
    "Team leader 1",
    "Time Management",
    "Communication"
  ],
  biopic:
    "images/me.jpeg",
};

var work = {
  jobs: [
    {
      employer: "prince mohammed university",
      title: "Registrar Officer",
      dates: "Jan 2013 - Jul 2013",
      description:"Responsible for registering student schedules ",
      location: "Saudi Arabia - Al-khobar"
    },
    {
      employer: "Eastern Gate Companey",
      title: "Mnangement Information Manager",
      dates: "Apr 2014 - Feb 2017",
      description:
        "Accomplishes information systems objectives by managing staff; designing and monitoring information systems.",
      location: "Saudi Arabia - Al-khobar"
    },
   
  ]
};

var projects = {
  projects: [
    {
      title: "Animal Card",
      dates: "2017",
      description:
        "Coded my own Animal Card using HTML CSS during my Udacity coursework.",
      images: ["images/animal.png"]
    },
    {
      title: "Create MY On Line Resume ",
      dates: "2017",
      description:
        "Coded my own on line resume using HTML and CSS and java script during my Udadity coursework.",
      images: ["images/resume.png"]
    },
    
  ]
};

var education = {
  schools: [
    {
      name: "Dammam University",
      location: "Saudi Arabia, Dammam",
      degree: "BS",
      majors: ["MIS"],
      year: "2012"
    }
  ],

  onlineCourses: [
    {
      name: "Udacity",
      location: "Saudia Arabia, Al-khobar",
      degree: "Nanodegree",
      majors: ["Front - End - Developer "],
      year: "2017"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole); 
$("#header").prepend(formattedName); 
$("#header").append(formattedPic);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

       for(var skill in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);   
    }

 
      //var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);  
       // formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);   
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
       // $("#skills").append(formattedSkill);    
}

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);



/* Internationalize Names  */
function inName(name){
    var names = name.trim().split(" ");   
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase(); 
    return names.join(" ");  
} 

$("#main").append(internationalizeButton); 

//Work functions
work.display = function() {
  $("#workExperience").append(HTMLworkStart);


  work.jobs.forEach(function(job) {

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

    $(".work-entry:last").append(
      formattedWorkEmployerTitle,
      formattedWorkLocation,
      formattedWorkDates,
      formattedWorkDescription
    );

  });
};


//Project Functions
projects.display = function() {

    projects.projects.forEach(function(project) {
      var formattedProjectStart = HTMLprojectStart.replace("%data%", project);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedProjectYear = HTMLprojectDates.replace("%data%", project.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

      $("#projects").append(formattedProjectStart);
      $(".project-entry:last").append(
        formattedProjectTitle,
        formattedProjectYear,
        formattedProjectDescription
      );

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);

            $(".project-entry:last").append(formattedProjectImage);
        });
    });
};


education.display = function() {

    education.schools.forEach(function(school) {
      var formattedschoolStart = HTMLprojectStart.replace("%data%", school);
      var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", school.year);

      $("#education").append(HTMLschoolStart);

      $(".education-entry:last").append(formattedschoolName, formattedschoolDates, formattedschoolLocation);

      school.majors.forEach(function(major) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedschoolMajor);

      });

        $(".education-entry:last").append(formattedschoolDegree);
    });

    education.onlineCourses.forEach(function(onlinecourse) {
      var formattedschoolStart = HTMLprojectStart.replace("%data%", onlinecourse);
      var formattedschoolName = HTMLschoolName.replace("%data%", onlinecourse.name);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", onlinecourse.location);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", onlinecourse.degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", onlinecourse.year);

      $("#education").append(HTMLschoolStart);

      $(".education-entry:last").append(formattedschoolName, formattedschoolDates, formattedschoolLocation);

      onlinecourse.majors.forEach(function(major) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", onlinecourse.majors);

        $(".education-entry:last").append(formattedschoolMajor);

      });

        $(".education-entry:last").append(formattedschoolDegree);
    });
};



work.display();
projects.display();
education.display();

//Google Maps
$("#mapDiv").append(googleMap);