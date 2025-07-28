import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";

export async function deleteInstitutionService(id: number): Promise<void> {
  await prisma.$executeRaw`
    DELETE FROM "Instituicao" WHERE "id" = ${id}`;
}
