import viewReducer, { changeView } from "./viewSlice";

describe("view reducer", () => {
  it("should return the initial value", () => {
    const initialState = { grid: true };
    const action = { type: "" };
    const result = viewReducer(initialState, action);
    expect(result).toEqual({ grid: true });
  });
  it("should toggle the initial value when clicked", () => {
    const initialState = { grid: true };
    const action = changeView(false);
    const result = viewReducer(initialState, action);
    expect(result).toEqual({ grid: false });
  });
  it("should toggle the changed value when clicked", () => {
    const initialState = { grid: false };
    const action = changeView(true);
    const result = viewReducer(initialState, action);
    expect(result).toEqual({ grid: true });
  });
});
