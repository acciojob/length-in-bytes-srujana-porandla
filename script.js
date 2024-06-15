const byteSize = (str) => {
  // write your code here
	function byteSize(str) {
    // Create a new Blob object from the input string
      var blob = new Blob([str]);

    // Return the size of the string in bytes
      return blob.size;
   }
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
