import { describe, it, expect } from "vitest";
import { currentCountryCode, visitedCountries } from "./travel";

describe("travel data", () => {
  it("has visited countries", () => {
    expect(visitedCountries.length).toBeGreaterThan(0);
  });

  it("includes the current country among visited countries", () => {
    const codes = visitedCountries.map((country) => country.code);
    expect(codes).toContain(currentCountryCode);
  });

  it("has unique country codes", () => {
    const codes = visitedCountries.map((country) => country.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it("gives every country finite coordinates", () => {
    for (const country of visitedCountries) {
      expect(Number.isFinite(country.lat)).toBe(true);
      expect(Number.isFinite(country.lng)).toBe(true);
    }
  });
});
