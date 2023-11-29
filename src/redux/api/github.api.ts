import { Repo } from '$models/Github'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const baseUrl = `https://api.github.com/`

export const githubAPI = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getUserRepos: build.query<Repo[], string>({
      query: (username) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
})

export const { useGetUserReposQuery } = githubAPI