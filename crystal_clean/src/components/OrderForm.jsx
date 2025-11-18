'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';

export default function OrderForm({ onPriceChange }) {
    const t = useTranslations('orderpage');
    const tHeader = useTranslations('Header');
    const locale = useLocale();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        service: '',
        area: '',
        comment: '',
    });

    const prices = {
        carpetCleaning: 20,
        windowCleaning: 15,
        fullHouseCleaning: 40,
        officeCleaning: 30,
        afterConstructionCleaning: 50,
        facadeCleaning: 25,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = { ...form, [name]: value };
        setForm(updatedForm);

        // вычисляем стоимость, если выбрана услуга и указана площадь
        if (updatedForm.service && updatedForm.area > 0) {
            const total = prices[updatedForm.service] * parseFloat(updatedForm.area);
            onPriceChange({
                total,
                description: tHeader(`servicesOptions.${updatedForm.service}`),
                unitPrice: prices[updatedForm.service],
            });
        } else {
            onPriceChange({ total: 0, description: '', unitPrice: 0 });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(t('form.success'));
        setForm({ name: '', phone: '', service: '', area: '', comment: '' });
        onPriceChange({ total: 0, description: '', unitPrice: 0 });
    };

    const services = [
        { value: 'carpetCleaning', label: tHeader('servicesOptions.carpetCleaning') },
        { value: 'windowCleaning', label: tHeader('servicesOptions.windowCleaning') },
        { value: 'fullHouseCleaning', label: tHeader('servicesOptions.fullHouseCleaning') },
        { value: 'officeCleaning', label: tHeader('servicesOptions.officeCleaning') },
        { value: 'afterConstructionCleaning', label: tHeader('servicesOptions.afterConstructionCleaning') },
        { value: 'facadeCleaning', label: tHeader('servicesOptions.facadeCleaning') },
    ];

    return (
        <Box
            sx={{
                marginLeft: '40px',
                width: '70%',
            }}
        >
            <Typography 
                variant="h3"  
                sx={{ 
                    fontWeight: 600,
                    mb: 2,
                    paddingTop: 4,
                    paddingLeft: 4,
                    width: '100%'
                }}>
                {t('orderHeader')}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    padding: 4,
                    boxSizing: 'border-box',
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <TextField
                    fullWidth
                    label={t('nameLabel')}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                <TextField
                    fullWidth
                    label={t('phoneLabel')}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                <TextField
                    select
                    fullWidth
                    label={t('serviceLabel')}
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    margin="normal"
                    required
                >
                    {services.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    fullWidth
                    label={t('areaLabel')}
                    name="area"
                    type="number"
                    value={form.area}
                    onChange={handleChange}
                    margin="normal"
                    required
                    inputProps={{ min: 1 }}
                />

                <TextField
                    fullWidth
                    label={t('commentLabel')}
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={3}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 3,
                        backgroundColor: '#00a1d1',
                        fontWeight: 600,
                        '&:hover': { backgroundColor: '#006c8dff' },
                    }}
                >
                    {t('submitButton')}
                </Button>
            </Box>
        </Box>
    );
}
