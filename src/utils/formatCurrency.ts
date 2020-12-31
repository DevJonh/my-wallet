// eslint-disable-next-line
export default (current: number): string => {
  return current.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
