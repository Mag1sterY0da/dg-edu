import { createStore } from 'effector';
import { sessionModel } from 'entities/session';

export const $user = createStore<sessionModel.User | null>(null);

$user.on(sessionModel.getCurrentUserFx.doneData, (_, user) => user);
