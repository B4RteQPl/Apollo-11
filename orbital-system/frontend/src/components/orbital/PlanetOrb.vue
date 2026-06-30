<template>
  <div
    :class="['planet-orb', `planet-orb--${size}`, `planet-orb--${color}`]"
    :style="{ '--orbit-duration': `${duration}s` }"
  >
    <div class="planet-orb__glow"></div>
    <div class="planet-orb__surface">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'blue' | 'orange' | 'green' | 'pink'
  duration?: number
}>()
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.planet-orb {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;

  // Sizes
  &--sm {
    width: $planet-size-sm;
    height: $planet-size-sm;
  }

  &--md {
    width: $planet-size-md;
    height: $planet-size-md;
  }

  &--lg {
    width: $planet-size-lg;
    height: $planet-size-lg;
  }

  &--xl {
    width: $planet-size-xl;
    height: $planet-size-xl;
  }

  // Colors
  &--primary {
    .planet-orb__surface {
      background: linear-gradient(135deg, $color-primary-dark, $color-primary-light);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .planet-orb__glow {
      background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%);
    }
  }

  &--secondary {
    .planet-orb__surface {
      background: linear-gradient(135deg, $color-secondary-dark, $color-secondary-light);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .planet-orb__glow {
      background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%);
    }
  }

  &--blue {
    .planet-orb__surface {
      background: linear-gradient(135deg, #2563eb, #60a5fa);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .planet-orb__glow {
      background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%);
    }
  }

  &--orange {
    .planet-orb__surface {
      background: linear-gradient(135deg, #ea580c, #fb923c);
      box-shadow: 0 0 20px rgba(249, 115, 22, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .planet-orb__glow {
      background: radial-gradient(circle, rgba(249, 115, 22, 0.4), transparent 70%);
    }
  }

  &--green {
    .planet-orb__surface {
      background: linear-gradient(135deg, #059669, #34d399);
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .planet-orb__glow {
      background: radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent 70%);
    }
  }

  &--pink {
    .planet-orb__surface {
      background: linear-gradient(135deg, #db2777, #f472b6);
      box-shadow: 0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .planet-orb__glow {
      background: radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent 70%);
    }
  }

  &__glow {
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    border-radius: 50%;
    animation: pulse-glow 3s ease-in-out infinite;
    pointer-events: none;
  }

  &__surface {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 50%;
      height: 200%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: shine var(--orbit-duration, 20s) linear infinite;
    }
  }
}

@keyframes shine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(400%);
  }
}
</style>
