'use client';

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
      <Grid
        container
        spacing={{ xs: 4, md: 15 }} // На телефоне меньше расстояние
        justifyContent="center"
        sx={{
          px: { xs: 2, md: 8 },
          textAlign: { xs: 'center', md: 'left' }, // центр → слева
        }}
      >
        {/* Колонка 1 */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            {t('company')}
          </Typography>

          <Link
            href={`/${locale}/about`}
            color="inherit"
            underline="hover"
            sx={{ display: 'block', mt: 0.5 }}
          >
            {t('about')}
          </Link>
        </Grid>

        {/* Колонка 2 */}
        <Grid item xs={12} md={4}>
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

        {/* Колонка 3 */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            {t('location')}
          </Typography>

          <Typography variant="body2">
            Bălți, Moldova<br />
            Str. Independenței 12
          </Typography>
        </Grid>
      </Grid>

      {/* Разделительная линия */}
      <Box
        sx={{
          height: '1px',
          width: '100%',
          backgroundColor: 'white',
          opacity: 0.5,
          mt: 4,
        }}
      />

      {/* Нижняя строка */}
      <Box
        sx={{
          textAlign: 'center',
          py: 2,
        }}
      >
        <Typography variant="body2">
          {t('rights', { locale })}
        </Typography>
      </Box>
    </Box>
  );
}
