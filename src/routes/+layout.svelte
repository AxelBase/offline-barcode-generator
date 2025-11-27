<script lang="ts">
  import "../app.css";
  import { base } from '$app/paths';
  import { fly, slide } from 'svelte/transition';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427'; // Update this!
  const donationAmounts = [1, 3, 5, 10];
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
    // Access document only in browser environment
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

        <div class="position-relative d-none d-md-block" use:clickOutside on:click_outside={closeDropdown}>
          <button class="bmac-button" on:click={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
            </svg>
            <span class="d-none d-lg-inline">Buy me a coffee</span>
          </button>
      
          {#if isDropdownOpen}
            <div class="bmac-dropdown glass" transition:fly={{ y: -10, duration: 250 }}>
              {#each donationAmounts as amount}
                <a 
                  href="https://paypal.me/{paypalUsername}/{amount}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  on:click={closeDropdown}
                >
                  ${amount}
                </a>
              {/each}
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
      <span>AxelBase Offline Barcode Generator – {currentYear}</span>
      <div class="mt-2 mt-sm-0">
        <a href="{base}/privacy">Privacy</a>
        <span class="mx-1">•</span>
        <a href="{base}/terms">Terms</a>
      </div>
    </div>
  </footer>

</div>

<style>
    /* Logo Animation */
    .navbar-brand-logo { height: 32px; width: auto; transition: transform 0.3s ease; }
    .logo-group:hover .navbar-brand-logo { transform: rotate(10deg) scale(1.1); }

    /* Custom Nav Links */
    .nav-link-custom { position: relative; padding: 0.5rem 1rem; color: var(--color-text-main); font-weight: 600; text-decoration: none; transition: color 0.3s; }
    .nav-link-custom::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 5px; left: 50%; background-color: var(--color-accent); transition: all 0.3s ease-in-out; transform: translateX(-50%); border-radius: 2px; }
    .nav-link-custom:hover { color: var(--color-accent); }
    .nav-link-custom:hover::after { width: 60%; }

    /* BMAC Button */
    .bmac-button { background: #FFDD00; color: #000; border: none; padding: 6px 16px; border-radius: 50px; font-weight: 700; display: flex; align-items: center; gap: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 221, 0, 0.3); transition: all 0.3s ease; }
    .bmac-button svg { width: 16px; height: 16px; animation: steam 2s infinite ease-out; }
    .bmac-button:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(255, 221, 0, 0.5); }

    /* BMAC Dropdown */
    .bmac-dropdown { position: absolute; top: 120%; left: 50%; transform: translateX(-50%); padding: 10px; display: flex; flex-direction: column; min-width: 120px; border-radius: 15px; }
    .bmac-dropdown a { color: var(--color-text-main); text-decoration: none; padding: 8px 15px; border-radius: 10px; font-weight: 600; text-align: center; transition: background 0.2s; }
    .bmac-dropdown a:hover { background: rgba(255,255,255,0.2); color: var(--color-accent); }

    /* Footer */
    .custom-footer { position: relative; bottom: 0; left: 0; width: 100%; padding: 15px 0; font-size: 0.85rem; z-index: 1030; border-top: 1px solid var(--glass-border); }
    .custom-footer a { color: var(--color-text-muted); text-decoration: none; transition: color 0.2s; }
    .custom-footer a:hover { color: var(--color-accent); }

    /* Theme Icon Animation */
    :global([data-bs-theme="light"]) #theme-icon { transform: rotate(180deg); }
    #theme-icon { transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

    @keyframes steam { 0% { opacity: 0.8; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-5px); } }
</style>