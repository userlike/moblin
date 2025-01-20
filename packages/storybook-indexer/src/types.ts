export interface CustomIndexer<T> {
  generateStories(): T[];
  generateName(params: T): string;
}
