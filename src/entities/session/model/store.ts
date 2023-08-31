import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { getCurrentUser, login } from './api';
import { User } from './types';

export const gate = createGate();

export const loginFx = createEffect(login);
const getCurrentUserFx = createEffect(getCurrentUser);

export const $user = createStore<User | null>(null);

$user.on(getCurrentUserFx.doneData, (_, user) => user);

sample({ clock: gate.open, target: getCurrentUserFx });
