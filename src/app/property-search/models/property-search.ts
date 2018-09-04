
export interface IAddress {
    houseName: string;
    houseNumber: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    postalCode: string;
    fullAddress: string;
}

export interface IContact {
    address: IAddress;
    created: Date;
    id: number;
    title: string;
    forename: string;
    surname: string;
}

export interface IImage {
    created: Date;
    id: number;
    title: string;
    description?: any;
    url: string;
}

export interface IPropertySearchResult {
    address: IAddress;
    mainVendor: IContact;
    mainImage: IImage;
    id: string;
    price: number;
}
