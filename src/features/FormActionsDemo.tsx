import { useActionState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

type ActionState = { message: string; severity: "success" | "error" };

async function submitName(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const name = String(formData.get('name') ?? '').trim();

    if (!name) {
        return { message: 'Please enter your name.', severity: "error" };
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return { message: `Welcome, ${name}!`, severity: "success" };
}

export default function FormActionsDemo() {
    const [state, formAction, isPending] = useActionState(
        submitName,
        { message: '', severity: "success" } as ActionState
    );

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                Form Actions & useActionState
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The form uses the action prop. React collects FormData, calls the action, and tracks
                pending state for you. No preventDefault, no manual state management!
            </Typography>

            <Box component="form" action={formAction}>
                <Stack spacing={2} sx={{ maxWidth: 360 }}>
                    <TextField
                        name="name"
                        label="Name"
                        placeholder="Enter your name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled={isPending}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isPending}
                        fullWidth
                    >
                        {isPending ? 'Submitting...' : 'Submit'}
                    </Button>
                </Stack>
            </Box>

            {state.message && (
                <Alert severity={state.severity} sx={{ mt: 2 }}>
                    {state.message}
                </Alert>
            )}
        </Box>
    );
}