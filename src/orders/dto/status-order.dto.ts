import { IsEnum } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enum/order.enum";

export class StatusOrderDto {
    @IsEnum(OrderStatusList, {
        message: `status must be one of ${OrderStatusList}`
    })
    status: OrderStatus
}