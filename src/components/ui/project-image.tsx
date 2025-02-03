import Image from 'next/image';
import React from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const ProjectImage = React.memo(({ src, alt }: ProjectImageProps) => (
  <div className="relative w-full h-[200px] overflow-hidden">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover rounded-xl"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
      loading="eager"
    />
  </div>
));

ProjectImage.displayName = 'ProjectImage';