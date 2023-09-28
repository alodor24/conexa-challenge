import { act, renderHook } from "@testing-library/react";
import useGetMultipleCharacters from "./useGetMultipleCharacters";
import { mockMultipleCharacters } from "@/mock";

describe("useGetMultipleCharacters", () => {
  test("should fetch data correctly", async () => {
    global.fetch = jest.fn().mockImplementation(() => ({
      ok: true,
      json: async () => mockMultipleCharacters,
    }));

    let result: any;

    await act(async () => {
      result = renderHook(() =>
        useGetMultipleCharacters({ character1: 1, character2: 183 })
      ).result;
    });

    // Updated state after fetching data
    expect(result.current.data).toEqual(mockMultipleCharacters);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });

  test("should handle errors correctly", async () => {
    global.fetch = jest.fn().mockImplementation(() => ({
      ok: false,
    }));

    let result: any;

    await act(async () => {
      result = renderHook(() =>
        useGetMultipleCharacters({ character1: 1, character2: 183 })
      ).result;
    });

    // Updated state after handling the error
    expect(result.current.data).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });
});
