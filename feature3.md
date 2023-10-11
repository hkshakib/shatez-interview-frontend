# Shatez frontend interview: About this project 📚🙋

## Documentation of Feature/task-3 🛠️


### 🟡 `Challenges: Feature Task-3: Hard`

-   Refactor the Dashboard page and add Authorization to the side-navigation items of the Dashboad page.
-   Further Explanation: - Whenever a user signs-up, we create a new user record in the DB, and assign them a role of user by default. - We can then create a new role of admin and assign it to a user manually from the DB. - We can then use this role to determine what a user can access or not and use this information to hide or show the side-navigation items.

-   Assumptions:
    - Only Reports will be visible to users while everything will be visible to admins
-   Make a developer documentation for your solution, named feature3.md, having how you solved the problem, what you did & why you did it that way & any necessary assumptions you made
-   `Explanation`: `Authentication` is the process of verifying who a user is, while `Authorization` is the process of verifying what they have access to.
-   Make a developer documentation for your solution, named `feature2.md`, having how you solved the problem, what you did & why you did it that way & any necessary assumptions you made
-   What we'll evaluate :
    - How you solve an application wide problem
    - How you organize & structure your Data
    - How your solution would scale as the application grows & more users are added.
    - How you go about venturing uncharted territories, learning from the web & coming up with a solution


# 🟡 `Documentation`

## 🟡 `Authorization Role Refactoring`

### 🟡 `Database Structure`
-   A table named user_profile has been created with three columns: role, email, and name. email and name are populated during authentication, while role is set to 'user' by default.
    
### 🟡 `User Authentication and Role Assignment`
-   When a user logs in, the system checks if their profile already exists in the database. If not, a new entry is created with the default role 'admin'. If a profile already exists, no action is taken.

-   If the role is already present in the database, it is not updated to avoid unnecessary operations.
    ```
     const { data: existingUserData, error: existingUserError } =
        await supaBase
          .from("user_profile")
          .select("*")
          .eq("email", email)
          .single();

      if (existingUserData && !existingUserError) {
        setUserRole(existingUserData.role);
        console.log("User profile already exists:", existingUserData);
      } else {
        const { data: insertData, error: insertError } = await supaBase
          .from("user_profile")
          .upsert([
            {
              email,
              name,
              role,
            },
          ]);

        if (insertError) {
          console.error("Error inserting user profile:", insertError);
          return;
        }
        setUserRole(role);
        console.log("User profile inserted successfully:", insertData);
      }
    ```

### 🟡 `Dashboard UI Refactoring`
-   The dashboard UI has been updated to reflect the role-based authorization. Admin role users will see all available features, while user role users will only see the "Reports" feature.


