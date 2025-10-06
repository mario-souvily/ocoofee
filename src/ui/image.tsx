
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
      width={200}
      height={200}
      className="object-contain mt-4"

    />
  );
}
