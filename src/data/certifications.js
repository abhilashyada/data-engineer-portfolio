
const certifications = [
  {
    id: "snowflake-snowpro-core",

    title: "SnowPro Core Certification",

    issuer: "Snowflake",

    category: "Cloud Data Platform",

    status: "Completed",

    issueDate: null,

    expiryDate: null,

    credentialId: null,

    credentialUrl:
      "https://achieve.snowflake.com/0a64a628-5364-430f-8e97-fd8c2206946a#acc.QZDqH8jd",

    image: null,

    imageAlt:
      "Snowflake SnowPro Core Certification badge",

    description:
      "Demonstrates foundational knowledge of the Snowflake Data Cloud, including its architecture, data loading, transformation, performance optimization, security, and data protection concepts.",

    skills: [
      "Snowflake",
      "Cloud Data Warehousing",
      "Data Loading",
      "Data Transformation",
      "Performance Optimization",
      "Data Security",
    ],

    featured: true,
  },

  {
    id: "databricks-data-engineer-associate",

    title:
      "Databricks Certified Data Engineer Associate",

    issuer: "Databricks",

    category: "Data Engineering",

    status: "Completed",

    issueDate: null,

    expiryDate: null,

    credentialId: null,

    credentialUrl:
      "https://credentials.databricks.com/55d3b3fb-731d-45dd-a508-358fd152c053#acc.T1Omg3U5",

    image: null,

    imageAlt:
      "Databricks Certified Data Engineer Associate badge",

    description:
      "Demonstrates knowledge of data engineering tasks using the Databricks platform, including data processing, ETL workflows, Apache Spark, Delta Lake, and data pipeline orchestration.",

    skills: [
      "Databricks",
      "Apache Spark",
      "PySpark",
      "Delta Lake",
      "ETL Pipelines",
      "Data Engineering",
    ],

    featured: true,
  },

  {
    id: "microsoft-azure-data-fundamentals",

    title:
      "Microsoft Certified: Azure Data Fundamentals",

    issuer: "Microsoft",

    category: "Cloud Data Fundamentals",

    examCode: "DP-900",

    status: "Completed",

    issueDate: null,

    expiryDate: null,

    credentialId: null,

    credentialUrl:
      "https://learn.microsoft.com/en-us/users/yadaabhilash-5022/credentials/256a0aef8f9c9a38?ref=https%3A%2F%2Fwww.linkedin.com%2F",

    image: null,

    imageAlt:
      "Microsoft Certified Azure Data Fundamentals badge",

    description:
      "Demonstrates foundational knowledge of core data concepts, relational and non-relational data, analytical workloads, and Microsoft Azure data services.",

    skills: [
      "Microsoft Azure",
      "Core Data Concepts",
      "Relational Data",
      "Non-Relational Data",
      "Data Analytics",
      "Cloud Data Services",
    ],

    featured: true,
  },
];

const featuredCertifications = certifications.filter(
  (certification) => certification.featured
);

const certificationStats = {
  total: certifications.length,

  completed: certifications.filter(
    (certification) =>
      certification.status === "Completed"
  ).length,

  issuers: new Set(
    certifications.map(
      (certification) => certification.issuer
    )
  ).size,
};

export {
  certifications,
  featuredCertifications,
  certificationStats,
};

export default certifications;
