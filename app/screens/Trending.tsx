import React, { useMemo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Carousel } from '../components/Carousel'
import { useFetch } from '../hooks/useFetch'
import { Game, RawgGame } from '../types/game'
import { RawgResults } from '../types/rawg'
import { mapGameProps } from '../utils'

const GAME_RATING = {
  1: { id: 1, title: 'skip', count: 4, percent: 5.48 },
  3: { id: 3, title: 'meh', count: 13, percent: 17.81 },
  4: { id: 4, title: 'recommended', count: 29, percent: 39.73 },
  5: { id: 5, title: 'exceptional', count: 27, percent: 36.99 },
} as const
const IMAGES = [
  'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
  'https://media.rawg.io/media/crop/600/400/games/2c1/2c1984e128ac48b89953ed4de4904a3b.jpg',
  'https://media.rawg.io/media/crop/600/400/games/4b3/4b3f6c745e2cea93b4a92f69638f2e9f.jpg',
  'https://media.rawg.io/media/crop/600/400/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',
  'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
  'https://media.rawg.io/media/crop/600/400/games/2c1/2c1984e128ac48b89953ed4de4904a3b.jpg',
  'https://media.rawg.io/media/crop/600/400/games/4b3/4b3f6c745e2cea93b4a92f69638f2e9f.jpg',
  'https://media.rawg.io/media/crop/600/400/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg',
] as const

const trendingGamesUri =
  'https://rawg.io/api/games/lists/main?discover=false&ordering=relevance&page_size=10&page=1&key=c542e67aec3a4340908f9de9e86038af'

type Props = {}

export const Trending = (props: Props) => {
  const [trendingGames, { isLoading }] = useFetch<RawgResults>(trendingGamesUri)

  const games = useMemo(
    () => (trendingGames ? mapGameProps(trendingGames.results) : []),
    [trendingGames]
  )
  // const names = games.map((g) => g.name)
  // console.log(
  //   '🚀 ~ file: Trending.tsx:39 ~ Trending ',
  //   JSON.stringify(names, null, 2)
  // )

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading</Text> : <Carousel items={games} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
