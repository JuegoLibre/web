$(document).ready(function() {

$('.form-search').on('submit',function(){return false;});
$('.form-search .btn').on('click', function(e){
    var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
    $('div.single_product_item .bold').each(function(){
         var $this = $(this);
         if($this.text().toLowerCase().indexOf(query) === -1)
             $this.closest('div.single_product_item').fadeOut();
        else $this.closest('div.single_product_item').fadeIn();
    });
});

});