<template>
  <div
    :class="[
      'orbital-card',
      `orbital-card--${variant}`,
      { 'orbital-card--hoverable': hoverable, 'orbital-card--glow': glow }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'glass' | 'solid'
  hoverable?: boolean
  glow?: boolean
}>()
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.orbital-card {
  border-radius: $radius-xl;
  padding: $card-padding;
  transition: all $transition-base;
  position: relative;
  overflow: hidden;

  &--default {
    background: $glass-background;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid $glass-border;
  }

  &--glass {
    background: $glass-background-light;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  &--solid {
    background: $color-space-dark;
    border: 1px solid $color-border;
  }

  &--hoverable {
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      border-color: $color-primary;
      box-shadow: $shadow-lg, 0 0 20px rgba(99, 102, 241, 0.2);

      &::before {
        opacity: 1;
      }
    }
  }

  &--glow {
    box-shadow: $glow-soft;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(99, 102, 241, 0.1) 50%,
      transparent 100%
    );
    border-radius: $radius-xl;
    opacity: 0;
    transition: opacity $transition-base;
    z-index: -1;
    pointer-events: none;
  }
}
</style>
