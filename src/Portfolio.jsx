import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Database,
  Brain,
  Workflow,
  Server,
  Shield,
  BarChart3,
  GitBranch,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers3,
  Cpu,
  Boxes,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const profile = {
  name: "Suraj Dighe",
  role: "Senior Data Engineer | Cloud, AI/ML & Real-Time Data Platforms",
  tagline:
    "I design and deliver production-grade data platforms, real-time pipelines, AI/ML workflows, and cloud-native architectures across AWS, Databricks, and Snowflake.",
  summary:
    "Hands-on builder with deep experience in distributed systems, streaming ingestion, lakehouse architecture, data modeling, enterprise integrations, and AI-powered analytics. This portfolio showcases the platforms, services, and solution patterns I’ve worked on, mapped to real project use cases.",
  email: "suraj@example.com",
  phone: "+91 00000 00000",
  location: "Pune, India",
};

const stackData = {
  AWS: {
    icon: Cloud,
    color: "from-orange-500/20 to-amber-500/10",
    blurb:
      "Cloud-native data platforms, streaming systems, serverless services, containerized APIs, and resilient event-driven architectures.",
    technologies: [
      {
        name: "Amazon S3",
        category: "Storage / Data Lake",
        level: "Advanced",
        overview:
          "Used as the central landing and curated zone for batch and streaming datasets, model artifacts, logs, and pipeline outputs.",
        work: [
          "Designed raw, processed, and curated bucket structures for analytics and ML workloads.",
          "Integrated S3 with Kinesis Firehose, EMR, Lambda, SageMaker, and downstream reporting layers.",
          "Stored parquet, CSV, logs, and model-related outputs for scalable access patterns.",
        ],
        projects: [
          "Event data capture platform with S3 archival",
          "Lake-backed preprocessing and training pipelines",
          "Cross-service data lake architecture for analytics",
        ],
      },
      {
        name: "Amazon Kinesis",
        category: "Streaming",
        level: "Advanced",
        overview:
          "Built real-time ingestion services using Kinesis Data Streams and Firehose for high-throughput event capture.",
        work: [
          "Designed APIs and producer services pushing website and application events into Kinesis.",
          "Tested latency and throughput across shard scaling, batching, and consumer patterns.",
          "Connected Kinesis with EC2, EKS, Firehose, S3, and downstream analytics/graph systems.",
        ],
        projects: [
          "Real-time event capture service",
          "FastAPI + Kinesis producer platform",
          "Large-scale ingestion performance testing",
        ],
      },
      {
        name: "AWS Lambda",
        category: "Serverless Compute",
        level: "Advanced",
        overview:
          "Used for lightweight event processing, routing logic, integrations, and serverless entry points in event-driven systems.",
        work: [
          "Implemented routing between Kinesis and MSK based on payload conditions.",
          "Built API-triggered and SQS-driven Lambda patterns.",
          "Packaged dependencies, IAM policies, and reusable Terraform modules for production deployments.",
        ],
        projects: [
          "SQS to Kinesis/MSK routing Lambda",
          "API authorization and preprocessing layers",
          "Terraform-based Lambda standardization",
        ],
      },
      {
        name: "Amazon EKS",
        category: "Containers / Kubernetes",
        level: "Advanced",
        overview:
          "Deployed containerized ingestion services and APIs on Kubernetes with autoscaling and cloud integrations.",
        work: [
          "Containerized FastAPI and Node.js services for event ingestion.",
          "Configured load balancers, HPA, resource tuning, and deployment manifests.",
          "Integrated services with Kinesis, MSK, ECR, and cloud networking.",
        ],
        projects: [
          "Event capture service on EKS",
          "Microservice-based ingestion APIs",
          "Performance-tuned real-time platform deployments",
        ],
      },
      {
        name: "Amazon MSK Serverless",
        category: "Kafka / Streaming",
        level: "Intermediate to Advanced",
        overview:
          "Worked on Kafka-based ingestion using IAM-authenticated producers and serverless event streaming architectures.",
        work: [
          "Configured topics, IAM auth, and producer flows from APIs and Lambda.",
          "Compared Kinesis and Kafka for different event size and routing requirements.",
          "Validated broker connectivity, auth plugins, and latency behavior under load.",
        ],
        projects: [
          "Dual-path ingestion architecture: Kinesis + Kafka",
          "Lambda to MSK serverless routing",
          "EC2/EKS-based producer services",
        ],
      },
      {
        name: "Amazon SageMaker",
        category: "ML Platform",
        level: "Intermediate to Advanced",
        overview:
          "Used SageMaker pipelines and processors for migrating PySpark/EMR-based workflows to managed ML pipelines.",
        work: [
          "Implemented preprocessing, training, evaluation, and registration stages.",
          "Orchestrated PySpark jobs through SageMaker processing components.",
          "Aligned code structure for repeatable MLOps-style execution.",
        ],
        projects: [
          "EMR to SageMaker migration initiative",
          "Pipeline-driven training framework",
          "Managed preprocessing + model workflow setup",
        ],
      },
      {
        name: "Amazon EMR",
        category: "Big Data / Spark",
        level: "Advanced",
        overview:
          "Used for PySpark-based large-scale data preparation and distributed processing before managed pipeline migration.",
        work: [
          "Developed batch data transformation and dataset generation jobs.",
          "Processed large datasets using Spark jobs writing to S3 and downstream systems.",
          "Evaluated migration paths to SageMaker and newer orchestration models.",
        ],
        projects: [
          "Batch ETL preprocessing pipelines",
          "Distributed dataset generation workloads",
          "Migration analysis to managed ML pipelines",
        ],
      },
      {
        name: "Terraform",
        category: "Infrastructure as Code",
        level: "Advanced",
        overview:
          "Provisioned and standardized cloud infrastructure using modular Terraform for serverless and compute platforms.",
        work: [
          "Refactored Lambda modules and reusable infrastructure templates.",
          "Managed IAM, networking, compute, and deployment components.",
          "Aligned infra code to internal cloud platform standards.",
        ],
        projects: [
          "Lambda module migration",
          "Reusable infra for ingestion systems",
          "Cloud environment standardization",
        ],
      },
    ],
    architecturePatterns: [
      "Event-driven ingestion",
      "Streaming + archival pipelines",
      "Serverless routing",
      "Kubernetes-based API platforms",
      "Lake-centric analytics workflows",
    ],
  },
  Databricks: {
    icon: Sparkles,
    color: "from-rose-500/20 to-red-500/10",
    blurb:
      "Lakehouse analytics, notebook-driven engineering, Databricks Apps, model-serving integrations, SQL warehouses, and MCP-enabled AI experiences.",
    technologies: [
      {
        name: "Databricks SQL Warehouses",
        category: "Analytics / Querying",
        level: "Advanced",
        overview:
          "Used SQL warehouses for query-serving, application integrations, and analytics workloads on lakehouse data.",
        work: [
          "Connected applications and APIs to Databricks SQL endpoints.",
          "Designed prompt-to-data experiences backed by warehouse queries.",
          "Used SQL execution layers in Streamlit and agent-based workflows.",
        ],
        projects: [
          "AI-enabled analytics portal",
          "Streamlit + SQL warehouse integration",
          "Operational reporting and query-serving layer",
        ],
      },
      {
        name: "Unity Catalog",
        category: "Governance / Functions",
        level: "Advanced",
        overview:
          "Leveraged Unity Catalog for governance, functions, table access, and cross-tool data access patterns.",
        work: [
          "Created and consumed UC functions for app-driven interactions.",
          "Used governed catalogs/schemas/tables for secure analytical access.",
          "Integrated UC-backed HTTP/function calling patterns into broader AI workflows.",
        ],
        projects: [
          "UC function wrapper for agent/app access",
          "Governed analytics exposure",
          "Shared lakehouse data access architecture",
        ],
      },
      {
        name: "Databricks Apps / Streamlit",
        category: "App Layer",
        level: "Advanced",
        overview:
          "Built application layers inside Databricks for interactive analytics and AI-assisted querying.",
        work: [
          "Created Streamlit-style front ends on Databricks Apps.",
          "Integrated MCP routers, SQL backends, and enterprise auth patterns.",
          "Used apps as business-friendly surfaces on top of technical assets.",
        ],
        projects: [
          "MCP-powered analytics app",
          "Multi-MCP Streamlit interface",
          "Internal business-facing data exploration portal",
        ],
      },
      {
        name: "PySpark on Databricks",
        category: "Big Data Engineering",
        level: "Advanced",
        overview:
          "Used for transformation pipelines, data preparation, and scalable engineering workflows inside lakehouse environments.",
        work: [
          "Performed transformation, cleansing, and append/overwrite logic for analytical datasets.",
          "Worked with partitioned processing, logging, error handling, and structured ETL design.",
          "Aligned Spark-style engineering with downstream analytics and AI usage.",
        ],
        projects: [
          "Fan and sports data engineering workflows",
          "Lakehouse dataset preparation",
          "Pipeline refactoring and performance improvements",
        ],
      },
      {
        name: "MCP / AI Connectors",
        category: "AI Integration",
        level: "Advanced",
        overview:
          "Designed MCP-compatible services and wrappers to connect enterprise data tools and AI assistants.",
        work: [
          "Built FastAPI-based MCP services and routers.",
          "Connected apps, agents, and external services through MCP-style interfaces.",
          "Focused on safe query patterns, tool discovery, and business-friendly AI access.",
        ],
        projects: [
          "Databricks MCP starter and production-style routers",
          "Agent-integrated enterprise data access",
          "Streamlit + MCP + warehouse workflows",
        ],
      },
      {
        name: "Delta Lake / Lakehouse Tables",
        category: "Storage Layer",
        level: "Advanced",
        overview:
          "Used as the core lakehouse storage format for reliable analytics, governed access, and incremental processing.",
        work: [
          "Managed curated data layers suitable for reporting and AI consumption.",
          "Used partitioning, controlled writes, and table-oriented workflows.",
          "Supported analytical and application-facing datasets.",
        ],
        projects: [
          "Sports analytics data layers",
          "Reusable curated lakehouse tables",
          "Governed AI-ready data foundation",
        ],
      },
    ],
    architecturePatterns: [
      "Lakehouse analytics",
      "Governed AI access via UC",
      "App-over-data experiences",
      "MCP-connected enterprise assistants",
      "Warehouse-backed prompt-to-query workflows",
    ],
  },
  Snowflake: {
    icon: Database,
    color: "from-sky-500/20 to-cyan-500/10",
    blurb:
      "Cloud data warehousing, semantic access layers, SQL-driven analytics, Cortex-enabled AI features, and governed data products.",
    technologies: [
      {
        name: "Snowflake Warehousing",
        category: "Data Warehouse",
        level: "Advanced",
        overview:
          "Worked on analytical data access, modeling, and SQL-driven business data consumption in Snowflake.",
        work: [
          "Used Snowflake for structured analytics, views, and business-facing data access.",
          "Analyzed fan and business attributes with warehouse-driven logic.",
          "Connected application and AI flows to Snowflake data assets.",
        ],
        projects: [
          "Structured reporting and analytics",
          "Fan data analysis workflows",
          "Application-driven Snowflake querying",
        ],
      },
      {
        name: "Snowflake Cortex / AI Functions",
        category: "AI on Data",
        level: "Intermediate to Advanced",
        overview:
          "Explored AI-powered functions, extraction/classification patterns, and differences between structured AI layers and agentic access.",
        work: [
          "Compared Cortex Analyst with AI_EXTRACT and related AI functions.",
          "Evaluated hallucination reduction and structured query-fit use cases.",
          "Positioned Cortex capabilities alongside broader agent/MCP patterns.",
        ],
        projects: [
          "Structured data AI exploration",
          "AI function evaluation for entity extraction/classification",
          "Prompt-over-warehouse design considerations",
        ],
      },
      {
        name: "Stored Procedures & SQL Optimization",
        category: "Performance / Backend Logic",
        level: "Advanced",
        overview:
          "Worked extensively on stored procedure analysis, refactoring, performance tuning, and reporting query logic.",
        work: [
          "Optimized or reviewed complex SQL Server/Snowflake-style data access patterns.",
          "Used temp table strategies, view replacements, and procedure-level analysis.",
          "Focused on scalable reporting logic and reusable backend data components.",
        ],
        projects: [
          "Stored procedure optimization initiatives",
          "Cacheable procedure result strategies",
          "Backend analytical logic modernization",
        ],
      },
      {
        name: "Semantic / Governed Access Patterns",
        category: "Consumption Layer",
        level: "Intermediate",
        overview:
          "Explored governed semantic access patterns for business-friendly AI and analytics interfaces.",
        work: [
          "Positioned semantic and governed structures for reusable data consumption.",
          "Worked around AI-friendly data access methods on structured warehouse data.",
          "Aligned AI interactions with controlled enterprise data boundaries.",
        ],
        projects: [
          "Business question to warehouse answer workflows",
          "Semantic access exploration",
          "Controlled AI consumption on structured datasets",
        ],
      },
    ],
    architecturePatterns: [
      "Warehouse-centric analytics",
      "AI over structured enterprise data",
      "Procedure-backed business logic",
      "Governed semantic data access",
      "Application-integrated Snowflake query services",
    ],
  },
};

