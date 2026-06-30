<template>
  <div class="history-evolution">
    <div class="history-evolution__container">
      <div class="history-evolution__header">
        <div>
          <h2 class="page-title">Historia & Ewolucja</h2>
          <p class="page-subtitle">Historia realizacji Twoich intencji</p>
        </div>
        <div class="filters">
          <select class="filter-select">
            <option>Wszystkie</option>
            <option>Ukończone</option>
            <option>W toku</option>
            <option>Oczekujące</option>
          </select>
        </div>
      </div>

      <div class="stats-cards">
        <OrbitalCard variant="glass" class="stat-card">
          <div class="stat-card__icon">✅</div>
          <div class="stat-card__value">24</div>
          <div class="stat-card__label">Ukończone intencje</div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="stat-card">
          <div class="stat-card__icon">⚡</div>
          <div class="stat-card__value">7</div>
          <div class="stat-card__label">W toku</div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="stat-card">
          <div class="stat-card__icon">📈</div>
          <div class="stat-card__value">92%</div>
          <div class="stat-card__label">Skuteczność</div>
        </OrbitalCard>

        <OrbitalCard variant="glass" class="stat-card">
          <div class="stat-card__icon">⏱</div>
          <div class="stat-card__value">1,842</div>
          <div class="stat-card__label">Całkowity czas (godz.)</div>
        </OrbitalCard>
      </div>

      <div class="timeline-section">
        <h3 class="section-title">Twoje statystyki</h3>
        <div class="timeline">
          <div
            v-for="event in history"
            :key="event.id"
            :class="['timeline-item', `timeline-item--${event.status}`]"
          >
            <div class="timeline-marker">
              <div class="timeline-marker-dot"></div>
            </div>
            <OrbitalCard variant="glass" class="timeline-card" hoverable>
              <div class="timeline-card__header">
                <div class="timeline-card__date">{{ formatDate(event.timestamp) }}</div>
                <div :class="['timeline-card__status', `timeline-card__status--${event.status}`]">
                  {{ getStatusLabel(event.status) }}
                </div>
              </div>
              <h4 class="timeline-card__title">{{ event.title }}</h4>
              <p class="timeline-card__description">{{ event.description }}</p>
              <div class="timeline-card__progress">
                <div class="progress-bar">
                  <div class="progress-bar__fill" :style="{ width: `${event.progress}%` }"></div>
                </div>
                <span class="progress-text">{{ event.progress }}%</span>
              </div>
            </OrbitalCard>
          </div>
        </div>
      </div>

      <div class="nextsteps-section">
        <h3 class="section-title">Następne kroki</h3>
        <div class="nextsteps-grid">
          <OrbitalCard variant="glass" hoverable class="nextstep-card">
            <div class="nextstep-icon">🎯</div>
            <h4 class="nextstep-title">Zobacz wszystkie intencje</h4>
            <p class="nextstep-description">Przejrzyj pełną historię swoich celów</p>
          </OrbitalCard>

          <OrbitalCard variant="glass" hoverable class="nextstep-card">
            <div class="nextstep-icon">📊</div>
            <h4 class="nextstep-title">Szczegóły analizy</h4>
            <p class="nextstep-description">Sprawdź zaawansowane statystyki</p>
          </OrbitalCard>

          <OrbitalCard variant="glass" hoverable class="nextstep-card">
            <div class="nextstep-icon">⚙</div>
            <h4 class="nextstep-title">Ustawienia systemu</h4>
            <p class="nextstep-description">Dostosuj preferencje</p>
          </OrbitalCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import { useIntentionsStore } from '@/stores/intentions'

const store = useIntentionsStore()

const history = computed(() => store.history)

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp)
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed':
      return 'Ukończono'
    case 'in_progress':
      return 'W toku'
    case 'pending':
      return 'Oczekujące'
    case 'failed':
      return 'Niepowodzenie'
    default:
      return 'Nieznany'
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.history-evolution {
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

.filters {
  display: flex;
  gap: $spacing-3;
}

.filter-select {
  height: 40px;
  padding: 0 $spacing-4;
  background: $glass-background;
  border: 1px solid $glass-border;
  border-radius: $radius-md;
  color: $color-text-primary;
  font-size: $font-size-sm;
  font-family: $font-family-base;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right $spacing-3 center;
  background-size: 12px;
  padding-right: $spacing-8;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-4;
  margin-bottom: $spacing-12;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: $spacing-3;
  padding: $spacing-6;

  &__icon {
    font-size: $font-size-4xl;
  }

  &__value {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
  }

  &__label {
    font-size: $font-size-sm;
    color: $color-text-secondary;
  }
}

.timeline-section {
  margin-bottom: $spacing-12;
}

.section-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
  margin-bottom: $spacing-6;
}

.timeline {
  position: relative;
  padding-left: $spacing-8;

  &::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, $color-primary, $color-secondary);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: $spacing-6;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -$spacing-8;
  top: $spacing-4;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: $color-primary;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
  animation: pulse-glow 2s ease-in-out infinite;
}

.timeline-card {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-3;
  }

  &__date {
    font-size: $font-size-xs;
    color: $color-text-tertiary;
  }

  &__status {
    padding: $spacing-1 $spacing-3;
    border-radius: $radius-full;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;

    &--completed {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: $color-success;
    }

    &--in_progress {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3);
      color: $color-accent-blue;
    }

    &--pending {
      background: rgba(249, 115, 22, 0.1);
      border: 1px solid rgba(249, 115, 22, 0.3);
      color: $color-accent-orange;
    }

    &--failed {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: $color-error;
    }
  }

  &__title {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-2;
  }

  &__description {
    font-size: $font-size-sm;
    color: $color-text-secondary;
    margin-bottom: $spacing-4;
  }

  &__progress {
    display: flex;
    align-items: center;
    gap: $spacing-3;
  }
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: $color-space-medium;
  border-radius: $radius-full;
  overflow: hidden;

  &__fill {
    height: 100%;
    background: linear-gradient(90deg, $color-primary, $color-secondary);
    border-radius: $radius-full;
    transition: width $transition-base;
  }
}

.progress-text {
  font-size: $font-size-sm;
  color: $color-text-secondary;
  font-weight: $font-weight-semibold;
  min-width: 40px;
  text-align: right;
}

.nextsteps-section {
  margin-bottom: $spacing-12;
}

.nextsteps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-4;
}

.nextstep-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: $spacing-3;
  padding: $spacing-6;
  cursor: pointer;
}

.nextstep-icon {
  font-size: $font-size-4xl;
}

.nextstep-title {
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}

.nextstep-description {
  font-size: $font-size-sm;
  color: $color-text-secondary;
}
</style>
