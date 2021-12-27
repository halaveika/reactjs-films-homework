/* eslint-disable */
export const transformArray = (arr1, arr2) => arr1.map((element) => arr2
  .find((genre) => genre.id === element).name);
/* eslint-enable */
