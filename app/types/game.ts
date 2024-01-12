import { Clip, ParentPlatform, RawgGame } from './rawg'

export interface Game
  extends Pick<
    RawgGame,
    'slug' | 'name' | 'released' | 'tba' | 'rating' | 'genres'
  > {
  id: string
  clip: Clip['clips']['640'] | null | undefined
  coverImage: RawgGame['background_image']
  platforms: RawgGame['parent_platforms']
}
