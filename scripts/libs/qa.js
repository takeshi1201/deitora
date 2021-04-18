window.addEventListener('DOMContentLoaded', function(){
  $( '.js-qa' ).on( 'click', function() {
    $( this ).find( '.js-qaA' ).stop().slideToggle( 300 );
    $( this ).toggleClass( 'add-active' );
  });
});
