# TodoOrganizer

A quick simple todo list app where i wanted to try some new things.

Live Demo: https://sage-sorbet-9867a1.netlify.app/

## App roles:

- public user - someone who visits the site, can create an account or login.
- authenticated user - a user that has logged into his account and can now use the app

## User Level Features ( What can you do in the app ):

- create an account and log in
- create multiple todo lists ( a todo list contains todos )
- add todos to a list ( a todo contains a title, description and due date and time.
- mark todos as completed or active
- filter todos by their state ( active, all, completed )
- search todos in a list via text

## Technical details:

- FrontEnd - React + Typescript
- Styling - TailwindCSS / DaisyUI
- Remote State management - React Query
- Forms - React hook form + yup
- Routing - React Router
- Data fetching - axios
- BackEnd - Supabase + Postgres DB

Project structure is based on a folder by feature structure with general reusable components in dedicated general folders.

Basically all app state is remote so there was not a particular need for implementing global state management for UI state ( otherwise contextAPI or Redux would be used ).

Compound Component Pattern ( Tabs.tsx ).

Render Props Pattern ( Form.tsx and associated components ).

Protected and public routes are based upon the authentication status of the user. The user data is stored in React Query Cache.

Authentication is based on JWT tokens.

The Project is using Supabase but i did not use the JS client library they provide ( mainly for learning purposes, but since i didnt include the library itself the budle size got smaller ). I query straight the underlying technology solutions that supabase is built upon. Therefore I increased the workload on my side because I had to manually do queries ( unlike the query builder in supabase client library) and authentication ( interacting with the GoTrue auth server and managing JWTs on my own ). Resource protection is implemented via postgres Row Level Security.
