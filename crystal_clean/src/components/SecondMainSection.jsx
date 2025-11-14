"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Box, Typography, Card } from "@mui/material";

export default function AdvantagesSection() {
    const t = useTranslations("Advantages");
    const brandColor = "#32598c";

    return (
        <Box sx={{ width: "100%", py: 8, display: "flex", flexDirection: "column", alignItems: "center", px: 2 }}>
            
            {/* Заголовок */}
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    mb: 6,
                    color: brandColor,
                }}
            >
                {t("title")}
            </Typography>

            {/* Контейнер: левая и правая части */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1600px",
                    display: "flex",
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
                    }}
                >
                    <AdvCard title={t("list.quality")} desc={t("descriptions.quality")} />
                    <AdvCard title={t("list.speed")} desc={t("descriptions.speed")} />
                    <AdvCard title={t("list.equipment")} desc={t("descriptions.equipment")} />
                    <AdvCard title={t("list.team")} desc={t("descriptions.team")} />
                    <AdvCard title={t("list.prices")} desc={t("descriptions.prices")} />
                    <AdvCard title={t("list.support")} desc={t("descriptions.support")} />
                </Box>

                {/* Правая колонка: фото */}
                <Box
                    sx={{
                        flex: "1 1 40%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: 700,        // 🔥 увеличенная высота
                            borderRadius: 4,
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
                width: "calc(50% - 12px)", 
                p: 3.5,
                borderRadius: 3,
                minHeight: 210,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // выравнивание сверху
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    mb: 0.8,      // уменьшили отступ
                    fontSize: 24,
                    lineHeight: 1.3,
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    color: "text.secondary",
                    fontSize: 18.5,
                    lineHeight: 1.45,
                }}
            >
                {desc}
            </Typography>
        </Card>
    );
}

