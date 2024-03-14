import {
  ImageCard,
  ImageCardCover,
  ImageCardDescription,
  ImageCardHeadline,
} from '@/components/cookies/image-card';
import Image from 'next/image';

export const ImageCardExample = () => (
  <ImageCard>
    <ImageCardCover>
      <Image
        src="/media/images/portrait-test-image.jpg"
        alt="cover-image"
        width={300}
        height={200}
      />
    </ImageCardCover>
    <ImageCardHeadline>Explore New Features</ImageCardHeadline>
    <ImageCardDescription>
      {'Deep dive into the latest features in cookies v1.0'}
    </ImageCardDescription>
  </ImageCard>
);
