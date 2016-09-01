function submitForm() {
  var files = document.querySelector('#file').files;
  var file = files[0];

  document.querySelector('#file-form').classList.add('hidden');
  document.querySelector('#file-info').classList.remove('hidden');

  document.querySelector('#file-name').innerText = file.name;
  document.querySelector('#file-size').innerText = file.size + ' B';

  var reader = new FileReader();
  reader.onload = function(event) {
    var content = event.target.result;
    document.querySelector('#file-content').innerText = content;
  };

  reader.readAsText(file);
}