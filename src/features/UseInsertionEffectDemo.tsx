import { useInsertionEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UseInsertionEffectDemo = () => {
    useInsertionEffect(() => {
        console.log('useInsertionEffect: CSS or setup before DOM mutations');
    }, []);

    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                useInsertionEffect Demo
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Check the console to see useInsertionEffect logging before DOM updates.
            </Typography>
        </Box>
    );
};

export default UseInsertionEffectDemo;
