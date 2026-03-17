import React, { useMemo, useState } from "react";

const profile = {
  name: "Suraj Dighe",
  headline:
    "Lead Data Engineer | Cloud Data Architect | Databricks + Snowflake + AWS | Streaming + Batch | GenAI / Agentic Analytics",
  subheadline:
    "I build production-grade data platforms, real-time ingestion systems, governed AI experiences, and cloud-native analytics architectures.",
  location: "Pune, India",
  email: "suraj.dighe92@gmail.com",
  phone: "+91 7387317686",
  github: "https://github.com/surajdtech/",
  linkedin: "https://www.linkedin.com/in/suraj-dighe-688359a9/",
};

const quickStats = [
  { value: "10.5+", label: "Years of experience" },
  { value: "1M+", label: "Events/day on ingestion workloads" },
  { value: "25–30%", label: "Databricks/Spark cost optimization" },
  { value: "10M+", label: "Customers supported on enterprise platforms" },
];

const cloudStacks = {
  AWS: {
    intro:
      "Hands-on with cloud-native ingestion, streaming, serverless, batch platforms, and containerized deployment patterns.",
    items: [
      {
        name: "EKS",
        summary:
          "Built event capture and API-driven ingestion services using Docker + FastAPI on Kubernetes.",
        details: [
          "Engineered Event Capture Service on EKS routing events to Kinesis and MSK.",
          "Worked with Docker-based deployments, cloud-native routing, and scalable ingestion APIs.",
          "Aligned deployments with production-style infrastructure and observability patterns.",
        ],
      },
      {
        name: "Kinesis + Firehose",
        summary:
          "Designed event-driven streaming and landing patterns for scalable ingestion.",
        details: [
          "Integrated event capture flows with Kinesis and Firehose.",
          "Supported downstream S3 landing and analytics-ready processing.",
          "Worked on performance, batching, and streaming-oriented designs.",
        ],
      },
      {
        name: "Lambda + Event-driven Services",
        summary:
          "Used serverless patterns for routing, processing, and cloud automation.",
        details: [
          "Built event-driven processing using Lambda, Step Functions, and SQS/SNS.",
          "Applied resilient design patterns for automated workflows.",
          "Used AWS services as part of larger production data ecosystems.",
        ],
      },
      {
        name: "S3 / EMR / Glue",
        summary:
          "Delivered batch + streaming data platforms using core AWS analytics services.",
        details: [
          "Owned AWS infrastructure and pipelines for S3-based lake patterns.",
          "Migrated Spark/Scala workloads to EMR/Glue in prior roles.",
          "Worked with secure data delivery, IAM, VPC-aware processing, and analytics workflows.",
        ],
      },
      {
        name: "MSK / Kafka",
        summary:
          "Used managed streaming systems for large-scale event routing and processing.",
        details: [
          "Integrated routing from APIs toward Kinesis/MSK based ingestion patterns.",
          "Worked with streaming + messaging architectures using Kafka/MSK and Flink.",
          "Focused on scalable event processing and near real-time systems.",
        ],
      },
    ],
  },
  Databricks: {
    intro:
      "Strong lakehouse engineering background across Spark optimization, governed analytics, Apps, SQL, and GenAI-connected architectures.",
    items: [
      {
        name: "Databricks SQL + Apps",
        summary:
          "Built governed enterprise GenAI experiences backed by Databricks SQL and app-based interfaces.",
        details: [
          "Delivered enterprise GenAI assistant across Databricks + Snowflake.",
          "Implemented secure auth and deployment standards for Databricks Apps.",
          "Worked with service principal, OAuth/OBO, env-based configuration, secrets injection, and Unity Catalog-aligned governance.",
        ],
      },
      {
        name: "Spark / PySpark Optimization",
        summary:
          "Optimized large-scale Spark workloads for reliability, cost, and performance.",
        details: [
          "Reduced Databricks compute cost by about 25–30% through tuning and performance improvements.",
          "Worked on partitioning, caching, broadcast joins, autoscaling, and stability improvements.",
          "Built reusable PySpark patterns and operational runbooks.",
        ],
      },
      {
        name: "Unity Catalog + Governance",
        summary:
          "Implemented secure, governed access for enterprise analytics and AI workflows.",
        details: [
          "Aligned deployments and access patterns with governance and RBAC requirements.",
          "Used Unity Catalog principles in app deployment and governed answer generation.",
          "Focused on production-safe, enterprise-ready data access.",
        ],
      },
      {
        name: "Streaming + ML Feature Pipelines",
        summary:
          "Built real-time and batch data products powering analytics and ML use cases.",
        details: [
          "Built pipelines using PySpark, Databricks, and AWS Glue for dashboards and ML feature pipelines.",
          "Supported case triage and service analytics use cases.",
          "Improved freshness, recovery, and reliability across critical workflows.",
        ],
      },
      {
        name: "Airflow + Databricks Operations",
        summary:
          "Operated orchestrated production workflows with strong reliability practices.",
        details: [
          "Owned 50+ Airflow DAGs with SLAs, backfills, and alerting.",
          "Improved reliability/recovery by around 40% and freshness by about 6x.",
          "Established reusable patterns, reviews, and operational discipline.",
        ],
      },
    ],
  },
  Snowflake: {
    intro:
      "Strong fit for structured analytics, governed AI access, Cortex-enabled experiences, and cross-platform enterprise data products.",
    items: [
      {
        name: "Snowflake Cortex Search / Analyst",
        summary:
          "Used Snowflake AI capabilities as part of governed GenAI and enterprise analytics experiences.",
        details: [
          "Designed and delivered enterprise GenAI data assistant using Snowflake Cortex Search / Analyst.",
          "Connected Snowflake into NL -> tool calling -> governed answer flows.",
          "Positioned Snowflake as part of structured, production-ready AI experiences.",
        ],
      },
      {
        name: "Structured Analytics + SQL",
        summary:
          "Built analytical workflows over warehouse-driven, business-facing datasets.",
        details: [
          "Worked with Snowflake SQL as part of enterprise answer generation and analytics access.",
          "Integrated warehouse patterns with Databricks, SQL Server procedures, and AI-facing workflows.",
          "Focused on trusted data consumption and governed outputs.",
        ],
      },
      {
        name: "GenAI + Multi-platform Data Access",
        summary:
          "Connected Snowflake into broader AI agent and tool registry frameworks.",
        details: [
          "Architected multi-agent system with supervisor/router + specialist agents.",
          "Used YAML-driven MCP-style tool registry to standardize connectors, prompts, and permissions.",
          "Enabled governed access across Databricks, Snowflake, and procedural data systems.",
        ],
      },
    ],
  },
};

