import { BlurView } from 'expo-blur'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ITEM_SIZE } from '../const'
import { Game } from '../types/game'
import { getImageProps } from '../utils'
import { Platforms } from './Platforms'

type Props = Pick<Game, 'coverImage' | 'name' | 'rating' | 'platforms'>

export const GameCard = ({ coverImage, name, platforms, rating }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={getImageProps(coverImage, ITEM_SIZE, ITEM_SIZE * 1.2)}
        style={styles.coverImage}
        resizeMode='cover'
      />
      <BlurView intensity={14} style={styles.cardBody}>
        <Platforms platforms={platforms} />
        <Text numberOfLines={0} style={styles.title}>
          {name}
        </Text>
        <View>
          <Text style={styles.rating}>⭐️ {rating}</Text>
        </View>
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ITEM_SIZE * 1.4,
    overflow: 'hidden',
    borderRadius: 24,
    position: 'relative',
  },
  coverImage: {
    width: 'auto',
    flex: 1,
  },
  cardBody: {
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    minHeight: ITEM_SIZE * 0.4,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  rating: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
})
