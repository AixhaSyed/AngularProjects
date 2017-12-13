import { StudentAppPage } from './app.po';

describe('student-app App', () => {
  let page: StudentAppPage;

  beforeEach(() => {
    page = new StudentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
