import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = join(import.meta.dirname, "..");

function read(path: string): string {
  return readFileSync(join(root, path), "utf8");
}

function walk(dir: string): string[] {
  const found: string[] = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      found.push(...walk(path));
    } else {
      found.push(path);
    }
  }
  return found;
}

const secretPatterns = [
  /ghp_[A-Za-z0-9]/,
  /github_pat_/,
  /BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY/,
  /AKIA[0-9A-Z]{16}/,
];

const requestPatterns = [
  /haloitsm/i,
  /\bhalo\b/i,
  /servicenow/i,
  /freshservice/i,
];

test("example work records are all flagged as examples", () => {
  const records = JSON.parse(read("src/data/work.example.json")) as unknown[];
  assert.ok(records.length > 0);
  for (const record of records) {
    assert.equal(
      typeof record === "object" &&
        record !== null &&
        "example" in record &&
        record.example,
      true,
    );
  }
});

test("home heading and CTA targets stay on in-repo routes", () => {
  const home = read("src/data/home.ts");
  const page = read("src/pages/index.astro");
  const notice = read("src/components/ExampleDataNotice.astro");

  assert.match(home, /Practical digital solutions for Hackney Council/);
  assert.match(page, /<h1>/);
  assert.match(home, /href: "\/support"/);
  assert.match(home, /href: "\/services"/);
  assert.match(home, /href: "\/our-work"/);
  assert.match(home, /label: "Get support"/);
  assert.match(home, /label: "Explore our services"/);
  assert.match(home, /label: "View all our work"/);
  assert.match(home, /label: "View project"/);
  assert.match(notice, /illustrative examples, not live council work/);
  assert.doesNotMatch(read("src/components/WorkPreview.astro"), /https?:\/\//);
  assert.doesNotMatch(read("src/components/SiteHeader.astro"), /<h1/);
});

test("six routes resolve and unpublished pages stay shells", () => {
  const routes: Record<string, string> = {
    "/": "src/pages/index.astro",
    "/services": "src/pages/services.astro",
    "/how-it-works": "src/pages/how-it-works.astro",
    "/our-work": "src/pages/our-work.astro",
    "/about": "src/pages/about.astro",
    "/support": "src/pages/support.astro",
  };
  const navigation = read("src/data/navigation.ts");
  const sitemap = read("docs/sitemap.md");

  for (const [href, file] of Object.entries(routes)) {
    assert.match(navigation, new RegExp(href.replaceAll("/", "\\/")));
    assert.match(sitemap, new RegExp(href.replaceAll("/", "\\/")));
    assert.ok(read(file).length > 0);
    if (href !== "/") {
      assert.match(read(file), /This page is not published yet/);
    }
  }
});

test("source has no Halo routes, external request URLs, or secrets", () => {
  const allowedHosts = new Set(["www.hackney.gov.uk", "hackney.gov.uk"]);
  const srcFiles = walk(join(root, "src"));

  for (const file of srcFiles) {
    const text = readFileSync(file, "utf8");
    for (const pattern of [...secretPatterns, ...requestPatterns]) {
      assert.equal(pattern.test(text), false, `${file} matches ${pattern}`);
    }

    for (const match of text.matchAll(
      /(?:href|src|action)=["']https?:\/\/([^/"'\s]+)/g,
    )) {
      const host = match[1]?.toLowerCase();
      assert.ok(host && allowedHosts.has(host), `${file} links to ${host}`);
    }
  }
});

test("footer cookies item has no invented href", () => {
  const navigation = read("src/data/navigation.ts");
  assert.match(navigation, /label: "Cookies" \}/);
  assert.match(
    navigation,
    /www\.hackney\.gov\.uk\/more-us\/accessibility-statement-hackney-council/,
  );
  assert.match(navigation, /www\.hackney\.gov\.uk\/more-us\/privacy-statement/);
  assert.match(navigation, /www\.hackney\.gov\.uk\/more-us\/contact-us/);
});
