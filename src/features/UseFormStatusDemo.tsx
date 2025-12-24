import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

type State = { message: string, varient?: 'success' | 'error' };

async function submitEmail(prevState: State, formData: FormData): Promise<State> {
    const email = String(formData.get('email') ?? '').trim();
    if (!email || !email.includes('@')) {
        return { message: 'Please enter a valid email.', varient: 'error' };
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { message: `Subscribed ${email}`, varient: 'success' };
}

function SubmitButton() {
    const { pending, data, method, action } = useFormStatus();
    console.log("SubmitButton_useFormStatus", data?.values);
    return (
        <Button type="submit" variant="contained" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </Button>
    );
}

export default function UseFormStatusDemo() {
    const [state, formAction] = useActionState(submitEmail, { message: '' } as State);

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                useFormStatus Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Child components read form submission status without prop drilling. The button
                auto-disables while pending.
            </Typography>
            <Box component="form" action={formAction}>
                <Stack spacing={2} sx={{ maxWidth: 360 }}>
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="you@example.com"
                        size="small"
                        fullWidth
                    />
                    <SubmitButton />
                </Stack>
            </Box>
            {state.message ? (
                <Alert severity={state.varient || "success"} sx={{ mt: 2 }}>
                    {state.message}
                </Alert>
            ) : null}
        </Box>
    );
}
