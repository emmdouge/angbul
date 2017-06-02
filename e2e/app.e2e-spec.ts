import { AngbulPage } from './app.po';

describe('angbul App', function() {
  let page: AngbulPage;

  beforeEach(() => {
    page = new AngbulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
