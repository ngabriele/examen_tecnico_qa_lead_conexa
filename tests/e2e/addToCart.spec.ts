
import { test } from '../../utils/auth';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

test('Agregar producto al carrito y validarlo', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.goTo();
  await home.selectProduct('Samsung galaxy s6');
  await product.addToCart();
  await cart.openCart();
  await cart.expectProductInCart('Samsung galaxy s6');
});
