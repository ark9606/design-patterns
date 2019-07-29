export class Singletone {
  private static _instance: Singletone;
  private _param: string;

  private constructor(param: string) {
    this._param = param;
  }
  
  public static makeInstance(param: string): Singletone {
    if(!this._instance) {
      this._instance = new Singletone(param);
    }
    return this._instance;
  }

  get param(): string {
    return this._param;
  }
}
