"use client"

import { formatPrice } from '@/app/library/functions/formatPrice'
import Link from 'next/link'
import React from 'react'



const ShoppingCartButton = ({cart}) => {

    const CloseDropdown = () => {
        const dropdown = document.activeElement as HTMLElement;
    
        if (dropdown) {
          dropdown.blur();
        }
      };

  return (
<div></div>
  )
}

export default ShoppingCartButton