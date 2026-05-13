import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

type Props = {
    addTodo: (text: string) => void;
};

const TodoForm = ({ addTodo }: Props) => {
    const [text, setText] = useState("");

    const inValid = text.trim() !== "";

    const handleSubmit = () => {
        if (!inValid) return;

        addTodo(text);
        setText("");
    };

    return (
        <Stack direction="row" spacing={2}>
            <TextField
                label="やること"
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />

            <Button variant="contained"
                color="primary"
                sx={{ width: 100 }}
                onClick={handleSubmit}
                disabled={!inValid}
            >
                追加
            </Button>
        </Stack>
    );
};

export default TodoForm;