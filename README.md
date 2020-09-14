# queue

For `iterabilize` and `arrayLikify`, do not pass callback if the interface has already been implemented in the original class, otherwise it may cause infinite recursion. 

e.g. If the original class has `.length` getter, don't pass callback `getLength()`.
