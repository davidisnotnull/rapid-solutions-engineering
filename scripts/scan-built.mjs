import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dirname, "..", "dist");
const forbidden = [
  /haloitsm/i,
  /\bhalo\b/i,
  /servicenow/i,
  /ghp_[A-Za-z0-9]/,
  /github_pat_/,
  /BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY/,
  /AKIA[0-9A-Z]{16}/,
];

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await files(path)));
    } else if (/\.(html|css|js|json|txt|svg)$/.test(entry.name)) {
      found.push(path);
    }
  }
  return found;
}

const hits = [];
for (const path of await files(root)) {
  const text = await readFile(path, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(text)) {
      hits.push(`${path} matches ${pattern}`);
    }
  }
}

if (hits.length > 0) {
  console.error(hits.join("\n"));
  process.exit(1);
}
