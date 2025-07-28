import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";

export async function getIdInstitutionService(id: Number): Promise<Institution | null> {
  const institution = await prisma.$queryRaw<Institution[]>`
    SELECT "id", 
        "name",
        "cnpj",
        "contact",
        "description",
        ST_AsGeoJSON("localization") AS localization
    FROM "Instituicao"
    WHERE "id" = ${Number(id)}
    `;
  return institution.length > 0 ? institution[0] : null;
}