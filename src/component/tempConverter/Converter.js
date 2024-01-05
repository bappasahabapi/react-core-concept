export function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
export  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

// convertToFn= toFahrenheit() othoba,  toCelsius();
export  function converter(temperature, convertToFn) {

    const input =parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output =convertToFn(input)
    const rounded =Math.round(output * 1000)/1000;
    return rounded.toString() ;
  }