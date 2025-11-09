import Image from 'next/image';

interface AvatarProps {
  src: string;
  size?: number;
  alt?: string;
}

export default function Avatar({
  src,
  size = 32,
  alt = 'User avatar',
}: AvatarProps) {
  return (
    <button
      className="rounded-full overflow-hidden cursor-pointer"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    </button>
  );
}
