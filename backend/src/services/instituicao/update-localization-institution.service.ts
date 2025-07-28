import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";

export async function updateLocalizationInstitutionService(id: number, positionX: number, positionY: number): Promise<void> {
    await prisma.$executeRaw<Institution[]>`
        UPDATE "Instituicao"
        SET "localization" = ST_SetSRID(ST_MakePoint(${positionX}, ${positionY}), 4326)
        WHERE "id" = ${id}
    `;

}