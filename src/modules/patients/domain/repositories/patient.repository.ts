import type { Patient } from '../models/patient.model';

export interface PatientRepository {
  /**
   * Creates a new patient and persists it.
   * @param patient Domain model to create.
   */
  create(patient: Partial<Patient>): Promise<Patient>;

  /**
   * Finds a patient by their ID.
   * @param id UUID of the patient.
   */
  findById(id: string): Promise<Patient | null>;

  /**
   * Retrieves all patients.
   */
  findAll(): Promise<Patient[]>;

  /**
   * Updates an existing patient.
   * @param patient The modified patient model.
   */
  update(patient: Partial<Patient>): Promise<Patient>;

  /**
   * Deletes a patient by ID.
   * @param id UUID of the patient.
   */
  delete(id: string): Promise<void>;

  /**
   * Finds a patient by their email.
   * @param email Email of the patient.
   */
  findByEmail(email: string): Promise<Patient | null>;

  /**
   * Checks if a patient with the given email exists.
   * @param email Email of the patient.
   */
  existsByEmail(email: string): Promise<boolean>;
}
