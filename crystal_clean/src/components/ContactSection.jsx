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
                backgroundColor: 'white',
                py: 8,
                px: { xs: 2, sm: 4, md: 8 },
                gap: 6,
                alignItems: '',

            }}
        >
            {/* LEFT SIDE — CONTACT INFO */}
            <Box sx={{ flex: 1, display: 'flex', alignItems:'flex-end', justifyContent:'center', flexDirection:'column' }}>
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
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',

                }}
            >
                <Box
                    component="img"
                    src="/images/map_placeholder.png"
                    alt="Map"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        borderRadius: '10px'
                    }}
                />
            </Box>
        </Box>
    );
}
