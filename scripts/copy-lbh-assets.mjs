import { cp, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const from = join(root, "node_modules/lbh-frontend/lbh/assets");
const to = join(root, "public/assets");

await mkdir(to, { recursive: true });
await cp(from, to, { recursive: true });
