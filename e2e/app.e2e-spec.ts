import { DADAPage } from './app.po';

describe('dada App', () => {
  let page: DADAPage;

  beforeEach(() => {
    page = new DADAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
