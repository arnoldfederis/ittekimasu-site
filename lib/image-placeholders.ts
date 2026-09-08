const svgToDataUrl = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

/*
 * The blur that stands in while a screenshot loads. Drawn from the app's own canvas and
 * primary, so the first paint is already the right colour temperature — a violet placeholder
 * under a teal screenshot flashes the wrong brand for as long as the image takes.
 */
export const deviceBlurDataURL = svgToDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 96">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#f5f1e6"/>
        <stop offset="50%" stop-color="#e6f0ec"/>
        <stop offset="100%" stop-color="#bcd9ce"/>
      </linearGradient>
    </defs>
    <rect width="48" height="96" rx="10" fill="url(#g)"/>
  </svg>
`);

export const iconBlurDataURL = svgToDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#1e8f70"/>
        <stop offset="100%" stop-color="#0a5442"/>
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#g)"/>
  </svg>
`);
