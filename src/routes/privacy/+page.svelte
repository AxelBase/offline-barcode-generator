<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Offline Barcode Generator</title>
  <meta name="description" content="We collect nothing. Your barcode data never leaves your device. 100% private, offline, and open-source." />
  <meta property="og:title" content="Privacy Policy | AxelBase" />
  <meta property="og:description" content="AxelBase does not collect, store, or transmit any data — ever. Your privacy is absolute." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 27, 2025</p>

    <p>At <strong>AxelBase Offline Barcode Generator</strong>, your privacy is not a feature — it’s the entire foundation.</p>

    <p>We believe that tools should respect you. That’s why this barcode generator runs <strong>100% in your browser</strong>, with <strong>zero data collection</strong>, no tracking, no analytics, and no servers.</p>

    <h2>We Collect Nothing. Period.</h2>
    <p>When you use AxelBase:</p>
    <ul>
      <li><strong>No IP address</strong> is logged</li>
      <li><strong>No barcode data</strong> is transmitted</li>
      <li><strong>No usage statistics</strong> are recorded</li>
      <li><strong>No cookies</strong> are set</li>
      <li><strong>No localStorage</strong> beyond your current session</li>
      <li><strong>No analytics</strong> (not even privacy-friendly ones)</li>
    </ul>

    <p>Your product codes, serial numbers, prices, inventory IDs — <em>everything stays on your device</em>.</p>

    <h2>How It Works</h2>
    <p>All barcode generation uses <code>bwip-js</code> running locally in your browser. ZIP files are created with <code>JSZip</code> — entirely client-side. When you click “Download”, the file comes directly from your own computer. <strong>We never see it.</strong></p>

    <h2>No Third Parties</h2>
    <p>We do not use:</p>
    <ul>
      <li>Google Analytics</li>
      <li>Meta Pixel</li>
      <li>Cloudflare Insights</li>
      <li>Any advertising or tracking scripts</li>
    </ul>

    <p>The only external resource is the font and CSS from GitHub Pages — nothing that tracks you.</p>

    <h2>Offline = Ultimate Privacy</h2>
    <p>After the first visit, AxelBase works completely offline. You can disable the internet, go into airplane mode, or use it in a secure facility — it will still work perfectly.</p>

    <h2>Self-Hosted Version</h2>
    <p>If you fork and host AxelBase yourself, you have full control. You can even remove the “AxelBase” name. It becomes <em>your</em> private tool.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe for all ages. Since no data is collected, it complies with COPPA, GDPR, CCPA, and every privacy law by default.</p>

    <h2>Changes to This Policy</h2>
    <p>We will never weaken this policy. Any update will only strengthen privacy protections.</p>

    <p class="italic-note">You don’t need to trust us with your data — because we never ask for it.<br><strong>This is privacy by design.</strong></p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; margin: 0 auto; padding: 2rem 1rem 5rem; }
  .breadcrumbs { font-size: 0.9rem; color: #aaa; margin-bottom: 2rem; }
  .breadcrumbs a { color: #5e72e4; }
  .prose h1 { font-size: 2.8rem; margin-bottom: 0.5rem; color: white; }
  .prose h2 { margin-top: 2.5rem; color: #5e72e4; }
  .post-meta { color: #888; border-bottom: 1px solid #444; padding-bottom: 1rem; margin-bottom: 2rem; }
  .italic-note { font-style: italic; text-align: center; margin-top: 4rem; font-size: 1.1rem; color: #bbb; }
</style>