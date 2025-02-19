import * as alt from 'alt-client';
import * as native from 'natives';
import { Action } from '../enums/actions';

alt.on(Action.PlayerPlaySound, (data, scriptId) => {
    native.playSoundFromEntity(-1, data.name, scriptId, data.audioRef, false, false);
});
