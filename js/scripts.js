// GRID VIEW

$('#grid').click( function({
    // REMOVE ONLY 'LIST'
    $('.cd-gallery').removeClass('list')
    // ADD ONLY 'GRID'
    $('.cd-gallery').addClass('grid')
    
    console.log('OK');
}) );
                 
// LIST VIEW
                 
    $('#list').click( function({
    // REMOVE ONLY 'GRID'
    $('.cd-gallery').removeClass('grid')
    // ADD ONLY 'LIST'
    $('.cd-gallery').addClass('list')
    
    console.log('OK');
}) );