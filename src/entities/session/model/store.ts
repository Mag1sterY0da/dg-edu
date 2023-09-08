import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import { getCurrentUser, login, logout } from './api';

export const gate = createGate();

export const loginFx = createEffect(login);
export const logoutFx = createEffect(logout);
export const getCurrentUserFx = createEffect(getCurrentUser);

sample({ clock: gate.open, target: getCurrentUserFx });
