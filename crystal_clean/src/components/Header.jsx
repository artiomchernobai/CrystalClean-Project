'use client';

import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const locales = ['en', 'ru', 'ro'];

  const getLocalizedPath = (newLocale) => {
    const parts = pathname.split('/');
    parts[1] = newLocale;
    return parts.join('/');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2,
      }}>
        {/* Логотип */}
        <Typography
          variant="h6"
          component={Link}
          href={`/${locale}/home`}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 200,
            letterSpacing: 1,
            fontSize: '20px',
          }}
        >
          <Box //logo
            component="img"
            src="/logo/logo.png"
            alt="CrystalClean Logo"
            sx={{
              height: 60,
              width: 'auto',
              display: 'block',
            }}
          />

        </Typography>

        {/* Ссылки */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Button
            color="inherit"
            component={Link}
            href={`/${locale}/home`}
            sx={{ 
              fontSize: '20px', 
              textTransform: 'none',
              transition: '0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(56, 89, 140, 0.1)',
                  borderRadius: '10px',
                },
            }}
          >
            {t('home')}
          </Button>

          <Button
            color="inherit"
            component={Link}
            href={`/${locale}/about`}
            sx={{ 
              fontSize: '20px', 
              textTransform: 'none',
              transition: '0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(56, 89, 140, 0.1)',
                },
            }}
          >
            {t('about')}
          </Button>

          <Button
            color="inherit"
            component={Link}
            href={`/${locale}/services`}
            sx={{ 
              fontSize: '20px', 
              textTransform: 'none',
              transition: '0.2s',
              '&:hover': {
                backgroundColor: 'rgba(56, 89, 140, 0.1)',
              },
            }}
          >
            {t('services')}
          </Button>
        </Box>

        {/* Change Language */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          {locales.map((lng) => (
            <Button
              key={lng}
              color="inherit"
              component={Link}
              href={getLocalizedPath(lng)}
              onClick={handleClose}
              sx={{
                minWidth: 40,
                padding: '4px 8px',
                fontWeight: locale === lng ? 700 : 400,
                borderBottom: locale === lng ? '2px solid #38598C' : 'none',
                borderRadius: 0,
                transition: '0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(56, 89, 140, 0.1)',
                },
              }}
            >
              {lng.toUpperCase()}
            </Button>
          ))}
        </Toolbar>

      </Toolbar>
    </AppBar>
  );
}
