import prisma from "../../prisma/client";
import { Institution } from "../../@types/instituicao";
import { ObjectId } from "bson";

export async function getIdInstitutionService(id: string): Promise<Institution | null> {
  try {
    const objectId = new ObjectId(id);

    const institution = await prisma.instituicao.findUnique({
      where: { id: objectId.toHexString() },
    });

    return institution;
  } catch (error) {
    console.error("Erro ao listar a instituição:", error);
    return null;
  }
}
