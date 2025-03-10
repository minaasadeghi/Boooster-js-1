/* 
  You are given a sentence contains a story.
  Current it says 
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day."
  Change the story using .replace() so that it says 
  "I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night."

  DO NOT change the vairalbe names
*/

let story =
  "I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.";

let result = story.replaceAll(10,100000).replaceAll("dogs","cats").replaceAll("day" , "night").replaceAll("great","brilliant");



/* =========================
 DO NOT CHANGE BELOW CODES
===========================-*/

function test(test_name, actual, expected) {
  console.log('');
  let status;
  if (actual === expected) {
    status = 'PASSED';
  } else {
    status = `FAILED: \nexpected: ${expected} \nbut your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  '1. Original story has not been changed',
  story,
  'I like dogs. One day I went to the park and I saw 10 dogs. It was a great day.'
);

test(
  '2. The result of the replace is correct',
  result,
  'I like cats. One night I went to the park and I saw 100000 cats. It was a brilliant night.'
);
