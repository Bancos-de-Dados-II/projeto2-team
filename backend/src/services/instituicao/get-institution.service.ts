import prisma from "../../prisma/client";
import { getInstitution, Institution } from "../../@types/instituicao";

export async function getInstitutionService(): Promise<getInstitution[]> {
  const list = await prisma.instituicao.findMany();
  return list;
}
