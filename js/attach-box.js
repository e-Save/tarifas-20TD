
$(document).ready(function() {

  function displayFileNames() {
    var files = $("#documents").prop("files");
    $('.files-attached').html(''); // or .empty()
    for (var i = 0; i < files.length; i++) {
      var id = 'file-name-'+i;
      var file = files.item(i);
      var html_str = '<br><input id="'+id+'" class="file-names bg-transparent mb-3" type="text" readonly><a class="clear-files ml-2 overlap-element" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>';
      $('.files-attached').append(html_str);
      $('input#'+id).val(file.name);
      //resize input as long as name length
      $('input#'+id).attr('size', (file.name.length+6)+'px');
    };
    if (files.length > 0) {
      $('#documents').css('cursor','auto');
    };
  };

  // set drag and drop
  var droppedFiles = false;
  var $form = $('#invoice-form');
  var $h2 = $('#dotted-box > h2');
  var $p = $('#dotted-box > p');
  $form.on('dragover dragenter', function() {
    $('#attach-box').addClass('div-colored');
    $('#input-box').removeClass('overlap-element');
    $('.form-check').removeClass('overlap-element');
    $('#explicame-btn').removeClass('overlap-element');
    $h2.removeClass('overlap-element');
    $p.removeClass('overlap-element');
  });
  $form.on('dragleave dragend drop', function() {
    $('#attach-box').removeClass('div-colored');
    $('#input-box').addClass('overlap-element');
    $('.form-check').addClass('overlap-element');
    $('#explicame-btn').addClass('overlap-element');
    $h2.addClass('overlap-element');
    $p.addClass('overlap-element');
  });

  // set button associated with input
  $('#attach-button').on('click', function(e){
    $('#documents').trigger('click');
    e.preventDefault();
  });

  // display names when input value changes
  $('#documents').on('change', function(){displayFileNames()});

  //delete files attached
  $(document).on('click','.clear-files',function(e){
    e.preventDefault();
    $('.files-attached').empty();
    $('#documents').val('');
  });

});