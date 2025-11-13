'use client';

import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function OrderSummary({ priceData }) {
  const { total, description, unitPrice } = priceData;
  const t = useTranslations("orderpage")

  return (
    <Box
      sx={{
        width: '100%',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Typography /* head */ variant='h3'>{t('orderResultHeader')}</Typography>
        <Box
        sx={{
          display: 'flex',
          flexDirection: "column",
          marginLeft: 6,
          justifyContent: 'center',
          alignItems: 'center'

        }}
        // price box
        >

          <Typography variant="h3" sx={{ fontWeight: 900, color: '#000' }}>
            {total > 0 ? `${total.toFixed(2)} MDL` : '0 MDL'}
          </Typography>
          {unitPrice > 0 && (
            <Typography variant="body1" sx={{ mt: 1, color: '#555' }}>
              {unitPrice} MDL / m²
            </Typography>
          )}
        </Box>
      </Box>

    </Box>
  );
}
