<template>
  <AsideLayout left-aside left-aside-title="AI Scoring & Analiza">
    <template #left>
      <div class="metrics-panel">
        <div class="metric-card">
          <h4 class="metric-title">AI Scoring</h4>
          <div class="metric-value">98%</div>
          <div class="metric-bar">
            <div class="metric-bar-fill" style="width: 98%"></div>
          </div>
        </div>

        <div class="metric-card">
          <h4 class="metric-title">Inteligentne dopasowanie</h4>
          <div class="metric-value">98%</div>
        </div>

        <div class="metric-card">
          <h4 class="metric-title">Historia pozytywnych intencji</h4>
          <div class="metric-value">85%</div>
        </div>

        <div class="metric-card">
          <h4 class="metric-title">Precyzja użytkowników</h4>
          <div class="metric-value">92%</div>
        </div>

        <div class="metric-card">
          <h4 class="metric-title">Przewidywany wynik</h4>
          <p class="metric-text">Szybkie odnalezienie idealnego roweru w zakresie budżetu</p>
        </div>

        <div class="sources-section">
          <h4 class="section-title">Uczenie ciągłe</h4>
          <div class="sources-list">
            <div class="source-item">
              <span class="source-icon">📊</span>
              <span class="source-name">OLX</span>
              <span class="source-count">12 ofert</span>
            </div>
            <div class="source-item">
              <span class="source-icon">🛍</span>
              <span class="source-name">Allegro</span>
              <span class="source-count">7 ofert</span>
            </div>
            <div class="source-item">
              <span class="source-icon">📘</span>
              <span class="source-name">Facebook Marketplace</span>
              <span class="source-count">5 ofert</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div class="strategy-view">
      <div class="strategy-view__header">
        <router-link to="/intention/1/strategies" class="breadcrumb">
          ← Powrót do strategii
        </router-link>
        <h2 class="strategy-title">Strategia Galaktycznego Footballu</h2>
        <p class="strategy-description">
          Inteligentne dopasowanie - łączy dane z wielu źródeł i przewiduje najlepsze oferty dla Twojej grupy docelowej.
        </p>
      </div>

      <div class="orbital-visualization">
        <div class="orbit-center-large">
          <PlanetOrb size="xl" color="secondary" :duration="25" />
          <h3 class="orbit-label">Galaktyczny Football</h3>
        </div>

        <div class="orbit-ring orbit-ring--1">
          <div class="orbit-planet-small orbit-planet-small--1">
            <PlanetOrb size="sm" color="blue" :duration="12" />
            <span class="planet-label">OLX</span>
          </div>
          <div class="orbit-planet-small orbit-planet-small--2">
            <PlanetOrb size="sm" color="orange" :duration="12" />
            <span class="planet-label">Allegro</span>
          </div>
          <div class="orbit-planet-small orbit-planet-small--3">
            <PlanetOrb size="sm" color="green" :duration="12" />
            <span class="planet-label">Facebook</span>
          </div>
          <div class="orbit-planet-small orbit-planet-small--4">
            <PlanetOrb size="sm" color="pink" :duration="12" />
            <span class="planet-label">Decathlon</span>
          </div>
        </div>
      </div>

      <div class="action-section">
        <CosmicButton variant="primary" size="lg" glow @click="activateStrategy">
          Skanowanie galaktyki - 24 źródła
        </CosmicButton>
      </div>

      <div class="details-section">
        <h3 class="section-title">Podgląd działania</h3>
        <OrbitalCard variant="glass">
          <div class="action-timeline">
            <div class="timeline-item">
              <div class="timeline-icon">✅</div>
              <div class="timeline-content">
                <h4>Skanowanie galaktyki</h4>
                <p>24 źródła</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">⚡</div>
              <div class="timeline-content">
                <h4>Łączenie wyników</h4>
                <p>AI analizuje</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-icon">📊</div>
              <div class="timeline-content">
                <h4>Budowanie JSON-a</h4>
                <p>Struktura gotowa</p>
              </div>
            </div>
          </div>
        </OrbitalCard>
      </div>
    </div>
  </AsideLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AsideLayout from '@/layouts/AsideLayout.vue'
import PlanetOrb from '@/components/orbital/PlanetOrb.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'

const router = useRouter()

const activateStrategy = () => {
  router.push('/intention/1/json')
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.strategy-view {
  padding: $spacing-8;
  max-width: 1000px;
  margin: 0 auto;

  &__header {
    margin-bottom: $spacing-12;
  }
}

.breadcrumb {
  display: inline-block;
  color: $color-text-secondary;
  text-decoration: none;
  font-size: $font-size-sm;
  margin-bottom: $spacing-4;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary;
  }
}

.strategy-title {
  font-size: $font-size-3xl;
  color: $color-text-primary;
  margin-bottom: $spacing-3;
}

.strategy-description {
  font-size: $font-size-base;
  color: $color-text-secondary;
  line-height: $line-height-relaxed;
}

.orbital-visualization {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: $spacing-12;
}

.orbit-center-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-4;
  z-index: 10;
}

.orbit-label {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}

.orbit-ring {
  position: absolute;
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 50%;
  animation: rotate 40s linear infinite;

  &--1 {
    width: 350px;
    height: 350px;
  }
}

.orbit-planet-small {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-2;

  &--1 {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &--2 {
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }

  &--3 {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &--4 {
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
  }
}

.planet-label {
  font-size: $font-size-xs;
  color: $color-text-tertiary;
  font-weight: $font-weight-medium;
}

.action-section {
  display: flex;
  justify-content: center;
  margin-bottom: $spacing-12;
}

.details-section {
  margin-bottom: $spacing-12;
}

.section-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
  margin-bottom: $spacing-6;
}

.action-timeline {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.timeline-item {
  display: flex;
  gap: $spacing-4;
  align-items: flex-start;
}

.timeline-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-space-medium;
  border-radius: 50%;
  font-size: $font-size-lg;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;

  h4 {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  p {
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }
}

.metrics-panel {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.metric-card {
  padding: $spacing-4;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.metric-title {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-text-tertiary;
  margin-bottom: $spacing-2;
}

.metric-value {
  font-size: $font-size-2xl;
  font-weight: $font-weight-bold;
  color: $color-primary;
}

.metric-text {
  font-size: $font-size-sm;
  color: $color-text-secondary;
  line-height: $line-height-relaxed;
}

.metric-bar {
  margin-top: $spacing-2;
  height: 8px;
  background: $color-space-dark;
  border-radius: $radius-full;
  overflow: hidden;
}

.metric-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, $color-primary, $color-secondary);
  border-radius: $radius-full;
  transition: width $transition-slow;
}

.sources-section {
  margin-top: $spacing-6;
}

.sources-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
}

.source-item {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-3;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.source-icon {
  font-size: $font-size-lg;
}

.source-name {
  flex: 1;
  font-size: $font-size-sm;
  color: $color-text-primary;
  font-weight: $font-weight-medium;
}

.source-count {
  font-size: $font-size-xs;
  color: $color-text-tertiary;
}
</style>
