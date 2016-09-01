function InfoPO() {
  this.titleElement = element(by.tagName('h2'));
  this.fileNameElement = element(by.id('file-name'));
  this.fileSizeElement = element(by.id('file-size'));
  this.fileContentElement = element(by.id('file-content'));

  this.getTitle = function() {
    return this.titleElement.getText();
  };

  this.getFileName = function() {
    return this.fileNameElement.getText();
  };

  this.getFileSize = function() {
    return this.fileSizeElement.getText();
  };

  this.getFileContent = function() {
    return this.fileContentElement.getText();
  };
}

module.exports = InfoPO;