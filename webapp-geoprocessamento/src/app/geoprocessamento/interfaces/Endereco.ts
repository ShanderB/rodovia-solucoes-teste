export interface Address {
    suburb: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    latitudeUsadoRequest: number;
    longitudeUsadoRequest: number;
}

export interface Endereco {
    address?: Address;
    display_name?: string;
    latitudeUsadoRequest?: number;
    longitudeUsadoRequest?: number;
    error?: boolean;
}