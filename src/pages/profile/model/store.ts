import { createStore } from 'effector';
import { User, getCurrentUserFx } from 'entities/session/model';

export const $user = createStore<User | null>(null);

$user.on(getCurrentUserFx.doneData, (_, user) => user);
