# min-stack
This stack has a method that can give us the minimum value 
element within the stack in constant time complexity.
Time complexity was made constant by sacrificing space complexity. 
By copying the values of the first stack on each addition to an array, 
and removing them accordingly on each "pop," you're able to 
keep track of the dynamically changing minimum.
