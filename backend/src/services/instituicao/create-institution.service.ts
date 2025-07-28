import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";

export async function createInstitutionService(data: Institution): Promise<void> {
  const { name, cnpj, contact, description, positionX, positionY } = data;
  await prisma.$executeRaw<Institution[]>`
        INSERT INTO "Instituicao" ("name", "cnpj", "contact", "description", "localization")
        VALUES (${name}, ${cnpj}, ${contact}, ${description}, 
        ST_SetSRID(ST_MakePoint(${positionX}, ${positionY}), 4326))
    `;
}
