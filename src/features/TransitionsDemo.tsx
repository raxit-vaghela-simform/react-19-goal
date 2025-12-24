import React, { startTransition, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function TransitionsDemo() {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    const filtered = useMemo(() => {
        const lower = filter.toLowerCase();
        return data.filter((item) => item.toLowerCase().includes(lower)).slice(0, 200);
    }, [filter]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        startTransition(() => {
            setFilter(value);
        });
    };

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                startTransition Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Typing updates are urgent; filtering 10,000 items is deferred so the UI stays
                responsive.
            </Typography>
            <Stack spacing={2}>
                <TextField
                    label="Filter items"
                    value={query}
                    onChange={handleChange}
                    size="small"
                    fullWidth
                    sx={{ maxWidth: 360 }}
                />
                <Paper variant="outlined" sx={{ maxHeight: 260, overflow: 'auto', p: 2 }}>
                    {filtered.map((item) => (
                        <Typography key={item} variant="body2">
                            {item}
                        </Typography>
                    ))}
                </Paper>
            </Stack>
        </Box>
    );
}
