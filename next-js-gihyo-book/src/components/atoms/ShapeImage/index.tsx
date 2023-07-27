import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }


// cielceなら円にする
const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({shape}) => (shape === 'circle' ? '50%': '0')}
`

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props

  return <ImageWithShape shape={shape}  {...imageProps} ></ImageWithShape>
}

export default ShapeImage

