# xero.number-utility

Top file exports a default object NumberUtility.  

## NumberUtility.NumberTriangle

Usage.  NumberTriangle is a class for collections of numbers structured into a triangle.  For example, `let x = new NumberTriangle([4, 15, 12, 9, 68, 62])`.  Here `x` represents a triangle of numbers of the form

<pre>
    4
  15 12
9  68 62
</pre>

The two numbers below and to the left and right of a number in the triangle are its children.  For example, at index (0, 0) is number 4 and its children are at indexes (1,0) and (1,1) with values 15, 12.

More documation to come.