const crossFunctionalAreas = [
  {
    title: "AI / ML Solutions",
    icon: Brain,
    items: [
      "MLOps-style pipeline design using managed and custom orchestration",
      "Prompt-enabled analytics on enterprise data",
      "Evaluation of AI functions, extraction/classification, and structured AI access",
      "Enterprise assistant patterns using MCP and governed tool access",
    ],
  },
  {
    title: "Architecture & Pipelines",
    icon: Workflow,
    items: [
      "Batch + streaming data platform design",
      "Lakehouse and warehouse integration patterns",
      "API-based ingestion and event routing",
      "Cross-platform data movement and analytics enablement",
    ],
  },
  {
    title: "Platform Engineering",
    icon: Server,
    items: [
      "Docker, Kubernetes, CI/CD-ready deployments",
      "Terraform modules and reusable cloud infrastructure",
      "Secure auth, app configuration, observability, and deployment workflows",
      "Performance and latency testing for production ingestion services",
    ],
  },
  {
    title: "Governance & Reliability",
    icon: Shield,
    items: [
      "Governed data access through catalogs and functions",
      "Operational debugging and observability-first design",
      "Safe AI interaction layers on top of enterprise data",
      "Scalable patterns for teams, tools, and shared platforms",
    ],
  },
];

const featuredProjects = [
  {
    title: "Real-Time Event Data Capture Platform",
    domain: "AWS | Streaming | APIs | EKS",
    summary:
      "Designed a scalable event ingestion platform using APIs, Kinesis, Firehose, S3, EKS, and Kafka-oriented patterns for high-throughput workload capture.",
    highlights: [
      "Handled streaming ingestion architecture",
      "Performance-tested latency and throughput",
      "Supported cloud-native deployment and routing logic",
    ],
  },
  {
    title: "EMR to SageMaker Migration Initiative",
    domain: "AWS | PySpark | MLOps",
    summary:
      "Helped transition batch and ML preprocessing workloads from EMR-centric PySpark scripts into managed SageMaker pipeline steps.",
    highlights: [
      "Preprocess, train, evaluate, register pattern",
      "Managed pipeline structure and runtime parameters",
      "Bridged data engineering and ML workflow modernization",
    ],
  },
  {
    title: "Databricks MCP + App Experience",
    domain: "Databricks | AI | Streamlit | SQL",
    summary:
      "Built application-facing AI query experiences using Databricks Apps, SQL warehouses, and MCP-style service integration.",
    highlights: [
      "Prompt-to-data flows",
      "Business-facing analytics interface",
      "Governed enterprise data access",
    ],
  },
  {
    title: "Snowflake AI & Structured Data Exploration",
    domain: "Snowflake | Cortex | Analytics",
    summary:
      "Explored structured AI approaches on top of Snowflake datasets, comparing AI functions and architecting data-friendly access patterns.",
    highlights: [
      "Structured analytics interpretation",
      "AI function evaluation",
      "Warehouse-centric intelligent access",
    ],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}

function MetricCard({ title, value, caption }) {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-6">
        <div className="text-sm text-slate-500">{title}</div>
        <div className="mt-2 text-3xl font-semibold text-slate-900">{value}</div>
        <div className="mt-2 text-sm leading-6 text-slate-600">{caption}</div>
      </CardContent>
    </Card>
  );
}

