'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import OrderForm from '@/components/OrderForm';
import OrderSummary from '@/components/OrderSummary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrderPage() {
  const [priceData, setPriceData] = useState({
    total: 0,
    description: '',
    unitPrice: 0,
  });

  return (
    <>
        <Header />
        <Box sx={{ display: 'flex', minHeight: '70vh' }}>
            <OrderForm onPriceChange={setPriceData} sx={{ width: '50%' }}/>
            <OrderSummary priceData={priceData} sx={{ width: '50%'}}/>
        </Box>
        <Footer />
    </>
  );
}
