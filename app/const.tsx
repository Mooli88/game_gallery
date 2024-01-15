import { isIos, windowDimensions } from './utils'

// TODO: give better naming than 'width' / 'hight'
export const { width, height } = windowDimensions
export const ITEM_SIZE = isIos ? width * 0.8 : width * 0.82
export enum SPACER_ID {
  PREFIX = '__spacer-el__',
  START = `${PREFIX}start`,
  END = `${PREFIX}end`,
}
