# Javascript

	
## How Javascript Works:

1. Everything happens in JS is inside an Execution Context
2. It has 2 part Memory Component (Variable Env) and Code Component (Thread of Execution)
3. Execute one command at a time in a specific order ie synchrous single threaded language
4. Code Execution
   1. Global Execution context (Memory Creation Phase)
	```javascript
	var n=2
	```
	- create memory for n & store the vlaue UNDEFINE
	```javascript
	function square(n){ return n2}
	``` 
	- create a memory for a fuction and store the whole function logic
   2. Code Component (Code Execution Phase)
       - Here value 2 get assigned to n
       - When function invoke ie square(n) then new execution context created (local execution context)

## Common Terminologies:
 
 1. Annonymus Function:  
 	-  Function without a name, only used when we use it as value
 2. First Class Function:
 	- Ability to use function as value , which can be pass to another function or return from another function
 3. Functional Statement: 
 	```javascript
	 fucntion square(n) { return n2 }
	```
 4. Functional Expression: 
 	```javascript
	 const square = function(n) { return n2 }
	```
 5. Parameter & Arguement: 
 	```javascript
	 const square = function(n) { return n2 } --> n is paramere
	 square(2)  ---> 2 is arguement
	```
 6. Hoisting:
    	- Memory is allocated for all variable & finction even before execution
 7. Shortest Javascript:
 	- Empty '.js' file, it will create Global Execution Context, Create window object and 'this'.
 8. Global Scope:
        - anything which is not inside the function
 9. Temporal Deadzone:
 	- Time in which 'let' and 'const' hosted till it get some value
 10. Shadow:
        - Poiting same object in global scope
 11. Closure:
 	- Function is returned from another function they still maintain the lexical scope
 	- Function with it lexical scope bind togather forms the closures
 	- cons:
 	    i. Here Over consumption of memory take place. ie closure variavle are not garbade collected
	- pros:
	    i.   Module design pattern
	    ii.  Curring
	    iii. Data Hidding and Encapsulation
	    iv.  setTimeout -> works fine for let & const but for var always return latest value
	    v.   Iterator
 12. Event Loop:
  	- Callback queue:
  	    i.   When timmer expires, it will put that function into callback queue
	    ii.  Event loop scan the callback queue and put that function into the callstack when callstack is empty.
	    iii. For promise it will look for Microservice queue then go to callback queue
	- Starvation of Callback Queue:
	    Eventloop gives more priority to Microtask queue compare to Callback queue. When all the task from Microtask queue will done then it moves the callback queue to Call 
	    stack. The duration which callback que wait to execution the task is Starvation of Callback Queue
 13. Higher Order:
        - Function which takes function as input or return function from itself 
 14. Function Borrowing:
  	- Borrow the function from one object and use it with data of another Object
  	- Ex:
		```javascript

			 let name1 = {
				firstname: "Christon",
				lastname: "Cardoza",
				printFullname: () => console.log(this.firstname + this.lastname)
			 }
			 let name2 = {
				firstname: "Antony",
				lastname: "Cardoza"
			 }
			 name1.printFullname.call(name2);

		```
   - First argument will the reference objext Rest all are fuctional arguments
   - 'apply' similar to the 'call' bur functional argument will passed in array format
   - Here function execute immediately
   - 'bind' method same as call but it wont execute the function immediately ( it takes the copy of the method) 
   - Ex:
 	  ```javascript 
	   let printMyName = name1.printFullName.bind(name2, "Bhai");
	   printMyName();
	  ```  
 15. PollyFill:
 	- Browser fallback to run the function , that time wee nee to write our own function to stumulate that behavior
 	- Ex: PollyFill of bind
 	  ```javascript 
	   Function.prototype.myBind = function(...args){
	     let obj = this;
	     params = args.slice(1);
	     return function ( ...args2){
	     	obj.apply(args[0], [...params, ...args2]);
	     }
	   }
	  ``` 
 16. Currying:
   	- It achivied by 'bind' and 'closure'
   	- Creating more number of method from single method by pre-setting some argument
 	  ```javascript
	   let multiply = function(x){
	   return function(y) {
	     	console.log(y)
	     } 
	   }
	   let multiplyByTwo = multiply(2);
	   multiplyByTwo(3);
	  ```
   or 
	
    ```javascript
     let multiply = function(x,y){
     	console.log(x*y);
     }
     let multiplyByTwo = multiply.bind(this,2); ---> here 'this' refer multiply function and '2' refer to the value of x
     multiplyByTwo(5); ---> here '5' refer value of y 
    ```
