<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Self-Hosted, No Tracking, No Limits – The AxelBase Philosophy | Blog</title>
  <meta name="description" content="Why we built AxelBase as a fully offline, open-source, privacy-first barcode generator — and why this matters in 2025." />
  <meta property="og:title" content="Self-Hosted, No Tracking, No Limits – The AxelBase Philosophy" />
  <meta property="og:description" content="In a world of data harvesting, AxelBase proves useful tools can respect your privacy." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Our Philosophy</p>
  </div>

  <article class="prose">
    <h1>Self-Hosted, No Tracking, No Limits – The AxelBase Philosophy</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>We didn’t build AxelBase to make money. We built it because the alternatives were unacceptable.</p>

    <h2>The Problem</h2>
    <p>Every “free” online barcode generator:</p>
    <ul>
      <li>Logs your data</li>
      <li>Shows ads</li>
      <li>Goes down</li>
      <li>Changes terms</li>
      <li>Eventually dies</li>
    </ul>

    <h2>Our Solution</h2>
    <p>AxelBase is:</p>
    <ul>
      <li>100% static HTML/CSS/JS</li>
      <li>Open source (MIT license)</li>
      <li>No analytics</li>
      <li>No cookies</li>
      <li>No backend</li>
      <li>No limits</li>
      <li>Works offline forever</li>
    </ul>

    <h2>You Own Your Tools</h2>
    <p>Download it. Host it. Modify it. Share it. It will never phone home. It will never break because a company shut down.</p>

    <h2>Join the Movement</h2>
    <p>We believe useful tools should be:</p>
    <ul>
      <li>Private by default</li>
      <li>Free forever</li>
      <li>Owned by users</li>
    </ul>

    <p>AxelBase is just the beginning.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why not add cloud sync?</summary>
      <p>Because cloud = someone else’s computer.</p>
    </details>
    <details>
      <summary>Will you add more barcode types?</summary>
      <p>Only if they’re useful and don’t compromise privacy or simplicity.</p>
    </details>

    <p class="italic-note">The future of tools is offline, open, and user-owned.</p>
  </article>
</div>

<style>
  /* Reusing your beautiful style from the template */
  :global(.post-layout) { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  :global(.breadcrumbs) { font-size: 0.9rem; color: #aaa; margin-bottom: 1.5rem; }
  :global(.breadcrumbs a) { color: #5e72e4; text-decoration: none; }
  :global(.breadcrumbs a:hover) { text-decoration: underline; }
  :global(.prose h1) { font-size: 2.5rem; margin-bottom: 0.5rem; color: white; }
  :global(.prose h2) { margin-top: 2.5rem; color: #5e72e4; }
  :global(.prose p, .prose ul, .prose details) { color: rgba(255,255,255,0.9); }
  :global(.post-meta) { color: #aaa; border-bottom: 1px solid #444; padding-bottom: 1rem; margin-bottom: 2rem; }
  :global(.italic-note) { font-style: italic; text-align: center; margin-top: 3rem; color: #999; }
</style>