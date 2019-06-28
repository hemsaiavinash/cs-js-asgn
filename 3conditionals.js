// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (pass) {
	var l = pass.length;
	if(l>=10)
		return "strong";
	else if(l<10&&l>=7)
		return "medium";
	else
		return "weak";
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (y) {
	if(y%100==0 && y%400!=0)
		return false;
	else if(y%4==0)
		return true;
	else
		return false;
};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (a,b,c) {
	a = a.toLowerCase();
	b = b.toLowerCase();
	c = c.toLowerCase();
	var first = a;
	if(b<first)
		first = b;
	if(c<first)
		first = c;
	return first;
	
};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (a){
	var start = a.substring(a.indexOf("<")+1,a.indexOf(">"));
	var close = a.substring(a.indexOf("</")+2,a.lastIndexOf(">"));
	try{
		if(start!==close) throw "Not an HTML Element!";
	}
	catch(e){
	    console.log("Error: "+e);
	    exit(0);
	}
	return start;
};



// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (a) {
	if (a[a.length-1]=="?")
		return true;
	else
		return false;
};



// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (inj,si,a) {
	var b = a.slice(0,si);
	var e = a.slice(si,a.length);
	var final = b + "-" + inj + "-" + e;
	try{
		if(si>a.length) throw 'the string doesn\'t have that many letters!';
		if(isNaN(si)||typeof inj !== 'string'||typeof a !== 'string') throw "expected first arg to be a string, second arg to be a number and third arg to be a string";
	}
	catch(e){
		console.log(e);
		exit(0);
	}
	return final;
	
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (a) {
	var si = Math.floor(Math.random()*a.length); //Slice Index
	var inj = ["omg","lol"];
	var ri = Math.floor(Math.random()*inj.length);
	// console.log("interjectAt("+inj[ri]+","+si+","+a+");");
	return interjectAt(inj[ri],si,a);
};
