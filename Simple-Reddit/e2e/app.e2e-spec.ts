import { SimpleRedditPage } from './app.po';

describe('simple-reddit App', function() {
  let page: SimpleRedditPage;

  beforeEach(() => {
    page = new SimpleRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
