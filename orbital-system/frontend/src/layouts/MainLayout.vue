<template>
  <div class="main-layout">
    <GalaxyBackground />
    <ApolloEasterEgg ref="apolloEgg" />
    
    <header class="main-layout__header">
      <div class="main-layout__header-content">
        <div class="main-layout__logo">
          <PlanetOrb size="sm" color="primary" :duration="15" />
          <span class="main-layout__logo-text">Orbital Intentions</span>
        </div>
        
        <nav class="main-layout__nav">
          <router-link to="/" class="main-layout__nav-item">Galaxy</router-link>
          <router-link to="/command-center" class="main-layout__nav-item">Command Center</router-link>
          <router-link to="/sources" class="main-layout__nav-item">Sources</router-link>
          <router-link to="/history" class="main-layout__nav-item">History</router-link>
        </nav>

        <div class="main-layout__actions">
          <span class="main-layout__time">09:41</span>
          <div class="main-layout__user">
            <div class="main-layout__avatar">B</div>
          </div>
        </div>
      </div>
    </header>

    <main class="main-layout__main">
      <router-view />
    </main>

    <footer class="main-layout__footer">
      <nav class="main-layout__bottom-nav">
        <router-link to="/" class="main-layout__bottom-nav-item">
          <span class="main-layout__bottom-nav-icon">🌌</span>
          <span class="main-layout__bottom-nav-label">Intencja</span>
        </router-link>
        <router-link to="/command-center" class="main-layout__bottom-nav-item">
          <span class="main-layout__bottom-nav-icon">⚡</span>
          <span class="main-layout__bottom-nav-label">Doprecyzuj</span>
        </router-link>
        <router-link to="/sources" class="main-layout__bottom-nav-item main-layout__bottom-nav-item--primary">
          <span class="main-layout__bottom-nav-icon">✨</span>
        </router-link>
        <router-link to="/history" class="main-layout__bottom-nav-item">
          <span class="main-layout__bottom-nav-icon">👁</span>
          <span class="main-layout__bottom-nav-label">Podgląd</span>
        </router-link>
        <router-link to="/alerts" class="main-layout__bottom-nav-item">
          <span class="main-layout__bottom-nav-icon">⚡</span>
          <span class="main-layout__bottom-nav-label">Akcje</span>
        </router-link>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GalaxyBackground from '@/components/orbital/GalaxyBackground.vue'
import PlanetOrb from '@/components/orbital/PlanetOrb.vue'
import ApolloEasterEgg from '@/components/orbital/ApolloEasterEgg.vue'

const apolloEgg = ref()
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  &__header {
    height: $layout-header-height;
    background: $glass-background-strong;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid $glass-border;
    position: sticky;
    top: 0;
    z-index: $z-index-sticky;
  }

  &__header-content {
    max-width: $layout-max-width;
    margin: 0 auto;
    height: 100%;
    padding: 0 $spacing-6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-8;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: $spacing-3;
    text-decoration: none;
  }

  &__logo-text {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    background: linear-gradient(135deg, $color-primary, $color-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: $spacing-2;

    @media (max-width: $breakpoint-md) {
      display: none;
    }
  }

  &__nav-item {
    padding: $spacing-2 $spacing-4;
    border-radius: $radius-md;
    color: $color-text-secondary;
    text-decoration: none;
    font-weight: $font-weight-medium;
    transition: all $transition-fast;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: $color-text-primary;
    }

    &.router-link-active {
      background: rgba(99, 102, 241, 0.1);
      color: $color-primary;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $spacing-4;
  }

  &__time {
    font-size: $font-size-sm;
    color: $color-text-tertiary;
    font-variant-numeric: tabular-nums;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: $spacing-3;
  }

  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, $color-primary, $color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: $font-weight-semibold;
    color: white;
    font-size: $font-size-sm;
  }

  &__main {
    flex: 1;
    position: relative;
    z-index: 1;
  }

  &__footer {
    height: $layout-footer-height;
    background: $glass-background-strong;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-top: 1px solid $glass-border;
    position: sticky;
    bottom: 0;
    z-index: $z-index-sticky;

    @media (min-width: $breakpoint-md) {
      display: none;
    }
  }

  &__bottom-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    padding: 0 $spacing-4;
  }

  &__bottom-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-1;
    padding: $spacing-2;
    color: $color-text-tertiary;
    text-decoration: none;
    transition: all $transition-fast;
    position: relative;

    &--primary {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, $color-primary, $color-secondary);
      box-shadow: $glow-primary;
      margin-top: -20px;

      .main-layout__bottom-nav-icon {
        font-size: $font-size-2xl;
      }
    }

    &:hover {
      color: $color-text-primary;
    }

    &.router-link-active:not(&--primary) {
      color: $color-primary;
    }
  }

  &__bottom-nav-icon {
    font-size: $font-size-xl;
  }

  &__bottom-nav-label {
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
  }
}
</style>