const featuredProjects = [
  {
    title: "Enterprise GenAI Data Assistant",
    tag: "Databricks + Snowflake + MCP",
    text:
      "Designed and delivered a governed enterprise GenAI assistant using Databricks SQL, Snowflake Cortex Search / Analyst, SQL Server procedures, tool calling, and secure deployment patterns.",
  },
  {
    title: "Event Capture Service",
    tag: "AWS EKS + Kinesis + MSK + Firehose",
    text:
      "Engineered a containerized event-driven ingestion platform on EKS routing events into Kinesis/MSK with Firehose to S3 landing patterns and cloud-native deployment practices.",
  },
  {
    title: "VMware Support Analytics Platform",
    tag: "Databricks + AWS Glue + Airflow",
    text:
      "Built real-time and batch pipelines for support analytics and ML feature generation, helping power a platform serving 10M+ customers and contributing to a 22% drop in L1 ticket volume.",
  },
  {
    title: "Streaming + Graph Personalization",
    tag: "Flink + Neo4j",
    text:
      "Integrated Apache Flink with Neo4j for near real-time graph updates supporting anomaly detection and personalization use cases.",
  },
];

const experience = [
  {
    company: "The Digital Group",
    role: "Lead Data Engineer",
    period: "Oct 2024 – Present",
    bullets: [
      "Designed enterprise GenAI assistant across Databricks + Snowflake with governed answer generation.",
      "Architected multi-agent system and YAML-driven MCP framework for connectors, prompts, schemas, and permissions.",
      "Implemented secure Databricks App deployment aligned with governance and RBAC.",
      "Shipped SSE streaming UX to Streamlit and Slack with evaluation and observability patterns.",
    ],
  },
  {
    company: "VMware",
    role: "Senior Data Engineer",
    period: "Dec 2021 – Jun 2024",
    bullets: [
      "Led a 10-member team delivering data solutions for a platform serving 10,000,000+ customers.",
      "Built batch + real-time pipelines using PySpark, Databricks, and AWS Glue.",
      "Owned 50+ Airflow DAGs and improved freshness/recovery significantly.",
      "Optimized Spark workloads to reduce Databricks compute cost by about 30%.",
    ],
  },
  {
    company: "InfoCepts Technologies",
    role: "Senior Cloud Developer / Senior Executive",
    period: "Sep 2018 – May 2021",
    bullets: [
      "Owned AWS infrastructure and data pipelines for global media analytics workloads.",
      "Built event-driven processing using Lambda, Step Functions, and SQS/SNS.",
      "Migrated Spark/Scala workloads to EMR/Glue for faster setup and better resilience.",
      "Implemented REST integrations and dashboards while sustaining high pipeline uptime.",
    ],
  },
];

