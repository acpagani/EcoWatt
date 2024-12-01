export const pieChartData = (data) => {
  return {
    labels: ["Renovável", "Não Renovável"],
    datasets: [
      {
        label: "Fontes de Energia",
        data: data,
        backgroundColor: ["rgba(0, 255, 0, 0.8)", "rgba(255, 0, 0, 0.8)"],
        hoverOffset: 4,
      },
    ],
  };
};
