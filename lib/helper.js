

export function formatMoney(value,car=2, currency = 'USD', locale = 'en-US') {
    const numericValue = typeof value === 'string' 
      ? parseFloat(value.replace(/[^0-9.-]/g, '')) 
      : value;
    
    if (isNaN(numericValue)) {
      throw new Error('Invalid input: Value must be a number or numeric string.');
    }
  
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: car,
      maximumFractionDigits: car,
    }).format(numericValue);
  }

  export const sideRoutes = [
      { path: "/dashboard", title: "Overview" },
      { path: "/dashboard/savings", title: "Savings" },
      { path: "/dashboard/cards", title: "Cards" },
      { path: "/dashboard/payments", title: "Payments" },
      { path: "/dashboard/activity", title: "Activity" },
      { path: "/dashboard/profile", title: "Profile" },
    ];
  