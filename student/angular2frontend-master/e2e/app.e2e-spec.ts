import { PmcPage } from './app.po';

describe('pmc App', function() {
  let page: PmcPage;

  beforeEach(() => {
    page = new PmcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
