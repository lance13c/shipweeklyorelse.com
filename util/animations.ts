export const animateLeftVariant = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      opacity: {
        duration: 0.5,
      },
    },
  },
  exit: {
    opacity: 0,
  },
};

export const animateRightVariant = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      opacity: {
        duration: 0.5,
      },
    },
  },
  exit: {
    opacity: 0,
  },
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
