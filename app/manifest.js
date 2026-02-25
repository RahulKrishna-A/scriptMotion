export default function manifest() {
  return {
    name: 'ScriptMotion - Handwriting Animation Generator',
    short_name: 'ScriptMotion',
    description: 'Convert any text into realistic handwriting animation videos instantly. Choose your font, customize the writing effect, and download as MP4 or GIF in seconds.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1c1c1e',
    theme_color: '#ffa200',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
