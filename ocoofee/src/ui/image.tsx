
import Image from "next/image";

interface IImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageComponent(props: IImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className="w-full h-full object-cover"
    />
  );
}
