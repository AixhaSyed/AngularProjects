import { CalenderAppPage } from './app.po';

describe('calender-app App', () => {
  let page: CalenderAppPage;

  beforeEach(() => {
    page = new CalenderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
