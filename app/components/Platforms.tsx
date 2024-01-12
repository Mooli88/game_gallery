import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import { ParentPlatform, PlatformType } from '../types/rawg'
import {
  NintentoIcon,
  PlaystationIcon,
  SmartphoneIcon,
  WindowsIcon,
  XboxIcon,
} from './Icons'
import { ITEM_SIZE, height, width } from '../const'

type Props = {
  platforms: ParentPlatform[]
}

const platformIcons: Record<PlatformType, JSX.Element> = {
  pc: <WindowsIcon />,
  nintendo: <NintentoIcon />,
  playstation: <PlaystationIcon />,
  xbox: <XboxIcon />,
  ios: <SmartphoneIcon />,
  android: <SmartphoneIcon />,
}

export const Platforms = ({ platforms }: Props) => (
  <View style={styles.container}>
    {platforms.map(({ platform }) => (
      <View
        key={platform.id}
        style={styles.icon}
        accessibilityLabel={platform.name}>
        {platformIcons[platform.slug]}
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
})
