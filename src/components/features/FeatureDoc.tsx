import { Typography, Box, Paper } from '@mui/material';
import React from 'react';

interface Props {
    title: string;
    intro: string;
    details?: string;
    example?: string;
    children?: React.ReactNode;
    code?: string;
}

export function FeatureDoc({ title, intro, details, example, children, code }: Props) {
    return (
        <Box sx={{ maxWidth: 960 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                {title}
            </Typography>

            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, fontSize: '1.05rem' }}
            >
                {intro}
            </Typography>

            {details ? (
                <Paper
                    sx={{
                        p: 3,
                        mb: 3,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        border: '1px solid #e5e7eb',
                    }}
                    elevation={0}
                >
                    <Typography variant="h6" gutterBottom>
                        Feature details
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {details}
                    </Typography>
                </Paper>
            ) : null}

            {example ? (
                <Paper
                    sx={{
                        p: 3,
                        mb: 4,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        border: '1px solid #e5e7eb',
                    }}
                    elevation={0}
                >
                    <Typography variant="h6" gutterBottom>
                        Example explanation
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {example}
                    </Typography>
                </Paper>
            ) : null}

            {children ? (
                <Paper
                    sx={{
                        p: 3,
                        mb: 4,
                        color: 'text.secondary',
                        bgcolor: '#f8fafc',
                        borderRadius: 2,
                        border: '1px solid #e5e7eb',
                    }}
                    elevation={0}
                >
                    <Typography variant="h6" gutterBottom>
                        How this example works
                    </Typography>
                    {children}
                </Paper>
            ) : null}

            {code ? (
                <Box sx={{ mb: 1 }}>
                    <Typography variant="h6" gutterBottom>
                        Source code
                    </Typography>
                    <Paper
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: '#0f172a',
                            color: '#e5e7eb',
                            fontFamily:
                                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                            whiteSpace: 'pre',
                            overflowX: 'auto',
                            fontSize: '0.9rem',
                        }}
                        component="pre"
                        elevation={0}
                    >
                        {code}
                    </Paper>
                </Box>
            ) : null}
        </Box>
    );
}
