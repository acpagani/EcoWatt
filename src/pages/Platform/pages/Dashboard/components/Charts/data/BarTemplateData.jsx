export const barChartData = (data) => {
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
        label: "Emissão de Carbono (kgCO2)",
        data: data,
        borderColor: "#3e95cd",
        backGroundColor: "rgba(62, 149, 205, 0.2)",
        borderWidth: 1,
      },
    ],
  };
};
