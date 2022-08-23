function getPrediction(arr, weight) {
  const randomValue = Math.random();
  return arr.find((element, i) => {
    const sum = arr.slice(0, i + 1).reduce((accumulator, j) => {
      return accumulator + weight[j];
    }, 0);

    if (randomValue < sum) {
      return true;
    }

    return false;
  });
}

export default getPrediction;
