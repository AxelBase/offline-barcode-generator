<script>
  import { createEventDispatcher } from 'svelte';
  import ResolutionSelect from './ResolutionSelect.svelte';
  import { getDisplayName, validate } from '../utils/validators.js';

  export let row;

  const dispatch = createEventDispatcher();

  let validation = { valid: true, message: '' };
  $: validation = validate(row.symbology, row.data);

  function update(field, value) {
    dispatch('update', { id: row.id, changes: { [field]: value } });
  }

  function remove() {
    dispatch('remove', row.id);
  }

  // Unique IDs
  const typeId = `type-${row.id}`;
  const dataId = `data-${row.id}`;
  const widthId = `width-${row.id}`;
  const heightId = `height-${row.id}`;
  const resolutionId = `resolution-${row.id}`;
</script>

<div class="border rounded p-3 mb-3 bg-light position-relative">
  <button
    type="button"
    class="btn-close position-absolute top-0 end-0 mt-2 me-3"
    aria-label="Remove barcode"
    on:click={remove}
  ></button>

  <div class="row g-3 align-items-end">
    <!-- Symbology -->
    <div class="col-md-3">
      <label for={typeId} class="form-label fw-semibold">Type</label>
      <select
        id={typeId}
        class="form-select"
        bind:value={row.symbology}
        on:change={() => update('symbology', row.symbology)}
      >
        <option value="code128">Code 128</option>
        <option value="code39">Code 39</option>
        <option value="ean13">EAN-13</option>
        <option value="ean8">EAN-8</option>
        <option value="upca">UPC-A</option>
        <option value="pdf417">PDF417</option>
      </select>
      <small class="text-muted d-block">{getDisplayName(row.symbology)}</small>
    </div>

    <!-- Data Input -->
    <div class="col-md-5">
      <label for={dataId} class="form-label fw-semibold">Data</label>
      <input
        id={dataId}
        type="text"
        class="form-control {validation.valid ? '' : 'is-invalid'}"
        placeholder="Enter barcode content"
        bind:value={row.data}
        on:input={() => update('data', row.data)}
        aria-describedby={!validation.valid ? dataId + '-error' : undefined}
      />
      {#if !validation.valid}
        <div id={dataId + '-error'} class="invalid-feedback">{validation.message}</div>
      {/if}
    </div>

    <!-- Size — NOW FULLY ACCESSIBLE -->
    <div class="col-md-2">
      <div class="form-group">
        <label for={widthId} class="form-label fw-semibold">Size (px)</label>
        <div class="input-group input-group-sm">
          <input
            id={widthId}
            type="number"
            class="form-control"
            min="100"
            max="2000"
            bind:value={row.width}
            on:input={() => update('width', row.width)}
            aria-label="Width in pixels"
          />
          <span class="input-group-text">×</span>
          <input
            id={heightId}
            type="number"
            class="form-control"
            min="50"
            max="1000"
            bind:value={row.height}
            on:input={() => update('height', row.height)}
            aria-label="Height in pixels"
          />
        </div>
      </div>
    </div>

    <!-- Resolution -->
    <div class="col-md-2">
      <label for={resolutionId} class="form-label fw-semibold">Resolution</label>
      <div id={resolutionId} role="group" aria-labelledby={resolutionId + '-label'}>
        <ResolutionSelect
          bind:value={row.resolution}
          bind:customMultiplier={row.customMultiplier}
          on:change={(e) => {
            update('resolution', e.detail.resolution);
            if (e.detail.multiplier !== undefined) {
              update('customMultiplier', e.detail.multiplier);
            }
          }}
        />
      </div>
    </div>
  </div>
</div>