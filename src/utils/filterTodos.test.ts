import { describe, it, expect } from "vitest";
import { filterTodos } from "./filterTodos";

const todos = [
    { id: 1, text: "未完了", completed: false },
    { id: 2, text: "完了", completed: true },
];

describe("filterTodos", () => {
    it("activeのみ返す", () => {
        const result = filterTodos(todos, "active");
        expect(result).toHaveLength(1);
        expect(result[0].text).toBe("未完了");
    });

    it("completedのみ返す", () => {
        const result = filterTodos(todos, "completed");
        expect(result).toHaveLength(1);
        expect(result[0].text).toBe("完了");
    });
});