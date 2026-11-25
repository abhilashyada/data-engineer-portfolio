
const projects = [
  {
    id: "retail-sales-analytics",

    title: "Retail Sales Analytics",

    subtitle:
      "Microsoft Fabric | End-to-End Data Engineering",

    category: "End-to-End Data Engineering",

    projectType: "Personal Portfolio Project",

    status: "Completed",

    year: 2026,

    featured: true,

    description:
      "An end-to-end data engineering and analytics solution built using Microsoft Fabric. The project implements a medallion architecture with automated data ingestion, incremental processing, data quality validation, Delta Lake transformations, pipeline orchestration, and Power BI analytics.",

    objective:
      "Build a reliable and automated retail data processing solution that transforms raw sales data into validated, analytics-ready datasets and meaningful business insights.",

      image: "/projects/retail-sales-analytics/cover.webp",
      imageAlt:
        "Retail Sales Analytics end-to-end Microsoft Fabric data engineering pipeline featuring CSV, Bronze, Silver, Gold, Direct Lake and Power BI",

    technologies: [
      "Microsoft Fabric",
      "Python",
      "PySpark",
      "SQL",
      "Delta Lake",
      "OneLake",
      "Lakehouse",
      "Fabric Notebooks",
      "Fabric Data Pipelines",
      "Power BI",
      "Direct Lake",
    ],

    highlights: [
      "Implemented Bronze, Silver, and Gold layers using Microsoft Fabric Lakehouse.",

      "Implemented incremental file processing using SHA-256 file fingerprinting.",

      "Developed PySpark transformations and Delta MERGE operations for incremental data processing.",

      "Implemented data deduplication, validation, quarantine, and reconciliation mechanisms.",

      "Supported soft deletion and record reactivation within the data processing workflow.",

      "Automated notebook execution using Microsoft Fabric Data Pipelines with a daily 09:00 IST schedule.",

      "Built a Direct Lake semantic model and interactive Power BI dashboard for retail sales analytics.",
    ],

    architecture: {
      type: "Medallion Architecture",

      platform: "Microsoft Fabric",

      image: null,

      imageAlt:
        "End-to-end Microsoft Fabric medallion architecture diagram",

      layers: [
        {
          id: "source",
          name: "Source Data",
          description:
            "Retail sales source files for data ingestion.",
        },

        {
          id: "bronze",
          name: "Bronze Layer",
          description:
            "Raw data ingestion and incremental file processing using SHA-256 fingerprints.",
        },

        {
          id: "silver",
          name: "Silver Layer",
          description:
            "Data cleansing, validation, deduplication, quarantine, and Delta MERGE processing.",
        },

        {
          id: "gold",
          name: "Gold Layer",
          description:
            "Curated and analytics-ready datasets for retail business reporting.",
        },

        {
          id: "semantic",
          name: "Direct Lake Semantic Model",
          description:
            "Semantic modeling for analytical reporting over curated data.",
        },

        {
          id: "analytics",
          name: "Power BI Dashboard",
          description:
            "Interactive retail sales, product, and customer analytics.",
        },
      ],
    },

    metrics: [
      {
        label: "Total Revenue",
        value: "₹1,13,277",
      },

      {
        label: "Valid Records",
        value: "50",
      },

      {
        label: "Total Customers",
        value: "8",
      },

      {
        label: "Total Products",
        value: "6",
      },

      {
        label: "Units Sold",
        value: "123",
      },

      {
        label: "Pipeline Runtime",
        value: "4m 38s",
      },
    ],

    pipeline: {
      platform: "Microsoft Fabric Data Pipelines",

      status: "Succeeded",

      executionDate: "2026-11-23",

      duration: "4m 38s",

      schedule: {
        frequency: "Daily",
        time: "09:00",
        timezone: "Asia/Kolkata",
        displayTime: "09:00 AM IST",
      },

      notebookLayers: [
        "Bronze",
        "Silver",
        "Gold",
      ],
    },

    screenshots: [],

    githubUrl:
      "https://github.com/abhilashyada/Retail-Sales-Analytics-Microsoft-Fabric-End-to-End-Data-Engineering",

    liveUrl: null,

    liveLabel: "View Fabric Project",

    documentationUrl: null,

    accessNote:
      "Metrics are based on the project's demonstration dataset and a recorded successful pipeline execution. Microsoft Fabric workspace access may require authentication and appropriate permissions.",
  },
];

const featuredProjects = projects.filter(
  (project) => project.featured
);

const otherProjects = projects.filter(
  (project) => !project.featured
);

export {
  projects,
  featuredProjects,
  otherProjects,
};

export default projects;
