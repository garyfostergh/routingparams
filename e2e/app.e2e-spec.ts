import { RoutingparamsPage } from './app.po';

describe('routingparams App', () => {
  let page: RoutingparamsPage;

  beforeEach(() => {
    page = new RoutingparamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aap works!');
  });
});
