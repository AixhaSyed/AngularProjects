import { TODOAPPPage } from './app.po';

describe('todo-app App', function() {
  let page: TODOAPPPage;

  beforeEach(() => {
    page = new TODOAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
