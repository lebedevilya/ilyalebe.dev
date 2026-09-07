import { beforeAll, describe, expect, it } from "vitest";
import { readFile } from "node:fs/promises";

describe("homepage", () => {
  let source: string;

  beforeAll(async () => {
    source = await readFile(new URL("./pages/index.astro", import.meta.url), "utf8");
  });

  it("leads with recruiter-focused positioning and actions", () => {
    expect(source).toContain("Backend Engineer with fullstack range");
    expect(source).toContain("Open to senior backend and fullstack engineering roles");
    expect(source).toContain("Remote | CET timezone");
    expect(source).toContain("8+ years across Ruby on Rails, PostgreSQL, background processing, APIs, infrastructure, and AI integrations");
    expect(source).not.toContain("Almaty, Kazakhstan / Remote");
    expect(source).toContain('href="/cv"');
    expect(source).toContain('href="/contact"');

    expect(source.indexOf("Remote | CET timezone")).toBeGreaterThan(source.indexOf("Contact me"));
  });

  it("shows quantified professional proof", () => {
    expect(source).toContain("8+ years");
    expect(source).toContain("18K+ users");
    expect(source).toContain("25K+ nodes");
    expect(source).toContain("Techstars Web3 '25");
  });

  it("features nodes.garden and keeps recent builds secondary", () => {
    expect(source).toContain("Flagship work");
    expect(source).toContain("nodes.garden");
    expect(source).toContain("Recent technical work");
    expect(source).toContain("SupportOS");
    expect(source).toContain("slack-llm-bot");
  });

  it("does not promote discontinued projects", () => {
    expect(source).not.toContain("customs.codes");
    expect(source).not.toContain("souper.cafe");
    expect(source).not.toContain("DISCONTINUED");
  });

  it("uses a real nodes landing-page preview and keeps recent images compact", () => {
    expect(source).not.toContain("aspect-video");
    expect(source).not.toContain("src={nodesGarden.img}");
    expect(source).toContain('src="/nodes-landing.webp"');
    expect(source).toContain("max-w-xs");
    expect(source).toContain("h-auto");
  });
});
