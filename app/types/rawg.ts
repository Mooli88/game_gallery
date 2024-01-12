export interface RawgGame {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: AddedByStatus
  metacritic: number | null
  playtime: number
  suggestions_count: number
  updated: string
  user_game: null
  reviews_count: number
  saturated_color: string
  dominant_color: string
  platforms: PlatformData[]
  parent_platforms: ParentPlatform[]
  genres: Genre[]
  stores: Store[]
  clip: Clip | null
  tags: Genre[]
  short_screenshots: ShortScreenshot[]
}

export interface AddedByStatus {
  yet: number
  owned: number
  beaten: number
  toplay: number
}

export interface Clip {
  clip: string
  clips: {
    '320': string
    '640': string
    full: string
  }
  video: string
  preview: string
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  domain?: string
  language?: string
}

export type PlatformType =
  | 'playstation'
  | 'xbox'
  | 'pc'
  | 'nintendo'
  | 'ios'
  | 'android'

export interface ParentPlatform {
  platform: ParentPlatformData
}

export interface ParentPlatformData {
  id: number
  name: string
  slug: PlatformType
}

export interface PlatformData {
  platform: Platform
  released_at: null
  requirements_en: null
}

export interface Platform {
  id: number
  name: string
  slug: PlatformType
  image: null
  year_end: null
  year_start: number | null
  games_count: number
  image_background: string
}

export interface ShortScreenshot {
  id: number
  image: string
}

export interface Store {
  id: number
  store: Genre
}

export type RawgResults = {
  count: number
  next: string
  previous: string
  results: RawgGame[]
}
