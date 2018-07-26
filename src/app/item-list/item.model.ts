export enum Mode {
    Edit,
    View
}

export class Item {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    image: string;
    selected: boolean;
    quantity: number;
    mode: Mode;
    icon: boolean;
}
