export interface IManagers {
  id: number;
  taxNumber: string;
  name: string;
}
export interface IPType {
  id: number;
  name: string;
}
export interface IPaddocks {
  paddockManagerId: number;
  farmId: number;
  paddockTypeId: number;
  harvestYear: number;
  area: number;
}

export interface Ifarms {
  id: number;
  name: string;
}
