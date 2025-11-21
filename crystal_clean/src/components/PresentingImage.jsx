import { Box, Typography, Button } from '@mui/material';
import { useTranslations, useLocale } from 'next-intl';

export default function PresentingImage() {
    const t = useTranslations('homepage');
    const locale = useLocale();

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#b4e2f2',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                minHeight: 820,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
            >
                <Box
                    component="img"
                    src="/images/main_image.jpg"
                    alt={t('welcome')}
                    sx={{
                        maxWidth: 800,
                        ml: '20px',
                        height: 600,    
                        objectFit: 'cover',
                        borderRadius: 2,
                        boxShadow: 3,
                        display: 'block',
                    }}
                />
            </Box>

            <Box
                sx={{
                    maxWidth: '45%',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    p: { xs: 1, md: '0px'  },
                    mr:{xs: 0, md: '32px'}
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        color: 'Black',
                        borderRadius: 2,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography
                        sx={{ fontSize: { xs: '2rem', md: '64px' }, fontWeight: 700, mb: 2 }}
                    >
                        {t('welcome')}
                    </Typography>

                    <Button
                        variant="contained"
                        href={`/${locale}/order`}
                        sx={{
                            backgroundColor: '#00a1d1',
                            color: 'white',
                            width: { xs: '40%', md: '40%'},
                            height: 75,
                            fontSize: 24,
                            fontWeight: 500,
                            mt: '32px',
                            '&:hover': { backgroundColor: '#008fb0' },
                        }}
                    >
                        {t('welcomeButton')}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}