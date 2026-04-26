import type { Filter } from "../../utils/filterTodos";
import { Stack, ButtonGroup, Button } from "@mui/material";
import { activeStyle, inactiveStyle } from "../../styles/buttonStyles";

type Props = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
};

export const FilterButtons = ({ filter, setFilter }: Props) => {
    return (
        <Stack>
            <ButtonGroup maxWidth="sm">
                <Button
                    onClick={() => setFilter("all")}
                    sx={filter === "all" ? activeStyle : inactiveStyle}
                >
                    すべて
                </Button>

                <Button
                    onClick={() => setFilter("active")}
                    sx={filter === "active" ? activeStyle : inactiveStyle}
                >
                    未完了
                </Button>

                <Button
                    onClick={() => setFilter("completed")}
                    sx={filter === "completed" ? activeStyle : inactiveStyle}
                >
                    完了
                </Button>
            </ButtonGroup>
        </Stack>
    );
};