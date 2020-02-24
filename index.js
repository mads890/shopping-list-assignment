function isChecked() {
    $('shopping-item-toggle').on('click', function(event) {
        let targetItem = $(this.find('.shopping-item'));
        let pressedKB = this.attr('aria-pressed') === 'true';
        targetItem.toggleClass('.shopping-item__checked').attr('aria-pressed', !pressedKB);
    });
};

$(isChecked);

function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        this.remove('li');
    });
};

$(deleteItem);

function addItem() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const listItem = $(this.find('#shopping-list-entry');
        $('.shopping-list').append('<li> <span class="shopping-item">' + listItem + '</span> <div class="shopping-item-controls">'
        + '<button class="shopping-item-toggle"> <span class="button-label">check</span> </button>' +
        '<button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>');
    });
};

$(addItem);