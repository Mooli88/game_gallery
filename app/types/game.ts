import { Clip, RawgGame } from './rawg'

export type Game = {
  id: string
  clip: Clip['clips']['640'] | null | undefined
  coverImage: RawgGame['background_image']
  platforms: RawgGame['parent_platforms']
} & Pick<RawgGame, 'slug' | 'name' | 'released' | 'tba' | 'rating' | 'genres'>
