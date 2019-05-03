import cart from '@/exercise1/modules/cart';
import mockProducts from '@/__mock__/products';

describe('actions on the cart module', () => {
  let context;
  const product = mockProducts[0];

  beforeEach(() => {
    context = {
      commit: jest.fn(),
    };
  });

  it('handles the addToCart action', () => {
    cart.actions.addToCart(context, product);
    expect(context.commit).toHaveBeenCalled();
  });

  it('handles the removeFromCart action', () => {
    cart.actions.removeFromCart(context, product);
    expect(context.commit).toHaveBeenCalled();
  });
});
