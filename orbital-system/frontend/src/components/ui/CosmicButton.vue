<template>
  <button
    :class="[
      'cosmic-button',
      `cosmic-button--${variant}`,
      `cosmic-button--${size}`,
      { 'cosmic-button--glow': glow, 'cosmic-button--loading': loading }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="cosmic-button__spinner"></span>
    <span class="cosmic-button__content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  loading?: boolean
  disabled?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.cosmic-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-2;
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  border: none;
  border-radius: $radius-lg;
  cursor: pointer;
  transition: all $transition-base;
  white-space: nowrap;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // Variants
  &--primary {
    background: linear-gradient(135deg, $color-primary, $color-secondary);
    color: white;
    box-shadow: $shadow-md;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: $shadow-lg, $glow-primary;
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  }

  &--secondary {
    background: $color-space-medium;
    color: $color-text-primary;
    border: 1px solid $color-border;

    &:hover:not(:disabled) {
      background: $color-space-light;
      border-color: $color-primary;
    }
  }

  &--ghost {
    background: transparent;
    color: $color-text-secondary;

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.05);
      color: $color-text-primary;
    }
  }

  &--outline {
    background: transparent;
    color: $color-primary;
    border: 2px solid $color-primary;

    &:hover:not(:disabled) {
      background: rgba(99, 102, 241, 0.1);
    }
  }

  // Sizes
  &--sm {
    height: 36px;
    padding: 0 $spacing-4;
    font-size: $font-size-sm;
  }

  &--md {
    height: $button-height;
    padding: 0 $spacing-6;
    font-size: $font-size-base;
  }

  &--lg {
    height: 52px;
    padding: 0 $spacing-8;
    font-size: $font-size-lg;
  }

  // Glow effect
  &--glow {
    &.cosmic-button--primary {
      animation: pulse-glow 2s ease-in-out infinite;
    }
  }

  // Loading state
  &--loading {
    pointer-events: none;

    .cosmic-button__content {
      opacity: 0;
    }
  }

  &__spinner {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    transition: opacity $transition-base;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
