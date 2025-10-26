Feature: Quickbase_Table

    Scenario: Verify User able to create a Table
        Given User able to access Quickbase application
        When User creates a new Table with required fields <"TableName"> and <"Description">
        Then Verify the Table is created successfully
        Then  Add new Fields
            Examples :
            | TableName | Description               |
            | Employees | Table for employee data   |
            | Projects  | Table for project details |


            


