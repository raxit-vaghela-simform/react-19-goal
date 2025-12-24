import React, { useState, useId } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Field {
    label: string;
    value: string;
}

const UseIdDemo: React.FC = () => {
    const baseId = useId();
    const [fields, setFields] = useState<Field[]>([
        { label: 'Name', value: '' },
        { label: 'Email', value: '' },
    ]);

    const handleChange = (index: number, value: string) => {
        const updated = [...fields];
        updated[index].value = value;
        setFields(updated);
    };

    const addField = () => {
        setFields([...fields, { label: `Field ${fields.length + 1}`, value: '' }]);
    };

    return (
        <Box sx={{ maxWidth: 420 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                React 19 useId Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Demonstrates multiple inputs with labels using useId for stable, unique IDs. Each
                input ID is derived from a base ID to keep it stable across renders.
            </Typography>

            <Stack spacing={2}>
                {fields.map((field, index) => {
                    const id = `${baseId}-${index}`;
                    return (
                        <Box key={id}>
                            <TextField
                                id={id}
                                label={field.label}
                                value={field.value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                size="small"
                                fullWidth
                                helperText={`Generated ID: ${id}`}
                            />
                        </Box>
                    );
                })}
                <Button variant="contained" onClick={addField}>
                    Add Field
                </Button>
            </Stack>
        </Box>
    );
};

export default UseIdDemo;
