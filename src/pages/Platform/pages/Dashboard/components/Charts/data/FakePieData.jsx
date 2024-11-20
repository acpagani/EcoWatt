export const pieChartData = {
  labels: [
    "Eolica",
    "Hidreletrica",
    "Solar",
    "Termo",
    "Nuclear",
    "Gravitacional",
    "Gás Natural",
  ],
  datasets: [
    {
      label: "Fontes de Energia",
      data: [12, 19, 3, 5, 2, 3, 8],
      backgroundColor: [
        "rgba(255, 0, 0, 0.8)",
        "rgba(255, 255, 0, 0.8)",
        "rgba(0, 128, 0, 0.8)",
        "rgba(0, 0, 255, 0.8)",
        "rgba(128, 0, 128, 0.8)",
        "rgba(165, 42, 42, 0.8)",
        "rgba(255, 165, 0, 0.8)",
      ],
      hoverOffset: 4,
    },
  ],
};
