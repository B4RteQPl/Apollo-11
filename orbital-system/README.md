# 🚀 Orbital Intention System

> System zarządzania intencjami z kosmicznym motywem UI, zainspirowany Apollo Guidance Computer

## 🌌 Przegląd

System Orbitalnych Intencji to kompleksowa platforma do zarządzania celami i intencjami użytkownika, prezentowana w formie interaktywnego, kosmicznego interfejsu. Projekt łączy nowoczesne technologie webowe z inspiracją czerpana z historycznego programu Apollo.

![Orbital System](./docs/preview.png)

## ✨ Funkcje

### 🪐 Główne Widoki

1. **Galaktyka Intencji** (`/`) - Główny dashboard z orbitalnym układem planet reprezentujących intencje
2. **Faza Intencji** (`/intention/:id`) - Szczegółowy widok pojedynczej intencji z proponowanymi strategiami
3. **Doprecyzowanie** (`/intention/:id/refine`) - Formularz do precyzowania parametrów intencji
4. **Wybór Strategii** (`/intention/:id/strategies`) - Grid ze wszystkimi dostępnymi strategiami
5. **Strategia Galaktycznego Footballu** (`/strategy/:id`) - Szczegóły wybranej strategii z wizualizacją
6. **Mapa Źródeł** (`/sources`) - Orbital layout wszystkich źródeł danych
7. **Historia & Ewolucja** (`/history`) - Timeline realizacji intencji
8. **Podgląd JSON** (`/intention/:id/json`) - Struktura danych w formacie JSON
9. **Centrum Dowodzenia** (`/command-center`) - Dashboard 360° z metrykami
10. **Alerty** (`/alerts`) - Powiadomienia i ważne wydarzenia

### 🎨 Design System

- **Kosmiczny motyw** - Deep space colors z fioletowo-niebieskimi akcentami
- **Glassmorphism** - Półprzezroczyste karty z efektem blur
- **Animacje orbitalne** - Planety i orby z efektami świetlnymi
- **Responsive design** - Dostosowany do mobile, tablet i desktop

### 🛠 Stack Technologiczny

**Frontend:**
- Vue 3 (Composition API)
- TypeScript
- Vite
- Vue Router
- Pinia (state management)
- SCSS

**Backend:**
- Laravel 10
- RESTful API
- SQLite (demo)

## 🚀 Instalacja

### Wymagania

- Node.js 18+ 
- npm lub yarn
- PHP 8.1+ (dla Laravel backend - opcjonalnie)
- Composer (dla Laravel backend - opcjonalnie)

### Frontend Setup

```bash
cd orbital-system/frontend
npm install
npm run dev
```

Frontend będzie dostępny pod: `http://localhost:5173`

### Backend Setup (Opcjonalnie)

```bash
cd orbital-system/backend
composer install
php artisan migrate
php artisan serve
```

Backend API będzie dostępne pod: `http://localhost:8000`

## 📁 Struktura Projektu

```
orbital-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Podstawowe komponenty UI
│   │   │   ├── aside/        # Komponenty aside sections
│   │   │   └── orbital/      # Komponenty kosmiczne (planety, tło)
│   │   ├── views/            # Widoki aplikacji
│   │   ├── layouts/          # Layout components
│   │   ├── router/           # Vue Router configuration
│   │   ├── stores/           # Pinia stores
│   │   ├── styles/           # Design system (SCSS)
│   │   └── types/            # TypeScript types
│   └── package.json
└── backend/
    ├── routes/
    │   └── api.php           # API routes
    ├── app/
    │   ├── Models/           # Eloquent models
    │   └── Http/
    │       └── Controllers/  # API controllers
    └── database/
        └── migrations/       # Database migrations
```

## 🌟 Komponenty

### UI Components

- **OrbitalCard** - Karta z efektem glassmorphism
- **CosmicButton** - Button z glow effect i animacjami
- **AsideSection** - Collapsible sidebar component

### Orbital Components

- **GalaxyBackground** - Animowane tło z gwiazdami
- **PlanetOrb** - Animowana planeta z efektami świetlnymi
- **OrbitalSystem** - Układ orbit z planetami

## 🎯 Apollo-11 Integration

System zawiera easter eggs związane z Apollo Guidance Computer:

- 🚀 **Terminologia AGC** - DSKY, Noun/Verb tables w UI
- 🌕 **Misje Apollo** - Przykładowe intencje historyczne
- 💻 **Session IDs** - Prefiksowane jako `AGC_`
- 📡 **Command syntax** - Inspirowane komendami AGC

## 🎨 Kolorystyka

```scss
Primary:    #6366f1  (Indigo)
Secondary:  #8b5cf6  (Purple)
Success:    #10b981  (Green)
Warning:    #f97316  (Orange)
Error:      #ef4444  (Red)
Background: #0a0b1a  (Deep Space)
```

## 📊 State Management

Aplikacja wykorzystuje Pinia do zarządzania stanem:

- **intentions** - Lista intencji użytkownika
- **strategies** - Dostępne strategie
- **sources** - Źródła danych
- **history** - Historia działań
- **alerts** - Powiadomienia

## 🔌 API Endpoints

```
GET    /api/intentions           # Lista intencji
POST   /api/intentions           # Nowa intencja
GET    /api/intentions/{id}      # Szczegóły intencji
PUT    /api/intentions/{id}      # Aktualizacja
DELETE /api/intentions/{id}      # Usunięcie

GET    /api/strategies           # Lista strategii
GET    /api/sources              # Lista źródeł
GET    /api/history              # Historia
GET    /api/alerts               # Alerty
```

## 🚀 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## 📝 Licencja

MIT License - inspirowane projektem Apollo-11

## 🙏 Podziękowania

- NASA Apollo Program
- Virtual AGC Project
- Społeczność Vue.js i Laravel

---

**Made with 💜 in the spirit of Apollo missions**

*"That's one small step for man, one giant leap for intention management."*
