import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AutomaticBatchingDemo = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const handleClick = () => {
        setCountA((prev) => prev + 1);
        setCountB((prev) => prev + 1);
    };

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                Automatic Batching Demo
            </Typography>
            <Stack spacing={1} sx={{ mb: 2 }}>
                <Typography>Count A: {countA}</Typography>
                <Typography>Count B: {countB}</Typography>
            </Stack>
            <Button variant="contained" onClick={handleClick}>
                Increment Both
            </Button>
        </Box>
    );
};

export default AutomaticBatchingDemo;
