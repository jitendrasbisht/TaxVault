export interface Case {
  id: string;
  client_id: string;
  title: string;
  case_type: string;
  status: string;
  priority: string;
  assigned_to: string;
  due_date: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCaseRequest {
  client_id: string;
  title: string;
  case_type: string;
  priority: string;
  assigned_to: string;
  due_date: string;
}

export type UpdateCaseRequest = Partial<CreateCaseRequest>;
