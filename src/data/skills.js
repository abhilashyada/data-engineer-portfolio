
const skillCategories = [
  {
    id: "cloud-data-platforms",
    title: "Cloud & Data Platforms",
    icon: "cloud",
    variant: "primary",
    description:
      "Cloud-based platforms for modern data engineering and analytics.",

    skills: [
      "Microsoft Fabric",
      "Microsoft Azure",
      "Databricks",
      "Snowflake",
    ],
  },

  {
    id: "programming-languages",
    title: "Programming Languages",
    icon: "code",
    variant: "accent",
    description:
      "Programming and distributed data processing technologies.",

    skills: [
      "Python",
      "SQL",
      "PySpark",
    ],
  },

  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: "layers",
    variant: "primary",
    description:
      "Building reliable, scalable, and maintainable data pipelines.",

    skills: [
      "ETL / ELT",
      "Medallion Architecture",
      "Data Pipelines",
      "Incremental Loading",
      "Data Transformation",
      "Data Quality",
      "Data Reconciliation",
      "Pipeline Orchestration",
      "Data Deduplication",
    ],
  },

  {
    id: "storage-architecture",
    title: "Storage & Architecture",
    icon: "database",
    variant: "purple",
    description:
      "Modern data storage and analytical architecture concepts.",

    skills: [
      "Delta Lake",
      "OneLake",
      "Lakehouse",
      "Data Warehouse",
      "Delta Tables",
    ],
  },

  {
    id: "analytics-visualization",
    title: "Analytics & Visualization",
    icon: "chart-column",
    variant: "success",
    description:
      "Transforming processed data into meaningful analytical insights.",

    skills: [
      "Power BI",
      "Pandas",
      "NumPy",
      "Semantic Models",
      "Direct Lake",
    ],
  },

  {
    id: "development-tools",
    title: "Development Tools",
    icon: "terminal",
    variant: "default",
    description:
      "Tools for development, version control, and pipeline execution.",

    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Fabric Notebooks",
      "Fabric Data Pipelines",
    ],
  },

  {
    id: "ai-emerging-technologies",
    title: "AI & Emerging Technologies",
    icon: "brain-circuit",
    variant: "accent",
    description:
      "Designing effective prompts for AI-assisted workflows and problem-solving.",

    skills: [
      "Prompt Engineering",
    ],
  },
];

const coreSkills = [
  "Microsoft Fabric",
  "PySpark",
  "SQL",
  "Python",
  "ETL Pipelines",
  "Medallion Architecture",
];

const skillContext = {
  professionalExperience: [
    "Microsoft Fabric",
    "Python",
    "SQL",
    "PySpark",
    "ETL Pipelines",
    "Lakehouse Architecture",
    "Medallion Architecture",
    "Data Transformation",
    "Data Validation",
    "Data Reconciliation",
    "Fabric Notebooks",
  ],

  handsOnProjects: [
    "Delta Lake",
    "OneLake",
    "Incremental Loading",
    "Delta MERGE",
    "Data Deduplication",
    "Data Quality Checks",
    "Pipeline Orchestration",
    "Power BI",
    "Semantic Models",
    "Direct Lake",
    "Git",
    "GitHub",
  ],

  additionalKnowledge: [
    "Microsoft Azure",
    "Databricks",
    "Snowflake",
    "Data Warehouse",
    "Pandas",
    "NumPy",
    "Prompt Engineering",
  ],

  learningInterests: [
    "Advanced Azure Data Engineering",
    "Advanced Databricks",
    "Advanced Snowflake",
    "Generative AI",
    "AI-Enabled Data Engineering",
  ],
};

export {
  skillCategories,
  coreSkills,
  skillContext,
};

export default skillCategories;
