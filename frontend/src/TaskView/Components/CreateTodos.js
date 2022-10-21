import * as React from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const TodosPopover = () => {
    return (
        <section class id="task-popover">
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Add a Task
            </Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
        </section>
    );
};

export default TodosPopover;


