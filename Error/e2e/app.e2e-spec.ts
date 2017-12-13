import { ErrorPage } from './app.po';

describe('error App', function() {
  let page: ErrorPage;

  beforeEach(() => {
    page = new ErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
