<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Deploying AxelBase to GitHub Pages in 60 Seconds | AxelBase Blog</title>
  <meta name="description" content="Host your own private, offline barcode generator for free using GitHub Pages — no server, no cost, full control." />
  <meta property="og:title" content="Deploying AxelBase to GitHub Pages in 60 Seconds" />
  <meta property="og:description" content="Step-by-step guide to self-hosting your own offline barcode tool — permanently free and private." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Self-Hosting Guide</p>
  </div>

  <article class="prose">
    <h1>Deploying AxelBase to GitHub Pages in 60 Seconds</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>Want your own private barcode generator at <code>yourname.github.io/barcodes</code>? Here’s how — no server, no cost, takes one minute.</p>

    <h2>One-Click Deploy</h2>
    <p>Just click this button:</p>
    <p><a href="https://github.com/new?template_name=offline-barcode-generator&template_owner=yourusername" class="btn btn-success">Use this template →</a></p>

    <h2>Or Manual Steps (60 seconds)</h2>
    <ol>
      <li>Fork the repo</li>
      <li>Go to Settings → Pages</li>
      <li>Select “GitHub Actions”</li>
      <li>Commit any change</li>
      <li>Wait 30 seconds</li>
    </ol>

    <p>Done. Your private barcode tool is live forever.</p>

    <h2>Custom Domain? Easy.</h2>
    <p>Add a CNAME file → point your domain → done.</p>

    <h2>Benefits of Self-Hosting</h2>
    <ul>
      <li>100% private — no external analytics</li>
      <li>Works offline forever</li>
      <li>Custom branding allowed</li>
      <li>No usage limits</li>
      <li>Full control</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Can I remove the “AxelBase” name?</summary>
      <p>Yes — it’s open source. Rebrand freely.</p>
    </details>
    <details>
      <summary>Does it cost anything?</summary>
      <p>Never. GitHub Pages is free forever.</p>
    </details>

    <p class="italic-note">Your tool. Your domain. Your rules.</p>
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