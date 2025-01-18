export const enum ElementTypes {
    TEXT = 'text',
    IMAGE = 'image',
    SHAPE = 'shape',
    LINE = 'line',
    CHART = 'chart',
    TABLE = 'table',
    LATEX = 'latex',
    VIDEO = 'video',
    AUDIO = 'audio',
    FRAME = 'frame', // add
}

/**
 * 渐变
 * 
 * type: 渐变类型（径向、线性）
 * 
 * colors: 渐变颜色列表（pos: 百分比位置；color: 颜色）
 * 
 * rotate: 渐变角度（线性渐变）
 */
export type GradientType = 'linear' | 'radial'
export type GradientColor = {
  pos: number
  color: string
}
export interface Gradient {
  type: GradientType
  colors: GradientColor[]
  rotate: number
}

export type LineStyleType = 'solid' | 'dashed' | 'dotted'

/**
 * 元素阴影
 * 
 * h: 水平偏移量
 * 
 * v: 垂直偏移量
 * 
 * blur: 模糊程度
 * 
 * color: 阴影颜色
 */
export interface PPTElementShadow {
  h: number
  v: number
  blur: number
  color: string
}
/**
 * 元素边框
 * 
 * style?: 边框样式（实线或虚线）
 * 
 * width?: 边框宽度
 * 
 * color?: 边框颜色
 */
export interface PPTElementOutline {
  style?: LineStyleType
  width?: number
  color?: string
}

export type ElementLinkType = 'web' | 'slide'
/**
 * 元素超链接
 * 
 * type: 链接类型（网页、幻灯片页面）
 * 
 * target: 目标地址（网页链接、幻灯片页面ID）
 */
export interface PPTElementLink {
  type: ElementLinkType
  target: string
}

interface PPTBaseElement {
  id: string
  left: number
  top: number
  lock?: boolean
  groupId?: string
  width: number
  height: number
  rotate: number
  link?: PPTElementLink
  name?: string
}

export type TextType = 'title' | 'subtitle' | 'content' | 'item' | 'notes' | 'header' | 'footer'
/**
 * 文本元素
 * 
 * type: 元素类型（text）
 * 
 * content: 文本内容（HTML字符串）
 * 
 * defaultFontName: 默认字体（会被文本内容中的HTML内联样式覆盖）
 * 
 * defaultColor: 默认颜色（会被文本内容中的HTML内联样式覆盖）
 * 
 * outline?: 边框
 * 
 * fill?: 填充色
 * 
 * lineHeight?: 行高（倍），默认1.5
 * 
 * wordSpace?: 字间距，默认0
 * 
 * opacity?: 不透明度，默认1
 * 
 * shadow?: 阴影
 * 
 * paragraphSpace?: 段间距，默认 5px
 * 
 * vertical?: 竖向文本
 * 
 * textType?: 文本类型
 */
export interface PPTTextElement extends PPTBaseElement {
  type: 'text'
  content: string
  defaultFontName: string
  defaultColor: string
  outline?: PPTElementOutline
  fill?: string
  lineHeight?: number
  wordSpace?: number
  opacity?: number
  shadow?: PPTElementShadow
  paragraphSpace?: number
  vertical?: boolean
  textType?: TextType
}

export interface PPTFrameElement extends PPTBaseElement {
  type: 'frame'
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  url: string;
}

  // 修改 PPTElement Type
export type PPTElement = PPTTextElement | PPTImageElement | PPTShapeElement | PPTLineElement | PPTChartElement | PPTTableElement | PPTLatexElement | PPTVideoElement | PPTAudioElement | PPTFrameElement

