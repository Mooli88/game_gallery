import { Dimensions, PixelRatio, Platform } from 'react-native'
import { RawgGame } from './types/rawg'
import { Game } from './types/game'

// NOTE: by caching window dimensions we assuming no device rotation support
export const windowDimensions = Dimensions.get('window')
export const isIos = Platform.OS === 'ios'
export const getImageSourceProps = (
  uri: string,
  width: number,
  height: number
) => ({
  uri,
  width: PixelRatio.getPixelSizeForLayoutSize(width),
  height: PixelRatio.getPixelSizeForLayoutSize(height),
})

export const mapGameProps = (rawgGame: RawgGame[]): Game[] =>
  rawgGame.map((game) => {
    const {
      id,
      slug,
      name,
      released,
      tba,
      rating,
      parent_platforms,
      genres,
      clip,
      background_image,
    } = game

    return {
      id: `${id}`,
      tba,
      slug,
      name,
      rating,
      genres,
      released,
      clip: clip?.clips['640'],
      platforms: parent_platforms,
      coverImage: background_image,
    }
  })


