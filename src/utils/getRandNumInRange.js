export const getRandDecimalNumInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const getRandWholeNumInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
