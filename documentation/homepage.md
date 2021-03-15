# Mercury Homepage Documentation

## Custom Class Names
A list of the CSS classes to use on the Mercury homepage's PageBuilder components.

`homepage-hero`: Top banner
  - Add class to the ROW
  - Makes the text area wider to reduce wrapping
  - Hides the banner text on mobile


`homepage-hero-text`: Top banner text on mobile
  - Add class to the ROW
  - This will always be the row immediately after the banner. We hide the banner text in .homepage-hero and instead show this new block that (presumably) has the same text as the desktop banner
  - Modifies the text color and size so that it's always visible on a white background
  - Makes the button, which is really a PageBuilder span, full-width


`homepage-products-slider`: Product sliders that use the product slider block
  - Add class to the PRODUCTS SLIDER
  - Slightly adjusts the margins
  - Hides product details like size/color options and reviews
  - Styles the slick dots on mobile and hides them on desktop


`homepage-uneven-tout-row`: Row with 2 uneven touts (2/3 and 1/3 width)
  - Add class to the ROW
  - Sets a height for the touts on mobile. The desktop height is set from the admin
  - Makes the images full-width


`double-tout-row`: Row with 2 evenly-sized columns
  - Add class to the ROW
  - Adjusts the margins on desktop
  - Sets a height for the touts on mobile. The desktop height is set from the admin


`homepage-overflowing-banner`: Fullbleed banner with an overflowing overlay
  - Add class to the ROW
  - Sets the positioning of the overlay on mobile
  - Sets a minimum height for the banner on mobile
  - Adjusts margins


`homepage-triple-tout-row`: Row with 3 evenly-sized touts
  - Add class to the ROW
  - Sets minimum heights for the banners
  - Drops the banner text beneath the banner on mobile
  - Adds an arrow (->) to the links
  - Forces the text and link coloring on mobile so that they are always visible


`homepage-image-slider`: Non-product sliders
  - Add class to the ROW
  - Shortens the slick slider
  - Brings the title and button closer to the slider on mobile
  - Ensures that the images display as background-size: auto
  - Hides the slider dots on desktop
