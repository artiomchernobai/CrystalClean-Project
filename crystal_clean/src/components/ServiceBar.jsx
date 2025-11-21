"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Box, Typography } from "@mui/material";
import { useLocale } from "next-intl"

export default function ServiceBar() {
    const t = useTranslations("ServicesBar");
    const pathname = usePathname();
    const locale = useLocale()
    const servicesList = [
        { slug: "afterConstructionCleaning", key: "construction" },
        { slug: "carpetCleaning", key: "carpet" },
        { slug: "windowCleaning", key: "windows" },
        { slug: "facadeCleaning", key: "facade" },
        { slug: "officeCleaning", key: "office" },
        { slug: "fullHouseCleaning", key: "house" }
    ];


    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" }, // ⬅️ Скрыть на мобильных
                width: "100%",
                py: 3,
                backgroundColor: "white",
                borderBottom: "1px solid #e0e0e0",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
            }}
        >

            {/* Контейнер ссылок */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    display: "flex",
                    gap: 1,
                    overflowX: "auto",
                    "::-webkit-scrollbar": { height: 6 },
                    "::-webkit-scrollbar-thumb": {
                        background: "white",
                        borderRadius: 0
                    },
                    flexWrap: 'wrap',
                    justifyContent: "center",

                }}
            >
                {servicesList.map(service => {
                    const isActive = pathname.includes(service.slug);

                    return (
                        <Link
                            key={service.slug}
                            href={`/${locale}/services/${service.slug}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Box
                                sx={{
                                    px: 2,
                                    whiteSpace: "nowrap",
                                    fontSize: 17,
                                    fontWeight: 600,
                                    color: isActive ? "#ffffff" : "#32598c",
                                    backgroundColor: isActive ? "#32598c" : "#e6edf5",
                                    border: "2px solid",
                                    borderColor: isActive ? "#32598c" : "transparent",
                                    transition: "0.2s",
                                    "&:hover": {
                                        backgroundColor: isActive ? "#2c4e7e" : "#dce7f3",
                                    }
                                }}
                            >
                                {t(`list.${service.key}`)}
                            </Box>
                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
}
