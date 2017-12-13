import { JQPractisePage } from './app.po';

describe('jq-practise App', function() {
  let page: JQPractisePage;

  beforeEach(() => {
    page = new JQPractisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
