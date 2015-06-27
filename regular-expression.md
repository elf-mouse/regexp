## Syntax

```
/pattern/modifiers;
```

## Modifiers

Modifiers are used to perform case-insensitive and global searches:

Modifier | Description
-------- | -----------
`i` | Perform case-insensitive matching
`g` | Perform a global match (find all matches rather than stopping after the first match)
`m` | Perform multiline matching

## Brackets

Brackets are used to find a range of characters:

Expression | Description
---------- | -----------
`[abc]` | Find any character between the brackets
`[^abc]` | Find any character NOT between the brackets
`[0-9]` | Find any digit between the brackets
`[^0-9]` | Find any digit NOT between the brackets

* `(x|y)` Find any of the alternatives specified

## Metacharacters

Metacharacters are characters with a special meaning:

Metacharacter | Description
------------- | -----------
`.` | Find a single character, except newline or line terminator
`\w` | Find a word character
`\W` | Find a non-word character
`\d` | Find a digit (Equivalent to `[0-9]`)
`\D` | Find a non-digit character (Equivalent to `[^0-9]`)
`\s` | Find a whitespace character (Equivalent to `[ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​-\u200a​\u2028\u2029\u202f\u205f​\u3000]`)
`\S` | Find a non-whitespace character
`\b` | Find a match at the beginning/end of a word
`\B` | Find a match not at the beginning/end of a word
`\0` | Find a `NULL`(U+0000) character
`\n` | Find a new line character
`\f` | Find a form feed character
`\r` | Find a carriage return character
`\t` | Find a tab character
`\v` | Find a vertical tab character
`\xxx` | Find the character specified by an octal number `xxx`
`\xdd` | Find the character specified by a hexadecimal number `dd`
`\uxxxx` | Find the Unicode character specified by a hexadecimal number `xxxx`

## Quantifiers

Quantifier | Description
---------- | -----------
`n+` | Matches any string that contains at least one `n` (Equivalent to `{1,}`)
`n*` | Matches any string that contains zero or more occurrences of `n` (Equivalent to `{0,}`)
`n?` | Matches any string that contains zero or one occurrences of `n` (Equivalent to `{0,1}`)
`n{X}` | Matches any string that contains a sequence of X `n`'s
`n{X,Y}` | Matches any string that contains a sequence of X to Y `n`'s
`n{X,}` | Matches any string that contains a sequence of at least X `n`'s
`n$` | Matches any string with `n` at the end of it
`^n` | Matches any string with `n` at the beginning of it
`?=n` | Matches any string that is followed by a specific string `n`
`?!n` | Matches any string that is not followed by a specific string `n`

## RegExp Object Properties

Property | Description
-------- | -----------
`constructor` | Returns the function that created the RegExp object's prototype
`global` | Checks whether the "`g`" modifier is set
`ignoreCase` | Checks whether the "`i`" modifier is set
`lastIndex` | Specifies the index at which to start the next match
`multiline` | Checks whether the "`m`" modifier is set
`source` | Returns the text of the RegExp pattern

## RegExp Object Methods

Method | Description
------ | -----------
`exec()` | Tests for a match in a string. Returns the first match
`test()` | Tests for a match in a string. Returns `true` or `false`
`toString()` | Returns the string value of the regular expression
