import { IBrand, IVehicle, IVehicleDetail, IVehicleYears } from '../schemas/fipe.schema';
import { Ajax } from './../lib/ajax.lib';

export class Fipe {
    private static baseUrl = 'https://fipeapi.appspot.com/api/1';

    constructor() { }

    private get urls() {
        return {
            brands: `${Fipe.baseUrl}/carros/marcas.json`,
            vehicles: (brandId: string) => `${Fipe.baseUrl}/carros/veiculos/${brandId}.json`,
            vehicleYear: (brandId: string, vehicleId: string) => `${Fipe.baseUrl}/carros/veiculo/${brandId}/${vehicleId}.json`,
            vehicle: (brandId: string, vehicleId: string, year: string) => `${Fipe.baseUrl}/carros/veiculo/${brandId}/${vehicleId}/${year}.json`
        }
    }

    public async brands(): Promise<IBrand[]> {
        const ajax = new Ajax();
        const url = this.urls.brands;
        const result = await ajax.get<IBrand[]>(url);
        return result.data;
    }

    public async vehicles(brandId: string): Promise<IVehicle[]> {
        const ajax = new Ajax();
        const url = this.urls.vehicles(brandId);
        const result = await ajax.get<IVehicle[]>(url);
        return result.data;
    }

    public async vehicleYears(brandId: string, vehicleId: string): Promise<IVehicleYears[]> {
        const ajax = new Ajax();
        const url = this.urls.vehicleYear(brandId, vehicleId);
        const result = await ajax.get<IVehicleYears[]>(url);
        return result.data;
    }

    public async vehicle(brandId: string, vehicleId: string, year: string): Promise<IVehicleDetail> {
        const ajax = new Ajax();
        const url = this.urls.vehicle(brandId, vehicleId, year);
        const result = await ajax.get<IVehicleDetail>(url);
        return result.data;
    }
}