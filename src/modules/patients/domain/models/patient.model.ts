export interface Patient {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  providerId: string | null;
  statusId: string | null;
  createdAt: Date;
}
