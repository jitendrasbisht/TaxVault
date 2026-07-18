import caseApi from "@/services/cases/caseApi";
import {
  Case,
  CreateCaseRequest,
  UpdateCaseRequest,
} from "../types/case";

class CaseService {
  async getCases(): Promise<Case[]> {
    const { data } = await caseApi.getAll();
    return data;
  }

  async getCase(id: string): Promise<Case> {
    const { data } = await caseApi.getById(id);
    return data;
  }

  async createCase(payload: CreateCaseRequest): Promise<Case> {
    const { data } = await caseApi.create(payload);
    return data;
  }

  async updateCase(id: string, payload: UpdateCaseRequest): Promise<Case> {
    const { data } = await caseApi.update(id, payload);
    return data;
  }

  async deleteCase(id: string): Promise<void> {
    await caseApi.remove(id);
  }

  // Compatibility methods
  async create(payload: CreateCaseRequest): Promise<Case> {
    return this.createCase(payload);
  }

  async update(id: string, payload: UpdateCaseRequest): Promise<Case> {
    return this.updateCase(id, payload);
  }

  async remove(id: string): Promise<void> {
    return this.deleteCase(id);
  }
}

export const caseService = new CaseService();
