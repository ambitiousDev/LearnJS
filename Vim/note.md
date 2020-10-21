# ONE RULE: COMMAND + MOTION.


```.``` : repeat the last command.

`>G`: tab on from current line to end file.

`f{char}`: find and jump to the character if found. `;`: jump to the next character found by `f`, `,` jump in the reverse direction.


`*` : put cursor on a word and hit `*` to the same word.()

`daw`: delete a word, dont care cursor position.
`dap`:delete a paragraph.//same for `c` and `y`

`Ctrl-a`,`Ctrl-x`: perform add, substract on a digits on or after the cursor. Could use `number<Ctrl-a(x)>` to set the addition/subtraction units.

`g~`,`gu` and `gU`: swap case , to lower, to upper 

`>`,`<`:SHIFT LEFT, RIGHT

`Ctrl o`: INSERT's NORMAL MODE

`zz`: redraw the screen with the current line in the middle of window

`A`: append text to the end of the line

`Ctrl v` : visual block(selected),`Shift v`: visual line, `v`:Visual selected.

`R`: replace mode , `gR`: visual replace mode(recommended), `r{char}` 

`Shift [/]`: jump cursor between paragraph

`viw`:select a word

`Ctrl o/i` :jump back and foward cursor position

`v+it` : select content inside a tag 

## `it` is a spectial motion, the text object, can use it with others operator.

`gv`: reselect last visual selection

`ea`: append at end of current word, `gea`: append at end of previous word.

`d /char` : delete form current curson position to the search word.

`m{a-zA-Z}`:bookmark, ` `{a-zA-Z} `:go to bookmark

`H/M/L` :jump to top , mid, bot of screen.

`Ctrl ]`: jump to definition.
