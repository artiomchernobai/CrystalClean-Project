import { Box, Typography } from "@mui/material";
import ServiceSmallCard from "./ServiceSmallCard";
import { useTranslations, useLocale } from 'next-intl';

export default function MainServices() {
    const locale = useLocale();
    const t = useTranslations('homepage');

    return (
        <Box //main container
            sx={{
                width: '100%',
                minHeight: '500px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',

            }}
        >
            <Box //alignment container
                sx={{
                    width: '90%',
                    display: 'flex',
                    alignItems: 'Flex-start',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            > 
                <Box //text info
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        paddingRight: '20px',
                        gap: '15px',
                        width: '30%',
                    }}
                >
                    <Typography 
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {t('MainPriceHeader')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize:'18px' }}>{t('MainPriceDescription')}</Typography>
                </Box> 
                <Box //price cards container
                    sx={{
                        width: '60%',
                        flexWrap: 'wrap',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <Box // first column
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginRight: '10px',
                            width: '40%'
                        }}
                    >
                        <ServiceSmallCard
                            title={t('MainPriceCard.carpetCleaning.title')}
                            price={t('MainPriceCard.carpetCleaning.price')}
                            link={`/${locale}/services/carpetCleaning`}
                        />
                        <ServiceSmallCard
                            title={t('MainPriceCard.windowCleaning.title')}
                            price={t('MainPriceCard.windowCleaning.price')}
                            link={`/${locale}/services/windowCleaning`}
                        />
                        <ServiceSmallCard
                            title={t('MainPriceCard.fullHouseCleaning.title')}
                            price={t('MainPriceCard.fullHouseCleaning.price')}
                            link={`/${locale}/services/fullHouseCleaning`}
                        />
                    </Box>
                    <Box // second column
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '10px',
                            width: '40%'
                        }}
                    >
                        <ServiceSmallCard
                            title={t('MainPriceCard.officeCleaning.title')}
                            price={t('MainPriceCard.officeCleaning.price')}
                            link={`/${locale}/services/officeCleaning`}
                        />
                        <ServiceSmallCard
                            title={t('MainPriceCard.afterConstructionCleaning.title')}
                            price={t('MainPriceCard.afterConstructionCleaning.price')}
                            link={`/${locale}/services/afterConstructionCleaning`}
                        />
                        <ServiceSmallCard
                            title={t('MainPriceCard.facadeCleaning.title')}
                            price={t('MainPriceCard.facadeCleaning.price')}
                            link={`/${locale}/services/facadeCleaning`}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}