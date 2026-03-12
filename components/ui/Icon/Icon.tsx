interface IconProps {
  name: string;
  className?: string;
  size?: string;
  fill?: string;
  stroke?: string;
}

export default function Icon({
  name,
  className,
  size,
  fill,
  stroke,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
    >
      <use href={`/icons/sprite.svg#icon-${name}`} />
    </svg>
  );
}
