/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Carmine Di Gruttola's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Carmine Di Gruttola Portfolio",
    type: "website",
    url: "https://www.cdigruttola.it/",
  },
};

//Home Page
const greeting = {
  title: "Carmine Di Gruttola",
  logo_name: "CDG",
  nickname: "cdigruttola",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "",
  githubProfile: "https://github.com/cdigruttola",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/cdigruttola",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cdigruttola/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:c.digruttola1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/cdigruttola1",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/digruttolacarmine/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/cdigruttola/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /*
        {
          siteName: "HackerRank",
          iconifyClassname: "simple-icons:hackerrank",
          style: {
            color: "#2EC866",
          },
          profileLink: "https://www.hackerrank.com/layman_brother",
        },
        {
          siteName: "Codechef",
          iconifyClassname: "simple-icons:codechef",
          style: {
            color: "#5B4638",
          },
          profileLink: "https://www.codechef.com/users/ashutosh_1919",
        },
        {
          siteName: "Codeforces",
          iconifyClassname: "simple-icons:codeforces",
          style: {
            color: "#1F8ACB",
          },
          profileLink: "http://codeforces.com/profile/layman_brother",
        },
        {
          siteName: "Hackerearth",
          iconifyClassname: "simple-icons:hackerearth",
          style: {
            color: "#323754",
          },
          profileLink: "https://www.hackerearth.com/@ashutosh391",
        },
        {
          siteName: "Kaggle",
          iconifyClassname: "simple-icons:kaggle",
          style: {
            color: "#20BEFF",
          },
          profileLink: "https://www.kaggle.com/laymanbrother",
        },
      */
  ],
};

const degrees = {
  degrees: [
    {
      title: "UIIP - Biogem",
      subtitle: "Hybris Junior programmer",
      logo_path: "uiip_logo.png",
      alt_name: "UIIP",
      duration: "03/2017 - 05/2017",
      descriptions: [
        "Vertical Formation on Sap Hybris",
        "Cross Formation on Teamwork, Communication Management, Public speaking and Effective Presentation",
      ],
      website_link: "https://www.uiip.it",
    },
    {
      title: "University of Salerno",
      subtitle: "Master in Computer Engineering",
      logo_path: "unisa_logo.png",
      alt_name: "Unisa",
      duration: "02/2015 - 02/2017",
      descriptions: [
        "Master degree level courses, with a focus on embeddedsystems, advanced data structures, advanced control techniques, robotics, artificial inteligence, remote sensing, software engineering, semantic web, mobile programming and computer vision.",
        "This course of study is certificated by ENAEE (European Network for Accreditation of Engineering Education).",
      ],
      website_link: "https://www.unisa.it",
    },
    {
      title: "University of Southampton",
      subtitle: "Exchange Erasmus Student",
      logo_path: "southampton_logo.png",
      alt_name: "Southampton",
      duration: "09/2016 - 01/2017",
      descriptions: [
        "Exchange student with the Erasmus programme at Electronic and Computer Science department at University of Southampton.",
        "I developed my master thesis project about Semantic Web and Internet of Things using a Raspberry Pi 2. A performance analysis has been done to evaluate the quality of the system in term of response times.",
      ],
      website_link: "https://www.southampton.ac.uk",
    },
    {
      title: "University of Salerno",
      subtitle: "Bachelor in Computer Engineering",
      logo_path: "unisa_logo.png",
      alt_name: "Unisa",
      duration: "10/2011 - 12/2014",
      descriptions: [
        "Bachelor degree on basics computer engineering topics, with an adeguated knowledge of maths and physics, basic data structure, programming and database skills.",
        "Basic knowledge of telecommunication systems, computer networks, automatic controls and control systems.",
        "This course of study is certificated by ENAEE (European Network for Accreditation of Engineering Education).",
      ],
      website_link: "https://www.unisa.it",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "SAP Certified Development Professional - SAP Commerce Cloud Developer",
      subtitle: "- Carmine Di Gruttola",
      logo_path: "sap_logo.svg",
      certificate_link:
        "https://www.credly.com/badges/6e6a398d-4743-4f71-8c29-d5ec4f4cb289",
      alt_name: "SAP",
      color_code: "#007db8",
    },
    {
      title: "SCRUM Master Certified",
      subtitle: "- Carmine Di Gruttola",
      logo_path: "badge_SMC.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SMC&number=866781",
      alt_name: "SCM",
      color_code: "#8C151599",
    },
    {
      title: "Trinity College Grade 6",
      subtitle: "- Carmine Di Gruttola",
      logo_path: "trinity_logo.jpeg",
      certificate_link: "",
      alt_name: "Trinity",
      color_code: "#6A215F",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Associate",
          company: "PwC S.p.A.",
          company_url: "https://www.pwc.com/",
          logo_path: "pwc_logo.png",
          duration: "03/2022 - Present",
          location: "Naples, Italy",
          description: "Sap Commerce Cloud Developer",
          color: "#e0301e",
        },
        {
          title: "IT E-commerce Platform Specialist",
          company: "Unieuro S.p.A.",
          company_url: "https://www.unieurospa.com/",
          logo_path: "unieuro_logo.png",
          duration: "10/2020 - 02/2022",
          location: "Forlì, Italy",
          description:
            "Business contact to collect and analyse functional requirements, coordinate a team to develop, test and release new features on site and monitoring and development of system integration tools",
          color: "#4385f4",
        },
        {
          title: "Software Engineer",
          company: "Sopra Steria Group S.p.A.",
          company_url: "https://www.purple.it/",
          logo_path: "purple_logo.jpeg",
          duration: "02/2020 - 09/2020",
          location: "Milan, Italy",
          description:
            "Developing of Artificial Vision Software using Point Cloud to represent model and Halcon",
          color: "#f75a00",
        },
        {
          title: "Solution Building Engineer",
          company: "Sopra Steria Group S.p.A.",
          company_url: "https://www.soprasteria.it/",
          logo_path: "ssg_logo.png",
          duration: "05/2017 - 02/2020",
          location: "Ariano Irpino, Italy",
          description:
            "Team-oriented back-end and integration developer (SAP Hybris Commerce 5.x), experienced in creating and customizing services from scratch, follow all Agile Method phases, meeting business functional and technical requirements. I've been working in order to support correct communication between external systems (SalesForce, ERP, MuleSoft, etc) and low-level systems, and also focused on Continous Integration and Deploy/Release procedures. I gained experience in customer relationship and his third-party collaborators to ensure a correct and efficient development workflow.",
          color: "#a60726",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Students' Delegate",
          company: "University of Salerno",
          company_url: "https://www.unisa.it/",
          logo_path: "unisa_logo.png",
          duration: "04/2015 - 09/2016",
          location: "",
          description: "",
          color: "#FF9900",
        },
        {
          title: "Help Teaching",
          company: "University of Salerno",
          company_url: "https://www.unisa.it/",
          logo_path: "unisa_logo.png",
          duration: "03/2016 - 09/2016",
          location: "",
          description:
            "Help teaching for students with specific learning disorders.",
          color: "#FF9900",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*        {
                id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
                name: "Artificial Intelligence Paper",
                createdAt: "2020-03-06T16:26:54Z",
                description: "Paper Written on Artificial Intelligence published in xyz ",
                url:
                    "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
            },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "cdg.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Ecommerce, Backend and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Contrada Cariello, 25/C 83031 Ariano Irpino (AV) Italy",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/QqTRMteEycBwCiwn6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+39 3314207036",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
