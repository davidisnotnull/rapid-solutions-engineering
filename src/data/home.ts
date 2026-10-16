import records from "./work.example.json";

export type WorkStatus = "In progress" | "In review" | "Completed";

export interface ExampleWorkRecord {
  id: string;
  name: string;
  status: WorkStatus;
  summary: string;
  example: true;
}

const workStatuses: readonly WorkStatus[] = [
  "In progress",
  "In review",
  "Completed",
];

function isWorkStatus(value: string): value is WorkStatus {
  return (workStatuses as readonly string[]).includes(value);
}

function isExampleWork(value: unknown): value is ExampleWorkRecord {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    typeof record.id === "string" &&
    record.id.length > 0 &&
    typeof record.name === "string" &&
    record.name.length > 0 &&
    typeof record.summary === "string" &&
    record.summary.length > 0 &&
    record.example === true &&
    typeof record.status === "string" &&
    isWorkStatus(record.status)
  );
}

export function loadExampleWork(): ExampleWorkRecord[] {
  if (!Array.isArray(records) || records.length === 0) {
    throw new Error("work.example.json must list example work records");
  }

  if (!records.every(isExampleWork)) {
    throw new Error("work.example.json must only contain example work records");
  }

  return records;
}

export const home = {
  eyebrow: "Rapid Solutions Engineering",
  title: "Practical digital solutions for Hackney Council",
  summary:
    "We help council services solve real problems using low code tools like AppSheet, Google Workspace automation and more.",
  primaryCta: { href: "/support", label: "Get support" },
  secondaryCta: { href: "/services", label: "Explore our services" },
  benefits: [
    { title: "Lower manual effort", text: "Automate repetitive tasks" },
    { title: "Work smarter", text: "Simpler, more efficient processes" },
    { title: "Collaborate", text: "Built with and for council services" },
    { title: "Real impact", text: "Practical solutions, delivered quickly" },
  ],
  workHeading: "Our current work",
  workAll: { href: "/our-work", label: "View all our work" },
  viewProject: { href: "/our-work", label: "View project" },
} as const;

export const statusTagClass: Record<WorkStatus, string> = {
  "In progress": "lbh-tag",
  "In review": "lbh-tag lbh-tag--yellow",
  Completed: "lbh-tag lbh-tag--green",
};
