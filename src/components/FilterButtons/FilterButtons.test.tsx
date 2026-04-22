import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FilterButtons } from "./FilterButtons";

describe("FilterButtons", () => {
    it("クリックでfilter変更される", () => {
        const setFilter = vi.fn();

        render(<FilterButtons filter="all" setFilter={setFilter} />);

        fireEvent.click(screen.getByText("未完了"));
        expect(setFilter).toHaveBeenCalledWith("active");
    });
});