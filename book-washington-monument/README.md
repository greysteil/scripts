# Washington Monument bookmarklet

I'm going to Washington and want to book tickets to go up the Washington Monument. Unfortunately, scalpers appear to be buying up all the tickets the moment they go on sale. To compete, I wrote this bookmarklet to quickly book tickets when they go on sale.

The bookmarklet reduces the number of clicks required to put tickets in your cart to one. Combined with URL hacking to pre-fill the date this should give you a good chance of getting tickets. You'll still need to be on the site at the right time (10am ET the day before you want to go) and refresh the page until the tickets are available.

## Usage

First, check the bookmarklet still works. I wrote this as a one-off script, and am not planning to maintain it:

1. Go to http://recreation.gov/ticket/10089018/ticket/10089019?date=2025-03-24 (update the date to one that has some availability at 2pm)
1. Paste the text of `bookmarklet.js` into a console window. It should immediately take you to the checkout page, with two tickets in your basket (for a tour of Federal Hall in New York, which isn't what you want).

Assuming everything's working, you can now create a bookmarklet:

1. Edit the code in `bookmarklet.js` to set the quantity of tickets you want, and the time you want them
1. Minify the code using https://www.minifier.org or another service
1. Create a bookmarklet in yout browser with the minified code as the URL

Finally, you're ready to book tickets the moment they go on sale:

1. Go to https://www.recreation.gov/ticket/234635/ticket/193?date=2025-03-19 (update the date to the date you want) at 9:58am ET the day / month before you want the tickets for
1. Refresh furiously until the tickets are available
1. Click the bookmarklet, which will grab the tickets for you
1. Complete the checkout experience (you have 15 minutes to do this)

The above should give you a good chance of getting tickets. If it doesn't work you can always queue up on the way (apparently you need to get there at about 7:30am, and the tickets are on sale from 8:45am).

## Extensions

- This could be turned into a script using browser automation, removing the need for the user to be present at all.
- It's probably also possible to use the reservation.gov's APIs directly

Both of the above feel like overkill for a one-off task like this. They're also more likely to help scalpers than visitors, so I'm not going to implement them.
