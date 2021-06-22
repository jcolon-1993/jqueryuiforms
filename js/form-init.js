/*
  Script is used to set intial state for the form
*/
$(function ()
{
  // Turns a text input into a date picker
  $("#arrival").datepicker();

  // Cache the price input
  var $amount = $("#amount");
  // Cache the <div> for the price range
  var $range = $("#price-range");

  // Turns input into a slider
  $("#price-range").slider(
    {
      // If range, gets two handles
      range: true,
      // Min value
      min: 0,
      // Max value
      max: 400,
      // Values when page loads
      values: [175, 300],
      // When slider updates amount
      slide: function(event, ui)
      {
        $amount.val("$" + ui.values[0] + "- $" + ui.values[1]);
      }
    });
    // Sets intial values of amount element
    $amount
    // A $sign then lower range
    .val("$" + $range.slider("values", 0)) +
    // A $ sign then higher range
    " - $" + $range.slider("values", 1);
});
