# Shatez frontend interview: About this project 📚🙋

## Documentation of Feature/task-2 🛠️


### 🟡 `Challenges: Feature Task-2: Medium`

-   Refactor the `Home/Index` by adding authentication (with Google OAuth) with a BAAS (Backend As A Service) solution like Firebase or Supabase, whichever you're comfortable with.
-   Make the Dashboard page visible only when a user is logged in.
-   You'd have to connect to a DB to persist user data at this point, you can use Firestore from Firebase or Postgres from Supabase for this.
-   Bonus points for using Supabase since its open source wihtout vendor lock-in
-   `Explanation`: `Authentication` is the process of verifying who a user is, while `Authorization` is the process of verifying what they have access to.
-   Make a developer documentation for your solution, named `feature2.md`, having how you solved the problem, what you did & why you did it that way & any necessary assumptions you made
-   ` What we'll evaluate` :
    -   What kind of code & best-practice you follow for adding something standard like authentication to an application
    -   How you organize & structure your Data & how you create abstractions to it
    -   How you deal with Data flow
    -   How can you build solutions from reading documentation


## 🟡 `Documentation`

### 🟡 `Authentication and Sign-in Flow:`
-   Create a route "/auth" to handle the sign-in process.
-   Implement sign-in logic using Supabase configuration.
    ```
    const { data, error } = await supaBase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });
    ```
-   Store user email in the Supabase database for future reference.
    
    

### 🟡 `Google OAuth Integration:`
-   Utilize Google OAuth as a Backend-as-a-Service (BAAS) for authentication.

### 🟡 `Redirect to Dashboard:`
-   After successful login, redirect users to the dashboard.

### 🟡 `Dashboard Authentication Logic:`
-   Implement authentication logic on the dashboard page.
-   If authenticated, display the dashboard content.
-   If not authenticated, redirect users to a page with instructions for signing in.

### 🟡 `Local Data Storage for Quick Access:`
-   Store user data (email, name, avatar.) locally using local storage.
-   This allows for faster access to user-specific information.
    ```
     const { data, error } = await supaBase.auth.getUser();
      if (data && !error) {
        setUserLoggedIn(true);
        console.log(data);
        localStorage.setItem("email", data.user.user_metadata.email);
        localStorage.setItem("name", data.user.user_metadata.name);
        localStorage.setItem("avatar", data.user.user_metadata.avatar_url);
      }
    ```
