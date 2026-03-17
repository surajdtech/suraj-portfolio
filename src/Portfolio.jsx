import React from "react";

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Suraj Dighe</h1>
      <h3>Cloud | Data | AI Engineer</h3>

      <p>
        AWS • Databricks • Snowflake • GenAI • Streaming Architectures
      </p>

      <hr />

      <h2>About Me</h2>
      <p>
        I build scalable data platforms and AI-driven solutions across AWS,
        Databricks, and Snowflake ecosystems. Experienced in real-time pipelines,
        distributed systems, and cloud-native architectures.
      </p>

      <h2>Tech Stack</h2>
      <ul>
        <li>AWS (EKS, Lambda, Kinesis, MSK)</li>
        <li>Databricks (Spark, Delta, ML)</li>
        <li>Snowflake (Warehousing, Cortex AI)</li>
        <li>Python, SQL, Airflow</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>Real-time streaming pipeline using AWS Kinesis + Spark</li>
        <li>GenAI analytics using Snowflake Cortex</li>
        <li>Databricks optimization for large-scale data processing</li>
      </ul>

      <h2>Links</h2>
      <p>
        <a href="https://github.com/surajdtech/" target="_blank">
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/suraj-dighe-688359a9/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
