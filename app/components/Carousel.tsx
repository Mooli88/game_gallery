import React, { useMemo, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { ITEM_SIZE, SPACER_ID, width } from '../const'
import { Game } from '../types/game'
import { Backdrop } from './Backdrop'
import { GameCard } from './GameCard'

type Props = {
  items: Game[]
}

export const Carousel = ({ items }: Props) => {
  const scrollXRef = useRef<Animated.Value | null>(null)

  if (scrollXRef.current === null) {
    scrollXRef.current = new Animated.Value(0)
  }

  const scrollX = scrollXRef.current

  const carouselItems = useMemo(
    () => [{ id: SPACER_ID.START }, ...items, { id: SPACER_ID.END }] as Game[],
    [items]
  )

  const AnimatedEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  )

  const animationInputRange = (index: number) => [
    (index - 2) * ITEM_SIZE,
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
  ]
  const translateY = (index: number) =>
    scrollX.interpolate({
      inputRange: animationInputRange(index),
      outputRange: [0, -50, 0],
      extrapolate: 'clamp',
    })

  return (
    <View style={styles.container}>
      <Backdrop items={carouselItems} scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        data={carouselItems}
        onScroll={AnimatedEvent}
        scrollEventThrottle={16}
        snapToInterval={ITEM_SIZE}
        keyExtractor={({ id }) => `${id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item, index }) =>
          `${item.id}`.startsWith(SPACER_ID.PREFIX) ? (
            <View style={styles.spacer} />
          ) : (
            <View style={styles.coverImageContainer}>
              <Animated.View
                style={[
                  styles.animatedCoverImageContainer,
                  { transform: [{ translateY: translateY(index) }] },
                ]}>
                <GameCard
                  coverImage={item.coverImage}
                  name={item.name}
                  rating={item.rating}
                  platforms={item.platforms}
                />
              </Animated.View>
            </View>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImageContainer: {
    width: ITEM_SIZE,
  },
  animatedCoverImageContainer: {
    // padding: 20,
    borderRadius: 24,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
  spacer: {
    width: (width - ITEM_SIZE) / 2,
  },
})
