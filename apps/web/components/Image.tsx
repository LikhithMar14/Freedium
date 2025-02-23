import { IKImage } from "imagekitio-next";

interface ImageProps {
  src: string;
  className?: string;
  w?: number;
  h?: number;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, className = "", w=100, h=100, alt="hello" }) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: `${w}px`, height: `${h}px` }} 
    >
      <IKImage
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT as string}
        path={src}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt}
        width={w}
        height={h}
        transformation={[
          {
            width: w.toString(),
            height: h.toString(),
          },
        ]}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Image;
