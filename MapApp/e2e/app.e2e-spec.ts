import { MapAppPage } from './app.po';

describe('map-app App', () => {
  let page: MapAppPage;

  beforeEach(() => {
    page = new MapAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
