---
title: Abstraction in Buggy
collection: posts
template: post.hbt
date: 2014-11-14
---

<div class="images">
<img style="float:right;margin-top:-50px" width="120" src="../../images/buggy/logo.png">
</div>

Abstraction is a key concept in managing complexity. But creating good abstractions
is hard. Often abstractions try to hide complexity but fail to improve usability.
It is very important to not introduce new complexity by abstractions.

Ben Moseley and Peter Marks identified a special kind of complexity that they call
*incidental complexity* in their 2006 paper [[MP2006]](#MP2006). This complexity
is mainly introduced by methods that try to structure the code and it increases
with steadily with growing projects.

In Buggy we tried to create a way of creating abstractions that are powerful.
All abstractions should reduce complexity and thus make it easier to create,
maintain and reuse code.
We want to enable users to simply think in a level of abstraction if they
create what they want to create removing the necessity to know (much) about other 
abstraction layers or program parts. This requires more than just bundling data
and creating methods that do some work for you. It should be possible for users
to think in a way they are used to.

Buggy achieves this by allowing *different* kinds of *input languages*, 
even *graphical input* can be used to describe a program, processes or exemplary
input data. It is even possible to combine different languages for different parts
of a problem. Users can describe an input image graphically, they can write an
algorithm in a text fashion and describe the dataflow using a graph. If you like
to write pure text, you are welcome and others can view what you did in the way 
they want to.

Another important part of the Buggy abstraction method is the *loose binding* to
concrete implementations. We use a system that allows the users to *use
different implementations* of an abstraction without adapting other parts of
the program. It is possible to *automatically compare* those implementations or
test them against a specification.

For us it is important to improve on our ways of reducing complexity. It is
a vital task to empower the users. They should be able to work in an environment
they feel accustomed to. The state of the art is to develop languages that
are very powerful, but the users have to adapt their imagination to the tools the
language gives them. But instead it should be the computer that adapts to the
user to improve their workflow.

### References:
 * <a name="MP2006"></a>**[MP2006]** *Moseley, Ben, and Peter Marks.* **"Out of the tar pit."** SOFTWARE PRACTICE ADVANCEMENT (SPA). 2006.
