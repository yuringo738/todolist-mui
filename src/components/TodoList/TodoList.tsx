import { useState } from "react";
import type { Todo, Filter } from "../../utils/filterTodos";
import {
    Checkbox,
    Typography,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    Snackbar,
    Alert
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

type Props = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    clearCompleted: () => void;
    filter: Filter;
};

const TodoList = ({
    todos,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    filter,
}: Props) => {

    // ダイアログ
    const [open, setOpen] = useState(false);

    // Snackbar
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const completedCount = todos.filter(t => t.completed).length;

    // 全削除
    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleConfirm = () => {
        clearCompleted();
        setOpen(false);

        setSnackbarMessage("完了タスクを削除しました");
        setSnackbarOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleDelete = (todo: Todo) => {
        deleteTodo(todo.id);

        setSnackbarMessage(`「${todo.text}」を削除しました`);
        setSnackbarOpen(true);
    };

    return (
        <>
            {filter === "completed" && (
                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                    <Button
                        variant="outlined"
                        sx={{ color: "text.secondary" }}
                        onClick={handleOpenDialog}
                        disabled={completedCount === 0}
                    >
                        完了タスクを一括削除
                    </Button>
                </Box>
            )}

            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {todos.map((todo) => (
                    <Box
                        component="li"
                        key={todo.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            borderBottom: "1px solid #eee",
                            py: 1,
                        }}
                    >
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />

                        <Typography
                            sx={{
                                ml: 1,
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "text.disabled" : "text.primary",
                            }}
                        >
                            {todo.text}
                        </Typography>

                        <Box sx={{ marginLeft: "auto" }}>
                            <IconButton
                                sx={{ color: "text.secondary" }}
                                onClick={() => handleDelete(todo)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* ダイアログ */}
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>
                    {completedCount}件削除してもよろしいですか？
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleCancel}>キャンセル</Button>
                    <Button color="error" onClick={handleConfirm}>OK</Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    severity="success"
                    onClose={() => setSnackbarOpen(false)}
                    variant="filled"
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default TodoList;