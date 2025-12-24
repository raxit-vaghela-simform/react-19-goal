import { useOptimistic, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function UseOptimisticDemo() {
    const [likes, setLikes] = useState(0);
    const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (prev, newLike: number) =>
        prev + newLike,
    );

    const handleLike = async () => {
        addOptimisticLike(1);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLikes((prev) => prev + 1);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                useOptimistic Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Instant feedback while a simulated API call runs. UI stays responsive and reverts if
                the request fails.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="contained" color="secondary" onClick={handleLike}>
                    Like
                </Button>
                <Box>
                    <Typography fontWeight={600}>Optimistic: {optimisticLikes}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Server state: {likes}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}
