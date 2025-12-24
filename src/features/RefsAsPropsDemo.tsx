import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface InputFieldProps {
    inputRef: React.RefObject<HTMLInputElement | null>;
}

function InputField({ inputRef }: InputFieldProps) {
    return (
        <TextField
            inputRef={inputRef}
            label="Focus lands here"
            placeholder="This input receives focus on mount"
            size="small"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root.Mui-focused': {
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.25)',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#2563eb',
                },
            }}
        />
    );
}

export default function RefsAsPropsDemo() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <Box sx={{ maxWidth: 360 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                Refs as Props
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                In React 19, you can pass refs directly as props without forwardRef. Any prop name works
                (inputRef, buttonRef, textRef, etc.) - refs are just regular props now!
            </Typography>

            <InputField inputRef={inputRef} />

            <Typography variant="caption" color="text.secondary" sx={{ mt: 3, display: 'block' }}>
                The input field automatically receives focus when this component mounts. This is
                possible because we passed the ref directly as a prop!
            </Typography>
        </Box>
    );
}