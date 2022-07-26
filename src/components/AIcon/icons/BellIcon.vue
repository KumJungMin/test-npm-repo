<template>
  <div class="bell-icon">
    <svg
      :width="width"
      :height="height"
      style="display: block"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="bell-icon__background"
        d="M18.4286 11.6528V9.42857C18.4286 5.87817 15.5504 3 12 3C8.44959 3 5.57143 5.87817 5.57143 9.42857V11.6528C5.57143 13.4458 4.85449 15.1642 3.58028 16.4256C3.36709 16.6366 3.51653 17 3.81651 17H20.1835C20.4835 17 20.6329 16.6366 20.4197 16.4256C19.1455 15.1642 18.4286 13.4458 18.4286 11.6528Z"
      />
      <path
        d="M10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19M18.4286 9.42857V11.6528C18.4286 13.4458 19.1455 15.1642 20.4197 16.4256C20.6329 16.6366 20.4835 17 20.1835 17H3.81651C3.51653 17 3.36709 16.6366 3.58028 16.4256C4.85449 15.1642 5.57143 13.4458 5.57143 11.6528V9.42857C5.57143 5.87817 8.44959 3 12 3C15.5504 3 18.4286 5.87817 18.4286 9.42857Z"
        stroke-width="1.5"
        vector-effect="non-scaling-stroke"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style lang="scss">
.bell-icon {
  color: var(--neutral);
  svg {
    stroke: currentColor;
    .bell-icon__background {
      fill: transparent;
    }
  }
}
</style>
