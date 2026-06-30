<template>
  <div class="galaxy-background">
    <div class="stars-layer stars-layer--1"></div>
    <div class="stars-layer stars-layer--2"></div>
    <div class="stars-layer stars-layer--3"></div>
    <div class="nebula"></div>
  </div>
</template>

<script setup lang="ts">
// Pure CSS animated galaxy background
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.galaxy-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      ellipse at center,
      rgba(99, 102, 241, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at top right,
      rgba(139, 92, 246, 0.03) 0%,
      transparent 60%
    ),
    $color-space-deep;
  z-index: -1;
  overflow: hidden;
}

.stars-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0;
  animation: twinkle 3s ease-in-out infinite;

  &--1 {
    background-image: radial-gradient(
      1px 1px at 20px 30px,
      white,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(1px 1px at 60px 70px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 130px 90px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 90px 140px, white, rgba(0, 0, 0, 0));
    animation-delay: 0s;
  }

  &--2 {
    background-image: radial-gradient(
      1px 1px at 40px 60px,
      white,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(1px 1px at 110px 80px, white, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 150px 120px, white, rgba(0, 0, 0, 0));
    animation-delay: 1s;
  }

  &--3 {
    background-image: radial-gradient(
      2px 2px at 70px 40px,
      rgba(99, 102, 241, 0.8),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
      2px 2px at 160px 100px,
      rgba(139, 92, 246, 0.8),
      rgba(0, 0, 0, 0)
    );
    animation-delay: 2s;
  }
}

.nebula {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  margin: -300px 0 0 -300px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(139, 92, 246, 0.05) 30%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
  animation: nebula-pulse 8s ease-in-out infinite;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes nebula-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}
</style>
