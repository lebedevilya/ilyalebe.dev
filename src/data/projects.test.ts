import { describe, it, expect } from "vitest";
import { projects } from "./projects";

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  for (const project of projects) {
    describe(project.title || "<missing title>", () => {
      it("has the required text fields", () => {
        expect(project.title?.trim()).toBeTruthy();
        expect(project.img?.trim()).toBeTruthy();
        expect(project.tagline?.trim()).toBeTruthy();
        expect(project.longDesc?.trim()).toBeTruthy();
      });

      it("has a root-relative image path", () => {
        expect(project.img.startsWith("/")).toBe(true);
      });

      it("has at least one link, each with a label and an http(s) url", () => {
        expect(project.links.length).toBeGreaterThan(0);
        for (const link of project.links) {
          expect(link.label?.trim()).toBeTruthy();
          expect(link.url).toMatch(/^https?:\/\//);
        }
      });

      it("pairs a badge with a badge class", () => {
        if (project.badge) {
          expect(project.badgeClass?.trim()).toBeTruthy();
        }
      });
    });
  }
});
