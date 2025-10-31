# Feature: Quickbase_Table

#     Scenario: Verify User able to create a Table
#         Given User able to access Quickbase application
#         When User creates a new Table with required fields "<TableName>" and "<Description>"
#         Then Verify the Table is created successfully
#         Then Add new Fields

#         Examples:
#             | TableName                    | Description                                                |
#             | Employees                    | Table for employee data                                    |
#             | Projects                     | Table for project details                                  |
#             | Alphanumeric^78qye832y483248 | Check the length of the description supports more than 100 |

#     Scenario: vereify the user able to see all the labels inside the Table
#         Given User able to access the Table created
#         Then User able to see all the labels inside the Table
#         Then User able to update the TableName

#     Scenario: Verify the user able to delete and copy of the Field label
#         Given User able to access the Table created
#         Then User able to copy the Field label
#         Then User able to delete the Field label

#     Scenario: Verify the field parameter to set as key
#         Given User able to access the Table created
#         Then User selects the Table created
#         Then Verify the fields are displayed in the Table
#         Then User selects a field to set as Key field
#         Then User sets the field as Key field
#         Then Verify the field is set as Key field successfully

#     Scenario: Verify the user able to delete the parameter
#         Given User able to access the Table created
#         Then User selects the Table created
#         Then Verify the fields are displayed in the Table
#         Then User selects a field to delete the parameter
#         Then User deletes the parameter from the field
#         Then Verify the parameter is deleted from the field successfully

#     Scenario: Verify the user able to select mulitple fields
#         Given User able to access the Table created
#         Then User selects the Table created
#         Then User selects multiple fields in the Table
#         Then Verify User can do actions like copy or delete the multiple fields that are selected

#     Scenario: Verify the user can select Advanced Options
#         Given User able to access the Table created
#         Then User selects the Table created
#         Then User selects a field in the Table
#         Then User clicks Advanced Options for the selected field
#         Then Verify all the options are displayed in Advanced Options
#         Then User able to update the settings in Advanced Options
#         Then User checks the changes are updated successfully in the Fields


#     Scenario:Verify the user able to access the Structure of the Table
#         Given User able to access the Table created
#         Then User able to access the Structure of the Table
#         Then User able to drag and drop the field

#     Scenario: Verify the user can search the field options
#         Given User able to access the Table created
#         Then User able to access the Structure of the Table
#         Then User able to search the field options in the Structure of the Table
#         Then user can then drag adn drop the field after searching


#         Scenario: Verify the user able to acess Field properties of the Table
#         Given User able to access the Table created
#         Then User able to access the Field properties of the Table
#         Then User able to update the settings in Field properties of the Table  
#         Then user can check the Exit button

#         Scenario: Verify the user able to access the Table to Table relationships
#         Given User able to access the Table created
#         Then User able to access the Table to Table relationships
#         Then User able to create a new relationship between Tables
#         Then User tries to delete the existing Table to Table relationships



#     Scenario: Verify the user able to access the Advanced settings of the Table
#         Given User able to access the Table created
#         Then User able to access the Advanced settings of the Table
#         Then User able to update the settings in Advanced settings of the Table
#         Then User tries to rename the existing Table TableName


#     Scenario: Verify the user access the Table Home Page
#         Given User able to access the Table created
#         Then User able to access the Table Home Page
#         Then User able to see all the options in Table Home Page based on the user role
#         Then User able to see the basic view

#     Scenario:User able to see the Reports and Charts in the Table
#         Given User able to access the Table created
#         Then User able to see the Reports and Charts in the Table
#         Then User can search the reports
#         Then Verify all the fields are displayed in the reports
#         Then User can Display the reports
#         Then User can Save,Delete Cancel the reports


#     Scenario: User able to see the Forms in the Table
#         Given User able to access the Table created
#         Then User able to see the Forms in the Table
#         Then User can Delete the forms
#         Then User can copy the forms
#         Then User can preview the forms
#         Then User can search the forms


#     Scenario: Verify the user selects the Form in the Table
#         Given User able to access the Table created
#         Then User selects the Form in the Table
#         Then User select the fields in the selected Form
#         Then User clicks the Properties of the selected form
#         Then User verify the fields of Properties of the selected form
#         Then User clicks Dynamic Form Rules
#         Then User verify the fields of Dynamic Form Rules


#     Scenario: User Checks for the Rules in the Dynamic Form Rules
#         Given User able to access the Table created
#         Then User Checks for the Rules in the Dynamic Form Rules
#         Then User adds a new Rule in Dynamic Form Rules
#         Then User Edits the existing Rule in Dynamic Form Rules
#         Then User Deletes the existing Rule in Dynamic Form Rules



#     Scenario:User selects Notifications,subscriptions and Reminders in the Table
#         Given User able to access the Table created
#         Then User selects Notifications,subscriptions and Reminders in the Table
#         Then User adds a new Notification
#         Then User Edits the existing Notification
#         Then User Deletes the existing Notification

#     Scenario: Verify User selectes the Subscriptions
#         Given User able to access the Table created
#         Then User selectes the Subscriptions and verify all the fields in the page
#         Then User adds a new Subscription
#         Then User Edits the existing Subscription
#         Then User Deletes the existing Subscription

#     Scenario:Verify User selects the Reminders
#         Given User able to access the Table created
#         Then User selects the Reminders and verify all the fields in the page
#         Then User adds a new Reminder
#         Then User Edits the existing Reminder
#         Then User Deletes the existing Reminder

#     Scenario:Verify the User selects the Notifications in the Table
#         Given User able to access the Table created
#         Then User selects Notifications in the Table
#         Then User adds a new Notification and verify all the fields in the page
#         Then User Edits the existing Notification
#         Then User Deletes the existing Notification


#     Scenario: Verify the User selects the Build your own Notification in the Table
#         Given User able to access the Table created
#         Then User selects Build your own Notification in the Table
#         Then User adds a new Notification and verify all the fields in the page
#         Then User Edits the existing Notification
#         Then User Deletes the existing Notification


#     Scenario: Verify the user able to see the Document Templates in the Table
#         Given User able to access the Table created
#         Then User able to see the Document Templates in the Table
#         Then User can Delete the Document Templates
#         Then User can Edit the Document Templates
#         Then User can Duplicate the Document Templates
#         Then User can preview the Document Templates
#         Then User can search the Document Templates

#     Scenario:Verify the user able to see the Access
#         Given User able to access the Table created
#         Then User able to see the Access in the Table
#         Then User can see all the roles in Access
#         Then User can Select dropdown in the view
#         Then User can Select dropdown in the Modify



#     # ###########
#     Scenario:Verify the user import the Table data
#         Given User able to access the Table created
#         Then User able to import the Table data
#         Then User able to import the Table data from clipboad
#         Then User able to import into a table from another table
#         Then User select table connected to another application, service, or CSV file


#     Scenario:Verify the user Export the Table data
#         Given User able to access the Table created
#         Then User able to click the Export Table to file
#         Then User able to click Export data-entry fields to a file


#     Scenario: Verify the user click the copy this application
#         Given User able to access the Table created
#         Then User click the copy this application
#         Then User able to create a copy of the application with the Table and submit the copy application






