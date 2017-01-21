import { MyShopPage } from './app.po';

describe('my-shop App', function() {
  let page: MyShopPage;

  beforeEach(() => {
    page = new MyShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
