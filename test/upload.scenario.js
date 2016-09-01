var UploadFormPO = require('./po/upload');

describe('file upload', function() {

  var uploadFormPO;
  var FILE_FOR_UPLOAD = 'file-for-upload.txt';

  beforeEach(function() {
    browser.ignoreSynchronization = true;

    uploadFormPO = new UploadFormPO();
    uploadFormPO.goTo();
  });

  it('should show its name and size', function() {

    uploadFormPO.selectFile(FILE_FOR_UPLOAD);
    var infoPO = uploadFormPO.clickUploadButton();

    expect(infoPO.getTitle()).toBe('File uploaded');
    expect(infoPO.getFileName()).toBe(FILE_FOR_UPLOAD);
    expect(infoPO.getFileSize()).toMatch('16');
    expect(infoPO.getFileContent()).toMatch('File content ...');
  });
});