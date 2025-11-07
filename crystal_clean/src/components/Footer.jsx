import { Box, Typography } from '@mui/material';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    return (
      <Box
        component="footer"
        sx={{
          backgroundColor: '#32598c',
          color: 'white',
          padding: '16px 0',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          {t('rights', { locale })}
        </Typography>
      </Box> 
    )   
}