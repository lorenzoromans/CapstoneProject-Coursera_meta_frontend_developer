import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "./Main";

test("check time availability before and after date change", () => {
  render(
    <MemoryRouter
      initialEntries={["/booking"]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Main />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);

  expect(timeSelect.options.length).toBeGreaterThan(0);

  const date = "2026-12-15";
  fireEvent.change(dateInput, { target: { value: date } });

  expect(timeSelect.options.length).toBeGreaterThan(0);
});