export interface IuserRepository<T> {
  findAll(query?: any): Promise<T[]>;
  create(data?: any): Promise<T>;
  findOne(query?: any): Promise<T>;
  update(query?: any, data?: any): Promise<T>;
}
