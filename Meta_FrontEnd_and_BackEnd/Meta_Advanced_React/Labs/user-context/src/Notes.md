## Context
-using context helps to solve the props drilling problem
    >props drilling problem - passing data through all component tree levels
     (even components that do not need it).
-parent components have to drill down props all the way to the children that
 need to consume them
 -React solves this using the Context Application Programming Interface or the Context API
    > provides an alternative way to pass data through component tree without having to pass props down manually at every level
    > right tool when you need to share data that can be considered global for a tree of react components