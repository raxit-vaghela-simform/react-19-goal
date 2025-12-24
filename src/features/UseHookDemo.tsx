import { use } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) =>
    r.ok ? r.json() : Promise.reject(new Error('Failed to load todo')),
);

export default function UseHookDemo() {
    const data = use(todoPromise);

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                use() Hook Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The component suspends until the Promise resolves, then renders the data without
                manual loading state.
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, overflow: 'auto' }}>
                <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    {JSON.stringify(data, null, 2)}
                </Typography>
            </Paper>
        </Box>
    );
}
