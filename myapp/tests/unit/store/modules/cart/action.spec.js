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

  it('handle the addToCart action', async () => {
    await cart.actions.addToCart(context, product);
    expect(context.commit).toHaveBeenCalled();
  });

  it('handle the removeFromCart action', async () => {
    await cart.actions.removeFromCart(context, product);
    expect(context.commit).toHaveBeenCalled();
  });
});
