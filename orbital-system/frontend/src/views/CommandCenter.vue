<template>
  <div class="command-center">
    <div class="command-center__container">
      <div class="command-center__header">
        <div>
          <h2 class="page-title">Centrum Dowodzenia</h2>
          <p class="page-subtitle">360° widok twoich działań, firma i intencji</p>
        </div>
        <div class="header-meta">
          <span class="meta-item">📅 {{ currentDate }}</span>
          <span class="meta-item">⏰ 09:41</span>
        </div>
      </div>

      <div class="dashboard-grid">
        <OrbitalCard variant="glass" class="widget widget--large">
          <h3 class="widget-title">Galaktyka Intencji</h3>
          <p class="widget-subtitle">Twoje intencje w orbitalnym układzie</p>
          <div class="mini-orbital">
            <PlanetOrb size="lg" color="primary" :duration="15" />
            <div class="mini-planets">
              <PlanetOrb size="sm" color="blue" :duration="8" />
              <PlanetOrb size="sm" color="green" :duration="10" />
              <PlanetOrb size="sm" color="orange" :duration="12" />
            </div>
          </div>
          <CosmicButton variant="outline" size="sm" @click="goToGalaxy">
            Przejdź do galaktyki →
          </CosmicButton>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="widget">
          <h3 class="widget-title">Czas - Zależności</h3>
          <div class="time-stats">
            <div class="time-stat">
              <span class="time-stat__label">Aktywnych</span>
              <span class="time-stat__value">48</span>
            </div>
            <div class="time-stat">
              <span class="time-stat__label">Do zrealizowania</span>
              <span class="time-stat__value">12</span>
            </div>
            <div class="time-stat">
              <span class="time-stat__label">Opóźnionych</span>
              <span class="time-stat__value danger">7</span>
            </div>
          </div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="widget">
          <h3 class="widget-title">Następny Ruch</h3>
          <div class="next-actions">
            <div class="action-item">
              <span class="action-icon">✅</span>
              <span class="action-text">Kontynuuj wyszukiwanie roweru</span>
            </div>
            <div class="action-item">
              <span class="action-icon">📊</span>
              <span class="action-text">Przejrzyj nowe oferty</span>
            </div>
            <div class="action-item">
              <span class="action-icon">⚡</span>
              <span class="action-text">Sprawdź alerty cenowe</span>
            </div>
          </div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="widget widget--wide">
          <h3 class="widget-title">Sygnały w toku</h3>
          <div class="signals-list">
            <div class="signal-item">
              <div class="signal-icon">🎯</div>
              <div class="signal-content">
                <h4>Rower górski do 3000 zł</h4>
                <p>W toku od 2h • 3 nowe oferty</p>
              </div>
              <div class="signal-progress">85%</div>
            </div>
            <div class="signal-item">
              <div class="signal-icon">💻</div>
              <div class="signal-content">
                <h4>Laptop programistyczny</h4>
                <p>Oczekujące • 0 nowych ofert</p>
              </div>
              <div class="signal-progress">45%</div>
            </div>
          </div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="widget">
          <h3 class="widget-title">Mapa dokumentów</h3>
          <div class="document-stats">
            <div class="doc-stat">
              <span class="doc-icon">📄</span>
              <span class="doc-count">122</span>
              <span class="doc-label">Dokumenty</span>
            </div>
            <div class="doc-stat">
              <span class="doc-icon">📊</span>
              <span class="doc-count">45</span>
              <span class="doc-label">Raporty</span>
            </div>
          </div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="widget">
          <h3 class="widget-title">Kalendarz systemu</h3>
          <div class="calendar-mini">
            <div class="calendar-day">
              <span class="calendar-day__number">30</span>
              <span class="calendar-day__month">Cze</span>
            </div>
            <div class="calendar-events">
              <div class="calendar-event">
                <span class="event-time">09:41</span>
                <span class="event-name">Aktualizacja danych</span>
              </div>
              <div class="calendar-event">
                <span class="event-time">14:00</span>
                <span class="event-name">Nowe dopasowania</span>
              </div>
            </div>
          </div>
        </OrbitalCard>
      </div>

      <div class="system-status">
        <OrbitalCard variant="glass">
          <div class="status-header">
            <h3 class="widget-title">Zarząca systemu</h3>
            <div class="status-indicator">
              <span class="status-dot status-dot--active"></span>
              <span>System operacyjny</span>
            </div>
          </div>
          <div class="status-metrics">
            <div class="metric-item">
              <span class="metric-label">CPU</span>
              <div class="metric-bar">
                <div class="metric-bar-fill" style="width: 45%"></div>
              </div>
              <span class="metric-value">45%</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Pamięć</span>
              <div class="metric-bar">
                <div class="metric-bar-fill" style="width: 62%"></div>
              </div>
              <span class="metric-value">62%</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">Sieć</span>
              <div class="metric-bar">
                <div class="metric-bar-fill" style="width: 28%"></div>
              </div>
              <span class="metric-value">28%</span>
            </div>
          </div>
        </OrbitalCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import PlanetOrb from '@/components/orbital/PlanetOrb.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'

