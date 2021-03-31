/* Icons */
import PDF from "../images/file-pdf.svg";

/* Documents */
import RUT from "../documents/RUT_PrevalentWare.pdf";
import LOGO from "../documents/Logo_PrevlalentWare.pdf";
import ACTA from "../documents/Acta_de_constitución_PrevlalentWare.pdf";
import CAMARA from "../documents/Cámara_de_Comercio_Prevalentware.pdf";
import OTRO from "../documents/Otro_Documento_Prevalentwaree.pdf";

const documents = [
  {
    companyName: "PREVALENTWARE",
    busionessName: "PREVALENTWARE S.A.S",
    identificationType: "NIT",
    idNumber: "901375150-4",
    employeesNumber: "1 - 10",
    attachments: [
      {
        file: RUT,
        name: "RUT PrevalentWare",
        icon: PDF,
      },
      {
        file: LOGO,
        name: "Logo PrevlalentWare",
        icon: PDF,
      },
      {
        file: ACTA,
        name: "Acta de constitución PrevlalentWare",
        icon: PDF,
      },
      {
        file: CAMARA,
        name: "Cámara de Comercio Prevalentware",
        icon: PDF,
      },
      {
        file: OTRO,
        name: "Otro Documento Prevalentwaree",
        icon: PDF,
      },
    ],
  },
];

export { documents };
