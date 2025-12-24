import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const staticItems = Array.from({ length: 10 }, (_, i) => (
    <Typography key={i} variant="body2" sx={{ p: 1, borderBottom: '1px solid #e5e7eb' }}>
        Static Item {i + 1}
    </Typography>
));

export default function ReactCompilerDemo() {
    return (
        <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                React Compiler
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The compiler can hoist this static list and reuse it across renders, reducing work
                without manual memoization.
            </Typography>
            <Paper variant="outlined">{staticItems}</Paper>
        </Box>
    );
}
