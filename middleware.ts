import { NextRequest, NextResponse } from 'next/server';

// Rate limiting storage
const rateLimit = new Map();

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security Headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: blob: https:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://api.weao.xyz;
      media-src 'self';
    `.replace(/\s+/g, ' ').trim()
  );

  // Basic rate limiting
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 100; // More lenient for main site

  const key = `${ip}:${Math.floor(now / windowMs)}`;
  const requests = rateLimit.get(key) || 0;

  if (requests >= maxRequests) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  rateLimit.set(key, requests + 1);

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp)).*)',
  ],
};
