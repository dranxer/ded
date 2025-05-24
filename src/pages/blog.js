import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using a reliable WordPress demo site temporarily
    fetch('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        // Transform the WordPress.com API response to match our needs
        const formattedPosts = data.posts.map(post => ({
          id: post.ID,
          title: { rendered: post.title },
          excerpt: { rendered: post.excerpt },
          link: post.URL,
          date: post.date,
          featured_image: post.featured_image
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ background: '#0a1033', minHeight: '100vh', color: '#fff' }}>
      <Head>
        <title>Blog | Think India</title>
        <meta name="description" content="Read the latest articles and updates from Think India" />
      </Head>
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1rem 30px 1rem', textAlign: 'center' }}>
        <h1 style={{ color: '#FF9933', fontSize: '2.7rem', fontWeight: 800, marginBottom: 8 }}>Blog</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <span style={{ width: 120, height: 5, borderRadius: 3, background: 'linear-gradient(90deg, #FF9933 0%, #fff 50%, #138808 100%)', display: 'block' }}></span>
        </div>
        <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 32 }}>
          Explore articles, stories, and updates from the Think India community. Stay informed and inspired by our latest blog posts.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '2rem', minHeight: 200 }}>
          <h2 style={{ color: '#FF9933', fontSize: '1.5rem', marginBottom: 12 }}>Latest Posts</h2>
          {loading && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ color: '#fff', opacity: 0.8 }}>Loading posts...</p>
            </div>
          )}
          {error && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  background: '#FF9933',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Try Again
              </button>
            </div>
          )}
          {!loading && !error && posts.length === 0 && (
            <p style={{ color: '#fff', opacity: 0.8 }}>No blog posts found.</p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {posts.map(post => (
              <div key={post.id} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 8, padding: '1.5rem', textAlign: 'left' }}>
                {post.featured_image && (
                  <img 
                    src={post.featured_image} 
                    alt={post.title.rendered}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '1rem'
                    }}
                  />
                )}
                <h3 style={{ color: '#FF9933', fontSize: '1.3rem', marginBottom: 8 }}>{post.title.rendered}</h3>
                <div style={{ color: '#222', background: '#fff', borderRadius: 6, padding: '1rem', marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#FF9933', fontWeight: 600, textDecoration: 'underline', fontSize: '1rem' }}
                  >
                    Read Full Post
                  </a>
                  <span style={{ color: '#fff', opacity: 0.7, fontSize: '0.9rem' }}>
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 