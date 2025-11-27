<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Perfect White Backgrounds and Padding – Pro Tips | AxelBase Blog</title>
  <meta name="description" content="Learn why white background and proper padding are critical for reliable barcode scanning — and how AxelBase does it perfectly." />
  <meta property="og:title" content="Perfect White Backgrounds and Padding – Pro Tips" />
  <meta property="og:description" content="Avoid scanning failures with correct quiet zones, white backgrounds, and print-ready PNGs." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Print Perfection</p>
  </div>

  <article class="prose">
    <h1>Perfect White Backgrounds and Padding – Pro Tips</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>You’ve generated a beautiful barcode — but it fails to scan. Why? 99% of the time: <strong>missing white space</strong>.</p>

    <h2>The “Quiet Zone” Rule</h2>
    <p>Every barcode needs a blank white border (called a quiet zone) around all sides — minimum 10× the width of the narrowest bar. Without it, scanners get confused.</p>

    <p>AxelBase automatically adds:</p>
    <ul>
      <li>Pure white background</li>
      <li>20px padding on all sides</li>
      <li>Extra padding in high-resolution modes</li>
    </ul>

    <h2>Why Online Generators Fail</h2>
    <p>Most web tools output barcodes on transparent or colored backgrounds — fine for screens, terrible for printing. Result: scanning errors at checkout or warehouse.</p>

    <h2>Best Practices Built In</h2>
    <ul>
      <li>White background (#FFFFFF)</li>
      <li>Minimum 20px padding (scales with resolution)</li>
      <li>Sharp 3× scaling for crisp printing</li>
      <li>PNG format (lossless)</li>
    </ul>

    <h2>Pro Tip: Resolution Matters</h2>
    <p>For thermal label printers → use 4K or Custom 6–8×<br>
    For laser/inkjet → 1080p is perfect<br>
    For mobile display → 720p is sufficient</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I remove the white background?</summary>
      <p>Not recommended — but you can crop manually after download.</p>
    </details>
    <details>
      <summary>Why PNG and not SVG?</summary>
      <p>PNG guarantees consistent rendering across all printers and apps.</p>
    </details>

    <p class="italic-note">A scannable barcode isn’t pretty — it’s correct.</p>
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