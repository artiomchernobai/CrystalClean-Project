import { Box, Typography } from "@mui/material";
import ServiceSmallCard from "./ServiceSmallCard";
import { useTranslations, useLocale } from 'next-intl';

export default function MainServices() {
    const locale = useLocale();
    const t = useTranslations('homepage');

    return (
        <Box // main container
            sx={{
                width: '100%',
                minHeight: '500px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}
        >
            <Box
                sx={{
                    width: '90%',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row'
                    },
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginTop: '7%',
                    marginBottom: '7%'
                }}
            >

                {/* ---------- TEXT BLOCK ---------- */}
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '30%'
                        },
                        marginBottom: { xs: '20px', md: 0 },
                        paddingRight: { md: '20px' },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ fontWeight: 'bold', color: '#32598c' }}
                    >
                        {t('MainPriceHeader')}
                    </Typography>

                    <Typography variant="body1" sx={{ fontSize: '18px' }}>
                        {t('MainPriceDescription')}
                    </Typography>
                </Box>

                {/* ---------- CARDS BLOCK ---------- */}
                <Box
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '60%'   // карточки справа
                        },
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', // в одну колонку
                            sm: 'column',
                            md: 'row'     // в две колонки
                        },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >

                    {/* Column 1 */}
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '48%'  // две колонки по 48%
                            },
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}
                    >
                        <ServiceSmallCard title={t('MainPriceCard.carpetCleaning.title')} price={t('MainPriceCard.carpetCleaning.price')} link={`/${locale}/services/carpetCleaning`} />
                        <ServiceSmallCard title={t('MainPriceCard.windowCleaning.title')} price={t('MainPriceCard.windowCleaning.price')} link={`/${locale}/services/windowCleaning`} />
                        <ServiceSmallCard title={t('MainPriceCard.fullHouseCleaning.title')} price={t('MainPriceCard.fullHouseCleaning.price')} link={`/${locale}/services/fullHouseCleaning`} />
                    </Box>

                    {/* Column 2 */}
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '48%'
                            },
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px'
                        }}
                    >
                        <ServiceSmallCard title={t('MainPriceCard.officeCleaning.title')} price={t('MainPriceCard.officeCleaning.price')} link={`/${locale}/services/officeCleaning`} />
                        <ServiceSmallCard title={t('MainPriceCard.afterConstructionCleaning.title')} price={t('MainPriceCard.afterConstructionCleaning.price')} link={`/${locale}/services/afterConstructionCleaning`} />
                        <ServiceSmallCard title={t('MainPriceCard.facadeCleaning.title')} price={t('MainPriceCard.facadeCleaning.price')} link={`/${locale}/services/facadeCleaning`} />
                    </Box>
                </Box>

            </Box>
        </Box>

    )
}