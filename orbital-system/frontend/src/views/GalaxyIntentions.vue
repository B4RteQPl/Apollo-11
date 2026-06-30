<template>
  <AsideLayout left-aside right-aside left-aside-title="Galaktyka Intencji" right-aside-title="Twoje aktywności">
    <template #left>
      <div class="intentions-list">
        <div
          v-for="planet in planets"
          :key="planet.id"
          class="intention-item"
          @click="navigateToIntention(planet.id)"
        >
          <PlanetOrb :size="planet.size" :color="planet.color" :duration="planet.orbitDuration" />
          <div class="intention-item__info">
            <h4 class="intention-item__name">{{ planet.name }}</h4>
            <p class="intention-item__query">{{ planet.intention?.query || 'No query' }}</p>
          </div>
        </div>
      </div>
    </template>

    <div class="galaxy-view">
      <div class="galaxy-view__header">
        <h1 class="galaxy-view__title">Galaktyka Intencji</h1>
        <p class="galaxy-view__subtitle">Twoje intencje w orbitalnym systemie</p>
      </div>

      <div class="galaxy-view__orbit-system">
        <div class="orbit-center">
          <PlanetOrb size="xl" color="primary" :duration="20" />
          <h3 class="orbit-center__label">Centrum</h3>
        </div>

        <div
          v-for="(planet, index) in planets"
          :key="planet.id"
          :class="['orbit-planet', `orbit-planet--${index + 1}`]"
          @click="navigateToIntention(planet.id)"
        >
          <PlanetOrb :size="planet.size" :color="planet.color" :duration="planet.orbitDuration" />
        </div>
      </div>

      <div class="galaxy-view__actions">
        <CosmicButton variant="primary" size="lg" glow @click="createNewIntention">
          + Dodaj nową intencję
        </CosmicButton>
      </div>
    </div>

    <template #right>
      <div class="activity-timeline">
        <div v-for="event in recentHistory" :key="event.id" class="activity-item">
          <div class="activity-item__icon">
            <PlanetOrb size="sm" color="secondary" :duration="10" />
          </div>
          <div class="activity-item__content">
            <h4 class="activity-item__title">{{ event.title }}</h4>
            <p class="activity-item__time">{{ formatTime(event.timestamp) }}</p>
            <div class="activity-item__progress">
              <div class="progress-bar">
                <div class="progress-bar__fill" :style="{ width: `${event.progress}%` }"></div>
              </div>
              <span class="progress-text">{{ event.progress }}%</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AsideLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AsideLayout from '@/layouts/AsideLayout.vue'
import PlanetOrb from '@/components/orbital/PlanetOrb.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'
import { useIntentionsStore } from '@/stores/intentions'
import type { Planet } from '@/types'

const router = useRouter()
const store = useIntentionsStore()

const planets = computed<Planet[]>(() => [
  {
    id: '1',
    name: 'Rower górski',
    color: 'primary',
    size: 'lg',
    orbitRadius: 200,
    orbitDuration: 15,
    intention: store.intentions[0],
  },
  {
    id: '2',
    name: 'Laptop',
    color: 'blue',
    size: 'md',
    orbitRadius: 250,
    orbitDuration: 18,
  },
  {
    id: '3',
    name: 'Mieszkanie',
    color: 'orange',
    size: 'lg',
    orbitRadius: 300,
    orbitDuration: 22,
  },
  {
    id: '4',
    name: 'Praca',
    color: 'green',
    size: 'md',
    orbitRadius: 180,
    orbitDuration: 12,
  },
])

const recentHistory = computed(() => store.history.slice(0, 5))

const navigateToIntention = (id: string) => {
  router.push(`/intention/${id}`)
}

const createNewIntention = () => {
  router.push('/intention/new')
}

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'just now'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.galaxy-view {
  padding: $spacing-12;
  min-height: calc(100vh - $layout-header-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $spacing-12;

  &__header {
    text-align: center;
  }

  &__title {
    font-size: $font-size-4xl;
    margin-bottom: $spacing-3;
    background: linear-gradient(135deg, $color-primary, $color-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__subtitle {
    color: $color-text-secondary;
    font-size: $font-size-lg;
  }

  &__orbit-system {
    position: relative;
    width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__actions {
    display: flex;
    gap: $spacing-4;
  }
}

.orbit-center {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-3;
  z-index: 10;

  &__label {
    font-size: $font-size-lg;
    color: $color-text-primary;
    font-weight: $font-weight-semibold;
  }
}

.orbit-planet {
  position: absolute;
  cursor: pointer;
  transition: transform $transition-base;

  &:hover {
    transform: scale(1.1);
  }

  &--1 {
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  &--2 {
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
  }

  &--3 {
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  &--4 {
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
  }
}

.intentions-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.intention-item {
  display: flex;
  align-items: center;
  gap: $spacing-4;
  padding: $spacing-4;
  background: $glass-background;
  border: 1px solid $glass-border;
  border-radius: $radius-lg;
  cursor: pointer;
  transition: all $transition-base;

  &:hover {
    background: $glass-background-light;
    border-color: $color-primary;
    transform: translateX(4px);
  }

  &__info {
    flex: 1;
    min-width: 0;
  }

  &__name {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  &__query {
    font-size: $font-size-sm;
    color: $color-text-tertiary;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.activity-item {
  display: flex;
  gap: $spacing-4;

  &__icon {
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  &__time {
    font-size: $font-size-xs;
    color: $color-text-tertiary;
    margin-bottom: $spacing-2;
  }

  &__progress {
    display: flex;
    align-items: center;
    gap: $spacing-2;
  }
}

.progress-bar {
  flex: 1;
  height: 6px;
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
  font-size: $font-size-xs;
  color: $color-text-secondary;
  font-weight: $font-weight-medium;
  min-width: 32px;
  text-align: right;
}
</style>
