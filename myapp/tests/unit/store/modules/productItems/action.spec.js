import productItems from '@/exercise1/modules/productItems';
import mockProducts from '@/__mock__/products';

describe('actions on the productItems module', () => {
  let context;
  const product = mockProducts[0];

  beforeEach(() => {
    context = {
      commit: jest.fn(),
    };
  });

  it('handle the updateAddedItems action', async () => {
    await productItems.actions.updateAddedItems(context, product);
    expect(context.commit).toHaveBeenCalled();
  });

  it('handle the updateRemovedItems action', async () => {
    await productItems.actions.updateRemovedItems(context, mockProducts);
    expect(context.commit).toHaveBeenCalled();
  });
});
