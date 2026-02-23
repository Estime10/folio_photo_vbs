const MINIATURE_GRID_CELLS = 9;
const GRID_CLASSES =
  'grid h-full w-full grid-cols-3 grid-rows-3 gap-x-3 gap-y-2 2xl:gap-2';
const CELL_CLASSES =
  'relative aspect-square min-h-0 overflow-hidden rounded';

type HomeMiniatureGridSkeletonProps = {
  visible: boolean;
};

export function HomeMiniatureGridSkeleton({ visible }: HomeMiniatureGridSkeletonProps) {
  return (
    <div
      className={`absolute inset-0 ${GRID_CLASSES} transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden
    >
      {Array.from({ length: MINIATURE_GRID_CELLS }).map((_, i) => (
        <div
          key={i}
          className={`${CELL_CLASSES} bg-foreground/10 animate-pulse`}
        />
      ))}
    </div>
  );
}
