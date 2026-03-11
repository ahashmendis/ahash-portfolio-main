import { ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  alt: string;
}

const ResponsiveImage = ({ src, webpSrc, alt, ...props }: ResponsiveImageProps) => {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default ResponsiveImage;
