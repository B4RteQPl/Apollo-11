<template>
  <div class="alerts-notifications">
    <div class="alerts-notifications__container">
      <div class="alerts-notifications__header">
        <div>
          <h2 class="page-title">Alerty & Powiadomienia</h2>
          <p class="page-subtitle">Bądź na bieżąco z ważnymi wydarzeniami</p>
        </div>
        <div class="header-actions">
          <CosmicButton variant="outline" size="sm" @click="markAllAsRead">
            Oznacz wszystko jako przeczytane
          </CosmicButton>
        </div>
      </div>

      <div class="alerts-stats">
        <OrbitalCard variant="glass" class="stat-mini">
          <span class="stat-mini__label">Nieprzeczytane</span>
          <span class="stat-mini__value">{{ unreadCount }}</span>
        </OrbitalCard>
        <OrbitalCard variant="glass" class="stat-mini">
          <span class="stat-mini__label">Dzisiaj</span>
          <span class="stat-mini__value">{{ todayCount }}</span>
        </OrbitalCard>
        <OrbitalCard variant="glass" class="stat-mini">
          <span class="stat-mini__label">Ten tydzień</span>
          <span class="stat-mini__value">{{ weekCount }}</span>
        </OrbitalCard>
      </div>

      <div class="alerts-list">
        <OrbitalCard
          v-for="alert in alerts"
          :key="alert.id"
          variant="glass"
          hoverable
          :class="['alert-card', `alert-card--${alert.type}`, { 'alert-card--unread': !alert.read }]"
        >
          <div class="alert-card__icon">
            {{ getAlertIcon(alert.type) }}
          </div>
          <div class="alert-card__content">
            <div class="alert-card__header">
              <h4 class="alert-card__title">{{ alert.title }}</h4>
              <span class="alert-card__time">{{ formatTime(alert.timestamp) }}</span>
            </div>
            <p class="alert-card__message">{{ alert.message }}</p>
          </div>
          <div class="alert-card__actions">
            <button
              v-if="!alert.read"
              class="action-btn"
              @click.stop="markAsRead(alert.id)"
            >
              ✓
            </button>
            <button class="action-btn" @click.stop="deleteAlert(alert.id)">
              ×
            </button>
          </div>
        </OrbitalCard>
      </div>

      <div v-if="alerts.length === 0" class="empty-state">
        <div class="empty-state__icon">📭</div>
        <h3 class="empty-state__title">Brak powiadomień</h3>
        <p class="empty-state__text">Wszystkie powiadomienia zostały przeczytane</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import OrbitalCard from '@/components/ui/OrbitalCard.vue'
import CosmicButton from '@/components/ui/CosmicButton.vue'
import { useIntentionsStore } from '@/stores/intentions'

const store = useIntentionsStore()

const alerts = computed(() => store.alerts)
const unreadCount = computed(() => alerts.value.filter((a) => !a.read).length)

const todayCount = computed(() => {
  const today = new Date().setHours(0, 0, 0, 0)
  return alerts.value.filter((a) => new Date(a.timestamp).setHours(0, 0, 0, 0) === today).length
})

const weekCount = computed(() => {
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  return alerts.value.filter((a) => new Date(a.timestamp) >= weekAgo).length
})

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'success':
      return '✅'
    case 'info':
      return 'ℹ️'
    case 'warning':
      return '⚠️'
    case 'error':
      return '❌'
    default:
      return '📢'
  }
}

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d temu`
  if (hours > 0) return `${hours}h temu`
  if (minutes > 0) return `${minutes}m temu`
  return 'Przed chwilą'
}

const markAsRead = (id: string) => {
  const alert = alerts.value.find((a) => a.id === id)
  if (alert) alert.read = true
}

const markAllAsRead = () => {
  alerts.value.forEach((a) => (a.read = true))
}

const deleteAlert = (id: string) => {
  const index = alerts.value.findIndex((a) => a.id === id)
  if (index !== -1) alerts.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.alerts-notifications {
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
  flex-shrink: 0;
}

.alerts-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: $spacing-4;
  margin-bottom: $spacing-8;
}

.stat-mini {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-2;
  padding: $spacing-5;

  &__label {
    font-size: $font-size-sm;
    color: $color-text-tertiary;
  }

  &__value {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-primary;
  }
}

.alerts-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-4;
}

.alert-card {
  display: flex;
  align-items: flex-start;
  gap: $spacing-4;
  transition: all $transition-base;
  position: relative;

  &--unread {
    border-left: 3px solid $color-primary;
    background: rgba(99, 102, 241, 0.05);
  }

  &--success {
    .alert-card__icon {
      background: rgba(16, 185, 129, 0.1);
      color: $color-success;
    }
  }

  &--info {
    .alert-card__icon {
      background: rgba(59, 130, 246, 0.1);
      color: $color-accent-blue;
    }
  }

  &--warning {
    .alert-card__icon {
      background: rgba(249, 115, 22, 0.1);
      color: $color-accent-orange;
    }
  }

  &--error {
    .alert-card__icon {
      background: rgba(239, 68, 68, 0.1);
      color: $color-error;
    }
  }

  &__icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $radius-lg;
    font-size: $font-size-2xl;
    flex-shrink: 0;
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: $spacing-3;
    margin-bottom: $spacing-2;
  }

  &__title {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
  }

  &__time {
    font-size: $font-size-xs;
    color: $color-text-tertiary;
    white-space: nowrap;
    flex-shrink: 0;
  }

  &__message {
    font-size: $font-size-sm;
    color: $color-text-secondary;
    line-height: $line-height-relaxed;
  }

  &__actions {
    display: flex;
    gap: $spacing-2;
    flex-shrink: 0;
  }
}

.action-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-space-medium;
  border: 1px solid $color-border;
  border-radius: $radius-md;
  color: $color-text-secondary;
  font-size: $font-size-lg;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    background: $color-space-light;
    border-color: $color-primary;
    color: $color-text-primary;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $spacing-16;
  text-align: center;

  &__icon {
    font-size: 80px;
    margin-bottom: $spacing-6;
  }

  &__title {
    font-size: $font-size-2xl;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-3;
  }

  &__text {
    font-size: $font-size-base;
    color: $color-text-secondary;
  }
}
</style>
