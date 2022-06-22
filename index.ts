import { useMemo } from "react";
import { useLocation } from "remix";

export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new Query(new URLSearchParams(search)), [search]);
}

class Query {
  public query: URLSearchParams;

  constructor(query: URLSearchParams) {
    this.query = query;
  }

  public get(key: string): string | null {
    return this.query.get(key);
  }

  public set(key: string, value: string): void {
    this.query.set(key, value);
  }

  public delete(key: string): void {
    this.query.delete(key);
  }

  public forEach(callback: (value: string, key: string) => void): void {
    this.query.forEach((value, key) => callback(value, key));
  }

  public entriesArray(): Array<[string, string]> {
    let entries = []
    let _entries = this.query.entries();
    for (let entry of _entries) {
      entries.push(entry);
    }

    return entries;
  }

  public keysArray(): Array<string> {
    let keys = []
    let _keys = this.query.keys();
    for (let key of _keys) {
      keys.push(key);
    }

    return keys;
  }

  public valuesArray(): Array<string> {
    let values = []
    let _values = this.query.values();
    for (let value of _values) {
      values.push(value);
    }

    return values;
  }

  public entries(): IterableIterator<[string, string]> {
    return this.query.entries();
  }

  public keys(): IterableIterator<string> {
    return this.query.keys();
  }

  public values(): IterableIterator<string> {
    return this.query.values();
  }
}
