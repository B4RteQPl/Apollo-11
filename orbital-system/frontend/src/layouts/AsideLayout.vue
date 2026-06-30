<template>
  <div class="aside-layout">
    <AsideSection
      v-if="leftAside"
      position="left"
      :title="leftAsideTitle"
      :collapsible="true"
    >
      <slot name="left" />
    </AsideSection>

    <main class="aside-layout__main">
      <slot />
    </main>

    <AsideSection
      v-if="rightAside"
      position="right"
      :title="rightAsideTitle"
      :collapsible="true"
    >
      <slot name="right" />
    </AsideSection>
  </div>
</template>

<script setup lang="ts">
import AsideSection from '@/components/aside/AsideSection.vue'

defineProps<{
  leftAside?: boolean
  rightAside?: boolean
  leftAsideTitle?: string
  rightAsideTitle?: string
}>()
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.aside-layout {
  display: flex;
  min-height: calc(100vh - $layout-header-height);
  position: relative;

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
  }

  &__main {
    flex: 1;
    overflow-y: auto;
    position: relative;
  }
}
</style>
