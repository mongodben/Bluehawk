---
id: "commands"
title: "Commands"
sidebar_label: "Commands"
sidebar_position: 1
custom_edit_url: null
---

Bluehawk **commands** come in two forms: _single-line_ and _block_. Single-line commands
operate upon the current line, while block commands operate upon the span of lines between
the start of the command and the end of the command. Since commands aren't valid syntax in
most languages, you should place them in comments -- Bluehawk will still process them.
To avoid name clashes with various languages and markup frameworks, all Bluehawk commands
begin and end with colons (`:`).

The following examples demonstrate the [remove](#remove)
command in single-line and block forms:

Single-line commands use `:<command>:` to markup a single line:

```java
public class Main {
  public static void main(String[] args){
    int a = 2;
    int b = 3;
    int c = a * b;
    assert(c == 6); // :remove:
    System.out.println("Hello world!");
  }
}
```

Block commands use `:<command>-start:` and `:<command>-end:` to mark the beginning and end
of a spanned range of lines:

```java
public class Main {
  public static void main(String[] args){
    int a = 2;
    int b = 3;
    int c = a * b;
    // :remove-start:
    assert(c == 6);
    // :remove-end:
    System.out.println("Hello world!");
  }
}
```

Some commands, like `remove` in the examples above, don't require any arguments at all.
Other commands, such as `snippet`, require a unique (to that file) identifier. Yet other
commands, such as `replace`, require an [attribute list](#attribute-lists) of JSON objects. Pass arguments to
commands by listing them after the command itself:

```java
public class Main {
  public static void main(String[] args){
    // :snippet-start: multiply-abc
    int a = 2;
    int b = 3;
    int c = a * b;
    // :remove-start:
    assert(c == 6);
    // :remove-end:
    System.out.println("Hello world!");
    // :snippet-end:
  }
}
```

> 💡 For a summary of all of the commands available in your local installation
> of Bluehawk, run `bluehawk list commands`.

## Attribute Lists

Attribute lists are JSON objects that contain additional information about a command.
They must use double quotes for fields, and the opening line of an attribute list
must appear on the same line as the command itself.

```java
// :command: {
//    "field": "value"
// }
// :replace-end:
```

## Snippet

The `snippet` command, also aliased as `code-block`, marks a range of content in a file
as a snippet. You can use the [snip](#snip) CLI command to generate snippet files from
these snippets.

Because `snippet` operates on ranges of content, it is only available as
a block command. You must pass `snippet` an identifier.

Consider the following file:

`Main.java`:

```java
public class Main {
  public static void main(String[] args){
    // :snippet-start: test-block
    System.out.println("Hello world!");
    // :snippet-end:
  }
}
```

Running the following command:

```
bluehawk snip Main.java -d .
```

Produces the following output:

`Main.codeblock.test-block.java`:

```java
System.out.println("Hello world!");
```

## State

The `state` command marks a range of content in a file as part of a particular state.
You can use the [snip](#snip) or [copy](#copy) CLI commands with the [state](#state)
flag to generate output files that contain only content from a specific named state.
When you use the `--state` flag to specify a state, all state blocks other than the
specified state are removed from the output. All content not in a state block is
unaffected and outputs normally.

`state` can be helpful for managing tutorial code
with multiple steps, such as a "start" state that only contains `// TODO` and a
"final" state that contains completed implementation code.

Because `state` operates on ranges of content, it is only available as
a block command. You must pass `state` at _least one_ identifier, which determines
the name of the state or states that the block belongs to. You can pass
in a list of identifiers either through a space-separated list directly after
the command itself, or through the `id` field of an [attribute list](#attribute-lists).

Consider the following file:

`Main.java`:

```java
public class Main {
  public static void main(String[] args){
    // :snippet-start: example
    int example = 1;
    // :state-start: hello-world
    System.out.println("Hello world!");
    // :state-end:
    // :state-start: hello-user
    System.out.println("Hello user!");
    // :state-end:
    example++;
    // :snippet-end:
  }
}
```

Running the following command:

```
bluehawk snip Main.java -d . --state hello-user
```

Produces the following output:

`Main.codeblock.example.java`:

```java
int example = 1;
System.out.println("Hello user!");
example++;
```

Alternatively, running the following command:

```
bluehawk snip Main.java -d . --state hello-world
```

Produces the following output:

`Main.codeblock.example.java`:

```java
int example = 1;
System.out.println("Hello world!");
example++;
```

## State-Uncomment

The `state-uncomment` command combines the [state](#state) and [uncomment](#uncomment)
commands. In terms of syntax, `state-uncomment` works exactly the same as `state`,
except one layer of commenting is removed from the entire state in produced output.
Use `state-uncomment` to prevent executable code in a state from actually executing
in the source code you use to produce output.

Because `state-uncomment` operates on ranges of content, it is only available as
a block command.

Consider the following file:

`Main.java`:

```java
public class Main {
  public static void main(String[] args){
    // :snippet-start: add-or-subtract
    int example = 1;
    // :state-start: add-one
    example++;
    // :state-end:
    // :state-uncomment-start: subtract-one
    //example--;
    // :state--uncomment-end:
    System.out.println("Example: " + example);
    // :snippet-end:
  }
}
```

Running the following command:

```
bluehawk snip Main.java -d . --state subtract-one
```

Produces the following output:

`Main.codeblock.add-or-subtract.java`:

```java
    int example = 1;
    example--;
    System.out.println("Example: " + example);
```

> 💡 Note that Bluehawk has trimmed one layer of comments from the `hello-user`
> state in the produced code block.

With `state-uncomment`, you can create multiple valid end states but only run
one of those states when executing your source code.

## Uncomment

The `uncomment` command removes a single comment from the beginning of
each line of the spanned range in all output.

Because `uncomment` operates on ranges of content, it is only available as
a block command.

> 💡 Comments are only specified in certain language types. For example, plaintext
> does not have a comment syntax, so this command does nothing in plaintext.

Consider the following file:

`Main.java`:

```java
public class Main {
  public static void main(String[] args){
    int example = 1;
    // :uncomment-start:
    //example--;
    // :uncomment-end:
    example++;
    System.out.println("Example: " + example);
  }
}
```

Running the following command:

```
bluehawk copy Main.java -d .
```

Produces the following output:

`Main.java`:

```java
public class Main {
  public static void main(String[] args){
    int example = 1;
    example--;
    example++;
    System.out.println("Example: " + example);
  }
}
```

## Replace

The `replace` command accepts a JSON dictionary called "terms" as input
via an attribute list, and replaces occurrences string keys in the map within
the spanned range with their map values in all output. You can use
`replace` to hide implementation details like complicated class names
or API endpoint URLs in generated output.

Because `replace` operates on ranges of content, it is only available
as a block command. You must pass an attribute list containing "terms",
a dictionary of strings to strings.

Consider the following file:

`Main.java`:

```java
// :replace-start: {
//    "terms": {
//       "MyMainExample": "Main",
//       "www.example.com/rest/v1": "YOUR_REST_ENDPOINT_HERE"
//    }
// }

/*
 * MyMainExample -- a class that contains only a hello world main method
 * that defines a rest endpoint.
 */
public class MyMainExample {
  String rest_endpoint;

  public static void main(String[] args){
    System.out.println("Hello world!");
    rest_endpoint = "www.example.com/rest/v1"
  }
}
// :replace-end:
```

Running the following command:

```
bluehawk copy Main.java -d .
```

Produces the following output:

`Main.java`:

```java
/*
 * Main -- a class that contains only a hello world main method
 * that defines a rest endpoint.
 */
public class Main {
  String rest_endpoint;

  public static void main(String[] args){
    System.out.println("Hello world!");
    rest_endpoint = "YOUR_REST_ENDPOINT_HERE"
  }
}
```

## Emphasize

The `emphasize` command highlights marked lines in formatted output.
`emphasize` makes it easier to keep the correct lines highlighted
when you update code samples, because it calculates the highlighted
line numbers for you.

You can use `emphasize` as either a block command or a line command.

> 💡 The emphasize command only applies to [formatted output](./cli#format).
> Use the `--format` flag with Bluehawk CLI to get formatted output.

Consider the following file:

`Main.java`:

```java
public class Main {
  public static void main(String[] args){
    // :code-block-start: modulo
    int dividend = 11;
    int divisor = 3;
    int modulus = dividend % divisor; // :emphasize:
    System.out.println(dividend + " % " + divisor + " = " + modulus);
    // :code-block-end:
  }
}
```

Running the following command:

```
bluehawk snip Main.java -d . --format=rst
```

Produces the following output:

`Main.codeblock.modulo.java.code-block.rst`:

```rst
.. code-block:: java
   :emphasize-lines: 3

   int dividend = 11;
   int divisor = 3;
   int modulus = dividend % divisor;
   System.out.println(dividend + " % " + divisor + " = " + modulus);
```

## Remove

The `remove` command, also aliased as `hide`, removes the spanned
range from Bluehawk output. `remove` can be helpful for hiding
assertions and state setup from user-facing code samples.

You can use `remove` as either a block command or a
line command.

Consider the following file:

`Main.java`:

```java
public class Main {

  public static void main(String[] args){
    // :code-block-start: division
    int dividend = 11;
    int divisor = 3;
    int quotient = dividend / divisor;
    assert(quotient == 3) // :remove:
    System.out.println(dividend + " / " + divisor + " = " + quotient);
    // :code-block-end:
  }
}
```

Running the following command:

```
bluehawk snip Main.java -d .
```

Produces the following output:

`Main.codeblock.division.java`:

```rst
int dividend = 11;
int divisor = 3;
int quotient = dividend / divisor;
System.out.println(dividend + " / " + divisor + " = " + quotient);
```
