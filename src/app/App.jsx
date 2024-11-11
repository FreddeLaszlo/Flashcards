import React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import AppLayout from "./AppLayout";

const loc = window.location.pathname;
const path = loc.length === 1 ? loc : loc.replace(/\/$/, '');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route basename="/Flashcards" path="/" element={<AppLayout />}>
      <Route index element={<Topics />} />
      <Route path="topics" element={<Topics />} />
      <Route path="topics/new" element={<NewTopicForm />} />
      <Route path="topics/:topicId" element={<Topic />} />
      <Route path="quizzes" element={<Quizzes />} />
      <Route path="quizzes/new" element={<NewQuizForm />} />
      <Route path="quizzes/:quizId" element={<Quiz />} />
    </Route>
  ), {
  basename: path,
}
)

export default function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
