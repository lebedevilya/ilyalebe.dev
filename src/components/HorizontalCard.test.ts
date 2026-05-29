import { describe, it, expect, beforeAll } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import HorizontalCard from "./HorizontalCard.astro";
import type { Project } from "../data/projects";

const sample: Project = {
  title: "Test Project",
  img: "/test.webp",
  tagline: "A short tagline",
  longDesc: "A longer description of what we built.",
  stack: "TypeScript, Astro",
  role: "Creator",
  badge: "LIVE",
  badgeClass: "badge-success",
  links: [
    { label: "Visit site", url: "https://example.com" },
    { label: "GitHub", url: "https://github.com/example/repo" },
  ],
};

async function render(props: Project): Promise<string> {
  const container = await AstroContainer.create();
  return container.renderToString(HorizontalCard, { props });
}

describe("HorizontalCard", () => {
  let html: string;

  beforeAll(async () => {
    html = await render(sample);
  });

  it("renders a details/summary accordion", () => {
    expect(html).toContain("<details");
    expect(html).toContain("<summary");
  });

  it("shows the title and tagline in the summary", () => {
    expect(html).toContain(sample.title);
    expect(html).toContain(sample.tagline);
  });

  it("shows the long description and stack in the expanded body", () => {
    expect(html).toContain(sample.longDesc);
    expect(html).toContain("Stack: TypeScript, Astro");
  });

  it("renders one safe outbound button per link", () => {
    for (const link of sample.links) {
      expect(html).toContain(`href="${link.url}"`);
      expect(html).toContain(link.label);
    }
    const relCount = (html.match(/rel="noopener noreferrer"/g) ?? []).length;
    expect(relCount).toBe(sample.links.length);
  });

  it("dims discontinued projects", async () => {
    const discontinued = await render({ ...sample, badge: "DISCONTINUED", badgeClass: "badge-error" });
    expect(discontinued).toContain("opacity-70");
  });
});
