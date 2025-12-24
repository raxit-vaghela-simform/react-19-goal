import { useSyncExternalStore } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

// EXTERNAL STORE (Outside React)

type Listener = () => void;

interface StoreState {
    value: number;
}

interface Store {
    getSnapshot: () => StoreState;
    subscribe: (listener: Listener) => () => void;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

/**
 * Creates an external store that's completely independent of React.
 * This could be Redux, Zustand, or a custom store like this.
 */
export const createStore = (initialValue: number = 0): Store => {
    let state: StoreState = { value: initialValue };
    let listeners: Set<Listener> = new Set();

    return {
        getSnapshot: () => {
            console.log('getSnapshot called, returning:', state);
            return state;
        },

        subscribe: (listener: Listener) => {
            console.log('🔔 Component subscribed to store');
            listeners.add(listener);

            return () => {
                console.log('Component unsubscribed from store');
                listeners.delete(listener);
            };
        },

        increment: () => {
            state = { value: state.value + 1 };
            console.log('Incremented to:', state.value);
            listeners.forEach((listener) => listener());
        },

        decrement: () => {
            state = { value: state.value - 1 };
            console.log('Decremented to:', state.value);
            listeners.forEach((listener) => listener());
        },

        reset: () => {
            state = { value: initialValue };
            console.log('Reset to:', state.value);
            listeners.forEach((listener) => listener());
        },
    };
};

const store = createStore(0);

interface UseSyncExternalStoreDemoProps {
    title?: string;
}

const UseSyncExternalStoreDemo = ({ title = 'useSyncExternalStore Demo' }: UseSyncExternalStoreDemoProps) => {
    const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

    console.log('🎨 Component rendered with value:', state.value);

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                {title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This component uses an external store (outside React). When you click buttons, the store
                updates and React automatically re-renders. Open the browser console to see how
                subscribe/getSnapshot are called.
            </Typography>

            <Card sx={{ p: 2, backgroundColor: '#f5f5f5', mb: 2 }}>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            Store Value:
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                color: '#2563eb',
                                p: 1,
                                backgroundColor: '#e0e7ff',
                                borderRadius: 1,
                                minWidth: '60px',
                                textAlign: 'center',
                            }}
                        >
                            {state.value}
                        </Typography>
                    </Box>

                    <Divider />

                    <Stack direction="row" spacing={1}>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => store.increment()}
                            fullWidth
                        >
                            ⬆️ Increment
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => store.decrement()}
                            fullWidth
                        >
                            ⬇️ Decrement
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => store.reset()}
                            fullWidth
                        >
                            🔄 Reset
                        </Button>
                    </Stack>
                </Stack>
            </Card>

            <Box sx={{ backgroundColor: '#fffbeb', p: 2, borderRadius: 1, borderLeft: '4px solid #f59e0b' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    How it works:
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.6 }}>
                    1. <strong>Mount:</strong> Component calls store.subscribe() to listen for changes
                    <br />
                    2. <strong>Render:</strong> Component calls store.getSnapshot() to get current value
                    <br />
                    3. <strong>Update:</strong> You click a button → store updates state
                    <br />
                    4. <strong>Notify:</strong> Store calls all listeners (causing re-render)
                    <br />
                    5. <strong>Re-render:</strong> React calls getSnapshot() again and re-renders with new value
                    <br />
                    6. <strong>Unmount:</strong> Component unsubscribes by calling the unsubscribe function
                </Typography>
            </Box>

            <Typography
                variant="caption"
                sx={{ display: 'block', mt: 2, color: '#666', fontStyle: 'italic' }}
            >
                Open browser DevTools → Console to see subscribe/getSnapshot/increment logs
            </Typography>
        </Box>
    );
};

export default UseSyncExternalStoreDemo;