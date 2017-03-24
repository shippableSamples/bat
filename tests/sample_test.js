module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://107.170.125.58:51000")
      .waitForElementVisible('body', 1000)
      .assert.containsText('h2', "Congratulations Captain!")
      .end();
  }
};
