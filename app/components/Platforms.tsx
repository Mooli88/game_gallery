import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ParentPlatform, PlatformType } from '../types/rawg'
import {
  NintentoIcon,
  PlaystationIcon,
  SmartphoneIcon,
  WindowsIcon,
  XboxIcon,
} from './Icons'

type Props = {
  platforms: ParentPlatform[]
}

const platformIcon: Record<PlatformType, JSX.Element> = {
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
        {platformIcon[platform.slug]}
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
