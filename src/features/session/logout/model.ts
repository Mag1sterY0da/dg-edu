import { attach, createEvent, sample } from 'effector';
import { sessionModel } from 'entities/session';

export const logoutRequested = createEvent();

const logoutFx = attach({ effect: sessionModel.logoutFx });

sample({ clock: logoutRequested, target: logoutFx });