export default function CloudDataAIPortfolio() {
  const [selectedCloud, setSelectedCloud] = useState("AWS");
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);

  const cloud = stackData[selectedCloud];
  const CloudIcon = cloud.icon;

  const filteredTechnologies = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return cloud.technologies;
    return cloud.technologies.filter((t) => {
      const blob = [
        t.name,
        t.category,
        t.level,
        t.overview,
        ...(t.work || []),
        ...(t.projects || []),
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(term);
    });
  }, [cloud.technologies, search]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">{profile.name}</div>
            <div className="text-sm text-slate-500">Cloud • Data • AI/ML Portfolio</div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#stack"><Button variant="outline" className="rounded-xl">Explore Stack</Button></a>
            <a href="#contact"><Button className="rounded-xl">Contact</Button></a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Badge className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-slate-900">
                Enterprise Data Engineering • Cloud Architecture • AI/ML
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
                  Professional portfolio website for showcasing your work across AWS, Databricks, and Snowflake.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                  {profile.tagline}
                </p>
                <p className="max-w-3xl text-base leading-7 text-slate-600">{profile.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#stack"><Button size="lg" className="rounded-2xl px-6">View Tech Stack <ChevronRight className="ml-2 h-4 w-4" /></Button></a>
                <a href="#projects"><Button size="lg" variant="outline" className="rounded-2xl px-6">Featured Projects</Button></a>
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard title="Cloud Platforms" value="3" caption="AWS, Databricks, Snowflake" />
              <MetricCard title="Core Focus" value="Data + AI" caption="Streaming, analytics, AI/ML, apps" />
              <MetricCard title="Work Style" value="Hands-on" caption="Architecture, build, optimize, deploy" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="rounded-3xl border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">What this site is designed to show</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6 pt-2">
                {[
                  "Which cloud/data platforms you’ve worked on",
                  "What projects, pipelines, and architectures you’ve delivered",
                  "How your experience maps to AI, ML, streaming, warehousing, and platform engineering",
                  "A recruiter-friendly but technically credible portfolio narrative",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-medium text-slate-900">Best use case</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use this as your public portfolio, resume companion, interview showcase, and architecture narrative hub.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Core strengths"
          title="What I bring across modern data and AI ecosystems"
          description="A cross-functional blend of cloud engineering, data platform design, AI/ML integration, and production readiness."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {crossFunctionalAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card key={area.title} className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                    <Icon className="h-6 w-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                  <div className="mt-4 space-y-3">
                    {area.items.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="stack" className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Interactive tech stack"
            title="Click any technology to explore the kind of work I’ve done"
            description="This section is designed like a portfolio knowledge base. A recruiter, manager, or client can browse by cloud and drill into services, projects, architecture patterns, and responsibilities."
          />

          <div className="mt-10 space-y-6">
            <Tabs value={selectedCloud} onValueChange={setSelectedCloud}>
              <TabsList className="grid w-full max-w-xl grid-cols-3 rounded-2xl bg-white p-1 shadow-sm">
                {Object.keys(stackData).map((name) => (
                  <TabsTrigger key={name} value={name} className="rounded-xl">{name}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className={`rounded-3xl border border-slate-200 bg-gradient-to-br ${cloud.color} p-6`}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                    <CloudIcon className="h-7 w-7 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-slate-900">{selectedCloud}</div>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">{cloud.blurb}</p>
                  </div>
                </div>
                <div className="w-full max-w-sm">
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={`Search within ${selectedCloud} stack...`}
                    className="rounded-2xl border-white/60 bg-white"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cloud.architecturePatterns.map((pattern) => (
                  <Badge key={pattern} variant="secondary" className="rounded-full bg-white/80 px-3 py-1 text-slate-700">
                    {pattern}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredTechnologies.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                >
                  <Card
                    className="group h-full cursor-pointer rounded-3xl border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    onClick={() => setSelectedTech({ ...tech, cloud: selectedCloud })}
                  >
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl bg-slate-100 p-3">
                          {selectedCloud === "AWS" ? (
                            <Cloud className="h-5 w-5 text-slate-900" />
                          ) : selectedCloud === "Databricks" ? (
                            <Layers3 className="h-5 w-5 text-slate-900" />
                          ) : (
                            <Database className="h-5 w-5 text-slate-900" />
                          )}
                        </div>
                        <Badge variant="outline" className="rounded-full">{tech.level}</Badge>
                      </div>

                      <div className="mt-5 space-y-3">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">{tech.name}</h3>
                        <p className="text-sm font-medium text-slate-500">{tech.category}</p>
                        <p className="text-sm leading-6 text-slate-600">{tech.overview}</p>
                      </div>

                      <div className="mt-5 flex items-center text-sm font-medium text-slate-900">
                        Explore details <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Representative projects and solution themes"
          description="A recruiter usually does not need every detail first. This section summarizes the strongest examples and encourages deeper exploration through the interactive stack above."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <GitBranch className="h-4 w-4" />
                  <span>{project.domain}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-5 space-y-3">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="How to make this even stronger"
            title="Portfolio upgrades that will make this resume website stand out"
            description="You can take this from a strong portfolio to an interview-winning website by enriching it with proof points, visuals, and outcomes."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: BarChart3,
                title: "Quantified impact",
                text: "Add throughput, latency, data volume, cost savings, SLA, or scale metrics to each project.",
              },
              {
                icon: Boxes,
                title: "Architecture diagrams",
                text: "Add one architecture image per major platform: streaming, AI app, warehouse, or ML pipeline.",
              },
              {
                icon: Cpu,
                title: "Use-case deep dives",
                text: "Add a dedicated case-study page for 3–5 strongest projects with problem, design, challenges, and results.",
              },
              {
                icon: ExternalLink,
                title: "Resume integration",
                text: "Add downloadable resume, LinkedIn, GitHub, and a simple contact CTA for recruiters.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                      <Icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Use this section for recruiters, hiring managers, and collaborators"
              description="Replace the placeholders below with your actual details, LinkedIn, GitHub, resume link, and optional calendar link."
            />
          </div>
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="space-y-5 p-7">
              <div className="flex items-center gap-3 text-sm text-slate-700"><Mail className="h-4 w-4" /> {profile.email}</div>
              <div className="flex items-center gap-3 text-sm text-slate-700"><Phone className="h-4 w-4" /> {profile.phone}</div>
              <div className="flex items-center gap-3 text-sm text-slate-700"><MapPin className="h-4 w-4" /> {profile.location}</div>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button className="rounded-2xl">Add LinkedIn</Button>
                <Button variant="outline" className="rounded-2xl">Add Resume PDF</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 {profile.name}. Portfolio website.</div>
          <div>Built to showcase cloud, data engineering, AI/ML, and architecture experience.</div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedTech && (
          <Dialog open={!!selectedTech} onOpenChange={(open) => !open && setSelectedTech(null)}>
            <DialogContent className="max-h-[85vh] overflow-y-auto rounded-3xl sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedTech.name}</DialogTitle>
                <DialogDescription className="text-sm text-slate-500">
                  {selectedTech.cloud} • {selectedTech.category} • {selectedTech.level}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 pt-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Overview</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{selectedTech.overview}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Type of work done</h4>
                  <div className="mt-3 space-y-3">
                    {selectedTech.work?.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Representative projects / use cases</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedTech.projects?.map((item) => (
                      <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">{item}</Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">How to improve this section later</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Add one concrete architecture image, one business problem statement, one scale metric, and one outcome for this technology to make your portfolio much stronger.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
