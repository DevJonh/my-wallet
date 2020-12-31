import React, { useMemo, useState, useEffect } from "react";

import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import { useTheme } from "../../hooks/theme";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import { Container, Content, Filters } from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import { formatDate, listOfMonths } from "../../utils/date";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  description: string;
  amount: string;
  frequency: string;
  date: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }, props): JSX.Element => {
  const movimentType = match.params.type;
  const { theme } = useTheme();

  const pageData = useMemo(() => {
    return movimentType === "entry-balance"
      ? { title: "Entradas", lineColor: theme.colors.sucess, listData: gains }
      : {
          title: "Saídas",
          lineColor: theme.colors.warning,
          listData: expenses,
        };
  }, [movimentType, theme]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    pageData.listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getUTCFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [pageData.listData]);

  const months = useMemo(() => {
    return listOfMonths.map((item) => {
      return {
        value: item.value,
        label: item.label,
      };
    });
  }, []);

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getUTCMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getUTCFullYear()
  );
  const [selectedFrequency, setSelectedFrequency] = useState([
    "recorrente",
    "eventual",
  ]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadyFrequency = selectedFrequency.findIndex(
      (item) => item === frequency
    );

    if (alreadyFrequency >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frequency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((prev) => [...prev, frequency]);
    }
  };

  useEffect(() => {
    const filteredDate = pageData.listData.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      );
    });

    const formattedData = filteredDate.map((item) => {
      return {
        description: item.description,
        amount: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        date: formatDate(item.date),
        tagColor:
          item.frequency === "recorrente"
            ? theme.colors.info
            : theme.colors.warning,
      };
    });
    setData(formattedData);
  }, [
    pageData.listData,
    theme,
    monthSelected,
    yearSelected,
    selectedFrequency,
  ]);

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(Number(e.target.value))}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(Number(e.target.value))}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter ${
            selectedFrequency.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            selectedFrequency.includes("eventual") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item, i) => (
          <HistoryFinanceCard
            key={i}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.date}
            amount={item.amount}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
