/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmad Ghozali Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ahmad Ghozali Portfolio",
    type: "website",
    url: "http://ahmadghozali.my.id",
  },
};

//Home Page
const greeting = {
  title: "Ahmad Ghozali",
  logo_name: "Welcome",
  nickname: "Ali",
  subTitle: "A passionate individual who always thrives to work on Data",
  resumeLink:
    "https://drive.google.com/file/d/1-gaKVleBLHGa0x95FXlKRnqWM3ONmgXS/view",
  portfolio_repository: "https://github.com/ghozali25",
  githubProfile: "https://github.com/ghozali25",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ghozali25",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmadghozali25",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*{
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:ghozali.ahmd25@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*{
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahmadghozali25/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analyst & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "Developing highly scalable production ready models for business",
        "Experience of working with big data",
        "Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
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
        {
          skillName: "Looker",
          fontAwesomeClassname: "logos:looker-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "My SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Experience working on multiple cloud platforms",
        "Hosting and maintaining ERP with integration of databases",
        "Setting up streaming jobs from DB to Server on GCP",
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
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google",
      iconifyClassname: "logos:google-icon",
      style: {
        color: "#F79F1B",
      },
      profileLink:
        "https://www.cloudskillsboost.google/public_profiles/6b166983-0a5a-462e-8c40-6074c3459e47",
    },
    {
      siteName: "Qwiklabs",
      iconifyClassname: "logos:google-cloud",
      style: {
        color: "#F79F1B",
      },
      profileLink:
        "https://www.cloudskillsboost.google/public_profiles/6b166983-0a5a-462e-8c40-6074c3459e47",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "academicons:coursera",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "IBM",
      iconifyClassname: "cib:ibm",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sekolah Tinggi Ilmu Ekonomi Kesatuan",
      subtitle: "Management",
      logo_path: "stiek.png",
      alt_name: "STIE kesatuan",
      duration: "2013 - 2017",
      descriptions: ["IPK : 3.24 / 4.00", "", ""],
      website_link: "https://www.ibik.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Looker Dashboards and Reports",
      subtitle: "- Qwiklabs",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/6b166983-0a5a-462e-8c40-6074c3459e47/badges/13422135",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Data Analytics on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/6b166983-0a5a-462e-8c40-6074c3459e47/badges/13412670",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Big Data & Machine Learning",
      subtitle: "- Qwiklabs",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/6b166983-0a5a-462e-8c40-6074c3459e47/badges/3428966",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Big Data",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1uf8CbXZvsu7LlH5GhtgXcwjrnE-RK7Lt/view",
      alt_name: "Microsoft",
      color_code: "#ffffff",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "",
  subtitle: "Professional Experience and Project",
  /*description:
    "I have worked with many evolving startups as Data. I have also worked with some well established companies mostly as Data Analyst.",*/
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Analyst",
          company: "PT Trans Retail Indonesia",
          company_url:
            "https://www.linkedin.com/company/pt-trans-retail-indonesia?originalSubdomain=id",
          logo_path: "trans.png",
          duration: "Oct 2024 - Present",
          location: "Jakarta, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
        {
          title: "Data Analyst & Budgeting",
          company: "PT Linknet Tbk",
          company_url: "https://www.linknet.co.id/",
          logo_path: "linknet.png",
          duration: "Jun 2024 - Oct 2024",
          location: "Tangerang, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
        {
          title: "Data Analyst",
          company: "PT Rantai Pasok Teknologi",
          company_url: "https://fishlog.co.id/en",
          logo_path: "fishlog.png",
          duration: "Jan 2022 - Jun 2024",
          location: "Bogor, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
        {
          title: "Spv Accounting",
          company: "PT Graha Andrasentra Propertindo Tbk",
          company_url: "https://www.jungleseries.co.id/",
          logo_path: "gap.png",
          duration: "Aug 2020 - Dec 2021",
          location: "Bogor, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
        {
          title: "Data Analyst & Internal Audit",
          company: "PT Subur Jaya Gemilang",
          company_url: "https://suburjaya.co.id/",
          logo_path: "sjg.png",
          duration: "",
          location: "Bogor, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
        {
          title: "Data Analyst",
          company: "PT Aeon Credit Service Indonesia",
          company_url: "https://www.aeon.co.id/",
          logo_path: "aeon.png",
          duration: "",
          location: "Bogor, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
        {
          title: "Surveyor",
          company: "PT Coca Cola Amatil Indonesia",
          company_url: "",
          logo_path: "ccai.png",
          duration: "",
          location: "Bogor, Indonesia",
          description: "Example Job Desk",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Auditor",
          company: "BPK RI",
          company_url: "",
          logo_path: "bpk.png",
          duration: "",
          location: "Jakarta, Indonesia",
          description: "Example Job Desk",
          color: "#000000",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "Acconting",
          company: "CV Hasil Lautan Barat",
          company_url: "https://hasillautanbarat.me/",
          logo_path: "hlb.png",
          duration: "",
          location: "Bogor, Indonesia",
          description: "Example Job Desk",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My best experience is to create projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Dashboard & Reports",
  description: "List project my dashboard and report.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "1",
      name: "Dashboard HR",
      createdAt: "2023-07-02T00:00:00Z",
      description: "People and Culture Dashboard",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ali.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Perum Ciapus Grand Village, Bogor, Jawa Barat, Indonesia",
    locality: "Bogor",
    country: "Indonesia",
    region: "Jawa Barat",
    postalCode: "",
    streetAddress: "Kota Bogor",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/PkrTMUAcTGYkowx26",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
