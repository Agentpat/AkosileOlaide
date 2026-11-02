
import {
    ArrowRight,
    Boxes,
    Code2,
    Database,
    Rocket,
    Workflow,
} from "lucide-react";

import "./HowIBuild.css";

const stages = [
    {
        number: "01",
        icon: Workflow,
        title: "Understand the workflow",
        description:
            "I start with how the work actually happens: who uses the system, what they need to do, what changes state and where information moves.",
    },
    {
        number: "02",
        icon: Boxes,
        title: "Design the system",
        description:
            "I turn that workflow into roles, modules, entities, permissions and application boundaries before building the interface.",
    },
    {
        number: "03",
        icon: Database,
        title: "Model the data",
        description:
            "I structure the data around real relationships, ownership, status changes and the information the workflow needs to operate.",
    },
    {
        number: "04",
        icon: Code2,
        title: "Build the application",
        description:
            "I connect the frontend, APIs, business logic and database so each layer has a clear responsibility within the system.",
    },
    {
        number: "05",
        icon: Rocket,
        title: "Integrate & deploy",
        description:
            "I connect external services, configure production environments, deploy the application and work through the issues that appear in real use.",
    },
];

function HowIBuild() {
    return (
        <section
            className="how-i-build section"
            id="process"
        >
            <div className="container">
                <div className="section-heading how-i-build__heading">
                    <p className="section-label">How I Build</p>

                    <h2 className="section-title">
                        From business process to working software.
                    </h2>

                    <p className="section-description">
                        I approach software as a system of connected workflows
                        rather than a collection of screens. The interface
                        comes after the underlying process is understood.
                    </p>
                </div>

                <div className="how-i-build__flow">
                    {stages.map((stage, index) => {
                        const Icon = stage.icon;
                        const isLast =
                            index === stages.length - 1;

                        return (
                            <div
                                className="how-i-build__stage"
                                key={stage.number}
                            >
                                <div className="how-i-build__number">
                                    {stage.number}
                                </div>

                                <div className="how-i-build__icon">
                                    <Icon
                                        size={20}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                <div className="how-i-build__content">
                                    <h3>{stage.title}</h3>

                                    <p>{stage.description}</p>
                                </div>

                                {!isLast && (
                                    <ArrowRight
                                        className="how-i-build__arrow"
                                        size={18}
                                        strokeWidth={1.5}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HowIBuild;
