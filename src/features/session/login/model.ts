import { attach, createEvent, sample } from 'effector';
import { sessionModel } from 'entities/session';

export const loginRequested = createEvent();

const loginFx = attach({ effect: sessionModel.loginFx });

sample({ clock: loginRequested, target: loginFx });
