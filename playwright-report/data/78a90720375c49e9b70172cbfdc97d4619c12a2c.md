# Test info

- Name: Agregar producto al carrito y validarlo
- Location: C:\Users\nicol\Downloads\Examen\demoblaze-e2e-tests\tests\e2e\addToCart.spec.ts:7:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Samsung galaxy s6"
Received string:    "Nokia lumia 1520820Delete"
    at CartPage.expectProductInCart (C:\Users\nicol\Downloads\Examen\demoblaze-e2e-tests\pages\CartPage.ts:14:18)
    at C:\Users\nicol\Downloads\Examen\demoblaze-e2e-tests\tests\e2e\addToCart.spec.ts:16:3
```

# Page snapshot

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome Nelda_Johnson":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - cell "Pic"
      - cell "Title"
      - cell "Price"
      - cell "x"
  - rowgroup:
    - row "Nokia lumia 1520 820 Delete":
      - cell:
        - img
      - cell "Nokia lumia 1520"
      - cell "820"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Samsung galaxy s6 360 Delete":
      - cell:
        - img
      - cell "Samsung galaxy s6"
      - cell "360"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "1180" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store 2017
```

# Test source

```ts
   1 |
   2 | import { Page, expect } from '@playwright/test';
   3 |
   4 | export class CartPage {
   5 |   constructor(private page: Page) {}
   6 |
   7 |   async openCart() {
   8 |     await this.page.click('#cartur');
   9 |   }
  10 |
  11 |   async expectProductInCart(productName: string) {
  12 |     await this.page.waitForSelector('tr.success');
  13 |     const text = await this.page.textContent('tr.success');
> 14 |     expect(text).toContain(productName);
     |                  ^ Error: expect(received).toContain(expected) // indexOf
  15 |   }
  16 | }
  17 |
```