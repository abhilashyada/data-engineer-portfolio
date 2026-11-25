
import profile from "./profile.js";

const experiences = [
  {
    id: "wipro-data-engineer",

    company: profile.employment.company,
    designation: profile.employment.designation,
    role: profile.employment.role,
    duration: profile.employment.duration,
    location: profile.employment.location,
    current: profile.employment.currentlyEmployed,

    employmentType: "Full-time",

    project: {
      title: profile.employment.project.name,
      shortName: profile.employment.project.shortName,
      client: profile.employment.project.client,
      domain: profile.employment.project.domain,
      platform: profile.employment.project.platform,

      description:
        "Contributing to the Intelligence Data Platform (IDP), an enterprise healthcare data engineering initiative leveraging Microsoft Fabric to support data ingestion, transformation, validation, and analytics-ready data delivery.",
    },

    responsibilities: [
      "Develop and maintain ETL data pipelines using Microsoft Fabric to support enterprise data processing requirements.",

      "Implement and maintain medallion architecture across Bronze, Silver, and Gold layers to support structured data transformation.",

      "Develop SQL and PySpark notebooks for data cleansing, transformation, and processing within Microsoft Fabric Lakehouse environments.",

      "Perform data validation, reconciliation, and quality checks to improve data accuracy, consistency, and reliability.",

      "Support pipeline troubleshooting and performance optimization to improve data processing efficiency.",

      "Collaborate with cross-functional teams to understand data requirements, resolve issues, and deliver analytics-ready datasets.",

      "Follow enterprise data governance, security, and compliance practices while working with healthcare data.",
    ],

    technologies: [
      "Microsoft Fabric",
      "Python",
      "SQL",
      "PySpark",
      "Delta Lake",
      "Lakehouse",
      "Fabric Notebooks",
      "Data Pipelines",
      "Medallion Architecture",
      "ETL",
      "Data Quality",
    ],

    focusAreas: [
      "Enterprise Data Engineering",
      "Data Pipeline Development",
      "Lakehouse Architecture",
      "Data Transformation",
      "Data Quality and Reconciliation",
      "Performance Optimization",
      "Healthcare Data Engineering",
    ],
  },
];

export default experiences;
