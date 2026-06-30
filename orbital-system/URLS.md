# 🚀 Orbital Intention System - URLs

## Frontend Application

**Dev Server**: http://localhost:5173/

### Main Routes

| Route | Opis | Komponenty |
|-------|------|------------|
| `/` | Galaktyka Intencji - główny dashboard | GalaxyIntentions.vue |
| `/intention/:id` | Faza 1 - Szczegóły intencji | IntentionPhase.vue |
| `/intention/:id/refine` | Doprecyzowanie intencji | RefineIntention.vue |
| `/intention/:id/strategies` | Wybór strategii | SelectStrategy.vue |
| `/intention/:id/json` | Podgląd JSON struktury | JsonPreview.vue |
| `/strategy/:id` | Szczegóły strategii Galaktycznego Footballu | GalacticFootballStrategy.vue |
| `/sources` | Mapa źródeł danych | SourcesMap.vue |
| `/history` | Historia & Ewolucja intencji | HistoryEvolution.vue |
| `/command-center` | Centrum Dowodzenia - Dashboard 360° | CommandCenter.vue |
| `/alerts` | Alerty & Powiadomienia | AlertsNotifications.vue |

### Example URLs

```
http://localhost:5173/                          # Główna galaktyka
http://localhost:5173/intention/1               # Intencja #1
http://localhost:5173/intention/1/refine        # Doprecyzowanie intencji #1
http://localhost:5173/intention/1/strategies    # Strategie dla intencji #1
http://localhost:5173/intention/1/json          # JSON dla intencji #1
http://localhost:5173/strategy/galactic-football # Strategia Galaktycznego Footballu
http://localhost:5173/sources                   # Mapa źródeł
http://localhost:5173/history                   # Historia
http://localhost:5173/command-center            # Centrum Dowodzenia
http://localhost:5173/alerts                    # Alerty
```

## Backend API (Mock)

**Laravel API** (gdy uruchomiony): http://localhost:8000/api

### API Endpoints

```
GET    http://localhost:8000/api/intentions           # Lista intencji
POST   http://localhost:8000/api/intentions           # Nowa intencja
GET    http://localhost:8000/api/intentions/{id}      # Szczegóły
PUT    http://localhost:8000/api/intentions/{id}      # Aktualizacja
DELETE http://localhost:8000/api/intentions/{id}      # Usunięcie

GET    http://localhost:8000/api/intentions/{id}/strategies  # Strategie
GET    http://localhost:8000/api/strategies           # Lista strategii
GET    http://localhost:8000/api/sources              # Lista źródeł
GET    http://localhost:8000/api/history              # Historia
GET    http://localhost:8000/api/alerts               # Alerty
```

## Features & Easter Eggs

### Apollo-11 Easter Egg

Naciśnij **Konami Code** (↑ ↑ ↓ ↓ ← → ← → B A) lub wpisz `AGC()` w konsoli przeglądarki, aby zobaczyć hołd dla Apollo Guidance Computer!

## Components Overview

### UI Components
- **OrbitalCard** - Karty z glassmorphism
- **CosmicButton** - Buttony z glow effect
- **AsideSection** - Collapsible sidebars

### Orbital Components
- **GalaxyBackground** - Animowane tło gwiezdne
- **PlanetOrb** - Animowane planety
- **ApolloEasterEgg** - Easter egg z AGC

### Layouts
- **MainLayout** - Główny layout z navigation
- **AsideLayout** - Layout z aside sections

## State Management (Pinia)

Store: `useIntentionsStore()`

- **intentions** - Lista intencji użytkownika
- **strategies** - Dostępne strategie (Market Research, Technical Precision, Galactic Football)
- **sources** - Źródła danych (OLX, Allegro, Facebook, Decathlon, etc.)
- **history** - Historia działań
- **alerts** - Powiadomienia i alerty

## Tech Stack

- **Vue 3** + Composition API
- **TypeScript**
- **Vite** (dev server)
- **Vue Router** (routing)
- **Pinia** (state management)
- **SCSS** (styling)
- **Laravel** (backend API - mock)

## Development Commands

```bash
# Start dev server
cd frontend
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**Ostatnia aktualizacja**: 2026-06-30

🚀 *"One small step for code, one giant leap for intention management"*
