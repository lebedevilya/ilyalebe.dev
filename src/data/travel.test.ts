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

  it("includes the 2026 Serbia and Montenegro trip", () => {
    const serbia = visitedCountries.find((country) => country.code === "RS");
    const montenegro = visitedCountries.find((country) => country.code === "ME");

    expect(serbia?.note).toContain("25 June 2026 - 4 July 2026");
    expect(serbia?.cities.map((city) => city.name)).toEqual(["Belgrade"]);
    expect(montenegro?.note).toContain("5 July 2026 - 15 July 2026");
    expect(montenegro?.cities.map((city) => city.name)).toEqual([
      "Podgorica",
      "Ulcinj",
      "Bar",
      "Petrovac",
      "Sveti Stefan",
      "Budva",
      "Kotor",
      "Tivat",
      "Herceg Novi",
    ]);
  });

  it("marks Vietnam as the current location", () => {
    const currentCountry = visitedCountries.find((country) => country.code === currentCountryCode);

    expect(currentCountry?.code).toBe("VN");
    expect(currentCountry?.name).toBe("Vietnam");
    expect(currentCountry?.cities.map((city) => city.name)).toContain("Da Nang");
  });

  it("includes Armenia with visited cities including Sevan and Dilijan", () => {
    const armenia = visitedCountries.find((country) => country.code === "AM");

    expect(armenia?.cities.map((city) => city.name)).toContain("Sevan");
    expect(armenia?.cities.map((city) => city.name)).toContain("Dilijan");
    expect(armenia?.note).toContain("Sevan");
    expect(armenia?.note).toContain("Dilijan");
  });
});
