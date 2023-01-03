# Answer to questions

1. **What is accessibility? How do you achieve it?**

   The accesibitity is the capability of allow the acces to web regardless of the environment that accesses it
   or of user capanilities, this achieve it mainly appling the aria attributes to html tags.

2. **What is the difference between session storage, local storage, and cookies?**

   Local storage: the data saved it persist even if the browser is closed.

   Session storage: is similar to Localstorage, but the data saved it is available only in that tab of browser.

   Cookies: to this we can set a time expiration of the data saved it.

3. **Explain the javascript event loop (also may explain how promises or
   async await work in js these are basically all the same
   question/answer)**

   The asynchronism in Js is presented it when we need the secondary effects (api request, external services, etc...).
   Normally the code is execute in block, but this effects need a time to resolve, and for that we need use a callback function
   to handle the answer and apply the ui changes.

   With ES6 we can use `Promise` and `Async await`: the promise is bassically an Object that have the capability to control 2 states like resole and reject, to announced us we have the `then` function to control the resolve data or `catch` function to control de reject data. The same way we can use Async await to define a function like async and to implement await inside function to get responses of secondary effects.

4. **If you are getting too many API calls being made from your hooks, what
   can you do to prevent this?**

   I start to check if the many calls are need it, else I can handle using hooks to prevent rerendering like useCallback, useMemo, React.memo.
   If the request are need, I can to implement a services that run the PILA principle like a states machine.

5. **How do you manage the global state?, and why in that way?**

   To manage the global state I need identify what is my global information and depend of that, we can decide to implement
   React.context using useContext and useReducer, or is the global data to handle is very big I need to implement
   a library like redux with the Flux method.

6. **What is progressive rendering?**

   The progressive rendering is a technique to load the user interface according to the visible are of the user.
   This can be achieve with server side rendering or use lazy and Suspense in React.

7. **What kind of metrics have you been checking to evaluate or care
   about in frontend apps?**

   The metrics like the scope, time of develop or technique cost and code quality

8. **How do you make the decision to revamp/rebuild an application?**

   If the application don't support all needs of the user because the technology or architecture are deprecated and don't allow the escalability

9. **Which standards do you think it's important to share in frontend
   apps?**

   I think that is important define with the team which is the better way to code typing, for example:
   the way to create modules or define functions or naming and the style to create the code.
   Is very important define the architecture and stakeholder of the project and make code reviews to sync up
   the way of the team coding. The way to make a deploy and releases too.
