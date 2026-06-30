// Type definitions for Orbital Intention System

export interface Intention {
  id: string
  query: string
  budget_max?: number
  currency?: string
  location?: string
  radius_km?: number
  condition?: string
  category?: string
  created_at: string
  updated_at: string
}

export interface Strategy {
  id: string
  name: string
  description: string
  icon?: string
  match_score: number
  time_estimate?: string
  cost_estimate?: string
  accuracy?: string
  sources: Source[]
  category: 'market' | 'technical' | 'galactic' | 'strategic'
}

export interface Source {
  id: string
  name: string
  logo?: string
  status: 'active' | 'inactive' | 'pending'
  last_sync?: string
  data_count?: number
}

export interface HistoryEvent {
  id: string
  intention_id: string
  title: string
  description: string
  status: 'completed' | 'in_progress' | 'pending' | 'failed'
  progress: number
  timestamp: string
}

export interface Alert {
  id: string
  type: 'success' | 'info' | 'warning' | 'error'
  title: string
  message: string
  timestamp: string
  read: boolean
}

export interface Planet {
  id: string
  name: string
  color: 'primary' | 'secondary' | 'blue' | 'orange' | 'green' | 'pink'
  size: 'sm' | 'md' | 'lg' | 'xl'
  orbitRadius: number
  orbitDuration: number
  intention?: Intention
}
