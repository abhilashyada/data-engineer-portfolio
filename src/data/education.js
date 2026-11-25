
import profile from "./profile.js";

const education = [
  {
    id: "btech-computer-science",

    degree: profile.education.degree,

    specialization: profile.education.specialization,

    institution: profile.education.institution,

    graduationYear: profile.education.graduationYear,

    location: profile.education.location,

    status: "Completed",

    startYear: null,

    endYear: profile.education.graduationYear,

    cgpa: null,

    institutionLogo: null,

    description:
      "Completed a Bachelor of Technology in Computer Science and Engineering, developing a foundation in programming, database management, data structures, algorithms, and software engineering principles.",

    subjects: [
      "Computer Science",
      "Programming",
      "Database Management",
      "Data Structures",
      "Algorithms",
      "Software Engineering",
    ],

    academicProject: {
      title:
        "Epidemic Spreading in a Social Network with Facial Masks Wearing Individuals",

      type: "Final-Year Academic Project",

      description: null,

      technologies: [],

      githubUrl: null,

      documentationUrl: null,
    },

    featured: true,
  },
];

const featuredEducation = education.filter(
  (qualification) => qualification.featured
);

export {
  education,
  featuredEducation,
};

export default education;
