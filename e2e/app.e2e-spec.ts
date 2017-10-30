import { NervePage } from './app.po';

describe('nerve App', () => {
  let page: NervePage;

  beforeEach(() => {
    page = new NervePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
