<template>
  <div class="json-preview">
    <div class="json-preview__container">
      <div class="json-preview__header">
        <div>
          <router-link to="/intention/1" class="breadcrumb">
            ← Powrót do intencji
          </router-link>
          <h2 class="page-title">Podgląd JSON</h2>
          <p class="page-subtitle">Na podstawie wybranej strategii wygenerujemy strukturę danych</p>
        </div>
        <div class="header-actions">
          <CosmicButton variant="outline" size="md" @click="copyJson">
            📋 Kopiuj JSON
          </CosmicButton>
          <CosmicButton variant="secondary" size="md" @click="exportJson">
            📥 Eksport
          </CosmicButton>
        </div>
      </div>

      <OrbitalCard variant="solid" class="json-card">
        <div class="json-editor">
          <pre class="json-content"><code>{{ formattedJson }}</code></pre>
        </div>
      </OrbitalCard>

      <div class="json-actions">
        <CosmicButton variant="primary" size="lg" glow @click="executeQuery">
          ✨ Edytuj JSON
        </CosmicButton>
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

const jsonData = computed(() => ({
  intent: 'vehicle.search',
  query: 'rower górski',
  budget_max: 3000,
  currency: 'PLN',
  location: 'Biała Podlaska',
  radius_km: 25,
  condition: 'używany',
  category: 'rowery górskie',
  filters: {
    min_year: null,
    max_year: null,
    min_price: null,
    max_price: 3000,
  },
  sources: ['olx', 'allegro', 'facebook_marketplace'],
  strategy: {
    id: 'galactic-football',
    name: 'Strategia Galaktycznego Footballu',
    match_score: 98,
  },
  metadata: {
    created_at: '2025-06-30T20:39:17.000Z',
    updated_at: '2025-06-30T21:15:42.000Z',
    user_id: 'apollo_11',
    session_id: 'ses_AGC_001',
  },
}))

const formattedJson = computed(() => JSON.stringify(jsonData.value, null, 2))

const copyJson = () => {
  navigator.clipboard.writeText(formattedJson.value)
  console.log('JSON copied to clipboard')
}

const exportJson = () => {
  const blob = new Blob([formattedJson.value], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'intention.json'
  a.click()
  URL.revokeObjectURL(url)
}

const executeQuery = () => {
  router.push('/intention/1/strategies')
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.json-preview {
  min-height: calc(100vh - $layout-header-height);
  padding: $spacing-8;

  &__container {
    max-width: 1000px;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: $spacing-8;
    gap: $spacing-6;
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

.header-actions {
  display: flex;
  gap: $spacing-3;
  flex-shrink: 0;
}

.json-card {
  margin-bottom: $spacing-8;
}

.json-editor {
  background: $color-space-deep;
  border-radius: $radius-md;
  padding: $spacing-6;
  overflow-x: auto;
}

.json-content {
  margin: 0;
  font-family: $font-family-mono;
  font-size: $font-size-sm;
  line-height: $line-height-relaxed;
  color: $color-text-primary;

  code {
    background: none;
    padding: 0;
  }
}

.json-actions {
  display: flex;
  justify-content: center;
}
</style>
