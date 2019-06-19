# Answers

1.  What is React JS and what problems does it try and solve?

> It is a library built in javascript that solves some complex state issues on the website. When you are dealing with a lot of data, this component library can help to solve user interface issues without slowing down the user experience.

2.  What does it mean to _think_ in react?

> To Think in react is a matter of considering what you want the page to display, how to break up that display into parts, what elements need to be passed between parts, and what elements need to be able to change.

> I like the breakdown of this given on the reactjs.org page: https://reactjs.org/docs/thinking-in-react.html

* Start With A Mock
* Step 1: Break The UI Into A Component Hierarchy >> *Note: Drawing a chart is helpful at this stage*
* Step 2: Build A Static Version in React 
* Step 3: Identify The Minimal (but complete) Representation Of UI State >> *Note: This is were DRY comes into play.*
* Step 4: Identify Where Your State Should Live
* Step 5: Add Inverse Data Flow 
> Personaly I'd add: Finazilize the Appearance (But that's not really part of the component.)

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

> Both Class/Stateful and Functional/Presentational components are flexable and can be called when needed. A Functional/Presentational is used to display components. A Class/Stateful also displays components, as well class/stateful components can call functions/events to modifiy the state of the component. While a Functional/Presentational is dynamic it requires a Class/Stateful compnent to actually change the state of the displayed final application.

4.  Describe state.

> State likes props can be changed and passed to other components. The state of the application is the currently display. This display (the state) can be changed and controlled by the component of the application.

5.  Describe props.

> Props are elements that can be passed to other components. Props can be just about anything including: objects, arrays, variables, and functions.