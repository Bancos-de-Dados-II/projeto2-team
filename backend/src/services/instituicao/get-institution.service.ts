import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";

export async function getInstitutionService(): Promise<Institution[] | null> {
  const list = await prisma.$queryRaw<Institution[]>`
    SELECT "id", 
        "name",
        "cnpj",
        "contact",
        "description",
        ST_AsGeoJSON("localization") AS localization
    FROM "Instituicao"
    `;
  return list.length > 0 ? list : null;
}
