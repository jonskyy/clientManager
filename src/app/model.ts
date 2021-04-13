import { InjectionToken } from "@angular/core";

export interface Config {
    customerLimit: number;
    apiUrl:String;
}

export const CONFIG = new InjectionToken<Config>('app.config');