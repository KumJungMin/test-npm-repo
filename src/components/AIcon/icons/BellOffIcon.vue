<template>
  <div class="bell-off-icon">
    <svg
      :width="props.width"
      :height="props.height"
      style="display: block"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="bell-off-icon__bell"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.15108 7.27241C5.09317 7.45653 5.04246 7.64385 4.99931 7.83404C4.88278 8.34757 4.82142 8.88136 4.82142 9.42857V11.6528C4.82142 13.2455 4.18455 14.7721 3.05264 15.8926C2.36328 16.575 2.84652 17.75 3.8165 17.75H15.6287L14.1287 16.25H4.73816C5.75855 14.9444 6.32142 13.3278 6.32142 11.6528V9.42857C6.32142 9.11737 6.34638 8.81246 6.3943 8.51562L5.15108 7.27241ZM6.70396 4.58264L7.76578 5.64446C8.80582 4.48174 10.3178 3.75 12 3.75C15.1362 3.75 17.6786 6.29238 17.6786 9.42857V11.6528C17.6786 13.3278 18.2414 14.9444 19.2618 16.25H18.3713L19.8713 17.75H20.1835C21.1535 17.75 21.6367 16.575 20.9473 15.8926C19.8154 14.7721 19.1786 13.2455 19.1786 11.6528V9.42857C19.1786 5.46396 15.9646 2.25 12 2.25C9.90277 2.25 8.01621 3.14907 6.70396 4.58264ZM10.75 19C10.75 18.5858 10.4142 18.25 9.99999 18.25C9.58578 18.25 9.24999 18.5858 9.24999 19C9.24999 20.5188 10.4812 21.75 12 21.75C13.5188 21.75 14.75 20.5188 14.75 19C14.75 18.5858 14.4142 18.25 14 18.25C13.5858 18.25 13.25 18.5858 13.25 19C13.25 19.6904 12.6903 20.25 12 20.25C11.3096 20.25 10.75 19.6904 10.75 19Z"
      />
      <path
        class="bell-off-icon__slash"
        d="M5 5L19 19"
        stroke-width="1.5"
        vector-effect="non-scaling-stroke"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
});
</script>

<style lang="scss">
.bell-off-icon {
  color: var(--neutral);
  svg {
    .bell-off-icon__bell {
      fill: currentColor;
    }
    .bell-off-icon__slash {
      stroke: currentColor;
    }
  }
}
</style>
