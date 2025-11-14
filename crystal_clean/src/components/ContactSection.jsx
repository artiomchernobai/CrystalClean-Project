'use client';

import { Box, Typography, Link as MuiLink } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('Contact');

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                backgroundColor: '#f5f5f5',
                py: 8,
                px: { xs: 2, sm: 4, md: 8 },
                gap: 6,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* LEFT SIDE — CONTACT INFO */}
            <Box sx={{ flex: 1 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: '#32598c',
                    }}
                >
                    {t('header')}
                </Typography>

                <Typography sx={{ fontSize: 18, mb: 2 }}>
                    <strong>{t('addressLabel')}:</strong> {t('address')}
                </Typography>

                <Typography sx={{ fontSize: 18, mb: 2 }}>
                    <strong>{t('phoneLabel')}:</strong>{' '}
                    <MuiLink href="tel:+37312345678" underline="hover" sx={{ color: 'inherit' }}>
                        +373 123 45678
                    </MuiLink>
                </Typography>

                <Typography sx={{ fontSize: 18, mb: 2 }}>
                    <strong>{t('emailLabel')}:</strong>{' '}
                    <MuiLink href="mailto:info@example.com" underline="hover" sx={{ color: 'inherit' }}>
                        info@example.com
                    </MuiLink>
                </Typography>

                <Typography sx={{ fontSize: 18, mt: 3, color: '#555' }}>
                    {t('workHours')}
                </Typography>
            </Box>

            {/* RIGHT SIDE — MAP IMAGE */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    src="/images/map-placeholder.png"
                    alt="Map"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: 3,
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
                    }}
                />
            </Box>
        </Box>
    );
}
