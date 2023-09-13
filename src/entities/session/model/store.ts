import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { User } from '.';
import { getCurrentUser, login, logout } from './api';

export const gate = createGate();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const getCurrentUserFx = createEffect(getCurrentUser);

export const $user = createStore<User | null>(null);

$user.on(getCurrentUserFx.doneData, (_, user) => user);

sample({ clock: gate.open, target: getCurrentUserFx });
