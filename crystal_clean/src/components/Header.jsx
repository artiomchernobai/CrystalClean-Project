'use client';

import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header'); // переводы для текста кнопок
  const locale = useLocale();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const locales = ['en', 'ru', 'ro'];

  // При смене языка остаёмся на текущем пути
  const getLocalizedPath = (newLocale) => {
    const parts = pathname.split('/');
    parts[1] = newLocale; // заменяем первую часть маршрута
    return parts.join('/');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',       // ✅ фон белый
        color: '#38598C',               // ✅ текст и кнопки — предыдущий цвет фона
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Логотип */}
        <Typography
          variant="h6"
          component={Link}
          href={`/${locale}`}
          sx={{
            textDecoration: 'none',
            color: 'inherit',   // наследует #38598C
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          CrystalClean
        </Typography>

        {/* Ссылки */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href={`/${locale}`}>{t('home')}</Button>
          <Button color="inherit" component={Link} href={`/${locale}/about`}>{t('about')}</Button>
          <Button color="inherit" component={Link} href={`/${locale}/contact`}>{t('contact')}</Button>
        </Box>

        {/* Кнопка выбора языка */}
        <Box>
          <IconButton color="inherit" onClick={handleClick}>
            <LanguageIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {locales.map((lng) => (
              <MenuItem
                key={lng}
                component={Link}
                href={getLocalizedPath(lng)}
                onClick={handleClose}
                selected={locale === lng}
              >
                {lng.toUpperCase()}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
