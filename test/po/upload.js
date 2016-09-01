var InfoPO = require('./info');

function UploadFormPO() {

  this.fileElement = element(by.id('file'));
  this.sendButtonElement = element(by.id('send-button'));

  this.goTo = function() {
    browser.get('index.html');
  };

  this.selectFile = function(fileToUpload) {
    var path = require('path');
    var absolutePath = path.resolve(__dirname, '../' + fileToUpload);

    this.fileElement.sendKeys(absolutePath);
  };

  this.clickUploadButton = function() {
    this.sendButtonElement.click();
    return new InfoPO();
  };
}

module.exports = UploadFormPO;