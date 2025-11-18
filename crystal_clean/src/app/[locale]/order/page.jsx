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
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        backgroundImage: "radial-gradient(rgba(50,89,140,0.3), 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        backgroundAttachment: "fixed",
        minHeight: "100vh"
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#f2f2f2",
          minHeight: "70vh"
        }}
      >
        <OrderForm onPriceChange={setPriceData} />
        <OrderSummary priceData={priceData} />
      </Box>

      <Footer />
    </Box>

  );
}
