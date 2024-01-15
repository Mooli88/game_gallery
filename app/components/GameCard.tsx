import { BlurView } from 'expo-blur'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ITEM_SIZE } from '../const'
import { Game } from '../types/game'
import { getImageSourceProps } from '../utils'
import { Platforms } from './Platforms'

type Props = Pick<Game, 'coverImage' | 'name' | 'rating' | 'platforms'>

export const GameCard = ({ coverImage, name, platforms, rating }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: coverImage }}
        style={styles.coverImage}
        resizeMode='cover'
      />
      <BlurView intensity={14} style={styles.cardBody}>
        <Platforms platforms={platforms} />
        <Text numberOfLines={0} style={styles.title}>
          {name}
        </Text>
        <View>
          <Text style={styles.rating}>⭐️ {rating.toFixed(1)}</Text>
        </View>
      </BlurView>
    </View>
  )
}
const CARD_HIGHT = ITEM_SIZE * 1.4

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CARD_HIGHT,
    overflow: 'hidden',
    borderRadius: 24,
    position: 'relative',
  },
  coverImage: {
    flex: 1,
    width: ITEM_SIZE,
    height: CARD_HIGHT,
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
