import { PractisePage } from './app.po';

describe('practise App', function() {
  let page: PractisePage;

  beforeEach(() => {
    page = new PractisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
