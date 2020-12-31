export const listOfMonths = [
  {
    value: 1,
    label: "Janeiro",
  },
  {
    value: 2,
    label: "Fevereiro",
  },
  {
    value: 3,
    label: "Março",
  },
  {
    value: 4,
    label: "Abril",
  },
  {
    value: 5,
    label: "Maio",
  },
  {
    value: 6,
    label: "Junho",
  },
  {
    value: 7,
    label: "Julho",
  },
  {
    value: 8,
    label: "Agosto",
  },
  {
    value: 9,
    label: "Setembro",
  },
  {
    value: 10,
    label: "Outubro",
  },
  {
    value: 11,
    label: "Novembro",
  },
  {
    value: 12,
    label: "Dezembro",
  },
];

export const formatDate = (date: string): string => {
  const dateFormatter = new Date(date);

  const day =
    dateFormatter.getUTCDate() <= 9
      ? `0${dateFormatter.getUTCDate()}`
      : dateFormatter.getUTCDate();
  const month =
    dateFormatter.getUTCMonth() + 1 <= 9
      ? `0${dateFormatter.getUTCMonth() + 1}`
      : dateFormatter.getUTCMonth() + 1;
  const year =
    dateFormatter.getUTCFullYear() <= 9
      ? `0${dateFormatter.getUTCFullYear()}`
      : dateFormatter.getUTCFullYear();

  return `${day}/${month}/${year}`;
};
