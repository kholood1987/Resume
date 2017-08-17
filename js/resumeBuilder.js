

var bio = {
    "name": "Kholood Ahmed  ",
    "role": "Web developer",
    "contacts": {
        "mobile": "112-931-093",
        "email": "me@hotmail.com",
        "github": "kholood87",
        "twitter": "@kholood87",
        "location": "saudi arabia",
    },
    "welcomeMessage": "Hello on my Resume Online",
    "skills": ["C programming","Linux","JavaScript",  "HTML",  "CSS"],
    "biopic": ["images/me.jpeg"],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formatedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts").append(formatedMobile, formatedEmail, formatedTwitter, formatedGithub, formatedLocation);
        $("#header").append(formatedPicture, formattedMessage);
        //append multiple elements like this is to include all of the elements as arguments to a single .append()
        $("#footerContacts").append(formatedMobile, formatedEmail, formatedTwitter, formatedGithub, formatedLocation);
        //skills
        var formatedSkillsStart = HTMLskillsStart;
        $("#header").append(formatedSkillsStart);
        if (bio.skills.length !== 0) {
            for (var i = 0; i < bio.skills.length; i++) {
                var formatedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formatedSkills);
            }
        }
    }

};
// work
var work = {
    "jobs": [{
            "employer": "prince Mohammed bin Fahad University",
            "title": "Registrar Officer",
            "location": "saudi arabia - alkhobar",
            "dates": "jan 2013 - aug 2013",
            "description": "help the student for their scaduls"
     }
    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedworkStart = HTMLworkStart;
            $("#workExperience").append(formattedworkStart);
            var formatedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formatedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

            $(".work-entry:last").append(formatedworkEmployer + formatedworkTitle);

            var formatedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formatedworkDates);

            var formatedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formatedworkLocation);

            var formatedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formatedworkDescription);
        }

    }
};
//education
var education = {
    "schools": [{
            "name": "Dammam University",
            "degree": "Bachelor",
            "location": "Dammam",
            "majors": ["MIS"],
            "dates": "2009-2012",
            "url": "http://www.Dammam.edu.sa/"
        }
    ],
    "onlineCourses": [{

            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "www.udacity.com"

        },
        {
            "title": "data analyst",
            "school": "rawaq",
            "dates": "2016",
            "url": "www.rawaq.com"
        }
    ],
    "display": function() {
        var formattedschoolStart = HTMLschoolStart;

        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(formattedschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedschoolDates);

            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedschoolLocation);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedschoolMajor);
            }
        }
        //online classes
        var formattedonlineClasses = HTMLonlineClasses;

        $("#education").append(formattedonlineClasses);

        for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(formattedschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedonlineDates);

            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedonlineURL);
        }
    }
};
//projects
var projects = {


    "projects": [{

            "title": "animal card",
            "dates": "july ,1 2017",
            "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework.\
                The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/animal.png"],
        },
        {
            "title": "Online resume",
            "dates": "aug ,22 2017",
            "description": "Using jQuery, developed an interactive resume application that reads all data from a JSON\
             file and then dynamically modifies the DOM to display the information. Further customized the project by \
             personalizing the design using CSS.",
            "images": ["images/resume.png"],
        },
    
    ],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {

            var formattedprojectStart = HTMLprojectStart;
            $("#projects").append(formattedprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedprojectTitle);

            var formatteprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formatteprojectDates);

            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedprojectDescription);
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedprojectImage);
            }

        }
    }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);




// internationalize
function inName(name) {
    var fields = name.split(" ");
    var internationalize = fields[0][0].toLocaleUpperCase() + fields[0].slice(1) + " " + fields[1].toLocaleUpperCase();


    return internationalize;
}
$("#main").append(internationalizeButton);