import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LazyComponent = () => {
    return (
        <Box sx={{ p: 2, border: '1px solid #e5e7eb', borderRadius: 1, mt: 2 }}>
            <Typography>I am a lazily loaded component!</Typography>
        </Box>
    );
};

export default LazyComponent;
