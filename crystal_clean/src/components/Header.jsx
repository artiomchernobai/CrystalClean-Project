'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  const [servicesAnchor, setServicesAnchor] = useState(null);
  const servicesOpen = Boolean(servicesAnchor);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleServicesClick = (e) => setServicesAnchor(e.currentTarget);
  const handleServicesClose = () => setServicesAnchor(null);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const locales = ['en', 'ru', 'ro'];

  const getLocalizedPath = (newLocale) => {
    const parts = pathname.split('/');
    parts[1] = newLocale;
    return parts.join('/');
  };

  // Закрывать меню при скролле
  useEffect(() => {
    if (!servicesOpen) return;
    const handleScroll = () => handleServicesClose();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [servicesOpen]);

  return (
    <>
      {/* HEADER BAR */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white', color: 'black',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 80,
            px: { xs: 2, md: 6 },
            py: 2,
          }}
        >
          {/* LOGO */}
          <Link href={`/${locale}/home`} style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src="/logo/logo.png"
              alt="CrystalClean Logo"
              sx={{ height: 60, width: 'auto' }}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              gap: 2,
              alignItems: 'center',
              color: 'black'
            }}
          >

            <Button
              component={Link}
              href={`/${locale}/order`}
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'black'
              }}
            >
              +373-789-45-612
            </Button>
            <Button
              component={Link}
              href={`/${locale}/about`}
              sx={{
                fontSize: '20px',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(56,89,140,0.1)' },
                color: 'black',
              }}
            >
              {t('about')}
            </Button>

            {/* SERVICES DROPDOWN */}
            <Button
              onClick={handleServicesClick}
              sx={{
                fontSize: '20px',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(56,89,140,0.1)' },
                color: 'black',
              }}
            >
              {t('services')}
            </Button>

            <Menu
              anchorEl={servicesAnchor}
              open={servicesOpen}
              onClose={handleServicesClose}
              disableScrollLock
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1,
                  minWidth: 220,
                  borderRadius: '10px',
                },
              }}
            >
              {[
                'carpetCleaning',
                'windowCleaning',
                'fullHouseCleaning',
                'officeCleaning',
                'afterConstructionCleaning',
                'facadeCleaning',
              ].map((service) => (
                <MenuItem
                  key={service}
                  component={Link}
                  href={`/${locale}/services/${service}`}
                  onClick={handleServicesClose}
                >
                  {t(`servicesOptions.${service}`)}
                </MenuItem>
              ))}
            </Menu>

            {/* LANG SWITCH */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {locales.map((lng) => (
                <Button
                  key={lng}
                  component={Link}
                  href={getLocalizedPath(lng)}
                  sx={{
                    minWidth: 40,
                    borderBottom: locale === lng ? '2px solid black' : 'none',
                    borderRadius: 0,
                    '&:hover': { backgroundColor: 'rgba(56,89,140,0.1)' },
                    color: '#32598c',
                  }}
                >
                  {lng.toUpperCase()}
                </Button>
              ))}
            </Box>
          </Box>

          {/* MOBILE BURGER BUTTON */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: 'flex', lg: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 270, p: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={`/${locale}/home`} onClick={toggleDrawer}>
                <ListItemText primary={t('home')} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href={`/${locale}/about`} onClick={toggleDrawer}>
                <ListItemText primary={t('about')} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href={`/${locale}/order`} onClick={toggleDrawer}>
                <ListItemText primary={'+373-789-45-612'} />
              </ListItemButton>
            </ListItem>

            {/* SERVICES ACCORDION-LIKE LIST */}
            <Divider sx={{ my: 1 }} />
            <Typography sx={{ px: 2, pt: 1, fontWeight: 600 }}>
              {t('services')}
            </Typography>

            {[
              'carpetCleaning',
              'windowCleaning',
              'fullHouseCleaning',
              'officeCleaning',
              'afterConstructionCleaning',
              'facadeCleaning',
            ].map((service) => (
              <ListItem key={service} disablePadding>
                <ListItemButton
                  component={Link}
                  href={`/${locale}/services/${service}`}
                  onClick={toggleDrawer}
                >
                  <ListItemText primary={t(`servicesOptions.${service}`)} />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 2 }} />

            {/* LANGUAGE SWITCH MOBILE */}
            <Typography sx={{ px: 2, pb: 1, fontWeight: 600 }}>
              {t('language')}
            </Typography>

            {locales.map((lng) => (
              <ListItem key={lng} disablePadding>
                <ListItemButton
                  component={Link}
                  href={getLocalizedPath(lng)}
                  onClick={toggleDrawer}
                >
                  <ListItemText
                    primary={lng.toUpperCase()}
                    sx={{
                      fontWeight: locale === lng ? 700 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* BLUE BAR UNDER HEADER */}
      <Box
        sx={{
          width: '100%',
          height: '30px',
          backgroundColor: '#32598c',
        }}
      />
    </>
  );
}
