export default function sitemap() {
  const baseUrl = 'https://scriptmotion.rahll.xyz';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

  ];
}
