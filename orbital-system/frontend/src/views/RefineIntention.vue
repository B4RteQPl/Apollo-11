<template>
  <div class="refine-intention">
    <div class="refine-intention__container">
      <router-link to="/intention/1" class="breadcrumb">
        ← Powrót do intencji
      </router-link>

      <h2 class="refine-title">Doprecyzowanie Intencji</h2>
      <p class="refine-subtitle">Dodaj szczegóły, aby znaleźć lepsze dopasowanie</p>

      <OrbitalCard variant="glass" class="form-card">
        <div class="form-group">
          <label class="form-label">Szukam czego lub do osiągnięcia</label>
          <input
            v-model="form.query"
            type="text"
            class="form-input"
            placeholder="roweru górskiego"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Budżet maksymalny</label>
          <div class="input-group">
            <input
              v-model="form.budget"
              type="number"
              class="form-input"
              placeholder="3000"
            />
            <select v-model="form.currency" class="form-select">
              <option>PLN</option>
              <option>EUR</option>
              <option>USD</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Lokalizacja</label>
          <input
            v-model="form.location"
            type="text"
            class="form-input"
            placeholder="Biała Podlaska"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Promień (km)</label>
          <input
            v-model="form.radius"
            type="number"
            class="form-input"
            placeholder="25"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Stan</label>
          <select v-model="form.condition" class="form-select">
            <option value="">Dowolny</option>
            <option value="new">Nowy</option>
            <option value="used">Używany</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Kategoria</label>
          <input
            v-model="form.category"
            type="text"
            class="form-input"
            placeholder="rowery górskie"
          />
        </div>

        <div class="form-actions">
          <CosmicButton variant="outline" size="lg" @click="goBack">
            Anuluj
          </CosmicButton>
          <CosmicButton variant="primary" size="lg" glow @click="submitForm">
            Zamień i znajdź strategię
          </CosmicButton>
        </div>
      </OrbitalCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'

const router = useRouter()

const form = reactive({
  query: 'roweru górskiego',
  budget: 3000,
  currency: 'PLN',
  location: 'Biała Podlaska',
  radius: 25,
  condition: 'used',
  category: 'rowery górskie',
})

const goBack = () => {
  router.back()
}

const submitForm = () => {
  router.push('/intention/1/strategies')
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.refine-intention {
  min-height: calc(100vh - $layout-header-height);
  padding: $spacing-8;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    width: 100%;
    max-width: 700px;
  }
}

.breadcrumb {
  display: inline-block;
  color: $color-text-secondary;
  text-decoration: none;
  font-size: $font-size-sm;
  margin-bottom: $spacing-6;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary;
  }
}

.refine-title {
  font-size: $font-size-3xl;
  color: $color-text-primary;
  margin-bottom: $spacing-2;
}

.refine-subtitle {
  font-size: $font-size-base;
  color: $color-text-secondary;
  margin-bottom: $spacing-8;
}

.form-card {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
}

.form-label {
  font-size: $font-size-sm;
  color: $color-text-primary;
  font-weight: $font-weight-medium;
}

.form-input,
.form-select {
  height: $input-height;
  padding: 0 $spacing-4;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-md;
  color: $color-text-primary;
  font-size: $font-size-base;
  font-family: $font-family-base;
  transition: all $transition-base;

  &:focus {
    outline: none;
    border-color: $color-primary;
    background: $color-space-dark;
  }

  &::placeholder {
    color: $color-text-tertiary;
  }
}

.form-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right $spacing-4 center;
  background-size: 12px;
  padding-right: $spacing-10;
  appearance: none;
}

.input-group {
  display: flex;
  gap: $spacing-2;

  .form-input {
    flex: 1;
  }

  .form-select {
    width: 120px;
  }
}

.form-actions {
  display: flex;
  gap: $spacing-4;
  margin-top: $spacing-4;
}
</style>
