export const pieChartData = (data) => {
  return {
    labels: ["Não Renovável", "Renovável"],
    datasets: [
      {
        label: "Fontes de Energia",
        data: data,
        backgroundColor: ["rgba(255, 0, 0, 0.8)", "rgba(0, 255, 0, 0.8)"],
        hoverOffset: 4,
      },
    ],
  };
};
