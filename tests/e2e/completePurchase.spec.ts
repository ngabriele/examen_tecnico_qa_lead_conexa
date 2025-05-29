
import { test } from '../../utils/auth';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { PlaceOrderPage } from '../../pages/PlaceOrderPage';

test('Completar compra y verificar confirmación', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const order = new PlaceOrderPage(page);

  await home.goTo();
  await home.selectProduct('Nokia lumia 1520');
  await product.addToCart();
  await cart.openCart();
  await order.clickPlaceOrder();

  await order.fillOrderForm({
    name: 'Juan Pérez',
    country: 'Argentina',
    city: 'CABA',
    card: '4111111111111111',
    month: '12',
    year: '2025',
  });
  await order.expectConfirmationMessage();
});
