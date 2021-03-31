/* Icons */
import management from "../images/management.svg";
import indicators from "../images/indicators.svg";
import employees from "../images/employees.svg";
import requests from "../images/requests.svg";
import clock from "../images/clock.svg";

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
