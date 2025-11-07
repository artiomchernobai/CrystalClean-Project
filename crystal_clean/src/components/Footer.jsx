import { Box, Typography, Link, Grid } from '@mui/material';
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
      }}
    >
      <Grid container columnSpacing={30} rowSpacing={4}  justifyContent="center"
        sx={{
          paddingTop: '20px',
          paddingBottom: '10px',
        }}
      >
        <Grid columns={12} span={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('company')}
          </Typography>
          <Link href={`/${locale}/about`} color="inherit" underline="hover">
            {t('about')}
          </Link>
        </Grid>

        <Grid columns={12} span={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('contact')}
          </Typography>
          <Typography variant="body2">
            <Link href="tel:+37312345678" color="inherit" underline="hover">
              +373 123 45678
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="mailto:info@example.com" color="inherit" underline="hover">
              info@example.com
            </Link>
          </Typography>
        </Grid>

        <Grid columns={12} span={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            {t('location')}
          </Typography>
          <Typography variant="body2">
            Bălți, Moldova<br />
            Str. Independenței 12
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          height:'1px',
          width: '100%',
          backgroundColor: 'white',
          marginTop: '20px',
        }}
      >
      </Box>
      <Box 
        sx={{ 
          textAlign: 'center',
          marginTop: '10px',
          paddingBottom: '10px',
          backgroundColor: '#32598c',
        }}>
        <Typography variant="body2">
          {t('rights', { locale })}
        </Typography>
      </Box>
    </Box>
  );
}