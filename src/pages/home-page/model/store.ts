import { createEffect, createEvent, createStore, sample } from 'effector';

export const usernameChanged = createEvent<string>();
export const passwordChanged = createEvent<string>();

export const $usernameStore = createStore('');
export const $passwordStore = createStore('');

$usernameStore.on(usernameChanged, (_, username) => username);
$passwordStore.on(passwordChanged, (_, password) => password);

export const formSubmitted = createEvent<void>();

const handleSubmitFx = createEffect(
  async ({ username, password }: { username: string; password: string }) => {
    try {
      await fetch('/submit', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      // Handle the response
      // ...
    } catch (error) {
      // Handle the error
      // ...
    }
  },
);

sample({
  clock: formSubmitted,
  source: {
    username: $usernameStore,
    password: $passwordStore,
  },
  target: handleSubmitFx,
});

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();

  formSubmitted();
};
