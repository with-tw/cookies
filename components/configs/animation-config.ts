export type ComponentAnimationType =
  | 'none'
  | 'from-top'
  | 'from-bottom'
  | 'from-left'
  | 'from-right';

export type ComponentAnimationFramerConfigType = {
  opacity?: number;
  y?: number;
  x?: number;
  scale?: number;
  zoom?: number;
  width?: number;
  height?: number;
};

export const ComponentAnimation: Record<
  ComponentAnimationType,
  {
    initial: ComponentAnimationFramerConfigType;
    animate: ComponentAnimationFramerConfigType;
  }
> = {
  none: {
    initial: {},
    animate: {},
  },
  'from-bottom': {
    initial: {
      opacity: 0,
      y: 12,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  'from-top': {
    initial: {
      opacity: 0,
      y: -12,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  'from-left': {
    initial: {
      opacity: 0,
      x: -12,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  },
  'from-right': {
    initial: {
      opacity: 0,
      x: 12,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  },
};
