import { useState, useDeferredValue, type ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const UseDeferredValueDemo = () => {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const items = Array.from({ length: 1000 }, (_, i) => `${deferredText} - ${i}`);

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                useDeferredValue Demo
            </Typography>
            <Stack spacing={2}>
                <TextField
                    label="Filter"
                    value={text}
                    onChange={handleChange}
                    size="small"
                    fullWidth
                    sx={{ maxWidth: 360 }}
                />
                <Paper variant="outlined" sx={{ maxHeight: 200, overflow: 'auto', p: 2 }}>
                    {items.map((item, index) => (
                        <Typography key={index} variant="body2">
                            {item}
                        </Typography>
                    ))}
                </Paper>
            </Stack>
        </Box>
    );
};

export default UseDeferredValueDemo;
