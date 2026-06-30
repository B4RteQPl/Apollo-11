<template>
  <div class="sources-map">
    <div class="sources-map__container">
      <div class="sources-map__header">
        <div>
          <h2 class="page-title">Mapa Źródeł</h2>
          <p class="page-subtitle">Dashboard wszystkich źródeł w orbitalnym układzie</p>
        </div>
        <div class="active-sources-badge">
          <span class="badge-icon">✨</span>
          <span>Aktywne źródła</span>
          <span class="badge-time">08:21</span>
        </div>
      </div>

      <div class="orbital-map">
        <div class="orbit-center-main">
          <PlanetOrb size="xl" color="primary" :duration="20" />
          <h3 class="center-label">System Źródeł</h3>
          <p class="center-stats">{{ activeSources.length }}/{{ sources.length }} aktywnych</p>
        </div>

        <div
          v-for="(source, index) in sources"
          :key="source.id"
          :class="['source-orbit-item', `source-orbit-item--${index}`]"
        >
          <div class="source-planet-wrapper" @click="viewSourceDetails(source.id)">
            <PlanetOrb
              :size="source.status === 'active' ? 'md' : 'sm'"
              :color="getSourceColor(source.status)"
              :duration="15 + index * 2"
            />
            <div class="source-info-tooltip">
              <h4>{{ source.name }}</h4>
              <p v-if="source.last_sync">Sync: {{ source.last_sync }}</p>
              <p v-if="source.data_count">{{ source.data_count }} items</p>
            </div>
          </div>
        </div>
      </div>

      <div class="sources-list-section">
        <h3 class="section-title">Lista źródeł</h3>
        <div class="sources-grid">
          <OrbitalCard
            v-for="source in sources"
            :key="source.id"
            variant="glass"
            hoverable
            class="source-card"
          >
            <div class="source-card__header">
              <div class="source-card__icon">
                <PlanetOrb :size="'sm'" :color="getSourceColor(source.status)" :duration="10" />
              </div>
              <div
                :class="['source-card__status', `source-card__status--${source.status}`]"
              >
                {{ getStatusLabel(source.status) }}
              </div>
            </div>
            <h4 class="source-card__name">{{ source.name }}</h4>
            <div class="source-card__meta">
              <p v-if="source.last_sync">Ostatnia synchronizacja: {{ source.last_sync }}</p>
              <p v-if="source.data_count">Dane: {{ source.data_count }} elementów</p>
            </div>
          </OrbitalCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PlanetOrb from '@/components/orbital/PlanetOrb.vue'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import { useIntentionsStore } from '@/stores/intentions'

const store = useIntentionsStore()

const sources = computed(() => store.sources)
const activeSources = computed(() => sources.value.filter((s) => s.status === 'active'))

const getSourceColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'green'
    case 'pending':
      return 'orange'
    case 'inactive':
      return 'secondary'
    default:
      return 'primary'
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'active':
      return 'Aktywne'
    case 'pending':
      return 'Oczekujące'
    case 'inactive':
      return 'Nieaktywne'
    default:
      return 'Nieznany'
  }
}

const viewSourceDetails = (id: string) => {
  console.log('View source', id)
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.sources-map {
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
    margin-bottom: $spacing-12;
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

.active-sources-badge {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  padding: $spacing-3 $spacing-5;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: $radius-full;
  color: $color-success;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
}

.badge-icon {
  font-size: $font-size-base;
}

.badge-time {
  font-variant-numeric: tabular-nums;
}

.orbital-map {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: $spacing-16;
}

.orbit-center-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-3;
  z-index: 10;
}

.center-label {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}

.center-stats {
  font-size: $font-size-sm;
  color: $color-text-secondary;
}

.source-orbit-item {
  position: absolute;
  cursor: pointer;

  &--0 {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  &--1 {
    top: 25%;
    right: 15%;
  }

  &--2 {
    top: 50%;
    right: 5%;
  }

  &--3 {
    bottom: 25%;
    right: 20%;
  }

  &--4 {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  &--5 {
    bottom: 20%;
    left: 15%;
  }

  &--6 {
    top: 50%;
    left: 5%;
  }

  &--7 {
    top: 20%;
    left: 20%;
  }
}

.source-planet-wrapper {
  position: relative;

  &:hover .source-info-tooltip {
    opacity: 1;
    transform: translateY(-10px);
  }
}

.source-info-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  padding: $spacing-3 $spacing-4;
  background: $glass-background-strong;
  backdrop-filter: blur(16px);
  border: 1px solid $glass-border;
  border-radius: $radius-md;
  white-space: nowrap;
  opacity: 0;
  transition: all $transition-base;
  pointer-events: none;
  z-index: 100;

  h4 {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  p {
    font-size: $font-size-xs;
    color: $color-text-secondary;
  }
}

.sources-list-section {
  margin-bottom: $spacing-12;
}

.section-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
  margin-bottom: $spacing-6;
}

.sources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $spacing-4;
}

.source-card {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__icon {
    flex-shrink: 0;
  }

  &__status {
    padding: $spacing-1 $spacing-3;
    border-radius: $radius-full;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;

    &--active {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: $color-success;
    }

    &--pending {
      background: rgba(249, 115, 22, 0.1);
      border: 1px solid rgba(249, 115, 22, 0.3);
      color: $color-accent-orange;
    }

    &--inactive {
      background: rgba(100, 116, 139, 0.1);
      border: 1px solid rgba(100, 116, 139, 0.3);
      color: $color-text-tertiary;
    }
  }

  &__name {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: $spacing-1;

    p {
      font-size: $font-size-xs;
      color: $color-text-tertiary;
    }
  }
}
</style>
