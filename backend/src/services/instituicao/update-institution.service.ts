import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";

export async function updateInstitutionService( id: number, data: Institution ): Promise<void> {
  const { name, contact, description, positionX, positionY } = data;
  await prisma.$executeRaw<Institution[]>`
        UPDATE "Instituicao"
        SET "name" = ${name}, 
            "contact" = ${contact}, 
            "description" = ${description}, 
            "localization" = ST_SetSRID(ST_MakePoint(${positionX}, ${positionY}), 4326),
            "updatedAt" = CURRENT_TIMESTAMP
        WHERE "id" = ${id}
    `;
}