const router = useRouter()

const currentDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('pl-PL', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
})

const goToGalaxy = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.command-center {
  min-height: calc(100vh - $layout-header-height);
  padding: $spacing-8;

  &__container {
    max-width: $layout-max-width;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: $spacing-8;
  }
}

.page-title {
  font-size: $font-size-3xl;
  color: $color-text-primary;
  margin-bottom: $spacing-2;
}

.page-subtitle {
  font-size: $font-size-base;
  color: $color-text-secondary;
}

.header-meta {
  display: flex;
  gap: $spacing-4;
}

.meta-item {
  font-size: $font-size-sm;
  color: $color-text-tertiary;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: $spacing-4;
  margin-bottom: $spacing-8;
}

.widget {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;

  &--large {
    grid-column: span 2;

    @media (max-width: $breakpoint-lg) {
      grid-column: span 1;
    }
  }

  &--wide {
    grid-column: span 2;

    @media (max-width: $breakpoint-lg) {
      grid-column: span 1;
    }
  }
}

.widget-title {
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}

.widget-subtitle {
  font-size: $font-size-sm;
  color: $color-text-secondary;
  margin-top: -$spacing-2;
}

.mini-orbital {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-planets {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: $spacing-8;
}

.time-stats {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.time-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__label {
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }

  &__value {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $color-primary;

    &.danger {
      color: $color-error;
    }
  }
}

.next-actions {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
}

.action-item {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-3;
  background: $color-space-medium;
  border-radius: $radius-md;
  transition: all $transition-fast;
  cursor: pointer;

  &:hover {
    background: $color-space-light;
    transform: translateX(4px);
  }
}

.action-icon {
  font-size: $font-size-lg;
}

.action-text {
  font-size: $font-size-sm;
  color: $color-text-secondary;
}

.signals-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.signal-item {
  display: flex;
  align-items: center;
  gap: $spacing-4;
  padding: $spacing-4;
  background: $color-space-medium;
  border-radius: $radius-lg;
}

.signal-icon {
  font-size: $font-size-3xl;
  flex-shrink: 0;
}

.signal-content {
  flex: 1;

  h4 {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  p {
    font-size: $font-size-xs;
    color: $color-text-tertiary;
  }
}

.signal-progress {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: $color-success;
  flex-shrink: 0;
}

.document-stats {
  display: flex;
  gap: $spacing-6;
}

.doc-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-2;
}

.doc-icon {
  font-size: $font-size-3xl;
}

.doc-count {
  font-size: $font-size-2xl;
  font-weight: $font-weight-bold;
  color: $color-primary;
}

.doc-label {
  font-size: $font-size-xs;
  color: $color-text-tertiary;
}

.calendar-mini {
  display: flex;
  gap: $spacing-4;
}

.calendar-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: $color-space-medium;
  border-radius: $radius-lg;
  flex-shrink: 0;

  &__number {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
  }

  &__month {
    font-size: $font-size-sm;
    color: $color-text-tertiary;
  }
}

.calendar-events {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  flex: 1;
}

.calendar-event {
  display: flex;
  gap: $spacing-3;
  padding: $spacing-2;
  font-size: $font-size-xs;
}

.event-time {
  color: $color-text-tertiary;
  font-weight: $font-weight-semibold;
  font-variant-numeric: tabular-nums;
}

.event-name {
  color: $color-text-secondary;
}

.system-status {
  margin-bottom: $spacing-8;
}

.status-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-6;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  font-size: $font-size-sm;
  color: $color-text-secondary;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &--active {
    background: $color-success;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    animation: pulse-glow 2s ease-in-out infinite;
  }
}

.status-metrics {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: $spacing-4;
}

.metric-label {
  min-width: 80px;
  font-size: $font-size-sm;
  color: $color-text-secondary;
  font-weight: $font-weight-medium;
}

.metric-bar {
  flex: 1;
  height: 8px;
  background: $color-space-medium;
  border-radius: $radius-full;
  overflow: hidden;
}

.metric-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, $color-primary, $color-secondary);
  border-radius: $radius-full;
  transition: width $transition-base;
}

.metric-value {
  min-width: 50px;
  text-align: right;
  font-size: $font-size-sm;
  color: $color-text-primary;
  font-weight: $font-weight-semibold;
}
</style>
