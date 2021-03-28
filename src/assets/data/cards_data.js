import management from "../../assets/images/industry-solid.svg";
import indicators from "../../assets/images/chart-bar-solid.svg";
import employees from "../../assets/images/user-tie-solid.svg";
import requests from "../../assets/images/users-cog-solid.svg";
import clock from "../../assets/images/clock-regular.svg";

const cards = [
  {
    icon: management,
    iconName: "management",
    title: "Solicitudes de creación de empresas",
    status: {
      iconClock: clock,
      description: "2 solicitudes sin tratar",
    },
  },
  {
    icon: indicators,
    iconName: "indicators",
    title: "Indicadores",
    status: {
      iconClock: clock,
      description: "Visitado por ultima vez 31/01/2020",
    },
  },
  {
    icon: employees,
    iconName: "employees",
    title: "Inscripciones de empleados en empresas",
    status: {
      iconClock: clock,
      description: "3 usuarios sin empresa registrada",
    },
  },
  {
    icon: requests,
    iconName: "requests",
    title: "Gestion de usuarios",
    status: {
      iconClock: clock,
      description: "532 usuarios activos en la plataforma",
    },
  },
];

export { cards };
