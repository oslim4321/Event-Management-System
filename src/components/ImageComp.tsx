import Image from "next/image";

type imgCom = {
    src: string;
    alt: string;
    className?: string;
    width?: string;
    height?: string;
}

export const ImgComp = ({ src, alt, className, width, height }: imgCom) => (
    <Image
        src={src}
        width={parseInt(width || "400")}
        height={parseInt(height || "400")}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        alt={alt}
        className={className}
        loading="lazy"
    />
);
