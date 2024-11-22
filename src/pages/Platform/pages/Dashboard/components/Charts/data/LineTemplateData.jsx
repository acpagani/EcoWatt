export const lineChartData = (data) => {
  return {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Consumo (MWh)",
        data: data,
        borderColor: "#3e95cd",
        tension: 0.2,
      },
    ],
  };
};
