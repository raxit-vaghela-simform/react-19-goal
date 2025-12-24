import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Dashboard = () => {
    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                <div>
                    <Typography variant="h4" fontWeight="bold">
                        React 19 Feature Explorer
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Select a demo from the left sidebar to view its details.
                    </Typography>
                </div>
            </Stack>
        </Box>
    );
};

export default Dashboard;
