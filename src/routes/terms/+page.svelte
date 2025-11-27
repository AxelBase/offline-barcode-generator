<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | AxelBase Offline Barcode Generator</title>
  <meta name="description" content="Free to use, modify, and distribute. No warranties. Use at your own risk. Open source under MIT license." />
  <meta property="og:title" content="Terms & Conditions | AxelBase" />
  <meta property="og:description" content="AxelBase is open-source software. Use it freely. No liability." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 27, 2025</p>

    <p>By using <strong>AxelBase Offline Barcode Generator</strong> ("the Tool"), you agree to these terms.</p>

    <h2>1. Nature of the Tool</h2>
    <p>AxelBase is a <strong>free, open-source</strong>, client-side web application released under the <strong>MIT License</strong>. It runs entirely in your browser and does not communicate with any server after initial load.</p>

    <h2>2. License to Use</h2>
    <p>You are granted a worldwide, royalty-free, perpetual license to:</p>
    <ul>
      <li>Use the Tool for personal or commercial purposes</li>
      <li>Modify, fork, or redistribute it</li>
      <li>Host it on your own domain or intranet</li>
      <li>Remove or change branding</li>
    </ul>

    <h2>3. No Warranty</h2>
    <p>The Tool is provided <strong>"AS IS"</strong> without warranty of any kind. We make no guarantees about:</p>
    <ul>
      <li>Accuracy of generated barcodes</li>
      <li>Compatibility with all scanners</li>
      <li>Availability or uptime</li>
      <li>Fitness for a particular purpose</li>
    </ul>

    <p><strong>Use at your own risk.</strong> Test barcodes before printing in production.</p>

    <h2>4. No Liability</h2>
    <p>In no event shall the authors or contributors be liable for any damages arising from:</p>
    <ul>
      <li>Scanning failures</li>
      <li>Printing issues</li>
      <li>Data loss</li>
      <li>Business interruption</li>
    </ul>

    <h2>5. Open Source</h2>
    <p>The source code is available at GitHub. You are encouraged to review, audit, and improve it.</p>

    <h2>6. Modifications</h2>
    <p>If you modify and redistribute the Tool, you must retain the original license and copyright notice unless you remove all references to "AxelBase".</p>

    <h2>7. Termination</h2>
    <p>We may discontinue hosting the official version at any time, but since it’s open source and works offline — you will always have access.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by the principle of <em>common sense</em> and the MIT License.</p>

    <p class="italic-note">We built this tool to be useful, not to control you.<br>
    <strong>Use it. Improve it. Share it. It’s yours.</strong></p>
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