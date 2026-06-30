<template>
  <aside :class="['aside-section', `aside-section--${position}`, { 'aside-section--collapsed': collapsed }]">
    <div class="aside-section__content">
      <div v-if="title" class="aside-section__header">
        <h3 class="aside-section__title">{{ title }}</h3>
        <button v-if="collapsible" class="aside-section__toggle" @click="toggleCollapsed">
          <span class="aside-section__toggle-icon">{{ collapsed ? '›' : '‹' }}</span>
        </button>
      </div>
      <div class="aside-section__body">
        <slot />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string
  position?: 'left' | 'right'
  collapsible?: boolean
}>()

const collapsed = ref(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.aside-section {
  width: $layout-aside-width;
  height: 100%;
  background: $glass-background;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid $glass-border;
  transition: all $transition-base;
  position: relative;

  &--left {
    border-right: 1px solid $glass-border;
    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  &--right {
    border-left: 1px solid $glass-border;
    border-right: none;
    border-top: none;
    border-bottom: none;
  }

  &--collapsed {
    width: 0;
    overflow: hidden;
    border: none;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $spacing-6;
    border-bottom: 1px solid $color-border;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin: 0;
  }

  &__toggle {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid $color-border;
    border-radius: $radius-md;
    color: $color-text-secondary;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: $color-primary;
      color: $color-primary;
    }
  }

  &__toggle-icon {
    font-size: $font-size-xl;
    line-height: 1;
  }

  &__body {
    flex: 1;
    overflow-y: auto;
    padding: $spacing-6;
  }
}
</style>
