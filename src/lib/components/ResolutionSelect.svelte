<script>
  import { createEventDispatcher } from 'svelte';

  export let value = '1080p';
  export let customMultiplier = 2;

  const dispatch = createEventDispatcher();

  const presets = [
    { label: '480p (1×)', value: '480p', mult: 1 },
    { label: '720p (1.5×)', value: '720p', mult: 1.5 },
    { label: '1080p (2×)', value: '1080p', mult: 2 },
    { label: '4K (4×)', value: '4k', mult: 4 },
    { label: 'Custom', value: 'custom', mult: customMultiplier }
  ];

  function handleChange() {
    const selected = presets.find(p => p.value === value);
    const mult = value === 'custom' ? customMultiplier : selected.mult;
    dispatch('change', { resolution: value, multiplier: mult });
  }
</script>

<div class="row g-2 align-items-center">
  <div class="col-auto">
    <select class="form-select form-select-sm" bind:value on:change={handleChange}>
      {#each presets as p}
        <option value={p.value}>{p.label}</option>
      {/each}
    </select>
  </div>
  {#if value === 'custom'}
    <div class="col-auto">
      <input
        type="number"
        class="form-control form-control-sm"
        style="width:80px"
        min="1"
        max="8"
        step="0.5"
        bind:value={customMultiplier}
        on:input={handleChange}
      />
    </div>
    <div class="col-auto text-muted small pt-1">× multiplier</div>
  {/if}
</div>