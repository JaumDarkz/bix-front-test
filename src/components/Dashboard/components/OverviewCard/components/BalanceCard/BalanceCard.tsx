import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { BalanceCardContainer, InfoTitle, Value, Tooltip } from './BalanceCard.styles';

type Props = {
  title: string;
  value: string;
  icon: StaticImageData;
}

const BalanceCard = ({ icon, title, value }: Props) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (valueRef.current) {
      // Verifica se o texto está sendo cortado
      const isOverflowing = valueRef.current.scrollWidth > valueRef.current.clientWidth;
      setIsTruncated(isOverflowing);
    }
  }, [value]);

  const handleMouseEnter = () => {
    if (isTruncated) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleTouchStart = () => {
    if (isTruncated) {
      setShowTooltip((prev) => !prev);
    }
  };

  return (
    <BalanceCardContainer>
      <Image src={icon} alt="Icone" width={24} height={24} />

      <InfoTitle>
        {title}
      </InfoTitle>

      <Value 
        ref={valueRef} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
      >
        $ {value}
        
      </Value>
      {showTooltip && <Tooltip style={{transition: '1s'}}>$ {value}</Tooltip>}
    </BalanceCardContainer>
  );
};

export default BalanceCard;
