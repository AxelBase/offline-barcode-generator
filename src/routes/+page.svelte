<script>
  import { base } from '$app/paths';
  import { barcodes } from '$lib/stores/barcodes.js';
  import BarcodeList from '$lib/components/BarcodeList.svelte';
  import { generateBarcodePng } from '$lib/utils/barcodeGenerator.js';
  import { downloadAllAsZip } from '$lib/utils/zipDownloader.js';
  import { validate } from '$lib/utils/validators.js';
  import { fade, fly } from 'svelte/transition';

  let generating = false;
  let warningShown = false;

  $: total = $barcodes.length;
  $: allValid = $barcodes.every(b => validate(b.symbology, b.data).valid);

  $: if (total > 50 && !warningShown) {
    warningShown = true;
    setTimeout(() => {
      if (!confirm('Warning: You are generating many high-resolution barcodes.\nThis may use significant memory and take time.\nContinue?')) {
        generating = false;
      }
    }, 300);
  }

  async function generateAndDownload() {
    if (!allValid || total === 0) return;
    generating = true;

    try {
      const blobs = await Promise.all($barcodes.map(row => generateBarcodePng(row)));
      await downloadAllAsZip($barcodes, blobs);
    } catch (err) {
      alert('Generation failed: ' + err.message);
    } finally {
      generating = false;
    }
  }
</script>

<svelte:head>
  <title>AxelBase – Offline Barcode Generator</title>
  <meta name="description" content="Free, fast, private offline barcode generator. Code128, EAN, UPC, PDF417. No internet needed." />
</svelte:head>

