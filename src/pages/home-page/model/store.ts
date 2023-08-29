import { createEffect, createEvent, createStore, sample } from 'effector';
import { loginUser } from 'entities/session/model';

export const usernameChanged = createEvent<string>();
export const passwordChanged = createEvent<string>();
export const loginUserRequested = createEvent();

const loginFx = createEffect(loginUser);

export const $usernameStore = createStore('');
export const $passwordStore = createStore('');

$usernameStore.on(usernameChanged, (_, username) => username);
$passwordStore.on(passwordChanged, (_, password) => password);

sample({
  clock: loginUserRequested,
  target: loginFx,
});
