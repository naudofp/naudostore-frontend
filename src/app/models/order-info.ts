import { OrderItem } from './order-item';
export class OrderInfo {

    id: string;
    amount: number;
    issueDate: string;
    status: string;
    items: Array<OrderItem>;

    constructor() {
        this.id = "";
        this.amount = 0;
        this.issueDate = "";
        this.status = "",
        this.items = [];
    }
}

