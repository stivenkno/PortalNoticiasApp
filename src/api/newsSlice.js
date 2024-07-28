import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsSlice = createApi({
  reducerPath: 'newsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eventregistry.org/api/v1/',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (params) => {
        const urlParms = new URLSearchParams(params)
        urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
        return (
          {
            url: "article/getArticles",
            method: 'GET',
            params: urlParms
          }
        )
      },
    }),
    getBreakingEvents: builder.query({
      query: (params) => {
        const urlParms = new URLSearchParams(params)
        urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
        return (
          {
            url: "event/getBreakingEvents",
            method: 'GET',
            params: urlParms
          }
        )
      },
    }),
    getArticleDetails: builder.query({
      /* https://eventregistry.org/api/v1/article/getArticle */
      query: (params) => {
      const urlParms = new URLSearchParams(params)
      urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
      return (
        {
          url: "article/getArticle",
          method: 'GET',
          params: urlParms
        }
      )
    },
  }),
    getNewArticle: builder.query({
    /*https://eventregistry.org/api/v1/minuteStreamArticles*/
      query: (params) => {
      const urlParms = new URLSearchParams(params)
      urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
      return (
        {
          url: "minuteStreamArticles",
          method: 'GET',
          params: urlParms
        }
      )
    },
  }),
  getPagesArticles: builder.query({
    /*https://eventregistry.org/api/v1/article/getArticlesForTopicPage*/
      query: (params) => {
      const urlParms = new URLSearchParams(params)
      urlParms.set("apiKey", import.meta.env.VITE_API_KEY);
      return (
        {
          url: "article/getArticlesForTopicPage",
          method: 'GET',
          params: urlParms
        }
      )
    },
  })
  }),
});

export const { useGetArticlesQuery, useGetBreakingEventsQuery, useGetArticleDetailsQuery, useGetNewArticleQuery } = newsSlice;