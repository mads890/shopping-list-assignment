$(function() {

    $('ul').on('click', '.shopping-item-toggle', function(event) {
        let targetItem = $(this).closest('li').find('.shopping-item');
        let pressedKB = this.attr('aria-pressed') === 'true';
        targetItem.toggleClass('shopping-item__checked').attr('aria-pressed', !pressedKB);
    });

    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        let listItem = $(this).find('#shopping-list-entry').val();
        $('.shopping-list').append(`<li><span class="shopping-item">${listItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)
    });
});
