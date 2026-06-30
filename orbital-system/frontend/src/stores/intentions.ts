import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Intention, Strategy, Source, HistoryEvent, Alert } from '@/types'

export const useIntentionsStore = defineStore('intentions', () => {
  // State
  const intentions = ref<Intention[]>([
    {
      id: '1',
      query: 'Szukam roweru górskiego do 3000 zł w okolicy Białej Podlaskiej',
      budget_max: 3000,
      currency: 'PLN',
      location: 'Biała Podlaska',
      radius_km: 25,
      condition: 'używany',
      category: 'rowery górskie',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ])

  const strategies = ref<Strategy[]>([
    {
      id: 'market-research',
      name: 'Zbieracz rynkowy',
      description: 'Przeszukuje ogłoszenia i sklepy w wielu źródłach, wyciąga oferty i porównuje je dla Ciebie.',
      icon: '🎯',
      match_score: 96,
      time_estimate: '~30 sek',
      cost_estimate: 'niski',
      accuracy: 'wysoka',
      category: 'market',
      sources: [
        { id: '1', name: 'OLX', status: 'active' },
        { id: '2', name: 'Allegro', status: 'active' },
        { id: '3', name: 'Facebook', status: 'active' },
        { id: '4', name: 'Velo', status: 'active' },
      ],
    },
    {
      id: 'technical-precision',
      name: 'Technik precyzyjny',
      description: 'Buduje zapytania i filtruje dane techniczne. Więcej kontroli, idealna dla wymagających.',
      icon: '💻',
      match_score: 89,
      time_estimate: '~1-2 min',
      cost_estimate: 'średni',
      accuracy: 'bardzo wysoka',
      category: 'technical',
      sources: [
        { id: '1', name: 'API OLX', status: 'active' },
        { id: '2', name: 'Sklepy', status: 'active' },
        { id: '3', name: 'Cenoo', status: 'active' },
      ],
    },
    {
      id: 'galactic-football',
      name: 'Strategia Galaktycznego Footballu',
      description: 'Inteligentne dopasowanie - łączy dane z wielu źródeł i przewiduje najlepsze oferty dla Twojej grupy docelowej.',
      icon: '⚽',
      match_score: 98,
      time_estimate: '~4-5 sek',
      cost_estimate: 'średni',
      accuracy: '98%',
      category: 'galactic',
      sources: [
        { id: '1', name: 'OLX', status: 'active', data_count: 3845 },
        { id: '2', name: 'Allegro', status: 'active', data_count: 2103 },
        { id: '3', name: 'Facebook Marketplace', status: 'active', data_count: 1892 },
        { id: '4', name: 'Decathlon', status: 'active' },
      ],
    },
  ])

  const sources = ref<Source[]>([
    { id: '1', name: 'OLX', status: 'active', last_sync: '2 min', data_count: 12 },
    { id: '2', name: 'Allegro', status: 'active', last_sync: '5 min', data_count: 8 },
    { id: '3', name: 'Facebook', status: 'active', last_sync: '10 min', data_count: 5 },
    { id: '4', name: 'Decathlon', status: 'active', last_sync: '15 min' },
    { id: '5', name: 'Velo', status: 'inactive', last_sync: '1h' },
    { id: '6', name: 'Bikemarkt', status: 'active', last_sync: '30 min' },
  ])

  const history = ref<HistoryEvent[]>([
    {
      id: '1',
      intention_id: '1',
      title: 'Szukam roweru górskiego do 3000 zł w okolicy Białej Podlaskiej',
      description: 'Nowa intencja utworzona',
      status: 'completed',
      progress: 100,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: '2',
      intention_id: '1',
      title: 'Lukasz to programowanie używanej kawy do 800 zł w okolicy Warszawy',
      description: 'Strategia marketowa wybrana',
      status: 'completed',
      progress: 100,
      timestamp: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: '3',
      intention_id: '1',
      title: 'Kurs Vue 3x dla zaawansowanych',
      description: 'Szukanie źródeł',
      status: 'in_progress',
      progress: 75,
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
  ])

  const alerts = ref<Alert[]>([
    {
      id: '1',
      type: 'success',
      title: 'Nowe dopasowanie',
      message: 'Rower górski Kross Level 3.0 - 2 900 zł',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      read: false,
    },
    {
      id: '2',
      type: 'info',
      title: 'Cena spadła',
      message: 'Allegro: -15% na rowery marki Giant',
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      read: false,
    },
  ])

  // Actions
  const addIntention = (intention: Intention) => {
    intentions.value.push(intention)
  }

  const updateIntention = (id: string, updates: Partial<Intention>) => {
    const index = intentions.value.findIndex((i) => i.id === id)
    if (index !== -1) {
      intentions.value[index] = { ...intentions.value[index], ...updates }
    }
  }

  const getIntentionById = (id: string) => {
    return intentions.value.find((i) => i.id === id)
  }

  const getStrategyById = (id: string) => {
    return strategies.value.find((s) => s.id === id)
  }

  return {
    intentions,
    strategies,
    sources,
    history,
    alerts,
    addIntention,
    updateIntention,
    getIntentionById,
    getStrategyById,
  }
})
