$(document).ready(function() {
  $('form#entries').submit(function(event) {
	var side1Input = $('input#side1').val();
	var side2Input = $('input#side2').val();
	var side3Input = $('input#side3').val();

	if (side1Input) {
      var triangle = side1Input;
      if ((side1Input === side2Input) && (side1Input === side3Input) && (side2Input === side3Input)) {
        triangle = ('Equilateral');
      } else if ((side1Input === side2Input) || (side1Input === side3Input) || (side2Input === side3Input)) {
        triangle = ('Isosceles');
      } else {
        triangle = ('Scalene');
      }

      $("#result").empty().append(triangle);
      $("#triangle").show();
  	} else {
      alert('Please finish entering your info.');
  	}

  	event.preventDefault();
  });
});