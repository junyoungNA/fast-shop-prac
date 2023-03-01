import useOrders from '../hooks/useOrders';
import usePrototypes from '../hooks/usePrototypes';

const Orders = () => {
  const orders = useOrders();
  const prototypes = usePrototypes();
  if (orders.length === 0)
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
      </aside>
    );

  return (
    <aside>
      <div className="body">
        {orders.map(order => {
          const { id } = order;
          const prototype = prototypes.find(p => p.id === id);

          return (
            <div className="item" key={id}>
              <div className="img">
                <video src={prototype.thumbnail} />
              </div>
              <div className="content">
                <p className="title">
                  {prototype.title} x {order.quantity}
                </p>
              </div>
              <div className="action">
                <p className="price">${prototype.price * order.quantity}</p>
                <button className="btn btn--link">
                  <i className="icon icon--cross"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Orders;
