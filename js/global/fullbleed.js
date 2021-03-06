import $ from 'jquery';
import debounce from 'debounce';
import breakpoints from 'utils/breakpoints';

const fullbleedClasses = '.catland__fullbleed';

function updateMaxWidth() {
  const browserWidthMinusScrollbars = $('body').innerWidth();
  const maxWidthString = $('.page-main').css('max-width');

  if (!maxWidthString) {
    // reset values
    $(fullbleedClasses).css({
      'max-width': '',
      'margin-left': '',
      'margin-right': '',
    });

    // exit function
    return;
  }

  const maxWidth = parseInt(maxWidthString.replace('px', ''));

  const paddingLeft = $('.page-main').css('padding-left');
  if (typeof paddingLeft != 'undefined') {
    const containerPadding = parseInt(paddingLeft.replace('px', ''));

    let marginLeft = 0;
    let marginRight = 0;

    if (browserWidthMinusScrollbars >= maxWidth) {
      marginLeft = -((browserWidthMinusScrollbars - maxWidth + (containerPadding * 2)) / 2);
      marginRight = -((browserWidthMinusScrollbars - maxWidth + (containerPadding * 2)) / 2);
    } else if (browserWidthMinusScrollbars > breakpoints.screen__m) {
      marginLeft = -(containerPadding);
      marginRight = -(containerPadding);
    } else {
      marginLeft = -(containerPadding / 2);
      marginRight = -(containerPadding / 2);
    }

    $(fullbleedClasses).css({
      'max-width': browserWidthMinusScrollbars,
      'margin-left': marginLeft,
      'margin-right': marginRight,
    });
  }
}

updateMaxWidth();
$(window).on('resize', debounce(updateMaxWidth, 1000 / 60));
