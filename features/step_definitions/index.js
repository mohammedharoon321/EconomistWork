const { Given, When, Then } = require('cucumber');
const { By } = require('selenium-webdriver');
const World = require('../support/world');
const expect = require('assert');
var webdriver = require('selenium-webdriver');

until = webdriver.until;

function init(dependencies, controller) {
  dependencies.push('$timeout');
 // dependencies.push(controller);
  //angularApp.controller('MainCtrl', dependencies);
}


Given(/^I go to the jobs page$/, () => 
 World.goToJobsPage()
 );


 Given(/^I go back to the jobs page$/, async () => {
  
  World.driver.sleep(5000).then(function(){   
    World.driver.then(function() {
    return World.driver.getCurrentUrl();
})
.then(function(currentUrl) {
  World.driver.get('https://jobs.economist.com');
});

})

})

When(/^The page loads$/, async () => {

  // wait for the element to appear

  World.driver.wait(until.elementLocated(By.xpath('//a[@href=\"/register/\"]')),5000);


})



Then(/^I should see the navigation bar$/, async () => {
  return World.driver.findElement(By.id('primary-nav'));
})

Then(/^I shoud see the keywords search box$/, async () => {
  return World.driver.findElement(By.id('keywords'));
})

Then(/^I shoud see the location search box$/, async () => {
  return World.driver.findElement(By.id('location'));
})

Then(/^I shoud see the sector list$/, async () => {
  return World.driver.findElement(By.xpath('//div[@class="browse__items"]'));
})

Then(/^I shoud see the jobs articles$/, async () => {
  return World.driver.findElement(By.xpath('//div[@class="articles__items"]'));
})

Then(/^I shoud see the featured jobs$/, async () => {
  return World.driver.findElement(By.xpath('//*[@id="main"]/div[4]/div/div/div[2]/section/div/ul'));
})

Then(/^I shoud footer$/, async () => {
  return World.driver.findElement(By.xpath('//div[@class="wrapper content"]'));
})

Then(/^Sign in URL is correct$/, async () => {
   
  var x = World.driver.findElement(By.xpath("//a[@href=\"/logon/\"]"));
  
  World.driver.sleep(5000).then(function(){  
    
    World.driver.then(function() {
    return World.driver.getCurrentUrl();
})
.then(function(currentUrl) {
  expect.equal(currentUrl,'https://jobs.economist.com/logon/','Signin URL is not correct');
});

})
x.click();

})

Then(/^I am taken to the correct URL$/, async () => {

  // I am still working through this scenario

  var m = World.driver.findElement(By.xpath("//a[@href=\"/register/\"]"));

  World.driver.sleep(5000).then(function(){  
    
    World.driver.then(function() {
    return World.driver.getCurrentUrl();
})
.then(function(currentUrl) {
  
  try{
  //m.click();
  //console.log("***>>> getCurrentUrl: "+currentUrl);
  }
  catch (e){
    console.log(e);
  }
});

})
  

})




















