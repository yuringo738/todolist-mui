import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useTodos } from "./useTodos";

describe("useTodos", () => {
    it("todoを追加できる", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo("テスト");
        });

        expect(result.current.todos).toHaveLength(1);
    });

    it("toggleできる", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo("テスト");
        });

        const id = result.current.todos[0].id;

        act(() => {
            result.current.toggleTodo(id);
        });

        expect(result.current.todos[0].completed).toBe(true);
    });
});