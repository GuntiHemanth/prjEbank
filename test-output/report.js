$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/santosh/Live Project/Live Project Program/E_Banking/src/Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Admin Login",
  "description": "",
  "id": "admin-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verifying Admin login functionality with valid data",
  "description": "",
  "id": "admin-login;verifying-admin-login-functionality-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User on Ranford Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid UserName and Password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validating Admin Login Functionality",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Logout from Application",
  "keyword": "When "
});
formatter.match({
  "location": "Alogin.user_on_Ranford_Home_Page()"
});
formatter.result({
  "duration": 7550405447,
  "status": "passed"
});
formatter.match({
  "location": "Alogin.user_enters_valid_UserName_and_Password_as()"
});
formatter.result({
  "duration": 1092883003,
  "status": "passed"
});
formatter.match({
  "location": "Alogin.validating_Admin_Login_functionality()"
});
formatter.result({
  "duration": 51642127,
  "status": "passed"
});
formatter.match({
  "location": "Alogin.user_Logout_from_Application()"
});
formatter.result({
  "duration": 467603082,
  "status": "passed"
});
});