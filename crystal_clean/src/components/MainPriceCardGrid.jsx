"use client";

import { Box, Typography } from "@mui/material";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function MainPriceCardsGrid() {
  const t = useTranslations("MainPriceCard");
  const locale = useLocale();

  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        py: 5,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >

        <ServiceCard
          href={`/${locale}/services/constructionCleaning`}
          title={t("construction.title")}
          desc={t("construction.desc")}
          price={t("construction.price", { value: 25 })}
          duration={t("construction.duration")}
          img="/images/afterConstructionCleaning.jpg"
        />

        <ServiceCard
          href={`/${locale}/services/officeCleaning`}
          title={t("office.title")}
          desc={t("office.desc")}
          price={t("office.price", { value: 15 })}
          duration={t("office.duration")}
          img="/images/services/office.jpg"
        />

        <ServiceCard
          href={`/${locale}/services/windowCleaning`}
          title={t("windows.title")}
          desc={t("windows.desc")}
          price={t("windows.price", { value: 10 })}
          duration={t("windows.duration")}
          img="/images/windowCleaning.jpg"
        />

        <ServiceCard
          href={`/${locale}/services/carpetCleaning`}
          title={t("carpet.title")}
          desc={t("carpet.desc")}
          price={t("carpet.price", { value: 20 })}
          duration={t("carpet.duration")}
          img="/images/carpetCleaning.jpg"
        />

        <ServiceCard
          href={`/${locale}/services/houseCleaning`}
          title={t("house.title")}
          desc={t("house.desc")}
          price={t("house.price", { value: 30 })}
          duration={t("house.duration")}
          img="/images/houseCleaning.jpeg"
        />

        <ServiceCard
          href={`/${locale}/services/facadeCleaning`}
          title={t("facade.title")}
          desc={t("facade.desc")}
          price={t("facade.price", { value: 40 })}
          duration={t("facade.duration")}
          img="/images/facadeCleaning.jpg"
        />
      </Box>
    </Box>
  );
}


function ServiceCard({ title, desc, price, duration, img, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Box
        className="card"
        sx={{
          width: { xs: "100%", md: "400px" },
          height: { xs: "500px"},
          backgroundColor: "white",
          borderRadius: 2,
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          border: "1px solid #ddd",
          transition: "0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent:'center',
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        {/* TITLE */}
        <Typography
          variant='h5'
          sx={{
            p: 2,
            textAlign: "center",
            color: "#32598c",
            fontWeight: 700,
            FontSize: '26px',
            zIndex: 3,
            backgroundColor: "white",
            marginTop: '20px',
            marginBottom: '5px'
          }}
        >
          {title}
        </Typography>

        {/* IMAGE (80% HEIGHT) */}
        <Box
          sx={{
            flex: "0 0 90%",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 0.3s ease",
            opacity: 1,

            ".card:hover &": {
              opacity: 0,
              backgroundColor: '#32598c',
              color: 'white'
            },
          }}
        />

        {/* DESCRIPTION (APPEARS ON HOVER) */}
        <Box
          sx={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
            p: 2,
            backgroundColor: "white",
            opacity: 0,
            transition: "opacity 0.3s ease",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent:'flex-start',
            alignItems: 'center',

            ".card:hover &": {
              opacity: 1,
            },
          }}
        >
          <Typography sx={{ mb: 1, fontSize:'18px' }}>{desc}</Typography>
          <Typography sx={{ fontWeight: 600, fontSize:'20px', mb: 0.5 }}>{price}</Typography>
          <Typography sx={{ fontSize: '18px'}} variant="body2">{duration}</Typography>
        </Box>
      </Box>
    </Link>
  );
}
