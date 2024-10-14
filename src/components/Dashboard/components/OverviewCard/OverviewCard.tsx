import { balanceIcon, expenseIcon, incomeIcon, overviewIcon } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import { CardsRow, OverviewCardContainer, Title } from "./OverviewCard.styles";
import AreaChart from "@/components/Charts/AreaChart/AreaChart";
import { Transaction } from "@/lib/dto";

type Props = {
    depositData: Transaction[];
    withdrawData: Transaction[];
  }

const OverviewCard: React.FC<Props> = ({ depositData, withdrawData }) => {
  return (
    <OverviewCardContainer>
      <Title>
        <Image src={overviewIcon} alt="Icone" width={24} height={24} />
        Overview
      </Title>

      <div>
        <CardsRow>
          <BalanceCard icon={balanceIcon} title="Saldo" value="12,223,134,280.00" />

          <BalanceCard icon={incomeIcon} title="Receita" value="320,280.00" />

          <BalanceCard icon={expenseIcon} title="Despesas" value="60,280.00" />
        </CardsRow>

        <div>
          <AreaChart data={depositData} label="Depósitos" color="rgba(54, 162, 235, 1)" />
          <AreaChart data={withdrawData} label="Saques" color="rgba(255, 99, 132, 1)" />
        </div>
      </div>
    </OverviewCardContainer>
  );
};

export default OverviewCard;
