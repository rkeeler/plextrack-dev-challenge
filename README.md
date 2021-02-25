# PlexTrac Dev Challenge

Live demo available at http://35.222.137.221

This project was created by Reagan Keeler as part of the application process for a software engineering position at PlexTrac. This submission completes all of the minimum requirements for the development challenge, plus the following bonus requirements:

- Use a modern UI/UX library
- Include a server-side data store
- Use Docker to containerize your application
- Include a CI/CD infrastructure
- The application should be deployed and hosted on one of the major cloud platforms

---

## Libraries and Software Used

### Frontend

- Typescript
- React
- Ant Design
- Jest / @testing-library/react

### Server

- Typescript
- NodeJS
- Hapi
- Jest

### Data

- Star Wars API (https://swapi.dev)
- Postgres (for storing page visits to use for "Popular Movies" UI)

### Hosting / CI

- Docker
- Google Cloud Build / Container Registry
- Google Compute Engine

---

## Automated Testing

Tests can be run from the `/frontend` and `/server` folders using the `yarn test` command. Since this is a sample project with a recommended time constraint, only a handful of tests were written to demonstrate the capability.

---

## Server Environment Variables

To run the web server outside of a development environment, the following environment variables need to be supplied.

| Env Variable      | Default   |
| ----------------- | --------- |
| PORT              | 4000      |
| POSTGRES_HOST     | localhost |
| POSTGRES_USER     | postgres  |
| POSTGRES_PASSWORD | potato    |
|                   |           |
