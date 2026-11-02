
import {
  Database,
  GitBranch,
  LockKeyhole,
  Network,
  Server,
  Workflow,
} from "lucide-react";

import "./Engineering.css";

const engineeringAreas = [
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "I structure server-side applications around modules, controllers, services and reusable business logic so the system can grow without becoming difficult to maintain.",
  },
  {
    icon: Network,
    title: "APIs & Integrations",
    description:
      "I design API layers that connect interfaces, business logic, databases and external services into a consistent application workflow.",
  },
  {
    icon: Database,
    title: "Data Modelling",
    description:
      "I model entities, relationships and application state around real business processes rather than treating the database as an afterthought.",
  },
  {
    icon: LockKeyhole,
    title: "Authentication & RBAC",
    description:
      "I build authenticated systems with role-based access so different users can work with the data, actions and areas relevant to their responsibilities.",
  },
  {
    icon: Workflow,
    title: "Business Workflows",
    description:
      "I turn manual processes into structured states, assignments, actions, records, notifications and workflows that can be managed inside the application.",
  },
  {
    icon: GitBranch,
    title: "Production Delivery",
    description:
      "I take applications from development through environment configuration, deployment, integrations, debugging and continued production iteration.",
  },
];

const coreStack = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "JWT",
  "REST APIs",
  "Git",
  "Vercel",
];

function Engineering() {
  return (
    <section
      className="engineering section"
      id="engineering"
    >
      <div className="container">
        <div className="section-heading engineering__heading">
          <p className="section-label">Engineering</p>

          <h2 className="section-title">
            I build the system behind the interface.
          </h2>

          <p className="section-description">
            My work goes beyond pages and components. I focus on
            the architecture, data, permissions, integrations and
            workflows that make business software function as one
            system.
          </p>
        </div>

        <div className="engineering__grid">
          {engineeringAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                className="engineering__item"
                key={area.title}
              >
                <div className="engineering__icon">
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                  />
                </div>

                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </article>
            );
          })}
        </div>

        <div className="engineering__stack">
          <div className="engineering__stack-heading">
            <p>Core stack</p>

            <span>
              Tools I use across full-stack and systems work.
            </span>
          </div>

          <div className="engineering__stack-list">
            {coreStack.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Engineering;