17. Event Bubling & Captturing:
	- If we clicked on child then `onClickChild()`  called first then it moves to up to the heirarchy till DOM ends, this is Event Bubling
	- If we clicked on child then `onClickGrandParent()` called first then it move to downwards line top parent then child, this is Event Capture(Event Trickling)
	- By default bubling s attacked to `eventHandler`
	 ```javascript
	   .addEventHandler('click', ()=> {}, useCapture);
	 ```
	 - Capturing comes first then goes to Bubling
	 ```javascript
	   document.querySelctor('#grandParent').addEventListener('click',()=>{}, true);
	 ```
 18. Event Delegation:
   	- Insted of attaching event listner to individual child element individually, rather add it to its parents.
	 ```html
	  <div>
	    <ul id="category">
	      <li id="laptop"> Laptop</li>
	      <li id="camera"> Camera</li>
	      <li id="shoe"> Shoe</li>
	    </ul>
	  </div>
	 ```
	 
	  ```javascript
	   document.querySelctor('#category').addEventListener('click',(e)=>{console.log(e.target)});
	 ```
19. Debouncing and Throttling:
   	- Debouncing
	  ```javascript
	   let counter = 0;
	   
	   const gerData = () => console.log("Fetch Data:", counter ++);
	   
	   const doSomeMagic = function(fn, delay){
	     let timer;
	     return function(){
	      let context = this;
	      let args = arguments;
	      claerTimeout(timer)
	      timer = setTimeout(() => {
	       fn.apply(context, args)
	      }, delay);
	     }
	   }
	   
	   const betterFunction = doSomeMagic(getData,300);
	 ```
   - Throttling: limiting the call
   	
	  ```javascript
	   let counter = 0;
	   
	   const gerData = () => console.log("Fetch Data:", counter ++);
	   
	   const throttle = function(fn, limit){
	     let flag=true;
	     return function(){
	      let context = this;
	      let args = arguments;
	      if(flag){
	       fun.apply(xontext, args);
	       flag = false;
	       setTimeout(()=> {
		flag=true;
	       },limit);
	      }
	     }
	    }
	   
	   const betterFunction = throttle(getData, 5);
	 ```
20. Local Storage and Session Storage:
	- cookies : 400 bytes
	- session : 5MB
	- local : Usually more than 5 MB
	 ```javascript
	   localStorage.setItem("Hello", "World");
	   locatStorage.getitem("Hello");
	   localStorage.removeItem("Hello");
	   localstorage.clear();
	 ```

## Assyn & Defer in HTML
 - When webpage loads parsing of HTML and loading & execution of scripts occurs
 - When only script tag `<script src= "" /`: HTML parsing starts, after some tine it encoutnter the script tag. As soon as it see the script tag it will stop the parsing & fetch the script from network and execute itm then xontionue the HTML parsing
 - When it use async in script tag `<script async src="" />` : As soon as it encounter  script tag parsing wont stop, parallely  download the scripts. Then it pause the parsing execute the script. Once script execution over it continue parsing. It doesn't gaurantee that script execution are in order.
 - When it has defer in script `<script defer src="" />`: As soon as it encounter script it won't stop the parsing, parallelly download the script. It will wait for all the parsing of HTML done. Onece complete HTML is parsed, script will getting executed. It does gaurantee that script executon are in order.
