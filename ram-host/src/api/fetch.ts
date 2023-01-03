/*export const ApiFetch = {
  baseURL: ''
  getAll: async(path: string = '') => {
    const url = path && `${this.baseURL}${path}`
    try{
      const request = await fetch(url)
      const data = await request.json()
      return new Promise((res)=>res(data))
    } catch(err) {
      return new Promise((_, rej)=>rej(new Error(err)))
    }
   
  }
}*/

export class ApiFetch {
  baseURL: string;
  path: string;
  url: string;

  constructor(baseURL: string, path: string) {
    this.baseURL = baseURL;
    this.path = path;
    this.url = (path && `${this.baseURL}${path}`) || "";
  }

  async getAll() {
    try {
      const request = await fetch(this.url);
      const data = await request.json();
      return new Promise((res) => res(data));
    } catch (err) {
      return new Promise((_, rej) => rej(new Error(err)));
    }
  }
}
