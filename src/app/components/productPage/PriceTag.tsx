import { formatPrice } from '@/app/library/functions/formatPrice';

interface PriceTagProps {
    price: number;
    className?: string;
}

// 
const PriceTag = ({price, className} : PriceTagProps) => {
  return (
    <span className={` ${className}`}>{formatPrice(price)}</span>
  )
}

export default PriceTag