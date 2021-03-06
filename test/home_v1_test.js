Feature('Home page - Version #1');

Scenario('Guest visits home page', (I) => {
  I.amOnPage('/?version=1');
  I.see('Secure more people equally');
});

Scenario('Change language', (I) => {
  I.amOnPage('/?version=1');
  I.click('Korean');
  I.see('보험은 우리 모두의 것이어야 합니다.');
  I.click('English');
  I.see('Insurance must be served for all.');
});
