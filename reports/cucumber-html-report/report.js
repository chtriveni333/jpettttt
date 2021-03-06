$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/functionalTests/JpetTest1.feature");
formatter.feature({
  "line": 2,
  "name": "JpetStore",
  "description": "",
  "id": "jpetstore",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JpetStore"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login in the JpetStore",
  "description": "",
  "id": "jpetstore;login-in-the-jpetstore",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user should launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the \tHome Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click signout",
  "keyword": "Then "
});
formatter.match({
  "location": "Jpet_Login.the_User_Launch_Browser()"
});
formatter.result({
  "duration": 12211093800,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_Login.the_User_click_signin()"
});
formatter.result({
  "duration": 466305500,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_Login.the_User_enter_login_dtails()"
});
formatter.result({
  "duration": 391674100,
  "error_message": "java.lang.IncompatibleClassChangeError: Found interface org.apache.poi.util.POILogger, but class was expected\r\n\tat org.apache.poi.openxml4j.opc.PackageRelationshipCollection.parseRelationshipsPart(PackageRelationshipCollection.java:304)\r\n\tat org.apache.poi.openxml4j.opc.PackageRelationshipCollection.\u003cinit\u003e(PackageRelationshipCollection.java:156)\r\n\tat org.apache.poi.openxml4j.opc.PackageRelationshipCollection.\u003cinit\u003e(PackageRelationshipCollection.java:124)\r\n\tat org.apache.poi.openxml4j.opc.PackagePart.loadRelationships(PackagePart.java:559)\r\n\tat org.apache.poi.openxml4j.opc.PackagePart.\u003cinit\u003e(PackagePart.java:112)\r\n\tat org.apache.poi.openxml4j.opc.PackagePart.\u003cinit\u003e(PackagePart.java:83)\r\n\tat org.apache.poi.openxml4j.opc.PackagePart.\u003cinit\u003e(PackagePart.java:128)\r\n\tat org.apache.poi.openxml4j.opc.ZipPackagePart.\u003cinit\u003e(ZipPackagePart.java:78)\r\n\tat org.apache.poi.openxml4j.opc.ZipPackage.getPartsImpl(ZipPackage.java:218)\r\n\tat org.apache.poi.openxml4j.opc.OPCPackage.getParts(OPCPackage.java:662)\r\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:269)\r\n\tat org.apache.poi.util.PackageHelper.open(PackageHelper.java:39)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:204)\r\n\tat datapack.Excel_Class.excel_username(Excel_Class.java:15)\r\n\tat jpetpage.SigninPage.send_User1(SigninPage.java:36)\r\n\tat com.JpetStepDefinition.Jpet_Login.the_User_enter_login_dtails(Jpet_Login.java:41)\r\n\tat ✽.Then enter username and password(src/test/resources/functionalTests/JpetTest1.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jpet_Login.click_signout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Invalid Login",
  "description": "",
  "id": "jpetstore;invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user sholud launch the application 2nd time",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user gets Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter invalid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "check if the error messge is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Invalid_Login.the_user_lauch_application_2nd_time()"
});
formatter.result({
  "duration": 15925931800,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_Login.the_user_gets_Home_Page()"
});
formatter.result({
  "duration": 1117300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat jpetpage.HomePage.click_Signin(HomePage.java:49)\r\n\tat com.JpetStepDefinition.Invalid_Login.the_user_gets_Home_Page(Invalid_Login.java:33)\r\n\tat ✽.When the user gets Home Page(src/test/resources/functionalTests/JpetTest1.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Invalid_Login.user_enter_invalid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invalid_Login.check_if_the_error_messge_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Valid Login",
  "description": "",
  "id": "jpetstore;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@TS_03"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user should launch the applicatiob 3rd time",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "check the first name",
  "keyword": "Then "
});
formatter.match({
  "location": "Valid_Login.the_user_lauch_application_3nd_time()"
});
