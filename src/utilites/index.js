export const generateId = (array) => {
  const lastElem = array[array.length - 1];
  const currentId = lastElem.id;
  const startIndex = currentId.search("c") + 1;

  const number = currentId.slice(startIndex);

  return "c" + (+number + 1);
};
