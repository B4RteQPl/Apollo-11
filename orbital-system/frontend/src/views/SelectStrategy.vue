<template>
  <div class="select-strategy">
    <div class="select-strategy__container">
      <div class="select-strategy__header">
        <div>
          <router-link to="/intention/1" class="breadcrumb">
            ← Powrót do intencji
          </router-link>
          <h2 class="page-title">Strategie dla Twojej intencji</h2>
          <p class="page-subtitle">Wybierz jak chcesz uzupełnić i doprecyzować swoją intencję</p>
        </div>
      </div>

      <div class="strategies-grid">
        <OrbitalCard
          v-for="strategy in strategies"
          :key="strategy.id"
          variant="glass"
          hoverable
          glow
          class="strategy-card-expanded"
          @click="selectStrategy(strategy.id)"
        >
          <div class="strategy-header">
            <div class="strategy-icon">{{ strategy.icon }}</div>
            <div class="strategy-badge">{{ strategy.match_score }}%</div>
          </div>

          <h3 class="strategy-title">{{ strategy.name }}</h3>
          <p class="strategy-description">{{ strategy.description }}</p>

          <div class="strategy-sources">
            <h4 class="sources-title">Źródła</h4>
            <div class="sources-grid">
              <div v-for="source in strategy.sources" :key="source.id" class="source-chip">
                {{ source.name }}
              </div>
            </div>
          </div>

          <div class="strategy-metrics">
            <div class="metric">
              <span class="metric-icon">⏱</span>
              <span class="metric-label">{{ strategy.time_estimate }}</span>
            </div>
            <div class="metric">
              <span class="metric-icon">🎯</span>
              <span class="metric-label">Dokładność: {{ strategy.accuracy }}</span>
            </div>
            <div class="metric">
              <span class="metric-icon">💰</span>
              <span class="metric-label">Koszt {{ strategy.cost_estimate }}</span>
            </div>
          </div>
        </OrbitalCard>
      </div>

      <div class="bottom-section">
        <div class="comparison-note">
          <span class="comparison-icon">⚖</span>
          <p>Nie wiesz którą wybrać?</p>
          <CosmicButton variant="outline" size="md" @click="compareStrategies">
            Porównaj strategie →
          </CosmicButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'
import { useIntentionsStore } from '@/stores/intentions'

const router = useRouter()
const store = useIntentionsStore()

const strategies = computed(() => store.strategies)

const selectStrategy = (strategyId: string) => {
  router.push(`/strategy/${strategyId}`)
}

const compareStrategies = () => {
  // Navigate to comparison view
  console.log('Compare strategies')
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.select-strategy {
  min-height: calc(100vh - $layout-header-height);
  padding: $spacing-8;

  &__container {
    max-width: $layout-max-width;
    margin: 0 auto;
  }

  &__header {
    margin-bottom: $spacing-8;
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

.page-title {
  font-size: $font-size-3xl;
  color: $color-text-primary;
  margin-bottom: $spacing-2;
}

.page-subtitle {
  font-size: $font-size-base;
  color: $color-text-secondary;
}

.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: $spacing-6;
  margin-bottom: $spacing-12;
}

.strategy-card-expanded {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
  cursor: pointer;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-4px);
  }
}

.strategy-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.strategy-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size-4xl;
  background: $color-space-medium;
  border-radius: $radius-xl;
}

.strategy-badge {
  padding: $spacing-2 $spacing-4;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: $radius-full;
  color: $color-success;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
}

.strategy-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}

.strategy-description {
  font-size: $font-size-sm;
  color: $color-text-secondary;
  line-height: $line-height-relaxed;
}

.strategy-sources {
  padding-top: $spacing-4;
  border-top: 1px solid $color-border;
}

.sources-title {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-text-tertiary;
  margin-bottom: $spacing-2;
}

.sources-grid {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
}

.source-chip {
  padding: $spacing-1 $spacing-3;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-full;
  font-size: $font-size-xs;
  color: $color-text-secondary;
  font-weight: $font-weight-medium;
}

.strategy-metrics {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  padding-top: $spacing-4;
  border-top: 1px solid $color-border;
}

.metric {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  font-size: $font-size-sm;
  color: $color-text-secondary;
}

.metric-icon {
  font-size: $font-size-base;
}

.metric-label {
  font-weight: $font-weight-medium;
}

.bottom-section {
  display: flex;
  justify-content: center;
}

.comparison-note {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-4;
  padding: $spacing-8;
  background: $glass-background;
  border: 1px solid $glass-border;
  border-radius: $radius-xl;
  text-align: center;

  p {
    font-size: $font-size-base;
    color: $color-text-secondary;
  }
}

.comparison-icon {
  font-size: $font-size-4xl;
}
</style>
