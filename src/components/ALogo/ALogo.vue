<template>
  <div class="a-logo">
    <img v-if="imageSrc" class="a-logo__image" :src="imageSrc" />
    <div v-else class="a-logo__empty">
      <span class="a-logo__empty-text" :style="textStyle">{{ emptyText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ALogo",
  props: {
    src: { type: String, default: "" },
    emptyText: { type: String, default: "" },
    emptyFontSize: { type: Number, default: 12 },
  },
  data() {
    return {
      imageSrc: "",
    };
  },
  computed: {
    textStyle() {
      return {
        "font-size": `${this.emptyFontSize}px`,
      };
    },
  },
  watch: {
    src: {
      immediate: true,
      handler(src) {
        this.drawImage(src);
      },
    },
  },
  methods: {
    drawImage(src) {
      if (!src) this.imageSrc = "";
      else {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          this.imageSrc = img.src;
        };
      }
    },
  },
};
</script>

<style lang="scss">
.a-logo {
  overflow: hidden;
  .a-logo__image,
  .a-logo__empty {
    width: 100%;
    height: 100%;
  }
  .a-logo__image {
    object-fit: cover;
  }
  .a-logo__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--neutral-tertiary);
    user-select: none;
    .a-logo__empty-text {
      color: #fff;
    }
  }
}
</style>
