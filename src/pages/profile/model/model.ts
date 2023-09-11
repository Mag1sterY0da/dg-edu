import { attach, createEvent, sample } from 'effector';
import { sessionModel } from 'entities/session';

export const loginRequested = createEvent();
export const logoutRequested = createEvent();

const loginFx = attach({ effect: sessionModel.loginFx });
const logoutFx = attach({ effect: sessionModel.logoutFx });

sample({ clock: loginRequested, target: loginFx });
sample({ clock: logoutRequested, target: logoutFx });
