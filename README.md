[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Hubspot/functions?utm_source=RapidAPIGitHub_HubspotFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Hubspot Package
connect to hubspot apis to interact with your hubspot account and perform a variety of different actions.
* Domain: [Hubspot](http://https://www.hubspot.com/)
* Credentials: 

## How to get credentials: 
0. Go to your HubSpot Settings. Log in to your HubSpot account. ...

1. Click on the Users & Teams link. Once in Settings, click on Users & Teams in the left-hand side menu. 
Create user. Click the Create user button at the top-right side of the screen.





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

