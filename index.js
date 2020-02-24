// READ THIS:
// I created this pull request for you on github. Do NOT accept or merge it into your code. This will clearly show your instructors I cheated for you. Instead, copy this code onto your own branch manually (dont include the comments, obviously), then push your code up to github. Then, DELETE my pull request. If you're not using github to show them the code, then nevermind.


/*
 * Things I did:
 * Added the top level IIFE : (function() { -- code here -- })();
 * Removed unneeded named functions and the calls. Instead, your existing bound anonymous function to event handlers did everything anyway.
 * Left comments about why I did things for you
 * Abstracted the buildListItem function 
 *
 */

(function() {
  // This format $(document).on(event_type, selector, function(event) {});
  // allows us to dynamically create elements and the newly created elements will still have the event listeners attached.
  //
  // Doing this: $('.button').on(click', blahblahblah)
  // only attached that event handler to DOM elements that exist at the time of addEventListener, so no newly created elements would be able to be checked or deleted.

  $(document).on('click', '.shopping-item-toggle', function(event) {
    // You need to move up the DOM tree to the parent element, and then get it's "sibling", ".shopping-item" in order to toggle the class. The aria checked was redundant.
    let targetItem = $(this).closest('.shopping-item-controls').siblings('.shopping-item');
    targetItem.toggleClass('shopping-item__checked');
  });

  // Bind to the actual event handler. Not the `ul`. Much simpler
  $(document).on('click', '.shopping-item-delete', function(event) {
    // Needed to remove the li, instead of the the `.shopping-item`. That one was weird
    $(this).closest('li').empty().remove();
  });


  // No need to use the earlier format, since we never add or delete new DOM inputs
  $('#js-shopping-list-form button').on('submit click', function(event) {
    event.preventDefault();
    // Get text value of input
    let val = $('#shopping-list-entry').val();

    // Prevent adding empty items
    if (val != '') {
      buildListItem(val);
      // Clear value after building item
      $('#shopping-list-entry').val('');
    }
  });


  // Ugly as shit but it works.
  function buildListItem(item) {
    let unorderedList = $('ul.shopping-list');
    unorderedList.append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  }
})();
