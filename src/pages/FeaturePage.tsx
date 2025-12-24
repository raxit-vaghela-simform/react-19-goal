import { useParams } from 'react-router-dom';
import { features } from '../utils/featureData';
import { Suspense, lazy, ComponentType } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FeatureDoc } from '../components/features/FeatureDoc';
import AutomaticBatchingDemo from '../features/AutomaticBatchingDemo';
import FormActionsDemo from '../features/FormActionsDemo';
import ReactCompilerDemo from '../features/ReactCompilerDemo';
import RefsAsPropsDemo from '../features/RefsAsPropsDemo';
import TransitionsDemo from '../features/TransitionsDemo';
import UseDeferredValueDemo from '../features/UseDeferredValueDemo';
import UseFormStatusDemo from '../features/UseFormStatusDemo';
import UseHookDemo from '../features/UseHookDemo';
import UseIdDemo from '../features/UseIdDemo';
import UseInsertionEffectDemo from '../features/UseInsertionEffectDemo';
import UseOptimisticDemo from '../features/UseOptimisticDemo';
import UseSyncExternalStoreDemo from '../features/UseSyncExternalStoreDemo';

const FeaturePage = () => {
    const { id } = useParams();
    const feature = features.find((f) => f.id === id);
    const loaderMap: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
        'use-hook': async () => ({ default: UseHookDemo }),
        'form-actions': async () => ({ default: FormActionsDemo }),
        'use-optimistic': async () => ({ default: UseOptimisticDemo }),
        'use-form-status': async () => ({ default: UseFormStatusDemo }),
        'refs-as-props': async () => ({ default: RefsAsPropsDemo }),
        'react-compiler': async () => ({ default: ReactCompilerDemo }),
        'start-transition': async () => ({ default: TransitionsDemo }),
        'use-deferred-value': async () => ({ default: UseDeferredValueDemo }),
        'automatic-batching': async () => ({ default: AutomaticBatchingDemo }),
        'use-id': async () => ({ default: UseIdDemo }),
        'use-sync-external-store': async () => ({ default: UseSyncExternalStoreDemo }),
        'use-insertion-effect': async () => ({ default: UseInsertionEffectDemo }),
    };

    const loader = feature ? loaderMap[feature.id] : undefined;
    if (!feature || !loader) {
        return (
            <Box sx={{ p: 3 }}>
                <Typography variant="h5">Feature not found.</Typography>
            </Box>
        );
    }

    const FeatureComponent = lazy(loader);

    return (
        <FeatureDoc
            title={feature.title}
            intro={feature.description}
            details={feature.detailedDescription}
            example={feature.exampleDescription}
            code={feature.codeSnippet}
        >
            <Stack spacing={2}>
                <Suspense
                    fallback={
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <CircularProgress size={18} />
                            <Typography>Loading demo...</Typography>
                        </Stack>
                    }
                >
                    <Box
                        sx={{
                            border: '1px solid #e5e7eb',
                            borderRadius: 2,
                            p: 2,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <FeatureComponent />
                    </Box>
                </Suspense>
            </Stack>
        </FeatureDoc>
    );
};

export default FeaturePage;
