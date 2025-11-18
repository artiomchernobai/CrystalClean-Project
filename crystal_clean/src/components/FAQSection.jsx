'use client';

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
    const t = useTranslations('FAQ');

    const faqItems = [
        { question: t('q1'), answer: t('a1') },
        { question: t('q2'), answer: t('a2') },
        { question: t('q3'), answer: t('a3') },
        { question: t('q4'), answer: t('a4') },
        { question: t('q5'), answer: t('a5') },
        { question: t('q6'), answer: t('a6') },
        { question: t('q7'), answer: t('a7') },
        { question: t('q8'), answer: t('a8') },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                py: 8,
                px: { xs: 2, sm: 4, md: 8 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    fontWeight: 700,
                    mb: 6,
                    textAlign: 'center',
                    color: '#32598c',
                    fontSize: '60px'
                }}
            >
                {t('header')}
            </Typography>

            <Box sx={{ width: '100%', maxWidth: 900 }}>
                {faqItems.map((item, index) => (
                    <Accordion
                        key={index}
                        sx={{
                            backgroundColor: 'white',
                            mb: 2,
                            borderRadius: 2,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                            '&:before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                px: 3,
                                py: 2,
                            }}
                        >
                            <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 3, py: 2 }}>
                            <Typography sx={{ fontSize: 20, color: 'text.secondary' }}>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
}
