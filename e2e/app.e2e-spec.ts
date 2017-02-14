import { Akdng2fundausingcliPage } from './app.po';

describe('akdng2fundausingcli App', function() {
  let page: Akdng2fundausingcliPage;

  beforeEach(() => {
    page = new Akdng2fundausingcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
