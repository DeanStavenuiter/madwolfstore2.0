interface ShoppingCartButtonProps {}

export interface User {
    id: string | undefined;
    name?: string;
    email?: string;
    emailVerified?: boolean | null;  
    image?: string | null;           
    accounts?: any[];                
    sessions?: any[];                
    createdAt?: string;
    updatedAt?: string;
  }

export interface UserMenuButtonProps {
    user?: User;
  }