# Orbital Intention System - Backend API

This is a Laravel-based REST API for the Orbital Intention System.

## Structure

```
backend/
├── routes/
│   └── api.php              # API route definitions
├── app/
│   ├── Models/
│   │   ├── Intention.php    # Intention model
│   │   ├── Strategy.php     # Strategy model
│   │   └── Source.php       # Source model
│   └── Http/
│       └── Controllers/
│           └── IntentionController.php
└── database/
    └── migrations/          # Database migrations (to be created)
```

## API Endpoints

### Intentions
- `GET /api/intentions` - List all intentions
- `GET /api/intentions/{id}` - Get specific intention
- `POST /api/intentions` - Create new intention
- `PUT /api/intentions/{id}` - Update intention
- `DELETE /api/intentions/{id}` - Delete intention

### Strategies
- `GET /api/intentions/{id}/strategies` - Get strategies for intention
- `GET /api/strategies` - List all strategies
- `GET /api/strategies/{id}` - Get specific strategy

### Sources
- `GET /api/sources` - List all sources
- `GET /api/sources/{id}` - Get specific source

### History
- `GET /api/history` - List history events
- `GET /api/history/{id}` - Get specific history event

### Alerts
- `GET /api/alerts` - List alerts
- `POST /api/alerts/{id}/read` - Mark alert as read
- `DELETE /api/alerts/{id}` - Delete alert

## Apollo-11 Integration

Easter eggs and references to Apollo Guidance Computer (AGC):
- Session IDs prefixed with `AGC_`
- Terminology inspired by DSKY (Display & Keyboard)
- "Noun" and "Verb" concepts from AGC in action descriptions
- Historical Apollo missions as example intentions

## Setup

To set up a full Laravel backend:

1. Install Laravel: `composer create-project laravel/laravel .`
2. Copy the models and controllers to their respective directories
3. Run migrations: `php artisan migrate`
4. Seed the database with sample data
5. Start the server: `php artisan serve`

## Frontend Integration

The Vue frontend is configured to connect to this API at `http://localhost:8000/api`.
Currently, the frontend uses Pinia stores with mock data. To connect to the real API,
update the store actions to use axios or fetch.
