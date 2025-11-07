import { Box, Typography } from '@mui/material';
import { useTranslations, useLocale } from 'next-intl';

export default function PresentingImage() {
    const t = useTranslations('homepage');
    const locale = useLocale();
  return (
    <Box>
        <Box
        sx={{
            width: '100%',
            height: '30px',
            backgroundColor: '#32598c',
            display: 'flex',
            alignItems: 'center',
        }}
        >
        </Box>

        <Box
        sx={{
            position: 'relative',
            width: '100%',
            height: '600px',
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
                padding: '20px',    
            }}
            >
            <Typography variant="h1">{t('welcome')}</Typography>
            <Typography variant="h5">{t('welcomeDescription')}</Typography>
            </Box>
        </Box>
    </Box>
  );
}