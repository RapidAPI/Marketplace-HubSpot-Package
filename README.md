[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Hubspot/functions?utm_source=RapidAPIGitHub_HubspotFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Hubspot Package
connect to hubspot apis to interact with your hubspot account and perform a variety of different actions.
* Domain: [Hubspot](http://https://github.com/RapidAPI/Marketplace-HubSpot-Package)
* Credentials: 

## How to get credentials: 
0. Item one 
1. Item two 



## Custom datatypes: 
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]``` 
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```
 

## Hubspot.getContentEvents
Get events from the calendar. The endpoint supports filtering to get the specific events you want.

| Field          | Type       | Description
|----------------|------------|----------
| startDate      | string     | The beginning value of the query range, in UTC, in milliseconds
| endDate        | string     | The end value of the query range, in UTC, in milliseconds
| hapikey        | string     | API key if Authorization header isn't present
| limit          | string     | The maximum number of items to return. Defaults to 100.
| offset         | string     | Starting value to page by. Defaults to 0.
| contentCategory| string     | The category of content to filter by, values include "blog-post", "email"
| campaignGuid   | string     | Show tasks by campaign guid. Multiple can be specified.
| accessToken    | credentials| if hapikey isn't present

## Hubspot.getSocialEvents
Get events from the calendar. The endpoint supports filtering to get the specific events you want.

| Field          | Type       | Description
|----------------|------------|----------
| startDate      | string     | The beginning value of the query range, in UTC, in milliseconds
| endDate        | string     | The end value of the query range, in UTC, in milliseconds
| hapikey        | string     | API key if Authorization header isn't present
| limit          | string     | The maximum number of items to return. Defaults to 100.
| offset         | string     | Starting value to page by. Defaults to 0.
| contentCategory| string     | The category of content to filter by, values include "blog-post", "email"
| campaignGuid   | string     | Show tasks by campaign guid. Multiple can be specified.
| accessToken    | credentials| if hapikey isn't present

## Hubspot.getCalendarTaskEvents
Get events from the calendar. The endpoint supports filtering to get the specific events you want.

| Field          | Type       | Description
|----------------|------------|----------
| startDate      | string     | The beginning value of the query range, in UTC, in milliseconds
| endDate        | string     | The end value of the query range, in UTC, in milliseconds
| hapikey        | string     | API key if Authorization header isn't present
| limit          | string     | The maximum number of items to return. Defaults to 100.
| offset         | string     | Starting value to page by. Defaults to 0.
| contentCategory| string     | The category of content to filter by, values include "blog-post", "email"
| campaignGuid   | string     | Show tasks by campaign guid. Multiple can be specified.
| accessToken    | credentials| if hapikey isn't present

## Hubspot.getAllCalendarEvents
Get events from the calendar. The endpoint supports filtering to get the specific events you want.

| Field          | Type       | Description
|----------------|------------|----------
| startDate      | string     | The beginning value of the query range, in UTC, in milliseconds
| endDate        | string     | The end value of the query range, in UTC, in milliseconds
| hapikey        | string     | API key if Authorization header isn't present
| limit          | string     | The maximum number of items to return. Defaults to 100.
| offset         | string     | Starting value to page by. Defaults to 0.
| contentCategory| string     | The category of content to filter by, values include "blog-post", "email"
| campaignGuid   | string     | Show tasks by campaign guid. Multiple can be specified.
| accessToken    | credentials| if hapikey isn't present

## Hubspot.createTask
Create a new Task. Creating a task of type BLOG_POST, EMAIL, or LANDING_PAGE will create a draft of the respective content and associate it with the Task, returning a contentId in the response.

| Field         | Type       | Description
|---------------|------------|----------
| hapikey       | credentials| API key if Authorization header is not present
| accessToken   | credentials| if hapikey isn't present
| eventDate     | string     | When the task is set to be due, in milliseconds since the epoch
| eventType     | string     | Type of calendar event; for tasks this is always PUBLISHING_TASK
| category      | string     | type of task; one of BLOG_POST, EMAIL, LANDING_PAGE, CUSTOM
| state         | string     | value of TODO or DONE
| campaignGuid  | string     | value of campaign GUID associated with Task
| name          | string     | Name of Task
| description   | string     | description of Task
| ownerId       | string     | HubSpot id of the user that the task is assigned to. See the Owners API to get a list of owner Ids
| topicIds      | string     | Array: The list of ids of topics associated with the associated Blog Post, if any. Otherwise null. Only read for BLOG_POST Tasks. See Topics API to get a list of topic ids.
| contentGroupId| string     | The ID of the content group (aka blog) that the associated Blog Post will belong to, if any. Only read for BLOG_POST Tasks. See Blog API to get a list of blogs ids.
| templatePath  | string     | (optional) The template to use for emails and landing pages. only read for EMAIL and LANDING_PAGE categories.

## Hubspot.getCalendarTaskByID
Get a specific calendar task by ID.
This endpoint returns a a task by specifying the ID of that task

| Field      | Type       | Description
|------------|------------|----------
| taskId     | string     | The ID of the required task
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present

## Hubspot.updateCalendarTask
Update a Task. this action will replace any existing allowed fields specified. Any fields not included will not change from existing values.


| Field       | Type       | Description
|-------------|------------|----------
| hapikey     | string     | API key if Authorization header isn't present
| taskId      | string     | Unique identifier for the task to delete
| accessToken | credentials| if hapikey isn't present
| eventDate   | string     | When the task is set to be due, in milliseconds since the epoch
| eventType   | string     | Type of calendar event; for tasks this is always PUBLISHING_TASK
| category    | string     | type of task; one of BLOG_POST, EMAIL, LANDING_PAGE, CUSTOM. This must match existing value.
| state       | string     | value of TODO or DONE
| category    | string     | type of task; one of BLOG_POST, EMAIL, LANDING_PAGE, CUSTOM. This must match existing value.
| campaignGuid| string     | value of campaign GUID associated with Task
| topicIds    | string     | The list of ids of topics associated with the associated Blog Post, if any. Otherwise null. Only read for BLOG_POST Tasks. See Topics API to get a list of topic ids.
| name        | string     | Name of Task
| description | string     | description of Task.
| ownerId     | string     | HubSpot id of the user that the task is assigned to. See the Owners API to get a list of owner Ids.

## Hubspot.deleteCalendarTask
Deletes Task from system. If there is a content object (Blog post, email, landing page) associated, they will not be affected.

| Field      | Type       | Description
|------------|------------|----------
| hapikey    | string     | API key if Authorization header isn't present
| taskId     | string     | Unique identifier for the task to delete
| accessToken| credentials| if hapikey isn't present

## Hubspot.createACompany
For a given portal, create a company. This is particularly useful if you're integrating with a CRM or another application that has a similar notion of a company.

| Field      | Type       | Description
|------------|------------|----------
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present
| companyJSON| string     | This is JSON that represents a company that you're creating. This should be in the format of the code sample below.

## Hubspot.updateACompany
Updates the existing company with the id :companyId with the properties as specified by JSON in the request body

Returns JSON representing the updated company.

| Field      | Type       | Description
|------------|------------|----------
| hapikey    | string     | API key if Authorization header isn't present
| companyId  | string     | Unique identifier for a particular company.
| accessToken| credentials| if hapikey isn't present
| companyJSON| string     | This is JSON that represents a company that you're creating. This should be in the format of the code sample below.

## Hubspot.updateAGroupOfCompanies
Update a group of existing company records by their companyId.
This endpoint takes a list of objectIds and that correspond to the companyId of the company you want to update, and a list of properties to update for that company.

| Field      | Type       | Description
|------------|------------|----------
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present
| objectId   | string     | The companyId of the company that you want to update.
| properties | string     | A list of properties that you want to update. Each property must include the name of the property to be updated, and the value of the property to update to..

## Hubspot.deleteACompany
Deletes the exisiting company specified by :companyId. Returns JSON indicating whether or not the specified company was actually deleted.

Since companies play a central role in the CRM, it is a best practice not to delete a company unless your application has created them.

| Field      | Type       | Description
|------------|------------|----------
| companyId  | string     | Unique identifier for a particular company.
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present

## Hubspot.getAllCompanies
Used to get all of the companies in a portal. Returns a paginated list of companies.

In addition to the list of companies, each request will also return two values, offset and has-more. If has-more is true, you'll need to make another request, using the offset to get the next page of company records.

| Field                | Type       | Description
|----------------------|------------|----------
| hapikey              | string     | API key if Authorization header isn't present
| Limit                | string     | The number of records to return. Defaults to 100, has a maximum value of 250.
| Offset               | string     | Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results.
| Properties           | string     | Used to include specific company properties in the results.  By default, the results will only include the company ID, and will not include the values for any properties for your companies.  Including this parameter will include the data for the specified property in the results.  You can include this parameter multiple times to request multiple properties. Note:to pass multiple Properties pass  a comma separated list of arguments.
| PropertiesWithHistory| string     | Works similarly to properties=, but this parameter will include the history for the specified property, instead of just including the current value. Use this parameter when you need the full history of changes to a property's value.
| accessToken          | credentials| if hapikey isn't present

## Hubspot.getRecentlyModifiedCompanies
Returns a list of all companies sorted by the date the companies were most recently modified. This is particularly useful for ongoing syncs with HubSpot in which changes to companies must be captured in another system.

| Field      | Type       | Description
|------------|------------|----------
| hapikey    | string     | API key if Authorization header isn't present
| offset     | string     | This is used to get the next page of results. Each request will return an offset in the response, and you'd use that offset in the URL of your next request to get the next page of results.
| Count      | string     | Specifies the number of companies to be returned.
| accessToken| credentials| if hapikey isn't present

## Hubspot.getRecentlyCreatedCompanies
Returns a list of all companies sorted by the date the companies were created. This is particularly useful for ongoing syncs with HubSpot in which changes to companies must be captured in another system.

| Field      | Type       | Description
|------------|------------|----------
| hapikey    | string     | API key if Authorization header isn't present
| offset     | string     | This is used to get the next page of results. Each request will return an offset in the response, and you'd use that offset in the URL of your next request to get the next page of results.
| Count      | string     | Specifies the number of companies to be returned.
| accessToken| credentials| if hapikey isn't present

## Hubspot.getACompany
Returns an object representing the company with the id :companyId associated with the specified portal. Particularly useful if you're performing lookups on specific attributes of a company.

| Field      | Type       | Description
|------------|------------|----------
| companyId  | string     | Unique identifier for a particular company.
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present

## Hubspot.getContactsAtACompany
Returns all of the contacts who have an associatedcompanyid contact property of :companyid. For more on how contacts are associated with companies, check out our Companies API Overview.

This will return 20 contacts by default. You can get up to 100 contacts per request using the count= parameter. You can use the "vidoffset": field returned in the results with the vidOffset= parameter to get the next set of results.

| Field      | Type       | Description
|------------|------------|----------
| companyId  | string     | Unique identifier for a particular company.
| hapikey    | string     | API key if Authorization header isn't present
| Count      | string     | Specifies the number of contacts to be returned.
| VidOffset  | string     | The vid to offset the query by.
| accessToken| credentials| if hapikey isn't present

## Hubspot.getContactIDsAtACompany
Returns all of the contact IDs who have an associatedcompanyid property of :companyid. Useful if you're not looking for any more information on contacts at a company other than that they exist and where to find more information on them.

This will return 100 contacts by default, which is the maximum number of records you can get in a single request. You can get fewer contacts per request using the count= parameter. You can use the "vidoffset": field returned in the results with the vidOffset= parameter to get the next set of results.

| Field      | Type       | Description
|------------|------------|----------
| companyId  | string     | Unique identifier for a particular company.
| hapikey    | string     | API key if Authorization header isn't present
| Count      | string     | Specifies the number of contacts to be returned.
| VidOffset  | string     | The vid to offset the query by.
| accessToken| credentials| if hapikey isn't present

## Hubspot.addContactToCompany
Associate a given contact to a company. If a contact is already associated to a different company, the contact will be moved to the new company. A contact can only be associated to one company.



| Field      | Type       | Description
|------------|------------|----------
| contactVID | string     | The ID of a contact to add a company.
| companyID  | string     | The ID of a company to add a contact to.
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present

## Hubspot.removeContactFromCompany
Remove a contact from a company. Once complete the contact will not be associated to any company.

| Field      | Type       | Description
|------------|------------|----------
| contactVID | string     | The ID of a contact to add a company.
| companyID  | string     | The ID of a company to add a contact to.
| hapikey    | string     | API key if Authorization header isn't present
| accessToken| credentials| if hapikey isn't present

