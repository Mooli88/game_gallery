import { LinearGradient } from 'expo-linear-gradient'
import React, { useMemo } from 'react'
import { Animated, FlatList, Image, StyleSheet, View } from 'react-native'
import { height, ITEM_SIZE, width } from '../const'
import { Game } from '../types/game'

const BACKDROP_HEIGHT = height * 0.65

type Media = Pick<Game, 'id' | 'coverImage' | 'clip'>

type Props = {
  items: Media[]
  scrollX: Animated.Value
}
type BackdropItemProps = {
  item: Media
  index: number
  scrollX: Props['scrollX']
}

const BackdropItem = ({ item, index, scrollX }: BackdropItemProps) => {
  const translateX = useMemo(
    () =>
      scrollX.interpolate({
        inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
        outputRange: [0, width + 10],
        extrapolate: 'clamp',
      }),
    []
  )

  return (
    <Animated.View
      removeClippedSubviews={false}
      style={[styles.backdropItem, { width: translateX }]}>
      <Image
        source={{ uri: item.coverImage }}
        style={styles.backdropImg}
        blurRadius={3}
      />
    </Animated.View>
  )
}

export const Backdrop = ({ items, scrollX }: Props) => (
  <View style={styles.backdrop}>
    <FlatList
      data={items}
      keyExtractor={({ id }) => id}
      directionalLockEnabled
      scrollEnabled={false}
      pinchGestureEnabled={false}
      removeClippedSubviews={false}
      disableScrollViewPanResponder
      contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
      renderItem={(item) => <BackdropItem {...item} scrollX={scrollX} />}
    />
    <LinearGradient
      colors={['rgba(0, 0, 0, 0)', 'white', 'white']}
      style={styles.linearGradient}
    />
  </View>
)

const styles = StyleSheet.create({
  backdrop: {
    width,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
  },
  backdropItem: {
    height,
    overflow: 'hidden',
    position: 'absolute',
  },
  backdropImg: {
    width,
    height: BACKDROP_HEIGHT,
    resizeMode: 'cover',
    position: 'absolute',
  },
  linearGradient: {
    width,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    bottom: 0,
  },
})
