'use client';

import { Box, Typography, Link as MuiLink, Card, Divider } from '@mui/material';
import { useTranslations } from 'next-intl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactSection() {
    const t = useTranslations('Contact');

    const brand = "#32598c";

    return (
        <Box
            sx={{
                width: "100%",
                py: 10,
                px: { xs: 2, sm: 4, md: 10 },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 1400,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    p: { xs: 4, md: 6 },
                    borderRadius: 4,
                    gap: 6,
                    background: "rgba(255,255,255,0.85)",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                    backdropFilter: "blur(6px)"
                }}
            >
                {/* LEFT SIDE — CONTACT INFO */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: brand,
                            fontSize:'60px'
                        }}
                    >
                        {t('header')}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                        <LocationOnIcon sx={{ color: brand }} />
                        <Typography sx={{ fontSize: 22 }}>
                            <strong>{t('addressLabel')}:</strong> {t('address')}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <PhoneIcon sx={{ color: brand }} />
                        <Typography sx={{ fontSize: 22 }}>
                            <strong>{t('phoneLabel')}:</strong>{" "}
                            <MuiLink href="tel:+37312345678" underline="hover" sx={{ color: 'inherit' }}>
                                +373 123 45678
                            </MuiLink>
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <EmailIcon sx={{ color: brand }} />
                        <Typography sx={{ fontSize: 22 }}>
                            <strong>{t('emailLabel')}:</strong>{" "}
                            <MuiLink href="mailto:info@example.com" underline="hover" sx={{ color: 'inherit' }}>
                                info@example.com
                            </MuiLink>
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 1, width: "60%" }} />

                    <Typography sx={{ fontSize: 20, color: "#666" }}>
                        {t('workHours')}
                    </Typography>
                </Box>

                {/* RIGHT SIDE — MAP */}
                <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box
                        component="img"
                        src="/images/map_placeholder.png"
                        alt="Map"
                        sx={{
                            width: "100%",
                            maxWidth: 520,
                            borderRadius: 3,
                            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                            transition: "0.25s",
                            "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: "0 10px 28px rgba(0,0,0,0.22)",
                            }
                        }}
                    />
                </Box>
            </Card>
        </Box>
    );
}
