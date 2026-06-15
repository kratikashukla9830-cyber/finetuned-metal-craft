import { Order } from '../model/Order';

export const findAllOrders = async () => {
  // Populating the nested product references inside the items array
  const orders = await Order.find()
  .populate('items.product')
  .sort({ createdAt: -1 });
  if (orders) {
    return orders.map(order => ({
      ...order.toObject(),
      date: order.createdAt.toISOString().slice(0, 10),
      createdAt: undefined
    }));
  }  
};

export const findOrderById = async (id: string) => {
  const order = await Order.findById(id).populate('items.product');

  if (order) {
    return {
      ...order,
      date: order.createdAt.toISOString().slice(0, 10),
      createdAt: undefined
    };
  }
};

export const createOrder = async (orderData: any) => {
  const order = await Order.create(orderData);

  if (order) {
    return {
      ...order,
      date: order.createdAt.toISOString().slice(0, 10),
      createdAt: undefined
    };
  }
};

export const updateOrderStatus = async (id: string, status: string) => {
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });

  if (order) {
    return {
      ...order,
      date: order.createdAt.toISOString().slice(0, 10),
      createdAt: undefined
    };
  }
};