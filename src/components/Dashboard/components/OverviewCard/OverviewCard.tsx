import { balanceIcon, expenseIcon, incomeIcon, overviewIcon } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import { CardsRow, OverviewCardContainer, Title } from "./OverviewCard.styles";

const OverviewCard = () => {
  return (
    <OverviewCardContainer>
      <Title>
        <Image src={overviewIcon} alt="Icone" width={24} height={24} />
        Overview
      </Title>

      <div>
        <CardsRow>
          <BalanceCard icon={balanceIcon} title="Balance" value="6,552,543.56" />

          <BalanceCard icon={incomeIcon} title="Income" value="320,280.45" />

          <BalanceCard icon={expenseIcon} title="Expenses" value="60,280.09" />
        </CardsRow>
      </div>
    </OverviewCardContainer>
  );
};

export default OverviewCard;