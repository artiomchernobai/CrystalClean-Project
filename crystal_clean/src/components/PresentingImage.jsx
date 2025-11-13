import { Box, Typography, Button } from '@mui/material';
import { useTranslations, useLocale } from 'next-intl';

export default function PresentingImage() {
    const t = useTranslations('homepage');
    const locale = useLocale();
  return (
    <Box>
        <Box
        sx={{
            position: 'relative',
            width: '100%',
            height: '700PX',
            backgroundImage: `
            linear-gradient(rgba(30, 20, 100, 0.0), rgba(30, 20, 100, 0.5)),
            url('/images/main_page_first.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
        }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    width:'100%',
                    padding: '20px',  
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                }}
            >
                <Typography variant="h1">{t('welcome')}</Typography>
                <Typography variant="h5">{t('welcomeDescription')}</Typography>
                <Button 
                    variant="contained" 
                    href={`/${locale}/order`}
                    sx={{ 
                        backgroundColor: "#00a1d1",
                        color: "white",
                        minwidth: '150px',
                        height: '50px',  
                        fontSize: '18px',
                    }}
                >
                    {t('welcomeButton')}
                </Button>
            </Box>

        </Box>
    </Box>
  );
}