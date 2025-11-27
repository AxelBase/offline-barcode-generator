<script>
  import { barcodes } from '../stores/barcodes.js';
  import BarcodeRow from './BarcodeRow.svelte';

  let dragIndex = null;

  function handleDragStart(e, index) {
    dragIndex = index;
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.classList.add('dragging');
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
  }

  function handleDrop(e, index) {
    e.preventDefault();
    if (dragIndex === null || dragIndex === index) return;
    barcodes.move(dragIndex, index);
    dragIndex = null;
  }
</script>

<div class="mt-4">
  {#each $barcodes as barcode, i (barcode.id)}
    <div
      role="listitem"
      draggable="true"
      class="barcode-drag-item mb-2"
      class:dragging={dragIndex === i}
      style="cursor: grab;"
      on:dragstart={(e) => handleDragStart(e, i)}
      on:dragover={handleDragOver}
      on:drop={(e) => handleDrop(e, i)}
      on:dragend={handleDragEnd}
      aria-label="Barcode row — drag to reorder"
      aria-grabbed={dragIndex === i}
    >
      <BarcodeRow
        row={barcode}
        on:update={(e) => barcodes.updateRow(e.detail.id, e.detail.changes)}
        on:remove={(e) => barcodes.remove(e.detail)}
      />
    </div>
  {:else}
    <div class="text-center py-5">
      <p class="text-muted fs-5">No barcodes yet</p>
      <p class="text-muted small">Click “Add Barcode” to get started</p>
    </div>
  {/each}

  <div class="text-center mt-4">
    <strong class="fs-5">{$barcodes.length} / 100</strong> barcodes
  </div>
</div>

<style>
  :global(.barcode-drag-item.dragging) {
    opacity: 0.5;
    transform: rotate(4deg) scale(0.98);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    z-index: 1000;
  }

  .barcode-drag-item {
    transition: all 0.15s ease;
  }

  .barcode-drag-item:active {
    cursor: grabbing;
  }
</style>