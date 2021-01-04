export interface IBrand {
    name: string;
    fipe_name: string;
    order: number;
    key: string;
    id: number;
}

export interface IBrandResponse {
    name: string;
    id: number;
}

export interface IVehicle {
    fipe_marca: string;
    name: string;
    marca: string;
    key: string;
    id: string;
    fipe_name: string;
}

export interface IVehicleResponse {
    name: string;
    id: string;
}

export interface IVehicleYears {
    fipe_marca: string;
    fipe_codigo: string;
    name: string;
    marca: string;
    key: string;
    veiculo: string;
    id: string;
}

export interface IVehicleYearsResponse {
    name: string;
    brand: string;
    id: string;
    vehicle: string;
}

export interface IVehicleDetail {
    referencia: string;
    fipe_codigo: string;
    name: string;
    combustivel: string;
    marca: string;
    ano_modelo: string;
    preco: string;
    key: string;
    time: number;
    veiculo: string;
    id: string;
}

export interface IVehicleDetailResponse {
    reference: string;
    fipeCode: string;
    name: string;
    fuel: string;
    brand: string;
    model_year: string;
    price: string;
    key: string;
}