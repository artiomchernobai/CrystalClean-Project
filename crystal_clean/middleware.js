import createMiddleware from 'next-intl/middleware';
import {routing} from 'src/i18n/routing.js';
 
export default createMiddleware(routing);
 
export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};