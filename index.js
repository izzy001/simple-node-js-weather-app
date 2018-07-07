/**Making API calls
 * use npm module called request
 * install request by running 'npm install request --save' 
 * You use request by passing in your target url,
 * and request returns a callback function.
 */

 const request = require('request');

 /**Adding interactivity
  * In order to access weather information of different cities/Location
  * We'll use 'Yargs'
  * Yargs is a pirate themed interactive command line interface tool
  * it allows us to define variables from the command line.
  * Oh Yeah!!! Interesting!!!
  * install yargs by running 'npm install yargs --save';
  * Yargs works by exposing any variables we use in the console onto the argv object
  */

  const argv = require('yargs').argv;

  //We'll use the flag of c for city
  //So we gon have our city variable equal either argv.c Or if no variable is input,
  //we'll have a default city value of lagos.
  
  let city = argv.c || 'lagos';

 //The url we are making request to
 let apiKey = '69161c6b38495e7f55a5417858ced395';
 /* let city = 'lagos'; */
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//note that OpenWeatherMap defaults its temperature to kelvin. 
//if you want temperature details to be returned in either Celsius or Fahrenheit we need to add another query parameter to the url.
//For celsius : units=metric
//For Fahrenheit: units=imperial

 request(url, function(err, res, body) {
     if(err){
         console.log('error: ', error);
     } else {
        /*  console.log('body: ', body); */

     /**if you notice the information printed by logging just the body in the console are kinda scattered.
         * So we convert the JSON response into a javascript object  
         * JON(JavaScript Object Notation is a way to store data in an organized and easy to access manner)
      */
         let weather = JSON.parse(body);
         let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
         console.log(message);
     };
 });


 

 