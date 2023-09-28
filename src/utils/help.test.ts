import { Character } from "@/types";
import { getSharedEpisodes, toUpperCaseFirstLetter } from "./help";
import { mockCharacters, mockSharedEpisodes } from "@/mock";

describe("toUpperCaseFirstLetter", () => {
  test("should capitalize the first letter", () => {
    const input = "unknown";
    const output = "Unknown";

    expect(toUpperCaseFirstLetter(input)).toBe(output);
  });
});

describe("getSharedEpisodes", () => {
  test("should return shared episodes", () => {
    const characters: Character[] = mockCharacters;
    const expectedSharedEpisodes = mockSharedEpisodes;

    expect(getSharedEpisodes(characters)).toEqual(expectedSharedEpisodes);
  });
});
