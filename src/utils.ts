function getRandomValue(arr: string[], weights?: number[]) {
  if (typeof weights === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    weights = new Array(arr.length).fill(1 / arr.length);
  }

  const randomValue = Math.random();
  return arr.find((_element, index: number) => {
    const sum = weights
      ? weights.slice(0, index + 1).reduce((accumulator, val) => {
          return accumulator + val;
        }, 0)
      : 0;

    if (randomValue < sum) {
      return true;
    }

    return false;
  });
}

export default getRandomValue;
