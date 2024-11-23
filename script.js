function stringChop(str, size) {

	let ansarr=[];
	let count=0;
	let word="";

	for(let i=0;i<str.length;i++)
		{
			count++;
			word+=str.charAt(i);
			if(count===size)
			{
				ansarr.push(word);
				count=0;
				word="";
			}
		}

	if(count<size)
	{
		ansarr.push(word);
	}

	return ansarr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
