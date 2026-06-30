<template>
  <AsideLayout right-aside right-aside-title="Proponowane strategie">
    <div class="intention-phase">
      <div class="intention-phase__header">
        <router-link to="/" class="breadcrumb">
          ← Galaktyka Intencji
        </router-link>
        <div class="strategy-selector">
          <span>Strategia: 2</span>
          <button class="selector-button">☰</button>
        </div>
      </div>

      <div class="intention-phase__content">
        <h2 class="phase-title">Faza 1 - Intencja</h2>
        <p class="phase-subtitle">Zacznij od swojej potrzeby</p>

        <div class="search-section">
          <label class="search-label">Czego szukasz lub chcesz osiągnąć?</label>
          <div class="search-input-wrapper">
            <input
              v-model="searchQuery"
              type="text"
              class="search-input"
              placeholder="Szukam roweru górskiego do 3000 zł w okolicy Białej Podlaskiej"
            />
            <button class="clear-button">×</button>
          </div>
          <div class="search-tags">
            <button class="tag-button">+ dodaj kontekst</button>
            <button class="tag-button">📍 w pobliżu</button>
            <button class="tag-button">🏷 używany</button>
          </div>
        </div>

        <CosmicButton variant="primary" size="lg" glow @click="findStrategies">
          ✨ Znajdź strategie
        </CosmicButton>
      </div>
    </div>

    <template #right>
      <div class="strategies-list">
        <OrbitalCard
          v-for="strategy in strategies"
          :key="strategy.id"
          variant="glass"
          hoverable
          class="strategy-card"
          @click="selectStrategy(strategy.id)"
        >
          <div class="strategy-card__header">
            <div class="strategy-card__icon">{{ strategy.icon }}</div>
            <div class="strategy-card__badge">Dopasowanie {{ strategy.match_score }}%</div>
          </div>
          <h3 class="strategy-card__title">{{ strategy.name }}</h3>
          <p class="strategy-card__description">{{ strategy.description }}</p>
          <div class="strategy-card__meta">
            <div class="meta-item">
              <span class="meta-label">Źródła</span>
              <div class="source-icons">
                <span v-for="source in strategy.sources.slice(0, 3)" :key="source.id" class="source-icon">
                  {{ source.name.slice(0, 2) }}
                </span>
                <span v-if="strategy.sources.length > 3" class="source-more">
                  +{{ strategy.sources.length - 3 }}
                </span>
              </div>
            </div>
            <div class="meta-item">
              <span class="meta-icon">⏱</span>
              <span class="meta-text">Czas: {{ strategy.time_estimate }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">💰</span>
              <span class="meta-text">Dokładność: {{ strategy.accuracy }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">⚡</span>
              <span class="meta-text">Koszt: {{ strategy.cost_estimate }}</span>
            </div>
          </div>
        </OrbitalCard>
      </div>
    </template>
  </AsideLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AsideLayout from '@/layouts/AsideLayout.vue'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'
import { useIntentionsStore } from '@/stores/intentions'

const router = useRouter()
const store = useIntentionsStore()

const searchQuery = ref('Szukam roweru górskiego do 3000 zł w okolicy Białej Podlaskiej')
const strategies = computed(() => store.strategies)

const findStrategies = () => {
  router.push('/intention/1/strategies')
}

const selectStrategy = (strategyId: string) => {
  router.push(`/strategy/${strategyId}`)
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.intention-phase {
  padding: $spacing-8;
  max-width: 900px;
  margin: 0 auto;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-8;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $spacing-8;
  }
}

.breadcrumb {
  color: $color-text-secondary;
  text-decoration: none;
  font-size: $font-size-sm;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary;
  }
}

.strategy-selector {
  display: flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-2 $spacing-4;
  background: $glass-background;
  border: 1px solid $glass-border;
  border-radius: $radius-md;
  font-size: $font-size-sm;
  color: $color-text-secondary;
}

.selector-button {
  background: none;
  border: none;
  color: $color-text-secondary;
  cursor: pointer;
  padding: 0;
  font-size: $font-size-base;
}

.phase-title {
  font-size: $font-size-3xl;
  color: $color-text-primary;
  margin-bottom: $spacing-2;
}

.phase-subtitle {
  font-size: $font-size-lg;
  color: $color-text-secondary;
}

.search-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.search-label {
  font-size: $font-size-base;
  color: $color-text-primary;
  font-weight: $font-weight-medium;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  height: 60px;
  padding: 0 $spacing-6;
  background: $glass-background;
  border: 2px solid $glass-border;
  border-radius: $radius-lg;
  color: $color-text-primary;
  font-size: $font-size-base;
  font-family: $font-family-base;
  transition: all $transition-base;

  &:focus {
    outline: none;
    border-color: $color-primary;
    box-shadow: $glow-soft;
  }

  &::placeholder {
    color: $color-text-tertiary;
  }
}

.clear-button {
  position: absolute;
  right: $spacing-4;
  width: 32px;
  height: 32px;
  background: $color-space-medium;
  border: none;
  border-radius: 50%;
  color: $color-text-secondary;
  font-size: $font-size-2xl;
  line-height: 1;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    background: $color-space-light;
    color: $color-text-primary;
  }
}

.search-tags {
  display: flex;
  gap: $spacing-2;
  flex-wrap: wrap;
}

.tag-button {
  padding: $spacing-2 $spacing-4;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-full;
  color: $color-text-secondary;
  font-size: $font-size-sm;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    background: $color-space-light;
    border-color: $color-primary;
    color: $color-text-primary;
  }
}

.strategies-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.strategy-card {
  cursor: pointer;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-3;
  }

  &__icon {
    font-size: $font-size-3xl;
  }

  &__badge {
    padding: $spacing-1 $spacing-3;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: $radius-full;
    color: $color-success;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-2;
  }

  &__description {
    font-size: $font-size-sm;
    color: $color-text-secondary;
    line-height: $line-height-relaxed;
    margin-bottom: $spacing-4;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: $spacing-2;
  }
}

.meta-item {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  font-size: $font-size-xs;
  color: $color-text-tertiary;
}

.meta-label {
  font-weight: $font-weight-medium;
  min-width: 50px;
}

.source-icons {
  display: flex;
  gap: $spacing-1;
}

.source-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  font-size: 10px;
  font-weight: $font-weight-semibold;
}

.source-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: $radius-sm;
  font-size: 10px;
  font-weight: $font-weight-semibold;
  color: $color-primary;
}

.meta-icon {
  font-size: $font-size-base;
}

.meta-text {
  color: $color-text-secondary;
}
</style>