const differentiators = [
  "Cloud + data + AI profile, not just one-layer engineering",
  "Strong across batch, streaming, governance, observability, and deployment",
  "Hands-on with MCP / agentic analytics / enterprise AI integrations",
  "Able to explain both technical architecture and business outcomes",
];

const quotes = [
  "I build governed AI and data systems that are production-ready, explainable, and scalable.",
  "My work sits at the intersection of cloud platforms, streaming architectures, and enterprise analytics.",
  "I turn complex data ecosystems into usable products for engineering, analytics, and business teams.",
];

const styles = {
  page: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    background: "#f8fafc",
    color: "#0f172a",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 20px",
  },
  hero: {
    background:
      "linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)",
    color: "white",
    padding: "72px 0 56px 0",
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: "13px",
    marginBottom: "18px",
  },
  heroTitle: {
    fontSize: "clamp(36px, 6vw, 58px)",
    fontWeight: 800,
    lineHeight: 1.05,
    margin: 0,
  },
  heroSubtitle: {
    fontSize: "clamp(18px, 2vw, 24px)",
    fontWeight: 600,
    marginTop: 14,
    color: "#cbd5e1",
  },
  heroText: {
    maxWidth: "850px",
    marginTop: 18,
    fontSize: "18px",
    lineHeight: 1.75,
    color: "#e2e8f0",
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "28px",
  },
  buttonPrimary: {
    background: "#38bdf8",
    color: "#082f49",
    padding: "12px 18px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 700,
    border: "none",
    display: "inline-block",
  },
  buttonSecondary: {
    background: "transparent",
    color: "white",
    padding: "12px 18px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.2)",
    display: "inline-block",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginTop: "34px",
  },
  statCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "18px",
  },
  statValue: {
    fontSize: "28px",
    fontWeight: 800,
  },
  statLabel: {
    marginTop: "8px",
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: 1.5,
  },
  section: {
    padding: "56px 0",
  },
  sectionTitle: {
    fontSize: "30px",
    fontWeight: 800,
    marginBottom: "10px",
  },
  sectionText: {
    color: "#475569",
    lineHeight: 1.8,
    fontSize: "16px",
    maxWidth: "900px",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  card: {
    background: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 6px 24px rgba(15,23,42,0.05)",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  smallTag: {
    display: "inline-block",
    background: "#e0f2fe",
    color: "#0c4a6e",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 700,
    marginBottom: "14px",
  },
  tabsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "24px",
    marginBottom: "20px",
  },
  tab: (active) => ({
    padding: "12px 16px",
    borderRadius: "12px",
    border: active ? "1px solid #0f172a" : "1px solid #cbd5e1",
    background: active ? "#0f172a" : "white",
    color: active ? "white" : "#0f172a",
    cursor: "pointer",
    fontWeight: 700,
  }),
  techCard: {
    background: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "18px",
    marginBottom: "14px",
  },
  techHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
  },
  techName: {
    fontSize: "18px",
    fontWeight: 700,
  },
  techSummary: {
    color: "#475569",
    marginTop: "8px",
    lineHeight: 1.7,
  },
  detailsList: {
    marginTop: "14px",
    paddingLeft: "18px",
    color: "#334155",
    lineHeight: 1.8,
  },
  quoteBox: {
    background: "linear-gradient(135deg, #e0f2fe 0%, #f8fafc 100%)",
    border: "1px solid #bae6fd",
    borderRadius: "18px",
    padding: "18px",
  },
  footer: {
    padding: "28px 0 50px 0",
    color: "#64748b",
    fontSize: "14px",
  },
};

function SectionHeading({ title, text }) {
  return (
    <div>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {text ? <p style={styles.sectionText}>{text}</p> : null}
    </div>
  );
}

