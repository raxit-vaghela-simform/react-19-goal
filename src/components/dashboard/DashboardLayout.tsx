import * as React from 'react';
import Box from '@mui/material/Box';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { DashboardLayout as ToolpadDashboardLayout } from '@toolpad/core/DashboardLayout';
import LinearProgress from '@mui/material/LinearProgress';
import { demoTheme } from '../../config/theme';
import { NAVIGATION } from '../../config/navigation';
import { CustomAppTitle } from './CustomAppTitle';

interface Props {
    children: React.ReactNode;
}

export function DashboardLayout({ children }: Props) {
    return (
        <ReactRouterAppProvider navigation={NAVIGATION} theme={demoTheme}>
            <React.Suspense fallback={<LinearProgress />}>
                <ToolpadDashboardLayout
                    slots={{
                        appTitle: CustomAppTitle,
                    }}
                    sx={{
                        '& .MuiDrawer-root': { borderRight: '1px solid #e5e7eb' },
                    }}
                >
                    <Box
                        component="main"
                        sx={{
                            px: { xs: 2, md: 4 },
                            py: { xs: 2, md: 3 },
                            maxWidth: '1200px',
                            width: '100%',
                            mx: 'auto',
                        }}
                    >
                        {children}
                    </Box>
                </ToolpadDashboardLayout>
            </React.Suspense>
        </ReactRouterAppProvider>
    );
}
