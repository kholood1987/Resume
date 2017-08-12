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
    "Teamwork",
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
      title: "Movie Website",
      dates: "2017",
      description:
        "Coded my own movie website using Python during my Udacity coursework.",
      images: ["images/movie_site.jpeg"]
    },
    {
      title: "Create Your Own Website",
      dates: "2017",
      description:
        "Coded my own website made for my dog using HTML and CSS during my Udadity coursework.",
      images: ["images/my_dog_lynus.jpeg"]
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

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole, formattedName);
  $("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);
  $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub);

  bio.skills.forEach(function(skills) {
    var formattedSkill = HTMLskills.replace("%data%", skills);
    $("#skills").append(formattedSkill);
  });
};

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


bio.display();
work.display();
projects.display();
education.display();

//Google Maps
$("#mapDiv").append(googleMap);