export default function Portfolio() {
  const [activeCloud, setActiveCloud] = useState("AWS");
  const [openItem, setOpenItem] = useState("EKS");

  const techItems = useMemo(() => cloudStacks[activeCloud].items, [activeCloud]);

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.badge}>Cloud • Data • AI Portfolio</div>
          <h1 style={styles.heroTitle}>{profile.name}</h1>
          <div style={styles.heroSubtitle}>{profile.headline}</div>
          <p style={styles.heroText}>{profile.subheadline}</p>

          <div style={styles.ctaRow}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.buttonPrimary}>
              View LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" style={styles.buttonSecondary}>
              View GitHub
            </a>
            <a href={`mailto:${profile.email}`} style={styles.buttonSecondary}>
              Contact Me
            </a>
          </div>

          <div style={styles.statsGrid}>
            {quickStats.map((stat) => (
              <div key={stat.label} style={styles.statCard}>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <SectionHeading
            title="About Me"
            text="Lead Data Engineer and Cloud Data Architect with strong experience across AWS, Databricks Lakehouse, and Snowflake. My work spans Spark/PySpark, Flink/Kafka streaming, Airflow orchestration, secure data delivery, and governed GenAI / agentic analytics."
          />
          <div style={{ ...styles.grid2, marginTop: 24 }}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Core Strengths</div>
              <ul style={styles.detailsList}>
                <li>Batch + streaming pipelines</li>
                <li>Lakehouse + warehouse architecture</li>
                <li>Governed GenAI and agentic analytics</li>
                <li>FastAPI, MCP, SQL, Spark, Flink, Airflow</li>
                <li>Deployment, observability, and production readiness</li>
              </ul>
            </div>
            <div style={styles.quoteBox}>
              <div style={{ fontWeight: 800, marginBottom: 12 }}>Positioning Lines</div>
              {quotes.map((q) => (
                <p key={q} style={{ margin: "0 0 12px 0", lineHeight: 1.8, color: "#0f172a" }}>
                  “{q}”
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: "#f1f5f9" }}>
        <div style={styles.container}>
          <SectionHeading
            title="Interactive Tech Stack"
            text="Click through each cloud to understand the kind of architecture, projects, and delivery work I’ve done."
          />

          <div style={styles.tabsRow}>
            {Object.keys(cloudStacks).map((cloud) => (
              <button
                key={cloud}
                style={styles.tab(activeCloud === cloud)}
                onClick={() => {
                  setActiveCloud(cloud);
                  setOpenItem(cloudStacks[cloud].items[0].name);
                }}
              >
                {cloud}
              </button>
            ))}
          </div>

          <p style={{ ...styles.sectionText, marginBottom: 20 }}>{cloudStacks[activeCloud].intro}</p>

          {techItems.map((item) => {
            const isOpen = openItem === item.name;
            return (
              <div key={item.name} style={styles.techCard}>
                <div
                  style={styles.techHeader}
                  onClick={() => setOpenItem(isOpen ? "" : item.name)}
                >
                  <div>
                    <div style={styles.techName}>{item.name}</div>
                    <div style={styles.techSummary}>{item.summary}</div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{isOpen ? "−" : "+"}</div>
                </div>

                {isOpen ? (
                  <ul style={styles.detailsList}>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <SectionHeading
            title="Featured Projects"
            text="A few representative examples that reflect my cloud, data, and AI delivery profile."
          />
          <div style={styles.grid2}>
            {featuredProjects.map((project) => (
              <div key={project.title} style={styles.card}>
                <div style={styles.smallTag}>{project.tag}</div>
                <div style={styles.cardTitle}>{project.title}</div>
                <p style={styles.sectionText}>{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: "#f8fafc" }}>
        <div style={styles.container}>
          <SectionHeading
            title="Experience Highlights"
            text="Selected experience snapshots aligned to hiring-manager and recruiter expectations."
          />
          <div style={{ marginTop: 24 }}>
            {experience.map((job) => (
              <div key={job.company} style={{ ...styles.card, marginBottom: 16 }}>
                <div style={styles.cardTitle}>
                  {job.company} — {job.role}
                </div>
                <div style={{ color: "#0369a1", fontWeight: 700, marginBottom: 10 }}>{job.period}</div>
                <ul style={styles.detailsList}>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <SectionHeading
            title="What Makes My Profile Different"
            text="This is the narrative I want a recruiter, manager, or client to take away after visiting this site."
          />
          <div style={styles.grid2}>
            {differentiators.map((item) => (
              <div key={item} style={styles.card}>
                <div style={styles.cardTitle}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: "#0f172a", color: "white" }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: "white" }}>Let’s Connect</h2>
          <p style={{ ...styles.heroText, marginTop: 8, maxWidth: 760 }}>
            Interested in data engineering, cloud architecture, AI / ML delivery, streaming systems,
            or enterprise analytics modernization? I’m open to connecting on professional opportunities,
            architecture discussions, and platform engineering roles.
          </p>

          <div style={styles.ctaRow}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.buttonPrimary}>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" style={styles.buttonSecondary}>
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} style={styles.buttonSecondary}>
              {profile.email}
            </a>
          </div>

          <div style={{ marginTop: 24, color: "#cbd5e1", lineHeight: 1.8 }}>
            <div>{profile.location}</div>
            <div>{profile.phone}</div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          © 2026 Suraj Dighe — Portfolio built on React + Vercel.
        </div>
      </footer>
    </div>
  );
}
