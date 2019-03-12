
$(function(){
  var $width   = $('#width'),
      $height  = $('#height'),
      $btnCal  = $('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
      
$btnCal.click(function(){
    var rect = rectangle();
    $perimeter.val(rect.perimeter($width.val(), $height.val()));
    $area.val(rect.area($width.val(), $height.val()));

  });
} )