<main class="container py-4">
  
  <section id="home" class="mb-5">
      <div class="text-center mb-5" in:fade={{ duration: 800, delay: 100 }}>
        <h1 class="display-3 fw-bold">AxelBase</h1>
        <p class="lead" style="color: var(--color-text-muted);">Offline Barcode Generator</p>
        <div class="d-inline-block px-3 py-1 rounded-pill glass small text-muted">
           100% Client-Side • Secure • Private
        </div>
      </div>
    
      <div class="glass-card p-4 p-md-5" in:fly={{ y: 50, duration: 800, delay: 300 }}>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">
          <button
            class="btn btn-success px-4 d-flex align-items-center gap-2"
            on:click={() => barcodes.add()}
            disabled={total >= 100}
          >
            <i class="bi bi-plus-lg"></i> Add Barcode ({total}/100)
          </button>
    
          <button
            class="btn btn-primary btn-lg px-5 shadow-sm"
            on:click={generateAndDownload}
            disabled={!allValid || total === 0 || generating}
          >
            {#if generating}
              <span class="spinner-border spinner-border-sm me-2" role="status"></span>
              Generating...
            {:else}
              Download All as ZIP
            {/if}
          </button>
        </div>
    
        <BarcodeList />
      </div>
      
      <div class="text-center mt-4 small" style="color: var(--color-text-muted);">
        Drag to reorder • Delete with × • Fully offline after first load
      </div>
  </section>

<section id="about" class="row justify-content-center mb-5 scroll-margin-offset">
  <div class="col-lg-10 glass-card p-5">
    <h2 class="mb-4">About AxelBase Offline Barcode Generator</h2>
    
    <p><strong>AxelBase</strong> is not just another barcode generator — it’s a deliberate rejection of the surveillance-driven web tools that dominate today.</p>

    <p>In 2025, every “free” online barcode generator comes with a hidden cost: <strong>your data</strong>. Product codes, pricing, internal SKUs, serial numbers — all sent to unknown servers, logged, analyzed, and sometimes sold. Many of these tools inject tracking scripts, serve ads, or quietly retain your inputs forever.</p>

    <p>We built AxelBase to end that.</p>

    <p>This tool runs <strong>100% client-side</strong> using SvelteKit and modern web standards. From the moment you open the page, every barcode is generated using <code>bwip-js</code> directly in your browser. ZIP files are created with <code>JSZip</code> on your device. Nothing — absolutely nothing — is transmitted anywhere.</p>

    <p>After the first visit, AxelBase works completely offline. You can disable Wi-Fi, enable airplane mode, or use it in an air-gapped environment — it will still generate perfect, print-ready barcodes instantly.</p>

    <p>We support the symbologies professionals actually need:</p>
    <ul class="list-styled">
      <li><strong>Code 128</strong> – The gold standard for logistics and inventory</li>
      <li><strong>Code 39</strong> – Legacy support for government and automotive</li>
      <li><strong>EAN-13 & EAN-8</strong> – Global retail standards with full checksum validation</li>
      <li><strong>UPC-A</strong> – North American retail compliance</li>
      <li><strong>PDF417</strong> – High-density 2D for licenses, certificates, and complex data</li>
    </ul>

    <p>Every generated image includes a pure white background and proper quiet zones — ensuring 100% scannability on thermal printers, laser printers, or phone screens. Resolution scales from 480p to true 4K with custom multipliers up to 8×.</p>

    <p>AxelBase is open-source under the MIT license. You can fork it, rebrand it, host it on your intranet, or deploy it to GitHub Pages in under a minute. There are no accounts, no limits, no upsells — ever.</p>

    <p>This tool exists because privacy shouldn’t be a luxury. Whether you're a warehouse manager protecting inventory data, a retailer hiding pricing strategies, or a developerist keeping serial numbers secret — AxelBase ensures your information stays yours.</p>

    <p class="italic-note mt-4 text-center">
      <em>No servers. No tracking. No compromise.<br>
      Just barcodes — private, fast, and forever yours.</em>
    </p>
  </div>
</section>



<!-- HOW TO USE – Beautiful numbered steps with your exact styling -->
<section id="how-to" class="row justify-content-center mb-5 scroll-margin-offset">
  <div class="col-lg-10 glass-card p-5">
    <h2 class="mb-4">How to Use AxelBase</h2>
    <p class="lead mb-5">Generate up to 100 professional, print-ready barcodes in under 30 seconds — completely offline and private.</p>

    <div class="steps-container">
      <div class="step d-flex gap-4 mb-4">
        <div class="step-circle">1</div>
        <div class="step-content">
          <h5 class="fw-bold text-gradient">Add Your Barcodes</h5>
          <p>Click the green <strong>“+ Add Barcode”</strong> button. You can create up to <strong>100 rows</strong> in one batch — ideal for inventory runs, price tagging, or product launches.</p>
        </div>
      </div>

      <div class="step d-flex gap-4 mb-4">
        <div class="step-circle">2</div>
        <div class="step-content">
          <h5 class="fw-bold text-gradient">Choose the Right Symbology</h5>
          <p>Use <strong>Code 128</strong> for logistics • <strong>EAN-13/UPC-A</strong> for retail • <strong>Code 39</strong> for legacy systems • <strong>PDF417</strong> for high-density data (licenses, certificates).</p>
        </div>
      </div>

      <div class="step d-flex gap-4 mb-4">
        <div class="step-circle">3</div>
        <div class="step-content">
          <h5 class="fw-bold text-gradient">Enter or Paste Data</h5>
          <p>Type or paste directly from Excel/Google Sheets. AxelBase validates <strong>instantly</strong> with correct EAN/UPC checksums. Invalid entries show a red border and clear error — no failed prints later.</p>
        </div>
      </div>

      <div class="step d-flex gap-4 mb-4">
        <div class="step-circle">4</div>
        <div class="step-content">
          <h5 class="fw-bold text-gradient">Set Size & Resolution</h5>
          <p>Adjust width/height and pick resolution: <strong>720p</strong> (screens), <strong>1080p</strong> (most printing), <strong>4K</strong> or <strong>Custom up to 8×</strong> (thermal labels & high-DPI).</p>
        </div>
      </div>

      <div class="step d-flex gap-4 mb-4">
        <div class="step-circle">5</div>
        <div class="step-content">
          <h5 class="fw-bold text-gradient">Reorder & Clean Up</h5>
          <p>Drag rows using the handle to set final order. Delete any row instantly with ×. Live counter shows “42 / 100”.</p>
        </div>
      </div>

      <div class="step d-flex gap-4 mb-4">
        <div class="step-circle">6</div>
        <div class="step-content">
          <h5 class="fw-bold text-gradient">Download Everything</h5>
          <p>Click <strong>“Download All as ZIP”</strong> → get <code>AxelBase_barcodes_20251127143022.zip</code> with perfectly named, sequentially ordered PNGs — all with white background and proper padding for 100% scannability.</p>
        </div>
      </div>
    </div>

    <div class="alert alert-success mt-5 rounded-4 border-0">
      <strong>Pro Tip:</strong> Paste an entire column from Excel — one code per line — and AxelBase auto-creates rows instantly.
    </div>

    <p class="italic-note text-center mt-5 fs-5">
      <em>No accounts. No uploads. No data ever leaves your device.<br>Just pure, private barcode power.</em>
    </p>
  </div>
</section>


<!-- FAQ – FULLY WORKING Bootstrap 5 Accordion (Fixed!) -->
<section id="faq" class="row justify-content-center mb-5 scroll-margin-offset">
  <div class="col-lg-10 glass-card p-5">
    <h2 class="mb-5">Frequently Asked Questions</h2>

    <div class="accordion" id="faqAccordion">
      <!-- FAQ 1 -->
      <div class="accordion-item bg-transparent border-0 border-bottom border-secondary-subtle pb-4 mb-4">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="false"
            aria-controls="faq1"
          >
            Is AxelBase really 100% offline?
          </button>
        </h3>
        <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            Yes — completely. After the first load, disconnect Wi-Fi, enable airplane mode, or use it on an air-gapped machine. Everything still works perfectly forever.
          </div>
        </div>
      </div>

      <!-- FAQ 2 -->
      <div class="accordion-item bg-transparent border-0 border-bottom border-secondary-subtle pb-4 mb-4">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
          >
            Why only 100 barcodes per batch?
          </button>
        </h3>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            To protect lower-end devices from memory overload when generating 4K images. You can generate <strong>unlimited batches</strong> — just clear and start again.
          </div>
        </div>
      </div>

      <!-- FAQ 3 -->
      <div class="accordion-item bg-transparent border-0 border-bottom border-secondary-subtle pb-4 mb-4">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            aria-expanded="false"
          >
            Are the barcodes actually scannable in real life?
          </button>
        </h3>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            100%. Every image includes correct quiet zones, pure white background, and proper scaling. Successfully tested with Zebra thermal printers, Brother labels, supermarket scanners, and all major phone apps.
          </div>
        </div>
      </div>

      <!-- FAQ 4 -->
      <div class="accordion-item bg-transparent border-0 border-bottom border-secondary-subtle pb-4 mb-4">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
            aria-expanded="false"
          >
            Can I use this for commercial projects?
          </button>
        </h3>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            Yes — fully free for personal and commercial use. No attribution required (but always appreciated).
          </div>
        </div>
      </div>

      <!-- FAQ 5 -->
      <div class="accordion-item bg-transparent border-0 border-bottom border-secondary-subtle pb-4 mb-4">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="false"
          >
            Can I host my own private version?
          </button>
        </h3>
        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            Absolutely. Fork the repo → deploy to GitHub Pages/Netlify/Vercel or your intranet in seconds. You can even remove all “AxelBase” branding — it becomes <em>your</em> tool.
          </div>
        </div>
      </div>

      <!-- FAQ 6 -->
      <div class="accordion-item bg-transparent border-0 border-bottom border-secondary-subtle pb-4 mb-4">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq6"
            aria-expanded="false"
          >
            Will you add QR codes, Data Matrix, or Aztec?
          </button>
        </h3>
        <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            Possibly in the future — but only if they can be done 100% client-side with zero privacy compromise.
          </div>
        </div>
      </div>

      <!-- FAQ 7 -->
      <div class="accordion-item bg-transparent border-0">
        <h3 class="accordion-header">
          <button 
            class="accordion-button collapsed fw-bold text-gradient shadow-none bg-transparent p-3 rounded-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq7"
            aria-expanded="false"
          >
            Why not just use an online generator?
          </button>
        </h3>
        <div id="faq7" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body pt-3">
            Because your data belongs to <em>you</em>. Online tools log everything. AxelBase proves that powerful software can exist without surveillance.
          </div>
        </div>
      </div>
    </div>

    <p class="italic-note text-center mt-5 fs-5">
      <em>Still have a question?<br>
      <a href="https://github.com/axelbase/offline-barcode-generator/issues" target="_blank" class="text-decoration-underline">Open an issue on GitHub</a> — we answer fast.</em>
    </p>
  </div>
</section>

</main>

<style>
  .scroll-margin-offset { scroll-margin-top: 140px; }
  
  .step-circle {
      background: var(--color-accent);
      color: white;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
  }
  </style>