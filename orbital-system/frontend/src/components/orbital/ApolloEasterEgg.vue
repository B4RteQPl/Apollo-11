<template>
  <div v-if="show" class="apollo-easter-egg">
    <div class="apollo-content">
      <div class="apollo-header">
        <h3>🚀 APOLLO GUIDANCE COMPUTER</h3>
        <button class="close-btn" @click="close">×</button>
      </div>
      <div class="apollo-body">
        <pre class="agc-display">{{ agcMessage }}</pre>
        <div class="dsky-info">
          <p><strong>NOUN 36:</strong> Time from ignition</p>
          <p><strong>VERB 16:</strong> Display decimal data</p>
          <p><strong>Program 63:</strong> Lunar landing guidance</p>
        </div>
        <p class="apollo-note">
          This Orbital Intention System is inspired by the Apollo Guidance Computer (AGC),
          the revolutionary computer that guided astronauts to the Moon in 1969.
        </p>
        <p class="apollo-link">
          Original Apollo 11 code: 
          <a href="https://github.com/chrislgarry/Apollo-11" target="_blank">
            github.com/chrislgarry/Apollo-11
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const show = ref(false)

const agcMessage = `
LUNAR MODULE GUIDANCE COMPUTER
---------------------------------
VERB 16 NOUN 36
TIME FROM IGNITION
+00004 +12345 +67890

PROGRAM 63 - BRAKING PHASE
ALTITUDE: 50,000 FT
VELOCITY: 5,500 FPS
FUEL: 82%

1201 ALARM - EXECUTIVE OVERFLOW
PROCEED WITH LANDING
`

defineExpose({ show })

const close = () => {
  show.value = false
}

// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
]
let konamiIndex = 0

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
      konamiIndex++
      if (konamiIndex === konamiCode.length) {
        show.value = true
        konamiIndex = 0
      }
    } else {
      konamiIndex = 0
    }
  })

  // Alternative: AGC command (type "AGC" in console)
  ;(window as any).AGC = () => {
    show.value = true
  }
})
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.apollo-easter-egg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fade-in 0.3s ease-out;
}

.apollo-content {
  max-width: 700px;
  width: 90%;
  background: $color-space-dark;
  border: 2px solid $color-primary;
  border-radius: $radius-xl;
  padding: $spacing-8;
  box-shadow: 0 0 50px rgba(99, 102, 241, 0.5);
  animation: scale-in 0.3s ease-out;
}

.apollo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-6;
  padding-bottom: $spacing-4;
  border-bottom: 1px solid $color-border;

  h3 {
    font-family: $font-family-mono;
    font-size: $font-size-xl;
    color: $color-primary;
    letter-spacing: 2px;
  }
}

.close-btn {
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid $color-border;
  border-radius: 50%;
  color: $color-text-secondary;
  font-size: $font-size-2xl;
  line-height: 1;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    background: $color-space-medium;
    border-color: $color-primary;
    color: $color-primary;
  }
}

.apollo-body {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.agc-display {
  font-family: $font-family-mono;
  font-size: $font-size-sm;
  line-height: $line-height-relaxed;
  color: #00ff00;
  background: #000;
  padding: $spacing-6;
  border-radius: $radius-md;
  border: 1px solid #00ff00;
  overflow-x: auto;
}

.dsky-info {
  display: flex;
  flex-direction: column;
  gap: $spacing-2;
  padding: $spacing-4;
  background: $color-space-medium;
  border-radius: $radius-md;

  p {
    font-family: $font-family-mono;
    font-size: $font-size-sm;
    color: $color-text-secondary;

    strong {
      color: $color-primary;
    }
  }
}

.apollo-note {
  font-size: $font-size-sm;
  color: $color-text-secondary;
  line-height: $line-height-relaxed;
}

.apollo-link {
  font-size: $font-size-sm;
  color: $color-text-tertiary;

  a {
    color: $color-primary;
    text-decoration: underline;

    &:hover {
      color: $color-primary-light;
    }
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
