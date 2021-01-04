import { Request, Response, NextFunction } from 'express';
import { IBrandResponse, IVehicleYears } from '../shared/schemas/fipe.schema';
import { Fipe } from '../shared/services/fipe.service';

class AutoController {
    public async brands(req: Request, res: Response, next: NextFunction): Promise<Response<IBrandResponse[]>> {
        try {
            const fipe = new Fipe();
            const data = await fipe.brands();
            const map = data.map(item => ({
                name: item.name,
                id: item.id,
            }));
            return res.json(map);
        } catch (error) {
            next(error);
        }
    }

    public async vehicles(req: Request, res: Response, next: NextFunction): Promise<Response<IBrandResponse[]>> {
        try {
            const fipe = new Fipe();
            const id = req.params.brandId;
            const data = await fipe.vehicles(id);
            const map = data.map(item => ({
                name: item.name,
                id: item.id,
            }));
            return res.json(map);
        } catch (error) {
            next(error);
        }
    }

    public async vehicleYears(req: Request, res: Response, next: NextFunction): Promise<Response<IVehicleYears[]>> {
        try {
            const fipe = new Fipe();
            const { brandId, vehicleId } = req.params;
            const data = await fipe.vehicleYears(brandId, vehicleId);
            const map = data.map(item => ({
                brand: item.marca,
                id: item.id,
                vehicle: item.veiculo,
                name: item.name
            }));
            return res.json(map);
        } catch (error) {
            next(error);
        }
    }

    public async vehicle(req: Request, res: Response, next: NextFunction): Promise<Response<IVehicleYears[]>> {
        try {
            const fipe = new Fipe();
            const { brandId, vehicleId, year } = req.params;
            const data = await fipe.vehicle(brandId, vehicleId, year);
            return res.json({
                reference: data.referencia,
                fipeCode: data.fipe_codigo,
                name: data.name,
                fuel: data.combustivel,
                brand: data.marca,
                model_year: data.ano_modelo,
                price: data.preco,
                key: data.key,
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new AutoController();