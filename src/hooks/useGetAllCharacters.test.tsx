import { act, renderHook } from "@testing-library/react";
import useGetAllCharacters from "./useGetAllCharacters";
import { mockAllCharacters, mockUrlCharacters } from "@/mock";

describe("useGetAllCharacters", () => {
  test("should fetch data correctly", async () => {
    global.fetch = jest.fn().mockImplementation(() => ({
      ok: true,
      json: async () => mockAllCharacters,
    }));

    let result: any;

    await act(async () => {
      result = renderHook(() =>
        useGetAllCharacters({ url: mockUrlCharacters })
      ).result;
    });

    // Updated state after fetching data
    expect(result.current.data).toEqual(mockAllCharacters);
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
        useGetAllCharacters({ url: mockUrlCharacters })
      ).result;
    });

    // Updated state after handling the error
    expect(result.current.data).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
  });
});
