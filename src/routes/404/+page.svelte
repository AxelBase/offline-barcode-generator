<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — Page Not Found | AxelBase Offline Barcode Generator</title>
  <meta name="description" content="Oops! The page you're looking for doesn't exist. But you can still generate barcodes offline — right now." />
  <meta property="og:title" content="404 — Nothing Here | AxelBase" />
  <meta property="og:description" content="The page vanished, but your privacy and barcode generator are still here. Return home and keep scanning." />
  <meta property="og:url" content="{base}{$page.url.pathname}" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="noindex" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="error-page container text-center py-5">
  <div class="fade-in max-w-2xl mx-auto">
    <h1 class="display-1 fw-bold text-white mb-4">404</h1>
    <p class="lead text-white-75 mb-5">
      This page got lost in the warehouse.<br>
      But don’t worry — your barcodes are still safe.
    </p>

    <div class="barcode-placeholder mb-5">
      <pre class="d-inline-block p-3 bg-white rounded shadow">
██╗░░░░░░█████╗░░██████╗████████╗<br>
██║░░░░░██╔══██╗██╔════╝╚══██╔══╝<br>
██║░░░░░███████║╚█████╗░░░░██║░░░<br>
██║░░░░░██╔══██║░╚═══██╗░░░██║░░░<br>
███████╗██║░░██║██████╔╝░░░██║░░░<br>
╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░
      </pre>
      <p class="text-white-50 mt-3">Scan result: “Page not found”</p>
    </div>

    <h2 class="h4 text-white-80 mb-4">Where to go now?</h2>
    <div class="d-grid gap-3 max-w-md mx-auto">
      <a href="{base}/" class="btn btn-lg btn-primary">
        Back to Barcode Generator
      </a>
      <a href="{base}/blog" class="btn btn-outline-light">
        Read the Blog
      </a>
      <a href="https://github.com/axelbase/offline-barcode-generator" target="_blank" rel="noopener" class="btn btn-outline-light">
        View on GitHub
      </a>
    </div>

    <p class="italic-note text-white-50 mt-5">
      <em>Still lost? Just refresh — this tool works offline too.</em>
    </p>
  </div>
</div>

<style>
  .error-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #1e293b, #0f172a);
  }

  .display-1 {
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: -0.5rem;
    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  .barcode-placeholder pre {
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.2;
    color: #000;
    letter-spacing: 2px;
  }

  .btn-primary {
    background: #5e72e4;
    border: none;
    padding: 0.9rem 2rem;
    font-weight: 600;
  }

  .btn-primary:hover {
    background: #4f60c7;
    transform: translateY(-2px);
  }

  .italic-note {
    font-size: 1.1rem;
    margin-top: 4rem !important;
  }

  @media (max-width: 768px) {
    .display-1 { font-size: 5.5rem; letter-spacing: -0.3rem; }
    .barcode-placeholder pre { font-size: 0.7rem; }
  }
</style>