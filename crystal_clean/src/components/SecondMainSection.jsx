"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Box, Typography, Card } from "@mui/material";

export default function AdvantagesSection() {
    const t = useTranslations("Advantages");
    const brandColor = "#32598c";

    return (
        <Box
            sx={{
                width: "100%",
                py: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                backgroundColor: brandColor,
            }}
        >
            {/* Заголовок */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    mb: 6,
                    color: 'white',
                    fontSize:'60px'
                }}
            >
                {t("title")}
            </Typography>

            {/* Контейнер */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1600px",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                }}
            >
                {/* Левая колонка: карточки */}
                <Box
                    sx={{
                        flex: "1 1 60%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 3,
                        justifyContent: { xs: "center", md: "flex-start" },
                    }}
                >
                    <AdvCard title={t("list.quality")} desc={t("descriptions.quality")} />
                    <AdvCard title={t("list.speed")} desc={t("descriptions.speed")} />
                    <AdvCard title={t("list.equipment")} desc={t("descriptions.equipment")} />
                    <AdvCard title={t("list.team")} desc={t("descriptions.team")} />
                    <AdvCard title={t("list.prices")} desc={t("descriptions.prices")} />
                    <AdvCard title={t("list.support")} desc={t("descriptions.support")} />
                </Box>

                {/* Правая колонка: фото (СКРЫТА НА МОБИЛЬНЫХ) */}
                <Box
                    sx={{
                        flex: "1 1 40%",
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: 700,
                            borderRadius: 4,
                            borderWidth: '5px',
                            borderColor: 'white',
                            overflow: "hidden",
                            position: "relative",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                        }}
                    >
                        <Image
                            src="/images/second_main_section.jpg"
                            alt="Advantages"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

/* ————————— КАРТОЧКА ————————— */

function AdvCard({ title, desc }) {
    return (
        <Card
            sx={{
                width: {
                    xs: "100%",
                    sm: "48%",
                    md: "calc(50% - 12px)",
                },
                p: 3,
                borderRadius: 3,
                minHeight: 210,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: '#0089b3ff',
                borderWidth: '5px',
                borderColor: 'white',
                boxShadow: "0 0 0",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                color: 'white',
                "&:hover": {
                    transform: "translateY(-6px)",
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    mb: 0.8,
                    fontSize: 32,
                    lineHeight: 1.3,
                    color: 'white',
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    color: "text.secondary",
                    fontSize: 20,
                    lineHeight: 1.45,
                    color: 'white',
                }}
            >
                {desc}
            </Typography>
        </Card>
    );
}
