import { createEvent, createStore } from 'effector';

export const setUsername = createEvent<string>();
export const setPassword = createEvent<string>();

export const $usernameStore = createStore('').on(setUsername, (_, value) => value);
export const $passwordStore = createStore('').on(setPassword, (_, value) => value);

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  // Handle submit
};
