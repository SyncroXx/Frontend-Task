export const convertDateToString = (date) => {
  const year = parseInt(date);
  const arr = date.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month_index = parseInt(arr[1], 10) - 1;

  return months[month_index] + " " + year;
};

export const getAccountInsight = (account) => {
  const accountInsights = {
    sincePurchase:
      account.recentValuation.amount - account.originalPurchasePrice,
    sincePurchasePercentage:
      ((account.recentValuation.amount - account.originalPurchasePrice) /
        account.originalPurchasePrice) *
      100,
    annualAppreciation:
      new Date().getFullYear() - parseInt(account.originalPurchasePriceDate),
  };

  return accountInsights;
};
