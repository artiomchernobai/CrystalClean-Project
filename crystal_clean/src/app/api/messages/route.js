import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';
  
  // Validate locale
  const validLocales = ['en', 'ro', 'ru'];
  const currentLocale = validLocales.includes(locale) ? locale : 'en';

  try {
    // Load the requested locale file
    const filePath = path.join(process.cwd(), 'messages', `${currentLocale}.json`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const messages = JSON.parse(fileContent);
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error(`Failed to load messages for ${currentLocale}:`, error);
    
    // Fallback to English if the requested locale fails
    if (currentLocale !== 'en') {
      try {
        const fallbackPath = path.join(process.cwd(), 'messages', 'en.json');
        const fallbackContent = await fs.readFile(fallbackPath, 'utf8');
        const fallbackMessages = JSON.parse(fallbackContent);
        return NextResponse.json(fallbackMessages);
      } catch (fallbackError) {
        console.error('Failed to load fallback messages:', fallbackError);
      }
    }
    
    // Return empty object as last resort
    return NextResponse.json({});
  }
}