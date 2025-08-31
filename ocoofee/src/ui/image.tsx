
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
      width={300}
      height={300}
      className=" object-cover center"
      style={{
        objectPosition: 'center',
      }}
    />
  );
}
