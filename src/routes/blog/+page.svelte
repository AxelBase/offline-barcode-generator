<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introducing AxelBase Offline Barcode Generator', description: 'A 100% client-side, privacy-first barcode generator that works completely offline.' },
    { href: '/blog/posts/post2', title: 'Why Your Barcode Tool Should Never Touch the Internet', description: 'The dangers of online generators and how AxelBase keeps your data safe.' },
    { href: '/blog/posts/post3', title: 'Generate 100 Barcodes in One Click – Here’s How', description: 'Master bulk generation with ZIP export and high-resolution options.' },
    { href: '/blog/posts/post4', title: 'From Code 128 to PDF417: Understanding Barcode Types', description: 'A quick guide to choosing the right symbology for your use case.' },
    { href: '/blog/posts/post5', title: 'Perfect White Backgrounds and Padding – Pro Tips', description: 'How to make your barcodes scannable on any printer or screen.' },
    { href: '/blog/posts/post6', title: 'Deploying AxelBase to GitHub Pages in 60 Seconds', description: 'Step-by-step guide to hosting your own private barcode generator.' },
    { href: '/blog/posts/post7', title: 'Self-Hosted, No Tracking, No Limits – The AxelBase Philosophy', description: 'Why we built a tool that respects your privacy and works forever offline.' },
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Offline Barcode Generator</title>
  <meta name="description" content="Learn how to generate barcodes offline with full privacy. Tutorials, tips, and updates from the AxelBase team." />
</svelte:head>

<div class="container fade-in blog-index py-5">
  <header class="blog-header text-center mb-5">
    <h1><i class="bi bi-journal-text"></i> AxelBase Blog</h1>
    <p class="subtitle lead">
      Tutorials, insights, and best practices for generating barcodes <strong>completely offline</strong> — with zero data sent anywhere.
    </p>
    <p class="text-muted small mt-3">
      Built for privacy • Hosted on GitHub • Works forever
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card h-100 shadow-sm border-0">
        <div class="card-body d-flex flex-column">
          <h2 class="post-title h5 fw-bold">{post.title}</h2>
          <p class="post-description text-muted small flex-grow-1">{post.description}</p>
          <span class="read-more mt-3 text-primary fw-semibold">
            Read Article →
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index { max-width: 1100px; margin: 0 auto; }
  .blog-header h1 { font-size: 2.8rem; font-weight: 300; }
  .subtitle { max-width: 700px; margin: 0 auto; color: rgba(255,255,255,0.9); }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
    background: rgba(255,255,255,0.95);
    border-radius: 1rem;
    overflow: hidden;
  }
  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
  }
  .post-title { color: #5e72e4; }
  .read-more { opacity: 0.8; }
  .post-card:hover .read-more { opacity: 1; transform: translateX(5px); }
</style>