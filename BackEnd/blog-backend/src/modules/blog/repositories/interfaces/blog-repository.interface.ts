export interface IBlogRepository<T> {
  findAll(query?: any): Promise<T[]>;
  create(data: any): Promise<T>;
}
