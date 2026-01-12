<script lang="ts">
  import "../app.css";
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  // --- Buy Me A Coffee + Bitcoin Logic ---
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  // --- Theme Toggle Logic ---
  function toggleTheme() {
    if (typeof document !== 'undefined') {
      const current = document.body.getAttribute('data-bs-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-bs-theme', next);
    }
  }

  const currentYear = new Date().getFullYear();
</script>

<div class="d-flex flex-column min-vh-100">

  <header class="fixed-top p-3 w-100" style="z-index: 1040; pointer-events: none;">
    <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm"
         style="pointer-events: auto; max-width: 1200px;">

      <div class="d-flex align-items-center gap-3">
        <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
          <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
          <span class="navbar-brand-text fs-4">AxelBase</span>
        </a>

        <!-- Buy Me a Coffee + Bitcoin Dropdown -->
        <div class="position-relative d-none d-md-block" use:clickOutside on:click_outside={closeDropdown}>
          <button
            class="bmac-button d-flex align-items-center gap-2"
            on:click={toggleDropdown}
            aria-label="Support us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
            </svg>
            <span class="d-none d-lg-inline fw-semibold">Buy me a coffee</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown glass mt-2" transition:fly={{ y: -10, duration: 250 }}>
              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
              >
                <span class="amount">$3</span> One Coffee
              </a>
              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
              >
                <span class="amount">$5</span> Two Coffees
              </a>
              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
              >
                <span class="amount">$10</span> Three Coffees
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
                class="custom-amount"
              >
                Custom Amount
              </a>

              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
                class="custom-amount bitcoin-option"
              >
                Buy via Bitcoin
              </a>
            </div>
          {/if}
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <ul class="d-none d-lg-flex align-items-center gap-1 m-0 list-unstyled">
          <li><a class="nav-link-custom" href="{base}/">Home</a></li>
          <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
          <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
          <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
          <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
        </ul>

        <button
          type="button"
          class="btn btn-outline-secondary d-flex align-items-center justify-content-center border-0"
          style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1);"
          on:click={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <i class="bi bi-moon-stars-fill fs-5" id="theme-icon"></i>
        </button>
      </div>
    </nav>
  </header>

  <div style="padding-top: 100px;">
    <slot />
  </div>

  <footer class="custom-footer glass text-center">
    <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center">
      <span>AxelBase Crypto Price Target Calculator – {currentYear}</span>
      <div class="mt-2 mt-sm-0">
        <a href="{base}/privacy">Privacy</a>
        <span class="mx-1">•</span>
        <a href="{base}/terms">Terms</a>
      </div>
    </div>
  </footer>

</div>

<style>
  /* ── Buy Me a Coffee Button (style kept from file 1, adapted to glass/dark theme) ── */
  .bmac-button {
    background: var(--color-accent);
    color: white;
    border: none;
    padding: 8px 18px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.95rem;
    box-shadow: 0 4px 15px rgba(42, 72, 179, 0.25);
    transition: all 0.3s ease;
  }

  .bmac-button:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(42, 72, 179, 0.35);
  }

  /* ── Dropdown (glass + file 1 styling spirit) ── */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    padding: 8px 0;
    border-radius: 16px;
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 20px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.96rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(255,255,255,0.15);
    color: var(--color-accent);
    padding-left: 26px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: var(--color-accent);
    font-size: 1.15rem;
    min-width: 48px;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--color-accent);
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
    padding: 14px 20px;
    margin-top: 6px;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 700;
  }

  .bitcoin-option:hover {
    background: rgba(247, 147, 26, 0.12) !important;
    color: #f7931a !important;
  }

  /* ── Existing styles you want to keep ── */
  .navbar-brand-logo { height: 32px; width: auto; transition: transform 0.3s ease; }
  .logo-group:hover .navbar-brand-logo { transform: rotate(10deg) scale(1.1); }

  .nav-link-custom { position: relative; padding: 0.5rem 1rem; color: var(--color-text-main); font-weight: 600; text-decoration: none; transition: color 0.3s; }
  .nav-link-custom::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 5px; left: 50%; background-color: var(--color-accent); transition: all 0.3s ease-in-out; transform: translateX(-50%); border-radius: 2px; }
  .nav-link-custom:hover { color: var(--color-accent); }
  .nav-link-custom:hover::after { width: 60%; }

  .custom-footer { position: relative; bottom: 0; left: 0; width: 100%; padding: 15px 0; font-size: 0.85rem; z-index: 1030; border-top: 1px solid var(--glass-border); }
  .custom-footer a { color: var(--color-text-muted); text-decoration: none; transition: color 0.2s; }
  .custom-footer a:hover { color: var(--color-accent); }

  :global([data-bs-theme="light"]) #theme-icon { transform: rotate(180deg); }
  #theme-icon { transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
</style>