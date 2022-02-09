# typewriter

Typewriter

Create an effect for a web-page, where text is being written, one character at a time, while the user watches. Sort of like this animation shows:

In the HTML, any text with the class .typewritten, should be written this way, one character at a time. For this assignment, you can assume that there is only a single element with the class .typewritten.

Important: The JavaScript may not include the text to be written - it must be found in the HTML-document!

Download and unpack the attached .zip-file, and start planning!
Planning

This assignment is much more about planning, than coding "the correct way" - and you should have all the components required for building the solution, from the teachings of the day, so the main task is how to connect them.

Follow something like this procedure:

    Start by drawing an activity diagram on paper
    Try to clean and optimize the activities - DRY!
    Figure out which “components” are needed to build it
    Make a note of which components you know how to build (should be most of them, but better to be a bit pessimistic at first)
    Build a prototype with “holes” (missing parts, where you didn’t know how to build)
    Figure out how to build the missing parts - think black-boxing
    Complete building the entire code

Optional extras

The “writing one letter at a time” is the main part of this assignment, but feel free to challenge (and entertain!) yourself, and implement some of these ideas (ordered from least to most challenging)

    Add sounds - there are two different sounds for letters, and a third for spaces.
        Start by playing one sound for letters, and the third for spaces
        Then devise an algorithm for choosing sound for letters, could be entirely random, or based on where on the keyboard the letter is!
    Sounds require the user to click somewhere before playing. Devise a strategy to inform the user of that. And implement it.

    Make the speed more “organic”, by randomly varying the time between letters - don't make it too random, use an offset and randomize around that.
    If the speed gets to high, the sounds sometimes won’t play. That is because the sound is still playing, when the next letter wants to play it again.
    Make sure the sounds always play, devise a strategy on what to do if the sound is already playing. There are several. Try to avoid “clipping” sounds. Maybe add more audio elements!

Fairly challenging:

    At first there is only a single HTML-element with the class .typewritten. Try to add one more element, and adjust your code, so that it finds all the .typewritten elements on the page, and writes them one at a time, one letter at a time. (Limit yourself to two elements, if you have more, you are going to need features you haven't learned yet)

Really challenging:

    Include line-breaks <br> in the text.
    There are additional sounds for the last key on a line, and the carriage return when a line breaks.
    Remember to add a longer pause with the line breaks.
    Start by figuring out how to find the <br>s - there are many different ways of doing it, and no true correct solution.
