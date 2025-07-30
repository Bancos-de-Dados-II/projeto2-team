export interface Institution {
  name: string;
  cnpj: string;
  contact: string;
  description: string;
  positionX: number;
  positionY: number;
}

export interface getInstitution {
  id: string;
  name: string;
  cnpj: string;
  contact: string;
  description: string;
  positionX?: number;
  positionY?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface InstitutionUpdate {
  name?: string;
  contact?: string;
  description?: string;
  positionX?: number;
  positionY?: number;
}
