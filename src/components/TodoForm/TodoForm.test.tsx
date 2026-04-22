import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("TodoForm", () => {
    const setup = () => {
        const addTodo = vi.fn();
        render(<TodoForm addTodo={addTodo} />);

        const input = screen.getByLabelText("やること");
        const button = screen.getByRole("button", { name: "追加" });

        return { input, button, addTodo };
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("入力フィールドとボタンが表示される", () => {
        const { input, button } = setup();

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it("文字を入力できる", async () => {
        const user = userEvent.setup();
        const { input } = setup();

        await user.type(input, "テスト");

        expect(input).toHaveValue("テスト");
    });

    it("ボタン押下でaddTodoが呼ばれる", async () => {
        const user = userEvent.setup();
        const { input, button, addTodo } = setup();

        await user.type(input, "買い物");
        await user.click(button);

        expect(addTodo).toHaveBeenCalledTimes(1);
        expect(addTodo).toHaveBeenCalledWith("買い物");
    });

    it("追加後に入力欄がリセットされる", async () => {
        const user = userEvent.setup();
        const { input, button } = setup();

        await user.type(input, "掃除");
        await user.click(button);

        expect(input).toHaveValue("");
    });

    it("ボタン押下で追加できる", async () => {
        const user = userEvent.setup();
        const addTodo = vi.fn();

        render(<TodoForm addTodo={addTodo} />);

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        await user.type(input, "洗濯");
        await user.click(button);

        expect(addTodo).toHaveBeenCalledWith("洗濯");
    });

    it("空文字ではaddTodoが呼ばれない", async () => {
        const user = userEvent.setup();
        const { button, addTodo } = setup();

        await user.click(button);

        expect(addTodo).not.toHaveBeenCalled();
    });

    it("空白のみでもaddTodoが呼ばれない", async () => {
        const user = userEvent.setup();
        const { input, button, addTodo } = setup();

        await user.type(input, "   ");
        await user.click(button);

        expect(addTodo).not.toHaveBeenCalled();
    });
});