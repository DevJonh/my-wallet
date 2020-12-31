import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import ufaImg from "../../assets/grinning.svg";
import opsImg from "../../assets/thinking.svg";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import { listOfMonths } from "../../utils/date";

import { Container, Content } from "./styles";
import { useTheme } from "../../hooks/theme";

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getUTCMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getUTCFullYear()
  );

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
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
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((item) => {
      return {
        value: item.value,
        label: item.label,
      };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que Triste!",
        description: "Neste mês você gastou mais do que deveria.",
        footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: sadImg,
      };
    } else if (totalExpenses === 0 && totalGains === 0) {
      return {
        title: "Opss!",
        description: "Neste mês, não há registros de entradas ou saídas.",
        footerText:
          "Parece que você não fez nenhum registro no mês e ano selecionado.",
        icon: opsImg,
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufaaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo tente poupar seu dinheiro.",
        icon: ufaImg,
      };
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim. Considere investir o seu saldo.",
        icon: happyImg,
      };
    }
  }, [totalBalance, totalGains, totalExpenses]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = ((totalGains / total) * 100).toFixed(0);
    const percentExpenses = ((totalExpenses / total) * 100).toFixed(0);

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains) | 0,
        color: theme.colors.warning,
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses) | 0,
        color: theme.colors.info,
      },
    ];

    return data;
  }, [totalGains, totalExpenses, theme]);

  const historyData = useMemo(() => {
    return listOfMonths
      .map((nameMonth, month) => {
        let amountEntry = 0;

        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getUTCMonth();
          const gainYear = date.getUTCFullYear();

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount);
            } catch (error) {
              throw new Error(
                "amountEntry is invalid. amountEntry must be valid number."
              );
            }
          }
        });

        let amountOutput = 0;

        expenses.forEach((expense) => {
          const date = new Date(expense.date);
          const expenseMonth = date.getUTCMonth();
          const expenseYear = date.getUTCFullYear();

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput += Number(expense.amount);
            } catch (error) {
              throw new Error(
                "amountOutput is invalid. amountOutput must be valid number."
              );
            }
          }
        });

        return {
          monthNumber: month,
          month: nameMonth.label.substr(0, 3),
          amountEntry: Number(amountEntry.toFixed(2)),
          amountOutput: Number(amountOutput.toFixed(2)),
        };
      })
      .filter((item) => {
        const currentMonth = new Date().getUTCMonth();
        const currentYear = new Date().getUTCFullYear();

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected <= currentYear
        );
      });
  }, [yearSelected]);

  const relationExpensesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((expense) => {
        if (expense.frequency === "recorrente") {
          return (amountRecurrent += Number(expense.amount));
        }

        if (expense.frequency === "eventual") {
          return (amountEventual += Number(expense.amount));
        }
      });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(0)) | 0,
        color: theme.colors.info,
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(0)) | 0,
        color: theme.colors.warning,
      },
    ];
  }, [monthSelected, yearSelected, theme]);

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((gain) => {
        if (gain.frequency === "recorrente") {
          return (amountRecurrent += Number(gain.amount));
        }

        if (gain.frequency === "eventual") {
          return (amountEventual += Number(gain.amount));
        }
      });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(0)) | 0,
        color: theme.colors.info,
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(0)) | 0,
        color: theme.colors.warning,
      },
    ];
  }, [monthSelected, yearSelected, theme]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.info}>
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

      <Content>
        <WalletBox
          title="saldo"
          amount={totalBalance}
          footerLabel="atualizado de acordo com as entradas e saidas"
          icon="dolar"
          color={theme.colors.sucess}
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado de acordo com as entradas e saidas"
          icon="arrowUp"
          color={theme.colors.info}
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel="atualizado de acordo com as entradas e saidas"
          icon="arrowDown"
          color={theme.colors.warning}
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieChartBox data={relationExpensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry={theme.colors.info}
          lineColorAmountOutput={theme.colors.warning}
        />

        <BarChartBox
          data={relationExpensesRecurrentVersusEventual}
          title="Saídas"
        />
        <BarChartBox
          data={relationGainsRecurrentVersusEventual}
          title="Entradas"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
