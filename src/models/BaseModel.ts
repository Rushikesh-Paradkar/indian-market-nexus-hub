
/**
 * BaseModel serves as the foundation for all model classes in the application
 * Provides common properties and methods that all models share
 */
export abstract class BaseModel {
  id: string;
  createdAt: string;
  
  constructor(id: string, createdAt?: string) {
    this.id = id;
    this.createdAt = createdAt || new Date().toISOString();
  }

  toJSON(): Record<string, any> {
    return {
      id: this.id,
      createdAt: this.createdAt
    };
  }
  
  // Abstract method that must be implemented by all child classes
  abstract validate(): boolean;
}
