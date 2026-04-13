import { getCollection } from 'astro:content';

export async function GET() {
    const base = 'https://samuelcosta.me';
    const posts = await getCollection('posts');

    const xmlEscape = (value: string) =>
        value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');

    const pages = [
        { path: '/', lastmod: new Date().toISOString() },
        ...posts
            .map((post) => ({
                path: `/posts/${post.id.replace(/\.(md|mdx)$/i, '')}`,
                lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
            }))
            .sort((a, b) => b.lastmod.localeCompare(a.lastmod)),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
            .map((page) => {
                const full = `${base}${page.path}`;
                return `  <url><loc>${xmlEscape(full)}</loc><lastmod>${page.lastmod}</lastmod></url>`;
            })
            .join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
